import{a as p,p as z,q as D,t as R,_ as F,v as M}from"./index.c4ac14b0.js";function U(){if(console&&console.warn){for(var n,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];typeof t[0]=="string"&&(t[0]="react-i18next:: ".concat(t[0])),(n=console).warn.apply(n,t)}}var T={};function I(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];typeof e[0]=="string"&&T[e[0]]||(typeof e[0]=="string"&&(T[e[0]]=new Date),U.apply(void 0,e))}function L(n,e,t){n.loadNamespaces(e,function(){if(n.isInitialized)t();else{var a=function o(){setTimeout(function(){n.off("initialized",o)},0),t()};n.on("initialized",a)}})}function B(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.languages[0],o=e.options?e.options.fallbackLng:!1,u=e.languages[e.languages.length-1];if(a.toLowerCase()==="cimode")return!0;var r=function(c,l){var m=e.services.backendConnector.state["".concat(c,"|").concat(l)];return m===-1||m===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,n)?!1:!!(e.hasResourceBundle(a,n)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||r(a,n)&&(!o||r(u,n)))}function H(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!e.languages||!e.languages.length)return I("i18n.languages were undefined or empty",e.languages),!0;var a=e.options.ignoreJSONStructure!==void 0;return a?e.hasLoadedNamespace(n,{precheck:function(u,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&u.services.backendConnector.backend&&u.isLanguageChangingTo&&!r(u.isLanguageChangingTo,n))return!1}}):B(n,e,t)}function J(n){if(Array.isArray(n))return n}function W(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var a=[],o=!0,u=!1,r,d;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(a.push(r.value),!(e&&a.length===e));o=!0);}catch(c){u=!0,d=c}finally{try{!o&&t.return!=null&&t.return()}finally{if(u)throw d}}return a}}function _(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}function q(n,e){if(!!n){if(typeof n=="string")return _(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(n,e)}}function K(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(n,e){return J(n)||W(n,e)||q(n,e)||K()}function E(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,a)}return t}function x(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?E(Object(t),!0).forEach(function(a){F(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}var $=function(e,t){var a=p.exports.useRef();return p.exports.useEffect(function(){a.current=t?a.current:e},[e,t]),a.current};function Q(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.i18n,a=p.exports.useContext(z)||{},o=a.i18n,u=a.defaultNS,r=t||o||M();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new D),!r){I("You will need to pass in an i18next instance by using initReactI18next");var d=function(f){return Array.isArray(f)?f[f.length-1]:f},c=[d,{},!1];return c.t=d,c.i18n={},c.ready=!1,c}r.options.react&&r.options.react.wait!==void 0&&I("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=x(x(x({},R()),r.options.react),e),m=l.useSuspense,N=l.keyPrefix,i=n||u||r.options&&r.options.defaultNS;i=typeof i=="string"?[i]:i||["translation"],r.reportNamespaces.addUsedNamespaces&&r.reportNamespaces.addUsedNamespaces(i);var g=(r.isInitialized||r.initializedStoreOnce)&&i.every(function(s){return H(s,r,l)});function y(){return r.getFixedT(null,l.nsMode==="fallback"?i:i[0],N)}var k=p.exports.useState(y),P=Y(k,2),C=P[0],h=P[1],O=i.join(),j=$(O),v=p.exports.useRef(!0);p.exports.useEffect(function(){var s=l.bindI18n,f=l.bindI18nStore;v.current=!0,!g&&!m&&L(r,i,function(){v.current&&h(y)}),g&&j&&j!==O&&v.current&&h(y);function w(){v.current&&h(y)}return s&&r&&r.on(s,w),f&&r&&r.store.on(f,w),function(){v.current=!1,s&&r&&s.split(" ").forEach(function(S){return r.off(S,w)}),f&&r&&f.split(" ").forEach(function(S){return r.store.off(S,w)})}},[r,O]);var A=p.exports.useRef(!0);p.exports.useEffect(function(){v.current&&!A.current&&h(y),A.current=!1},[r,N]);var b=[C,r,g];if(b.t=C,b.i18n=r,b.ready=g,g||!g&&!m)return b;throw new Promise(function(s){L(r,i,function(){s()})})}export{U as a,Q as u,I as w};