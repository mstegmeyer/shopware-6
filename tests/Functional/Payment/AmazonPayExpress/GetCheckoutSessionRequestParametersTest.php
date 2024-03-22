<?php

declare(strict_types=1);

namespace PayonePayment\Functional\Payment\AmazonPayExpress;

use PayonePayment\Components\GenericExpressCheckout\Struct\GetCheckoutSessionStruct;
use PayonePayment\PaymentHandler\PayoneAmazonPayExpressPaymentHandler;
use PayonePayment\Payone\RequestParameter\RequestParameterFactory;
use PayonePayment\TestCaseBase\PayoneTestBehavior;
use PHPUnit\Framework\TestCase;

class GetCheckoutSessionRequestParametersTest extends TestCase
{
    use PayoneTestBehavior;

    public function testIfParametersGotCreatedSuccessful(): void
    {
        /** @var RequestParameterFactory $factory */
        $factory = $this->getContainer()->get(RequestParameterFactory::class);

        $context = $this->createSalesChannelContext();

        $requestParams = $factory->getRequestParameter(new GetCheckoutSessionStruct(
            $context,
            'woi-123456',
            PayoneAmazonPayExpressPaymentHandler::class
        ));

        static::assertArrayHasKey('clearingtype', $requestParams);
        static::assertEquals('wlt', $requestParams['clearingtype']);
        static::assertArrayHasKey('wallettype', $requestParams);
        static::assertEquals('AMP', $requestParams['wallettype']);
        static::assertArrayHasKey('add_paydata[action]', $requestParams);
        static::assertEquals('getCheckoutSession', $requestParams['add_paydata[action]']);
        static::assertArrayHasKey('workorderid', $requestParams);
        static::assertEquals('woi-123456', $requestParams['workorderid']);
    }
}
