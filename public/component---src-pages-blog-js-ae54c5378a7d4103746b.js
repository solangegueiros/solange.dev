(self.webpackChunksolange_dev=self.webpackChunksolange_dev||[]).push([[7],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3884:function(e){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(c){i=!0,a=c}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}},e.exports.__esModule=!0,e.exports.default=e.exports},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},3038:function(e,t,n){var r=n(2858),a=n(3884),o=n(379),l=n(521);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},5019:function(e,t,n){"use strict";n.d(t,{$:function(){return v}});var r=n(3038),a=n.n(r),o=n(9713),l=n.n(o),i=n(7294),c=n(1322);function u(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var s={};function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&s[t[0]]||("string"==typeof t[0]&&(s[t[0]]=new Date),u.apply(void 0,t))}function m(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return f("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],a=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var l=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!l(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!l(r,e)||a&&!l(o,e))))}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,i.useContext)(c.OO)||{},o=r.i18n,l=r.defaultNS,u=n||o||(0,c.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new c.zv),!u){f("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[s,{},!1];return d.t=s,d.i18n={},d.ready=!1,d}u.options.react&&void 0!==u.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var v=g(g(g({},(0,c.JP)()),u.options.react),t),E=v.useSuspense,y=v.keyPrefix,h=e||l||u.options&&u.options.defaultNS;h="string"==typeof h?[h]:h||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(h);var b=(u.isInitialized||u.initializedStoreOnce)&&h.every((function(e){return p(e,u,v)}));function x(){return u.getFixedT(null,"fallback"===v.nsMode?h:h[0],y)}var w=(0,i.useState)(x),O=a()(w,2),N=O[0],k=O[1],j=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=v.bindI18n,t=v.bindI18nStore;function n(){j.current&&k(x)}return j.current=!0,b||E||m(u,h,(function(){j.current&&k(x)})),e&&u&&u.on(e,n),t&&u&&u.store.on(t,n),function(){j.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,n)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,n)}))}}),[u,h.join()]);var C=(0,i.useRef)(!0);(0,i.useEffect)((function(){j.current&&!C.current&&k(x),C.current=!1}),[u]);var _=[N,u,b];if(_.t=N,_.i18n=u,_.ready=b,b)return _;if(!b&&!E)return _;throw new Promise((function(e){m(u,h,(function(){e()}))}))}},2724:function(e,t,n){"use strict";n.d(t,{RD:function(){return r.R},Ow:function(){return p},UE:function(){return s},Ec:function(){return m},ql:function(){return c.q}});var r=n(6752);function a(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var o=n(7294),l=n(5444),i=n(3346),c=n(6410),u=["to","language"],s=function(e){var t=e.to,n=e.language,r=a(e,u),s=(0,c.q)(),f=s.defaultLang,m=s.prefixDefault,p=s.locale,d=n||p;return o.createElement(l.rU,Object.assign({},r,{to:(0,i.localizedPath)({defaultLang:f,prefixDefault:m,locale:d,path:t})}))},f=["href","children"];function m(e){var t=e.href,n=e.children,r=a(e,f);return/^#/.test(t)||!/^\/(?!\/)/.test(t)||function(e){return/\..+$/.test(e)}(t)?o.createElement("a",Object.assign({},r,{href:t}),n):o.createElement(s,Object.assign({},r,{to:t}),n)}n(9499);var p=function(){var e=(0,c.q)().config;return o.createElement("ul",null,e.map((function(e){return o.createElement("li",{key:e.code},e.localName," (",e.name,")")})))}},9004:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(2724),o="layout-module--nav-links--XbiRf",l="layout-module--nav-link-item--oDZCV",i="layout-module--nav-link-text--15j7n",c=function(e){var t=e.pageContext,n=(0,a.ql)().config;return r.createElement("nav",null,r.createElement("ul",{className:o},n.map((function(e){return r.createElement("li",{key:e.code,className:l},r.createElement(a.UE,{to:t.originalPath,language:e.code,className:i},e.localName))}))))},u=n(5444),s=(a.Ec,function(e){var t=e.pageTitle,n=e.children,s=e.pageContext,f=(0,u.K2)("3159585216");return r.createElement("div",null,r.createElement("title",null,t," | ",f.site.siteMetadata.title),r.createElement("header",{className:"layout-module--site-title--25jQ-"},r.createElement(a.UE,{to:"/"},f.site.siteMetadata.title)),r.createElement("nav",null,r.createElement("ul",{className:o},r.createElement("li",{className:l},r.createElement(a.UE,{to:"/events",className:i},"Events")),r.createElement("li",{className:l},r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ethereum.solange.dev/",className:i},"Ethereum")),r.createElement("li",{className:l},r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rsk.solange.dev/",className:i},"RSK")),r.createElement("li",{className:l},r.createElement(a.UE,{to:"/about",className:i},"About")))),r.createElement(c,{pageContext:s}),r.createElement("main",null,r.createElement("div",{className:"layout-module--container--018xq"},r.createElement("h1",{className:"layout-module--heading--qeRa0"},t),n)))})},6179:function(e,t,n){"use strict";var r=n(7294),a=n(5414),o=n(5444);t.Z=function(e){var t=e.description,n=e.title,l=e.children,i=(0,o.K2)("63159454").site,c=t||i.siteMetadata.description;return r.createElement(a.q,{title:n,titleTemplate:"%s | "+i.siteMetadata.title},r.createElement("meta",{name:"description",content:c}),r.createElement("meta",{name:"og:title",content:n}),r.createElement("meta",{name:"og:description",content:c}),r.createElement("meta",{name:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:i.siteMetadata.author}),r.createElement("meta",{name:"twitter:title",content:n}),r.createElement("meta",{name:"twitter:description",content:c}),l)}},223:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(5019),o=n(2724),l=n(9004),i=n(6179);t.default=function(e){var t=e.data,n=e.pageContext,c=(0,a.$)("blog").t,u=t.blogList;return r.createElement(l.Z,{pageContext:n,pageTitle:c("blog")},r.createElement(i.Z,{title:c("blog")}),r.createElement("p",null,c("blog introduction")),r.createElement("p",null,"Total: ",u.totalCount),r.createElement("br",null),u.nodes.map((function(e){var t=e.childMdx;return r.createElement("article",{key:t.frontmatter.slug},r.createElement("h2",null,r.createElement(o.UE,{to:"/blog"+t.frontmatter.slug},t.frontmatter.title)),r.createElement("p",null,c("posted"),": ",t.frontmatter.date))})))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-ae54c5378a7d4103746b.js.map