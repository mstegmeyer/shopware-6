<?php

declare(strict_types=1);

namespace PayonePayment\PaymentHandler;

use PayonePayment\Components\ConfigReader\ConfigReaderInterface;
use PayonePayment\Components\CustomerDataPersistor\CustomerDataPersistor;
use PayonePayment\Components\DataHandler\OrderActionLog\OrderActionLogDataHandlerInterface;
use PayonePayment\Components\DataHandler\Transaction\TransactionDataHandlerInterface;
use PayonePayment\Components\DeviceFingerprint\AbstractDeviceFingerprintService;
use PayonePayment\Components\PaymentStateHandler\PaymentStateHandlerInterface;
use PayonePayment\Payone\Client\Exception\PayoneRequestException;
use PayonePayment\Payone\Client\PayoneClientInterface;
use PayonePayment\Payone\RequestParameter\RequestParameterFactory;
use PayonePayment\Payone\RequestParameter\Struct\PaymentTransactionStruct;
use PayonePayment\Struct\PaymentTransaction;
use Shopware\Core\Checkout\Payment\Cart\AsyncPaymentTransactionStruct;
use Shopware\Core\Checkout\Payment\Cart\PaymentHandler\AsynchronousPaymentHandlerInterface;
use Shopware\Core\Checkout\Payment\Exception\AsyncPaymentProcessException;
use Shopware\Core\Checkout\Payment\PaymentException;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\Validation\DataBag\RequestDataBag;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Contracts\Translation\TranslatorInterface;

abstract class AbstractAsynchronousPayonePaymentHandler extends AbstractPayonePaymentHandler implements AsynchronousPaymentHandlerInterface
{
    public function __construct(
        ConfigReaderInterface $configReader,
        EntityRepository $lineItemRepository,
        RequestStack $requestStack,
        protected readonly PayoneClientInterface $client,
        protected readonly TranslatorInterface $translator,
        protected readonly TransactionDataHandlerInterface $transactionDataHandler,
        protected readonly OrderActionLogDataHandlerInterface $orderActionLogDataHandler,
        protected readonly PaymentStateHandlerInterface $stateHandler,
        protected readonly RequestParameterFactory $requestParameterFactory,
        protected readonly CustomerDataPersistor $customerDataPersistor,
        protected readonly ?AbstractDeviceFingerprintService $deviceFingerprintService = null
    ) {
        parent::__construct($configReader, $lineItemRepository, $requestStack);
    }

    public function pay(
        AsyncPaymentTransactionStruct $transaction,
        RequestDataBag $dataBag,
        SalesChannelContext $salesChannelContext
    ): RedirectResponse {
        try {
            $this->validateRequestData($dataBag);
        } catch (PayoneRequestException) {
            $this->beforeException();

            throw $this->createPaymentException(
                $transaction->getOrderTransaction()->getId(),
                $this->translator->trans('PayonePayment.errorMessages.genericError')
            );
        }

        $this->customerDataPersistor->save($transaction->getOrder(), $dataBag, $salesChannelContext->getContext());

        $paymentTransaction = PaymentTransaction::fromAsyncPaymentTransactionStruct($transaction, $transaction->getOrder());

        $authorizationMethod = $this->getAuthorizationMethod(
            $transaction->getOrder()->getSalesChannelId(),
            $this->getConfigKeyPrefix() . 'AuthorizationMethod',
            $this->getDefaultAuthorizationMethod()
        );

        $request = $this->requestParameterFactory->getRequestParameter(
            new PaymentTransactionStruct(
                $paymentTransaction,
                $dataBag,
                $salesChannelContext,
                static::class,
                $authorizationMethod
            )
        );

        try {
            $response = $this->client->request($request);
        } catch (PayoneRequestException $exception) {
            $this->beforeException();

            throw $this->createPaymentException(
                $transaction->getOrderTransaction()->getId(),
                $exception->getResponse()['error']['CustomerMessage']
            );
        } catch (\Throwable) {
            $this->beforeException();

            throw $this->createPaymentException(
                $transaction->getOrderTransaction()->getId(),
                $this->translator->trans('PayonePayment.errorMessages.genericError')
            );
        }

        $this->handleResponse(
            $transaction,
            $paymentTransaction,
            $dataBag,
            $request,
            $response,
            $salesChannelContext
        );

        $this->orderActionLogDataHandler->createOrderActionLog(
            $transaction->getOrder(),
            $request,
            $response,
            $salesChannelContext->getContext()
        );

        if ($this->deviceFingerprintService instanceof AbstractDeviceFingerprintService) {
            $this->deviceFingerprintService->deleteDeviceIdentToken();
        }

        return $this->getRedirectResponse($salesChannelContext, $request, $response);
    }

    public function finalize(
        AsyncPaymentTransactionStruct $transaction,
        Request $request,
        SalesChannelContext $salesChannelContext
    ): void {
        $this->stateHandler->handleStateResponse($transaction, (string) $request->query->get('state'));
    }

    protected function beforeException(): void
    {
        if ($this->deviceFingerprintService instanceof AbstractDeviceFingerprintService) {
            $this->deviceFingerprintService->deleteDeviceIdentToken();
        }
    }

    protected function handleResponse(
        AsyncPaymentTransactionStruct $transaction,
        PaymentTransaction $paymentTransaction,
        RequestDataBag $dataBag,
        array $request,
        array $response,
        SalesChannelContext $salesChannelContext
    ): void {
        if (empty($response['status']) || $response['status'] !== 'REDIRECT') {
            throw $this->createPaymentException(
                $transaction->getOrderTransaction()->getId(),
                $this->translator->trans('PayonePayment.errorMessages.genericError')
            );
        }

        $data = $this->preparePayoneOrderTransactionData(
            $request,
            $response,
            $this->getAdditionalTransactionData($dataBag, $request, $response)
        );

        $this->transactionDataHandler->saveTransactionData($paymentTransaction, $salesChannelContext->getContext(), $data);
    }

    protected function getRedirectResponse(SalesChannelContext $context, array $request, array $response): RedirectResponse
    {
        return new RedirectResponse($response['redirecturl']);
    }

    protected function createPaymentException(string $orderTransactionId, string $errorMessage, ?\Throwable $e = null): \Throwable
    {
        if (class_exists(PaymentException::class)) {
            return PaymentException::asyncProcessInterrupted($orderTransactionId, $errorMessage, $e);
        } elseif (class_exists(AsyncPaymentProcessException::class)) {
            // required for shopware version <= 6.5.3
            throw new AsyncPaymentProcessException($orderTransactionId, $errorMessage, $e);  // @phpstan-ignore-line
        }

        // should never occur, just to be safe.
        throw new \RuntimeException('payment process was interrupted ' . $orderTransactionId);
    }
}
