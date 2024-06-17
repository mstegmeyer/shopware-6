(window["webpackJsonpPluginpayone-payment"]=window["webpackJsonpPluginpayone-payment"]||[]).push([[942],{709:function(){},942:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}}),t(823);var i={template:'{% block payone_ratepay_profile_configurations %}\n    <div class="payone-ratepay-profile-configuration">\n        <template v-if="profileConfigurations.length > 0">\n            <h3>{{ $tc(\'payone-payment.general.headlines.ratepayProfileConfigurations\') }}</h3>\n\n            <div class="payone-ratepay-profile-configuration--items">\n                <div v-for="profileConfiguration in profileConfigurations">\n                    <p class="payone-ratepay-profile-configuration--headline">{{ $tc(\'payone-payment.general.label.shopId\') }}: {{ profileConfiguration.shopId }}</p>\n\n                    {% block payone_ratepay_configuration_grid %}\n                        <sw-description-list grid="1fr 1fr">\n                            <dt>{{ $tc(\'payone-payment.general.label.currency\') }}</dt>\n                            <dd>{{ profileConfiguration.shopCurrency }}</dd>\n\n                            <dt>{{ $tc(\'payone-payment.general.label.invoiceCountry\') }}</dt>\n                            <dd>{{ profileConfiguration.invoiceCountry }}</dd>\n\n                            <dt>{{ $tc(\'payone-payment.general.label.shippingCountry\') }}</dt>\n                            <dd>{{ profileConfiguration.shippingCountry }}</dd>\n\n                            <dt>{{ $tc(\'payone-payment.general.label.minBasket\') }}</dt>\n                            <dd>{{ profileConfiguration.minBasket }}</dd>\n\n                            <dt>{{ $tc(\'payone-payment.general.label.maxBasket\') }}</dt>\n                            <dd>{{ profileConfiguration.maxBasket }}</dd>\n                        </sw-description-list>\n                    {% endblock %}\n                </div>\n            </div>\n        </template>\n\n        <sw-alert variant="info" appearance="default" :showIcon="true" :closable="false">\n            <span v-html="$tc(\'payone-payment.general.label.reloadConfigInfo\')"></span>\n        </sw-alert>\n    </div>\n{% endblock %}\n',inject:["PayonePaymentSettingsService"],props:{value:{type:Object,required:!1,default(){return{}}},name:{type:String,required:!0}},data(){return{isLoading:!1,configuration:this.value}},created(){this.createdComponent()},destroyed(){this.destroyedComponent()},computed:{profileConfigurations(){let e=this.name,n=[];for(let t in this.configuration){let i="",a="";switch(e){case"PayonePayment.settings.ratepayDebitProfileConfigurations":i=this.configuration[t]["tx-limit-elv-min"],a=this.configuration[t]["tx-limit-elv-max"];break;case"PayonePayment.settings.ratepayInstallmentProfileConfigurations":i=this.configuration[t]["tx-limit-installment-min"],a=this.configuration[t]["tx-limit-installment-max"];break;case"PayonePayment.settings.ratepayInvoicingProfileConfigurations":i=this.configuration[t]["tx-limit-invoice-min"],a=this.configuration[t]["tx-limit-invoice-max"];break;default:return}let r={shopId:t,shopCurrency:this.configuration[t].currency,invoiceCountry:this.configuration[t]["country-code-billing"],shippingCountry:this.configuration[t]["country-code-delivery"],minBasket:i,maxBasket:a};n.push(r)}return n}},methods:{createdComponent(){this.$root.$on("payone-ratepay-profiles-update-result",this.onProfilesUpdateResult)},destroyedComponent(){this.$root.$off("payone-ratepay-profiles-update-result")},onProfilesUpdateResult(e){e.updates[this.name]&&(this.configuration=e.updates[this.name])}}}},823:function(e,n,t){var i=t(709);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),t(346).Z("55352db4",i,!0,{})},346:function(e,n,t){"use strict";function i(e,n){for(var t=[],i={},a=0;a<n.length;a++){var r=n[a],o=r[0],s={id:e+":"+a,css:r[1],media:r[2],sourceMap:r[3]};i[o]?i[o].parts.push(s):t.push(i[o]={id:o,parts:[s]})}return t}t.d(n,{Z:function(){return g}});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},o=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,d=!1,p=function(){},u=null,c="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(e,n,t,a){d=t,u=a||{};var o=i(e,n);return y(o),function(n){for(var t=[],a=0;a<o.length;a++){var s=r[o[a].id];s.refs--,t.push(s)}n?y(o=i(e,n)):o=[];for(var a=0;a<t.length;a++){var s=t[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}}function y(e){for(var n=0;n<e.length;n++){var t=e[n],i=r[t.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](t.parts[a]);for(;a<t.parts.length;a++)i.parts.push(m(t.parts[a]));i.parts.length>t.parts.length&&(i.parts.length=t.parts.length)}else{for(var o=[],a=0;a<t.parts.length;a++)o.push(m(t.parts[a]));r[t.id]={id:t.id,refs:1,parts:o}}}}function h(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function m(e){var n,t,i=document.querySelector("style["+c+'~="'+e.id+'"]');if(i){if(d)return p;i.parentNode.removeChild(i)}if(f){var a=l++;n=C.bind(null,i=s||(s=h()),a,!1),t=C.bind(null,i,a,!0)}else n=b.bind(null,i=h()),t=function(){i.parentNode.removeChild(i)};return n(e),function(i){i?(i.css!==e.css||i.media!==e.media||i.sourceMap!==e.sourceMap)&&n(e=i):t()}}var v=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function C(e,n,t,i){var a=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(n,a);else{var r=document.createTextNode(a),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(r,o[n]):e.appendChild(r)}}function b(e,n){var t=n.css,i=n.media,a=n.sourceMap;if(i&&e.setAttribute("media",i),u.ssrId&&e.setAttribute(c,n.id),a&&(t+="\n/*# sourceURL="+a.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}}]);
//# sourceMappingURL=9513aefe3911f011d98e.js.map