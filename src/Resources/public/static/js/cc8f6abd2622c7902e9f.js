(window["webpackJsonpPluginpayone-payment"]=window["webpackJsonpPluginpayone-payment"]||[]).push([[711],{638:function(){},711:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}}),n(721);var r={template:'{% block payone_payment_plugin_icon %}\n    <img class="payone-payment-plugin-icon" :src="assetFilter(\'payonepayment/plugin.png\')">\n{% endblock %}\n',computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}}},721:function(e,t,n){var r=n(638);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),n(346).Z("de53dba0",r,!0,{})},346:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},a=0;a<t.length;a++){var s=t[a],o=s[0],i={id:e+":"+a,css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(i):n.push(r[o]={id:o,parts:[i]})}return n}n.d(t,{Z:function(){return h}});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},o=a&&(document.head||document.getElementsByTagName("head")[0]),i=null,u=0,d=!1,l=function(){},p=null,c="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,a){d=n,p=a||{};var o=r(e,t);return v(o),function(t){for(var n=[],a=0;a<o.length;a++){var i=s[o[a].id];i.refs--,n.push(i)}t?v(o=r(e,t)):o=[];for(var a=0;a<n.length;a++){var i=n[a];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete s[i.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(m(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(m(n.parts[a]));s[n.id]={id:n.id,refs:1,parts:o}}}}function g(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+c+'~="'+e.id+'"]');if(r){if(d)return l;r.parentNode.removeChild(r)}if(f){var a=u++;t=b.bind(null,r=i||(i=g()),a,!1),n=b.bind(null,r,a,!0)}else t=C.bind(null,r=g()),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap)&&t(e=r):n()}}var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var s=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function C(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),p.ssrId&&e.setAttribute(c,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);
//# sourceMappingURL=cc8f6abd2622c7902e9f.js.map