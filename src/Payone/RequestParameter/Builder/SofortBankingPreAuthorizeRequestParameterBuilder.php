<?php

declare(strict_types=1);

namespace PayonePayment\Payone\RequestParameter\Builder;

use PayonePayment\PaymentHandler\PayoneSofortBankingPaymentHandler;
use PayonePayment\Payone\RequestParameter\Struct\PaymentTransactionStruct;
use Shopware\Core\Framework\Struct\Struct;

class SofortBankingPreAuthorizeRequestParameterBuilder extends SofortBankingAuthorizeRequestParameterBuilder
{
    /** @param PaymentTransactionStruct $arguments */
    public function getRequestParameter(
        Struct $arguments
    ): array {
        return array_merge(parent::getRequestParameter($arguments), [
            'request' => 'preauthorization',
        ]);
    }

    /** @param PaymentTransactionStruct $arguments */
    public function supports(Struct $arguments): bool
    {
        if (!($arguments instanceof PaymentTransactionStruct)) {
            return false;
        }

        $paymentMethod = $arguments->getPaymentMethod();
        $action        = $arguments->getAction();

        return $paymentMethod === PayoneSofortBankingPaymentHandler::class && $action === self::REQUEST_ACTION_PREAUTHORIZE;
    }
}