<?php

declare(strict_types=1);

namespace PayonePayment\Installer;

use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\CustomField\CustomFieldTypes;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\Plugin\Context\ActivateContext;
use Shopware\Core\Framework\Plugin\Context\DeactivateContext;
use Shopware\Core\Framework\Plugin\Context\InstallContext;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;
use Shopware\Core\Framework\Plugin\Context\UpdateContext;
use Symfony\Component\DependencyInjection\ContainerInterface;

class CustomFieldInstaller implements InstallerInterface
{
    public const TRANSACTION_ID         = 'payone_transaction_id';
    public const SEQUENCE_NUMBER        = 'payone_sequence_number';
    public const MANDATE_IDENTIFICATION = 'payone_mandate_identification';
    public const TRANSACTION_DATA       = 'payone_transaction_data';
    public const USER_ID                = 'payone_user_id';
    public const LAST_REQUEST           = 'payone_last_request';
    public const TRANSACTION_STATE      = 'payone_transaction_state';
    public const ALLOW_REFUND           = 'payone_allow_refund';
    public const ALLOW_CAPTURE          = 'payone_allow_capture';
    public const TEMPLATE               = 'payone_template';
    public const IS_PAYONE              = 'payone_payment';

    /** @var EntityRepositoryInterface */
    private $customFieldRepository;

    /** @var array */
    private $customFields;

    public function __construct(ContainerInterface $container)
    {
        $this->customFieldRepository = $container->get('custom_field.repository');

        $this->customFields = [
            [
                'id'   => 'fe5f4e10cd1a4f6e9710207638c0c9eb',
                'name' => self::TRANSACTION_ID,
                'type' => CustomFieldTypes::TEXT,
            ],
            [
                'id'   => '402f0807d3eb44ccadb9a05737ca1ecd',
                'name' => self::TRANSACTION_DATA,
                'type' => CustomFieldTypes::JSON,
            ],
            [
                'id'   => '86235308bf4c4bf5b4db7feb07d2a63d',
                'name' => self::SEQUENCE_NUMBER,
                'type' => CustomFieldTypes::INT,
            ],
            [
                'id'   => '81f06a4b755e49faaeb42cf0db62c36d',
                'name' => self::TRANSACTION_STATE,
                'type' => CustomFieldTypes::TEXT,
            ],
            [
                'id'   => '944b5716791c417ebdf7cc333ad5264f',
                'name' => self::USER_ID,
                'type' => CustomFieldTypes::TEXT,
            ],
            [
                'id'   => 'bee7f0790bc14763b727d623dd646086',
                'name' => self::LAST_REQUEST,
                'type' => CustomFieldTypes::TEXT,
            ],
            [
                'id'   => '83f7ad2fc87e4ce4977b17aab04b02cb',
                'name' => self::ALLOW_CAPTURE,
                'type' => CustomFieldTypes::BOOL,
            ],
            [
                'id'   => '9bafb69059bf467bb3445c445d395c7e',
                'name' => self::ALLOW_REFUND,
                'type' => CustomFieldTypes::BOOL,
            ],
            [
                'id'   => '68eae9619aa54103a546d72b95d86e9b',
                'name' => self::TEMPLATE,
                'type' => CustomFieldTypes::TEXT,
            ],
            [
                'id'   => '68eae9619aa54103a546d72b95d86e9b',
                'name' => self::IS_PAYONE,
                'type' => CustomFieldTypes::BOOL,
            ],
            [
                'id'   => '441218e612d045d99e851c0b8829dc29',
                'name' => self::MANDATE_IDENTIFICATION,
                'type' => CustomFieldTypes::TEXT,
            ],
        ];
    }

    public function install(InstallContext $context): void
    {
        foreach ($this->customFields as $customField) {
            $this->upsertCustomField($customField, $context->getContext());
        }
    }

    public function update(UpdateContext $context): void
    {
        foreach ($this->customFields as $customField) {
            $this->upsertCustomField($customField, $context->getContext());
        }
    }

    public function uninstall(UninstallContext $context): void
    {
        foreach ($this->customFields as $customField) {
            $this->deactivateCustomField($customField, $context->getContext());
        }
    }

    public function activate(ActivateContext $context): void
    {
        foreach ($this->customFields as $customField) {
            $this->upsertCustomField($customField, $context->getContext());
        }
    }

    public function deactivate(DeactivateContext $context): void
    {
        foreach ($this->customFields as $customField) {
            $this->deactivateCustomField($customField, $context->getContext());
        }
    }

    private function upsertCustomField($customField, Context $context): void
    {
        $data = [
            'id'     => $customField['id'],
            'name'   => $customField['name'],
            'type'   => $customField['type'],
            'active' => true,
        ];

        $this->customFieldRepository->upsert([$data], $context);
    }

    private function deactivateCustomField($customField, Context $context): void
    {
        $data = [
            'id'     => $customField['id'],
            'name'   => $customField['name'],
            'type'   => $customField['type'],
            'active' => false,
        ];

        $this->customFieldRepository->upsert([$data], $context);
    }
}