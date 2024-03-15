(this["webpackJsonpPluginpayone-payment"]=this["webpackJsonpPluginpayone-payment"]||[]).push([[6],{"6OVj":function(e,n,t){var a=t("rDSL");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t("P8hj").default)("7ec186c0",a,!0,{})},P8hj:function(e,n,t){"use strict";function a(e,n){for(var t=[],a={},r=0;r<n.length;r++){var o=n[r],i=o[0],s={id:e+":"+r,css:o[1],media:o[2],sourceMap:o[3]};a[i]?a[i].parts.push(s):t.push(a[i]={id:i,parts:[s]})}return t}t.r(n),t.d(n,"default",(function(){return y}));var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},i=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,d=!1,l=function(){},p=null,u="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function y(e,n,t,r){d=t,p=r||{};var i=a(e,n);return m(i),function(n){for(var t=[],r=0;r<i.length;r++){var s=i[r];(c=o[s.id]).refs--,t.push(c)}n?m(i=a(e,n)):i=[];for(r=0;r<t.length;r++){var c;if(0===(c=t[r]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete o[c.id]}}}}function m(e){for(var n=0;n<e.length;n++){var t=e[n],a=o[t.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](t.parts[r]);for(;r<t.parts.length;r++)a.parts.push(g(t.parts[r]));a.parts.length>t.parts.length&&(a.parts.length=t.parts.length)}else{var i=[];for(r=0;r<t.parts.length;r++)i.push(g(t.parts[r]));o[t.id]={id:t.id,refs:1,parts:i}}}}function h(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function g(e){var n,t,a=document.querySelector("style["+u+'~="'+e.id+'"]');if(a){if(d)return l;a.parentNode.removeChild(a)}if(f){var r=c++;a=s||(s=h()),n=b.bind(null,a,r,!1),t=b.bind(null,a,r,!0)}else a=h(),n=T.bind(null,a),t=function(){a.parentNode.removeChild(a)};return n(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;n(e=a)}else t()}}var w,v=(w=[],function(e,n){return w[e]=n,w.filter(Boolean).join("\n")});function b(e,n,t,a){var r=t?"":a.css;if(e.styleSheet)e.styleSheet.cssText=v(n,r);else{var o=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function T(e,n){var t=n.css,a=n.media,r=n.sourceMap;if(a&&e.setAttribute("media",a),p.ssrId&&e.setAttribute(u,n.id),r&&(t+="\n/*# sourceURL="+r.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},XagP:function(e,n,t){"use strict";t.r(n);t("6OVj");var a=Shopware.Mixin,r=Shopware.Data.Criteria;n.default={template:'{% block payone_payment_management %}\n    <div class="payone-payment-management">\n        <template v-for="(transaction, index) in payoneTransactions">\n            <sw-card class="payone-payment-management-card" position-identifier="payone-payment-management-card" :title="index === 0 ? $tc(\'sw-order.payone-payment.general.cardTitle\') : \'\'">\n                <sw-container columns="1fr 1fr">\n                    <sw-container>\n                        <sw-description-list>\n                            <dt>{{ $tc(\'sw-order.payone-payment.paymentMethod\') }}</dt>\n                            <dd class="sw-order-base__label-sales-channel">{{ transaction.paymentMethod.translated.distinguishableName }}</dd>\n\n                            <template v-if="getPayoneCardType(transaction)">\n                                <dt>{{ $tc(\'sw-order.payone-payment.creditCard.cardTypeLabel\') }}</dt>\n                                <dd class="sw-order-base__label-sales-channel">{{ getPayoneCardType(transaction) }}</dd>\n                            </template>\n\n                            <dt>{{ $tc(\'sw-order.payone-payment.txid\') }}</dt>\n                            <dd class="sw-order-base__label-sales-channel">{{ transaction.extensions.payonePaymentOrderTransactionData.transactionId }}</dd>\n\n                            <dt>{{ $tc(\'sw-order.payone-payment.sequenceNumber.label\') }}</dt>\n                            <dd class="sw-order-base__label-sales-channel">\n                                    <span v-if="transaction.extensions.payonePaymentOrderTransactionData.sequenceNumber == -1">\n                                        {{ $tc(\'sw-order.payone-payment.sequenceNumber.empty\') }}\n                                    </span>\n                                <span v-else>\n                                        {{ transaction.extensions.payonePaymentOrderTransactionData.sequenceNumber }}\n                                    </span>\n                            </dd>\n\n                            <dt>{{ $tc(\'sw-order.payone-payment.transactionState\') }}</dt>\n                            <dd class="sw-order-base__label-sales-channel" v-if="isActiveTransaction(transaction)">{{ transaction.extensions.payonePaymentOrderTransactionData.transactionState }}</dd>\n                            <dd class="sw-order-base__label-sales-channel" v-else>{{ $tc(\'sw-order.payone-payment.transactionCancelled\') }}</dd>\n                        </sw-description-list>\n                    </sw-container>\n\n                    <sw-container gap="30px" v-if="isActiveTransaction(transaction) && can(\'Payone.payone_order_management\')">\n                        <payone-capture-button :order="order" :transaction="transaction" v-on:reload="reloadEntityData"></payone-capture-button>\n                        <payone-refund-button :order="order" :transaction="transaction" v-on:reload="reloadEntityData"></payone-refund-button>\n                    </sw-container>\n                </sw-container>\n\n                <sw-container v-if="hasNotificationForwards(transaction)" gap="10px" class="payone-payment-management-notification-forwards">\n                    <b>{{ $tc(\'payonePayment.notificationTarget.list.title\') }}</b>\n\n                    <sw-data-grid\n                            :dataSource="notificationForwards"\n                            :selectable="false"\n                            :isFullpage="false"\n                            :showSelection="false"\n                            :compactMode="true"\n                            :showActions="true"\n                            :allowInlineEdit="false"\n                            :columns="notificationTargetColumns"\n                            :plainAppearance="true"\n                            :showHeader="false"\n                            table>\n\n                        <template #column-updatedAt="{ item }">\n                            {{ item.updatedAt| date({ hour: \'2-digit\', minute: \'2-digit\' }) }}\n                        </template>\n\n                        <template #actions="{ item }">\n                            <sw-context-menu-item\n                                    @click="requeue(item, transaction)">\n                                {{ $tc(\'payonePayment.notificationTarget.actions.requeue\') }}\n                            </sw-context-menu-item>\n                        </template>\n\n                    </sw-data-grid>\n                </sw-container>\n            </sw-card>\n        </template>\n    </div>\n{% endblock %}\n',inject:["acl","PayonePaymentService","repositoryFactory"],mixins:[a.getByName("notification")],props:{order:{type:Object,required:!0}},data:function(){return{notificationForwards:null}},computed:{payoneTransactions:function(){var e=this;return this.order.transactions.filter((function(n){return e.isPayoneTransaction(n)})).sort((function(e,n){return e.createdAt<n.createdAt?1:e.createdAt>n.createdAt?-1:0}))},notificationForwardRepository:function(){return this.repositoryFactory.create("payone_payment_notification_forward")},notificationTargetColumns:function(){return[{property:"txaction",type:"text",width:"100px"},{property:"notificationTarget.url",type:"text"},{property:"response",width:"100px"},{property:"updatedAt",align:"right",type:"date"}]}},methods:{isPayoneTransaction:function(e){return!!(e.extensions&&e.extensions.payonePaymentOrderTransactionData&&e.extensions.payonePaymentOrderTransactionData.transactionId)&&e.extensions.payonePaymentOrderTransactionData.transactionId},isActiveTransaction:function(e){return"cancelled"!==e.stateMachineState.technicalName},hasNotificationForwards:function(e){return null===this.notificationForwards?(this.getNotificationForwards(e),!1):this.notificationForwards.length>0},getNotificationForwards:function(e){var n=this,t=new r;return t.addAssociation("notificationTarget"),t.addSorting(r.sort("updatedAt","DESC",!0)),t.addFilter(r.equals("transactionId",e.id)),t.setLimit(500),this.notificationForwardRepository.search(t,Shopware.Context.api).then((function(e){n.notificationForwards=e}))},requeue:function(e,n){var t=this,a={notificationForwardId:e.id};this.PayonePaymentService.requeueNotificationForward(a).then((function(){t.createNotificationSuccess({title:t.$tc("payonePayment.notificationTarget.actions.requeue"),message:t.$tc("payonePayment.notificationTarget.messages.success")}),t.getNotificationForwards(n)})).catch((function(e){t.createNotificationError({title:t.$tc("payonePayment.notificationTarget.actions.requeue"),message:e.message})})).finally((function(){t.$nextTick().then((function(){t.$emit("reload")}))}))},can:function(e){try{return this.acl.can(e)}catch(e){return!0}},reloadEntityData:function(){this.$emit("reload-entity-data")},getPayoneCardType:function(e){var n,t,a=null===(n=e.extensions.payonePaymentOrderTransactionData)||void 0===n||null===(t=n.additionalData)||void 0===t?void 0:t.card_type;return a?this.$tc("sw-order.payone-payment.creditCard.cardTypes."+a):null}}}},rDSL:function(e,n,t){}}]);