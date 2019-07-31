<?php

declare(strict_types=1);

namespace PayonePayment\Storefront\Controller;

use PayonePayment\Payone\Client\Exception\PayoneRequestException;
use PayonePayment\Payone\Client\PayoneClientInterface;
use PayonePayment\Payone\Request\ManageMandate\ManageMandateRequestFactory;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Throwable;

class PayoneCheckoutManageMandateController extends StorefrontController
{
    /** @var ManageMandateRequestFactory */
    private $requestFactory;

    /** @var PayoneClientInterface */
    private $client;

    public function __construct(
        ManageMandateRequestFactory $mandateRequestFactory,
        PayoneClientInterface $client
    ) {
        $this->requestFactory = $mandateRequestFactory;
        $this->client         = $client;
    }

    /**
     * @Route("/payone/request/manage-mandate", name="frontend.payone.manage-mandate", options={"seo": "false"}, methods={"POST"}, defaults={"XmlHttpRequest": true})
     */
    public function mandateOverview(Request $request, SalesChannelContext $context): JsonResponse
    {
        $iban = (string) $request->get('iban');
        $bic  = (string) $request->get('bic');

        $payoneRequest = $this->requestFactory->getRequestParameters(
            $context,
            $iban,
            $bic
        );

        try {
            $response = $this->client->request($payoneRequest);

            if (!empty($response['mandate']['HtmlText'])) {
                $response['mandate']['HtmlText'] = urldecode($response['mandate']['HtmlText']);

                $content = $this->renderView('@PayonePayment/payone/mandate/mandate.html.twig', $response);

                $response['modal_content'] = $content;
            }
        } catch (PayoneRequestException $exception) {
            $response = [
                'error' => $exception->getResponse()['error']['CustomerMessage'],
            ];
        } catch (Throwable $exception) {
            $response = [
                'error' => $this->trans('PayonePayment.errorMessages.genericError'),
            ];
        }

        return new JsonResponse($response);
    }
}