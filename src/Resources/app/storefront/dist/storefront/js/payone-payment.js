(window.webpackJsonp=window.webpackJsonp||[]).push([["payone-payment"],{"1avo":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var r=n("FGIj"),a=n("gHbT"),o=n("k8s9");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y,p,m,f=function(t){function n(){return l(this,n),s(this,c(n).apply(this,arguments))}var r,i,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(n,t),r=n,(i=[{key:"init",value:function(){this.csrfToken=document.getElementById("payoneCsrfTokenRatepayInstallmentCalculation"),this._client=new o.a,this.ratepayRateInput=a.a.querySelector(document,this.options.ratepayRateInputSelector),this.calculateInstallmentBtn=a.a.querySelector(document,this.options.calculateInstallmentBtnSelector),this.ratepayRuntimeInput=a.a.querySelector(document,this.options.ratepayRuntimeInputSelector),this.ratepayIbanContainer=a.a.querySelector(document,this.options.ratepayIbanContainerSelector),this.ratepayIbanInput=a.a.querySelector(document,this.options.ratepayIbanInputSelector),this._registerEventListeners(),this._handleInstallmentRuntimeChange()}},{key:"_registerEventListeners",value:function(){this.calculateInstallmentBtn&&this.calculateInstallmentBtn.addEventListener("click",this._handleCalculateInstallmentButtonClick.bind(this)),this.ratepayRuntimeInput&&this.ratepayRuntimeInput.addEventListener("change",this._handleInstallmentRuntimeChange.bind(this)),e(this.options.ratepayIbanContainerSelector).on("shown.bs.collapse",this._handleOpenedIbanContainer.bind(this)),e(this.options.ratepayIbanContainerSelector).on("hidden.bs.collapse",this._handleClosedIbanContainer.bind(this))}},{key:"_handleCalculateInstallmentButtonClick",value:function(){var e=this.ratepayRateInput.value;this._sendRequest("rate",e)}},{key:"_handleInstallmentRuntimeChange",value:function(){var e=a.a.querySelector(document,this.options.ratepayRuntimeInputSelector).value;this._sendRequest("time",e)}},{key:"_sendRequest",value:function(e,t){var n=this,r={_csrf_token:this.csrfToken.value};r.ratepayInstallmentType=e,r.ratepayInstallmentValue=t;var a=JSON.stringify(r);this._client.abort(),this._client.post("/payone/ratepay/installment/calculation",a,(function(e){return n._handleCalculationCallback(e)}))}},{key:"_handleCalculationCallback",value:function(e){this._replaceCalculationContent(e)}},{key:"_replaceCalculationContent",value:function(e){a.a.querySelector(document,this.options.ratepayInstallmentPlanContainerSelector).innerHTML=e,this.ratepayInstallmentTable=a.a.querySelector(document,this.options.ratepayInstallmentTableSelector),this.ratepayRuntimeInput.value=this.ratepayInstallmentTable.dataset.ratepayNumberOfRates,this.ratepayRateInput.value=this.ratepayInstallmentTable.dataset.ratepayRate}},{key:"_handleOpenedIbanContainer",value:function(){this.ratepayIbanInput.required=!0}},{key:"_handleClosedIbanContainer",value:function(){this.ratepayIbanInput.required=!1}}])&&u(r.prototype,i),y&&u(r,y),n}(r.a);m={ratepayRateInputSelector:"#ratepayRate",ratepayRuntimeInputSelector:"#ratepayRuntime",calculateInstallmentBtnSelector:"#payone-ratepay-calculate-installment-btn",ratepayInstallmentPlanContainerSelector:"#payone-ratepay-installment-plan",ratepayIbanContainerSelector:"#ratepayIbanContainer",ratepayIbanInputSelector:"#ratepayIban",ratepayInstallmentTableSelector:"#ratepayInstallmentTable"},(p="options")in(y=f)?Object.defineProperty(y,p,{value:m,enumerable:!0,configurable:!0,writable:!0}):y[p]=m}).call(this,n("UoTJ"))},rZg5:function(e,t,n){"use strict";n.r(t);var r=n("FGIj"),a=n("477Q");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,m,f,h=function(e){function t(){return u(this,t),c(this,d(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"init",value:function(){var e=this;this.iframe=null,this.iframeFieldCheckerStarted=!1,this.orderFormDisabled=!0;var t=document.getElementById("payone-request"),n=t.getAttribute("data-payone-language"),r=JSON.parse(t.innerHTML);this._createScript((function(){var t=e.getClientConfig(n);e.iframe=new window.Payone.ClientApi.HostedIFrames(t,r);var a=document.getElementById("savedpseudocardpan"),o=document.getElementById("confirmOrderForm");a&&a.addEventListener("change",e._handleChangeSavedCard.bind(e)),o&&o.addEventListener("submit",e._handleOrderSubmit.bind(e))}))}},{key:"getSelectStyle",value:function(){return["width: 100%","padding: .5625rem","color: #8798a9","vertical-align: middle","line-height: 1.5","font-weight: 500","background-color: #fff","border: none","border-radius: 3px"]}},{key:"getFieldStyle",value:function(){return["width: 100%","height: 100%","padding: .5625rem","color: #8798a9","vertical-align: middle","line-height: 1.5","font-weight: 500","background-color: #fff","border: none","border-radius: .1875rem"]}},{key:"getClientConfig",value:function(e){return{fields:{cardpan:{selector:"cardpan",type:"text",style:this.getFieldStyle().join("; ")},cardcvc2:{selector:"cardcvc2",type:"password",size:"4",maxlength:"4",length:{V:3,M:3,A:4,D:3,J:0,O:3,P:3,U:3},style:this.getFieldStyle().join("; ")},cardexpiremonth:{selector:"cardexpiremonth",type:"select",size:"2",maxlength:"2",style:this.getSelectStyle().join("; ")},cardexpireyear:{selector:"cardexpireyear",type:"select",style:this.getSelectStyle().join("; ")}},language:window.Payone.ClientApi.Language[e],defaultStyle:{iframe:{height:"100%",width:"100%"}},autoCardtypeDetection:{supportedCardtypes:t.options.supportedCardtypes,callback:this._cardDetectionCallback}}}},{key:"_cardDetectionCallback",value:function(e){if("-"!==e&&"?"!==e){var t="https://cdn.pay1.de/cc/"+e.toLowerCase()+"/xl/default.png",n=document.getElementById("errorOutput"),r=document.getElementById("card-logo");r.setAttribute("src",t),n.style.display="none",r.style.display="block"}}},{key:"_createScript",value:function(e){var t=document.createElement("script");t.type="text/javascript",t.src="https://secure.pay1.de/client-api/js/v1/payone_hosted.js",t.addEventListener("load",e.bind(this),!1),document.head.appendChild(t)}},{key:"_handleOrderSubmit",value:function(e){var t=this;document.getElementById("errorOutput").style.display="none";var n=document.getElementById("savedpseudocardpan");if(n&&n.value.length>0)return!0;if(!this.iframe.isComplete()){var r=document.getElementById("iframeErrorOutput");return this.iframeFieldCheckerStarted||setInterval((function(){t.iframe.isComplete()?r.style.display="none":r.style.display="block"}),250),this.iframeFieldCheckerStarted=!0,this._handleOrderFormError(e),!1}return this.orderFormDisabled?(window.payoneCreditCardCheckCallback=this._payoneCheckCallback.bind(this),this.iframe.creditCardCheck("payoneCreditCardCheckCallback"),this._handleOrderFormError(e),!1):void 0}},{key:"_handleOrderFormError",value:function(e){var t=document.getElementById("confirmFormSubmit");if(e.preventDefault(),t){var n=new a.a(t);t.disabled=!1,n.remove()}}},{key:"_handleChangeSavedCard",value:function(){var e=document.getElementById("savedpseudocardpan");e.options[e.selectedIndex].value?i(document.getElementsByClassName("credit-card-input")).forEach((function(e){e.classList.add("hide")})):i(document.getElementsByClassName("credit-card-input")).forEach((function(e){e.classList.remove("hide")}))}},{key:"_payoneCheckCallback",value:function(e){if("VALID"===e.status)document.getElementById("pseudocardpan").value=e.pseudocardpan,document.getElementById("truncatedcardpan").value=e.truncatedcardpan,document.getElementById("cardexpiredate").value=e.cardexpiredate,this.orderFormDisabled=!1,document.getElementById("confirmOrderForm").submit();else{var t=document.getElementById("confirmFormSubmit"),n=document.getElementById("errorOutput");t.removeAttribute("disabled"),n.innerHTML=e.errormessage,n.style.display="block"}}}])&&s(n.prototype,r),o&&s(n,o),t}(r.a);f={supportedCardtypes:["#","V","A","M","D","J","O","U","P"]},(m="options")in(p=h)?Object.defineProperty(p,m,{value:f,enumerable:!0,configurable:!0,writable:!0}):p[m]=f;var v=n("2Jwc"),b=n("3xtq"),g=n("k8s9");function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(){return I(this,t),S(this,E(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(r=[{key:"init",value:function(){this.orderFormDisabled=!0,this._client=new g.a,document.getElementById("confirmOrderForm").addEventListener("submit",this._handleOrderSubmit.bind(this))}},{key:"_handleOrderSubmit",value:function(e){document.getElementById("errorOutput").style.display="none",this.orderFormDisabled&&(this._handleOrderFormError(e),this._getModal(e))}},{key:"_handleOrderFormError",value:function(e){var t=document.getElementById("confirmFormSubmit");if(e.preventDefault(),t){var n=new a.a(t);t.disabled=!1,n.remove()}}},{key:"_getModal",value:function(e){var t=this;e.preventDefault(),b.a.create();var n=this._getRequestData();this._client.abort(),this._client.post(this._getManageMandateUrl(),JSON.stringify(n),(function(e){return t._openModal(e)}))}},{key:"_submitForm",value:function(){this.orderFormDisabled=!1,document.getElementById("confirmOrderForm").submit()}},{key:"_openModal",value:function(e){if((e=JSON.parse(e)).error){var t=document.getElementById("errorOutput");return t.innerHTML=e.error,t.style.display="block",void b.a.remove()}if("active"!==e.mandate.Status){var n=new v.b(e.modal_content);n.open(this._onOpen.bind(this,n))}else this._submitForm()}},{key:"_onOpen",value:function(e){e.getModal().classList.add("payone-debit-mandate-modal"),window.PluginManager.initializePlugins(),this._registerEvents(),b.a.remove()}},{key:"_getRequestData",value:function(){var e=document.getElementById("payoneCsrfTokenDebitManageMandate"),t=document.getElementById("iban"),n=document.getElementById("bic");return{_csrf_token:e.value,iban:t.value,bic:n.value}}},{key:"_getManageMandateUrl",value:function(){return document.getElementById("payone-configuration").getAttribute("data-manage-mandate-url")}},{key:"_registerEvents",value:function(){document.getElementById("mandateSubmit").addEventListener("click",this._onMandateSubmit.bind(this))}},{key:"_onMandateSubmit",value:function(){document.getElementById("accept-mandate").checked&&this._submitForm()}}])&&k(n.prototype,r),o&&k(n,o),t}(r.a);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(C,"options",{editorModalClass:"payone-debit-modal"});var D=function(e){function t(){return B(this,t),F(this,j(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,e),n=t,(r=[{key:"init",value:function(){this.orderFormDisabled=!0,this._client=new g.a,this._registerEventListeners()}},{key:"_registerEventListeners",value:function(){var e=document.getElementById("confirmOrderForm");e&&e.addEventListener("submit",this._handleOrderSubmit.bind(this))}},{key:"_handleOrderSubmit",value:function(e){this._hideErrorBox(),this.orderFormDisabled&&(this._validateField(e,"payolutionConsent"),this._validateInput(e,"payolutionBirthday"),e.defaultPrevented||(this._validatePaymentAcceptance(),e.preventDefault()))}},{key:"_validateField",value:function(e,t){var n=document.getElementById(t);n.checked?n.classList.remove("is-invalid"):(n.scrollIntoView({block:"start",behavior:"smooth"}),n.classList.add("is-invalid"),e.preventDefault())}},{key:"_validateInput",value:function(e,t){var n=document.getElementById(t);n.value?n.classList.remove("is-invalid"):(n.scrollIntoView({block:"start",behavior:"smooth"}),n.classList.add("is-invalid"),e.preventDefault())}},{key:"_validatePaymentAcceptance",value:function(){var e=this,t=JSON.stringify(this._getRequestData());b.a.create(),this._client.abort(),this._client.post(this._getValidateUrl(),t,(function(t){return e._handleValidateResponse(t)}))}},{key:"_handleValidateResponse",value:function(e){if(e=JSON.parse(e),b.a.remove(),"OK"!==e.status)this._showErrorBox();else{var t=document.getElementById("payoneWorkOrder");t&&(t.value=e.workorderid),this._submitForm()}}},{key:"_getValidateUrl",value:function(){return document.getElementById("payone-configuration").getAttribute("data-validate-url")}},{key:"_showErrorBox",value:function(){var e=document.getElementById("payolutionErrorContainer");e&&(e.hidden=!1)}},{key:"_hideErrorBox",value:function(){var e=document.getElementById("payolutionErrorContainer");e&&(e.hidden=!0)}},{key:"_submitForm",value:function(){this.orderFormDisabled=!1,document.getElementById("confirmOrderForm").submit()}},{key:"_getRequestData",value:function(){var e=document.getElementById("payoneCsrfTokenPayolutionInvoiceValidation"),t=document.getElementById("payolutionBirthday");return{_csrf_token:e.value,payolutionBirthday:t.value}}}])&&P(n.prototype,r),a&&P(n,a),t}(r.a);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){function t(){return T(this,t),M(this,q(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),n=t,(r=[{key:"init",value:function(){this.orderFormDisabled=!0,this._client=new g.a,this._disableSubmitButton(),this._registerEventListeners()}},{key:"_registerEventListeners",value:function(){var e=document.getElementById("confirmOrderForm"),t=document.getElementById("checkInstallmentButton");e&&e.addEventListener("submit",this._handleOrderSubmit.bind(this)),t&&t.addEventListener("click",this._handleCalculationButtonClick.bind(this))}},{key:"_handleCalculationButtonClick",value:function(e){var t=this;if(this._hideErrorBox(),this._validateField(e,"payolutionConsent"),this._validateInput(e,"payolutionBirthday"),!e.defaultPrevented){b.a.create();var n=JSON.stringify(this._getRequestData());this._client.abort(),this._client.post(this._getCalculationUrl(),n,(function(e){return t._handleCalculationCallback(e)}))}}},{key:"_handleCalculationCallback",value:function(e){if(e=JSON.parse(e),b.a.remove(),"OK"===e.status){var t=document.getElementById("payoneWorkOrder"),n=document.getElementById("payoneCartHash");t.value=e.workorderid,n.value=e.carthash,this._displayInstallmentSelection(e),this._displayCalculationOverview(e),this._registerSelectionEventListeners(),this._enableSecondStep(),this._activateSubmitButton(),this._hideCheckInstallmentButton()}else this._showErrorBox()}},{key:"_hideCheckInstallmentButton",value:function(){var e=document.getElementById("checkInstallmentButton");e&&e.classList.add("hidden")}},{key:"_registerSelectionEventListeners",value:function(){document.getElementById("payolutionInstallmentDuration").addEventListener("change",(function(e){var t=e.target.value;document.querySelectorAll(".installmentDetail").forEach((function(e){e.dataset.duration===t?e.hidden=!1:e.hidden="hidden"}))}))}},{key:"_showErrorBox",value:function(){var e=document.getElementById("payolutionErrorContainer");e&&(e.hidden=!1)}},{key:"_hideErrorBox",value:function(){var e=document.getElementById("payolutionErrorContainer");e&&(e.hidden=!0)}},{key:"_enableSecondStep",value:function(){document.querySelectorAll(".payolution-installment .hidden").forEach((function(e){e.classList.remove("hidden")}))}},{key:"_displayInstallmentSelection",value:function(e){var t=document.getElementById("installmentSelection");t&&(t.innerHTML=e.installmentSelection)}},{key:"_displayCalculationOverview",value:function(e){var t=document.getElementById("calculationOverview");t&&(t.innerHTML=e.calculationOverview)}},{key:"_handleOrderSubmit",value:function(e){this._validateField(e,"payolutionConsent"),this._validateInput(e,"payolutionBirthday"),this._validateInput(e,"payolutionAccountOwner"),this._validateInput(e,"payolutionIban"),this._validateInput(e,"payolutionBic"),this._validateInput(e,"payolutionInstallmentDuration")}},{key:"_disableSubmitButton",value:function(){this.orderFormDisabled=!0;var e=document.getElementById("confirmFormSubmit");e&&e.setAttribute("disabled","disabled")}},{key:"_activateSubmitButton",value:function(){this.orderFormDisabled=!1;var e=document.getElementById("confirmFormSubmit");e&&e.removeAttribute("disabled")}},{key:"_getCalculationUrl",value:function(){return document.getElementById("payone-configuration").getAttribute("data-calculation-url")}},{key:"_validateField",value:function(e,t){var n=document.getElementById(t);n.checked?n.classList.remove("is-invalid"):(n.scrollIntoView({block:"start",behavior:"smooth"}),n.classList.add("is-invalid"),this._handleOrderFormError(e))}},{key:"_validateInput",value:function(e,t){var n=document.getElementById(t);n.value?n.classList.remove("is-invalid"):(n.scrollIntoView({block:"start",behavior:"smooth"}),n.classList.add("is-invalid"),this._handleOrderFormError(e))}},{key:"_handleOrderFormError",value:function(e){var t=document.getElementById("confirmFormSubmit");if(e.preventDefault(),t){var n=new a.a(t);t.disabled=!1,n.remove()}}},{key:"_getRequestData",value:function(){var e=document.getElementById("payoneCsrfTokenPayolutionInstallmentCalculation"),t=document.getElementById("payolutionBirthday"),n=document.getElementById("payoneWorkOrder"),r=document.getElementById("payoneCartHash");return{_csrf_token:e.value,payolutionBirthday:t.value,workorder:n.value,carthash:r.value}}}])&&A(n.prototype,r),o&&A(n,o),t}(r.a),N=n("gHbT"),J=n("p4AR");function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=function(e){function t(){return H(this,t),G(this,W(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,e),n=t,(r=[{key:"init",value:function(){null===this.options.supportedNetworks&&(this.options.supportedNetworks=[]),this.client=new J.a,this.validateMerchantUrl=this.el.dataset.validateMerchantUrl,this.processPaymentUrl=this.el.dataset.processPaymentUrl,this.orderForm=N.a.querySelector(document,"#confirmOrderForm"),this._registerEventHandler()}},{key:"createSession",value:function(){try{this.session=new ApplePaySession(3,this.options)}catch(e){return void this.handleErrorOnPayment()}this.session.addEventListener("validatemerchant",this.validateMerchant.bind(this)),this.session.addEventListener("paymentauthorized",this.authorizePayment.bind(this))}},{key:"performPayment",value:function(){this.session.begin()}},{key:"validateMerchant",value:function(e){var t=this,n=e.validationURL;this.client.abort(),this.client.post(this.validateMerchantUrl,JSON.stringify({validationUrl:n}),(function(e){var n=null;try{n=JSON.parse(e)}catch(e){return void t.handleErrorOnPayment()}n&&n.merchantSessionIdentifier&&n.signature?t.session.completeMerchantValidation(n):t.handleErrorOnPayment()}))}},{key:"handleErrorOnPayment",value:function(){var e=N.a.querySelector(document,"#payone-apple-pay-error");e.style.display="block",e.scrollIntoView({block:"start"})}},{key:"authorizePayment",value:function(e){var t=this,n=N.a.querySelector(this.orderForm,"input[name='orderId']").value;this.client.abort(),this.client.post(this.processPaymentUrl,JSON.stringify({token:e.payment.token,orderId:n}),(function(e){t.completePayment(e),t.orderForm.submit()}))}},{key:"completePayment",value:function(e){var t="",n="",r="";try{var a=JSON.parse(e);n=a.status,t=a.txid,r=a.userid}catch(e){this.orderForm.submit()}this.updateFormData(n,t,r,e),"APPROVED"!==n&&"PENDING"!==n||this.session.completePayment({status:ApplePaySession.STATUS_SUCCESS,errors:[]}),this.orderForm.submit()}},{key:"updateFormData",value:function(e,t,n,r){N.a.querySelector(this.orderForm,"input[name='status']").value=e,N.a.querySelector(this.orderForm,"input[name='txid']").value=t,N.a.querySelector(this.orderForm,"input[name='userid']").value=n,N.a.querySelector(this.orderForm,"input[name='response']").value=r}},{key:"_handleApplePayButtonClick",value:function(){this.orderForm.reportValidity()&&(this.createSession(),this.performPayment())}},{key:"_registerEventHandler",value:function(){this.el.addEventListener("click",this._handleApplePayButtonClick.bind(this))}}])&&z(n.prototype,r),a&&z(n,a),t}(r.a);Z(Q,"options",{countryCode:"",currencyCode:"",supportedNetworks:[],merchantCapabilities:["supports3DS","supportsDebit","supportsCredit"],total:{label:"",type:"final",amount:"0.01"}}),Z(Q,"session",void 0),Z(Q,"client",void 0),Z(Q,"validateMerchantUrl",void 0),Z(Q,"processPaymentUrl",void 0),Z(Q,"orderForm",void 0);var $=n("1avo"),X=window.PluginManager;X.register("PayonePaymentCreditCard",h,"[data-is-payone-credit-card]"),X.register("PayonePaymentDebitCard",C,"[data-is-payone-debit-card]"),X.register("PayonePaymentPayolutionInvoicing",D,"[data-is-payone-payolution-invoicing]"),X.register("PayonePaymentPayolutionInstallment",U,"[data-is-payone-payolution-installment]"),X.register("PayonePaymentApplePay",Q,"[data-payone-payment-apple-pay-options]"),X.register("PayonePaymentRatepayInstallment",$.a,"[data-is-payone-ratepay-installment]")}},[["rZg5","runtime","vendor-node","vendor-shared"]]]);