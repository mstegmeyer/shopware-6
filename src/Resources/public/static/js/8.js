(this["webpackJsonpPluginpayone-payment"]=this["webpackJsonpPluginpayone-payment"]||[]).push([[8],{E0nA:function(t,n,i){"use strict";i.r(n);var a=Shopware.Mixin;n.default={template:'{% block payone_notification_target_detail %}\n    <sw-page class="payone-notification-target-detail">\n\n        {% block payone_notification_target_detail_header %}\n            <template #smart-bar-header>\n                <h2>{{ $tc(\'payonePayment.notificationTarget.detail.headline\') }}</h2>\n            </template>\n        {% endblock %}\n\n        {% block payone_notification_target_detail_actions %}\n            <template #smart-bar-actions>\n\n                {% block payone_notification_target_detail_actions_abort %}\n                    <sw-button :disabled="notificationTargetIsLoading" @click="onCancel">\n                        {{ $tc(\'payonePayment.notificationTarget.detail.label.buttonCancel\') }}\n                    </sw-button>\n                {% endblock %}\n\n                {% block payone_notification_target_detail_actions_save %}\n                    <sw-button-process\n                        class="payone-notification-target-detail__save-action"\n                        :isLoading="isLoading"\n                        v-model="isSaveSuccessful"\n                        :disabled="isLoading"\n                        variant="primary"\n                        @click.prevent="onSave">\n                        {{ $tc(\'payonePayment.notificationTarget.detail.label.buttonSave\') }}\n                    </sw-button-process>\n                {% endblock %}\n\n            </template>\n        {% endblock %}\n\n        {% block payone_notification_target_detail_content %}\n            <sw-card-view slot="content">\n\n                {% block payone_notification_target_detail_base_basic_info_card %}\n                    <sw-card :title="$tc(\'payonePayment.notificationTarget.detail.headline\')" :isLoading="notificationTargetIsLoading">\n                        <template v-if="!notificationTargetIsLoading">\n                            <sw-container class="payone-notification-target-detail__container"\n                                          columns="repeat(auto-fit, minmax(250px, 1fr))"\n                                          gap="0 30px">\n                                <div class="payone-notification-target-detail__base-info-wrapper">\n\n                                    {% block payone_notification_target_detail_base_info_field_url %}\n                                        <sw-field type="text"\n                                                  :label="$tc(\'payonePayment.notificationTarget.detail.label.url\')"\n                                                  :placeholder="$tc(\'payonePayment.notificationTarget.detail.placeholder.url\')"\n                                                  name="url"\n                                                  validation="required"\n                                                  required\n                                                  v-model="notificationTarget.url">\n                                        </sw-field>\n                                    {% endblock %}\n\n                                    {% block payone_notification_target_detail_base_info_field_is_basic_auth %}\n                                        <sw-checkbox-field :label="$tc(\'payonePayment.notificationTarget.detail.label.isBasicAuth\')"\n                                                  name="isBasicAuth"\n                                                  v-model="notificationTarget.isBasicAuth">\n                                        </sw-checkbox-field>\n                                    {% endblock %}\n\n                                    {% block payone_notification_target_detail_base_info_field_is_basic_auth_fields %}\n                                        <sw-field v-if="notificationTarget.isBasicAuth"\n                                                  type="text"\n                                                  :label="$tc(\'payonePayment.notificationTarget.detail.label.username\')"\n                                                  :placeholder="$tc(\'payonePayment.notificationTarget.detail.placeholder.username\')"\n                                                  name="username"\n                                                  required\n                                                  v-model="notificationTarget.username">\n                                        </sw-field>\n\n                                        <sw-field v-if="notificationTarget.isBasicAuth"\n                                                  type="password"\n                                                  :label="$tc(\'payonePayment.notificationTarget.detail.label.password\')"\n                                                  :placeholder="$tc(\'payonePayment.notificationTarget.detail.placeholder.password\')"\n                                                  name="password"\n                                                  required\n                                                  v-model="notificationTarget.password">\n                                        </sw-field>\n                                    {% endblock %}\n\n                                    {% block payone_notification_target_detail_base_info_field_txactions %}\n                                        <sw-multi-select\n                                            :label="$tc(\'payonePayment.notificationTarget.detail.label.txactions\')"\n                                            :options="[\n                                                { value: \'appointed\', label: \'appointed\' },\n                                                { value: \'capture\', label: \'capture\' },\n                                                { value: \'paid\', label: \'paid\' },\n                                                { value: \'underpaid\', label: \'underpaid\' },\n                                                { value: \'cancelation\', label: \'cancelation\' },\n                                                { value: \'refund\', label: \'refund\' },\n                                                { value: \'debit\', label: \'debit\' },\n                                                { value: \'transfer\', label: \'transfer\' },\n                                                { value: \'reminder\', label: \'reminder\' },\n                                                { value: \'vauthorization\', label: \'vauthorization\' },\n                                                { value: \'vsettlement\', label: \'vsettlement\' },\n                                                { value: \'invoice\', label: \'invoice\' },\n                                                { value: \'failed\', label: \'failed\' }\n                                            ]"\n                                            @change="updateSelection"\n                                            :value="notificationTarget.txactions">\n                                        </sw-multi-select>\n                                    {% endblock %}\n\n                                </div>\n                            </sw-container>\n                        </template>\n                    </sw-card>\n                {% endblock %}\n            </sw-card-view>\n        {% endblock %}\n\n    </sw-page>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[a.getByName("notification")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},props:{notificationTargetId:{type:String,required:!1,default:null}},data:function(){return{notificationTarget:null,isLoading:!1,isSaveSuccessful:!1}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:{notificationTargetIsLoading:function(){return this.isLoading||null==this.notificationTarget},notificationTargetRepository:function(){return this.repositoryFactory.create("payone_payment_notification_target")}},watch:{notificationTargetId:function(){this.createdComponent()}},created:function(){this.createdComponent()},methods:{updateSelection:function(t){this.notificationTarget.txactions=t},createdComponent:function(){this.notificationTargetId?this.loadEntityData():(Shopware.State.commit("context/resetLanguageToDefault"),this.notificationTarget=this.notificationTargetRepository.create(Shopware.Context.api))},loadEntityData:function(){var t=this;this.isLoading=!0,this.notificationTargetRepository.get(this.notificationTargetId,Shopware.Context.api).then((function(n){t.isLoading=!1,t.notificationTarget=n,null!==n.txactions&&(n.txactions.length||(t.notificationTarget.txactions=null))}))},isInvalid:function(){return!0===this.notificationTarget.isBasicAuth&&((!this.notificationTarget.username||!this.notificationTarget.password)&&(this.createNotificationError({message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")}),!0))},onSave:function(){var t=this;this.isInvalid()||(this.isLoading=!0,this.notificationTargetRepository.save(this.notificationTarget,Shopware.Context.api).then((function(){t.isLoading=!1,t.isSaveSuccessful=!0,null!==t.notificationTargetId?t.loadEntityData():t.$router.push({name:"payone.notification.target.detail",params:{id:t.notificationTarget.id}})})).catch((function(n){throw t.isLoading=!1,t.createNotificationError({message:t.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")}),n})))},onCancel:function(){this.$router.push({name:"payone.notification.target.list"})}}}}}]);