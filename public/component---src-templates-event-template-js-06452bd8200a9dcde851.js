(self.webpackChunksolange_dev=self.webpackChunksolange_dev||[]).push([[574],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3884:function(e){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}},e.exports.__esModule=!0,e.exports.default=e.exports},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},3038:function(e,t,n){var r=n(2858),a=n(3884),l=n(379),o=n(521);e.exports=function(e,t){return r(e)||a(e,t)||l(e,t)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},5019:function(e,t,n){"use strict";n.d(t,{$:function(){return v}});var r=n(3038),a=n.n(r),l=n(9713),o=n.n(l),i=n(7294),c=n(1322);function u(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var s={};function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&s[t[0]]||("string"==typeof t[0]&&(s[t[0]]=new Date),u.apply(void 0,t))}function m(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return f("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],a=!!t.options&&t.options.fallbackLng,l=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!o(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!o(r,e)||a&&!o(l,e))))}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,i.useContext)(c.OO)||{},l=r.i18n,o=r.defaultNS,u=n||l||(0,c.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new c.zv),!u){f("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[s,{},!1];return d.t=s,d.i18n={},d.ready=!1,d}u.options.react&&void 0!==u.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var v=g(g(g({},(0,c.JP)()),u.options.react),t),E=v.useSuspense,y=v.keyPrefix,h=e||o||u.options&&u.options.defaultNS;h="string"==typeof h?[h]:h||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(h);var b=(u.isInitialized||u.initializedStoreOnce)&&h.every((function(e){return p(e,u,v)}));function w(){return u.getFixedT(null,"fallback"===v.nsMode?h:h[0],y)}var x=(0,i.useState)(w),k=a()(x,2),O=k[0],N=k[1],j=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=v.bindI18n,t=v.bindI18nStore;function n(){j.current&&N(w)}return j.current=!0,b||E||m(u,h,(function(){j.current&&N(w)})),e&&u&&u.on(e,n),t&&u&&u.store.on(t,n),function(){j.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,n)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,n)}))}}),[u,h.join()]);var _=(0,i.useRef)(!0);(0,i.useEffect)((function(){j.current&&!_.current&&N(w),_.current=!1}),[u]);var C=[O,u,b];if(C.t=O,C.i18n=u,C.ready=b,b)return C;if(!b&&!E)return C;throw new Promise((function(e){m(u,h,(function(){e()}))}))}},2724:function(e,t,n){"use strict";n.d(t,{RD:function(){return r.R},Ow:function(){return p},UE:function(){return s},Ec:function(){return m},ql:function(){return c.q}});var r=n(6752);function a(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var l=n(7294),o=n(5444),i=n(3346),c=n(6410),u=["to","language"],s=function(e){var t=e.to,n=e.language,r=a(e,u),s=(0,c.q)(),f=s.defaultLang,m=s.prefixDefault,p=s.locale,d=n||p;return l.createElement(o.rU,Object.assign({},r,{to:(0,i.localizedPath)({defaultLang:f,prefixDefault:m,locale:d,path:t})}))},f=["href","children"];function m(e){var t=e.href,n=e.children,r=a(e,f);return/^#/.test(t)||!/^\/(?!\/)/.test(t)||function(e){return/\..+$/.test(e)}(t)?l.createElement("a",Object.assign({},r,{href:t}),n):l.createElement(s,Object.assign({},r,{to:t}),n)}n(9499);var p=function(){var e=(0,c.q)().config;return l.createElement("ul",null,e.map((function(e){return l.createElement("li",{key:e.code},e.localName," (",e.name,")")})))}},9004:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(2724),l="layout-module--nav-links--XbiRf",o="layout-module--nav-link-item--oDZCV",i="layout-module--nav-link-text--15j7n",c=function(e){var t=e.pageContext,n=(0,a.ql)().config;return r.createElement("nav",null,r.createElement("ul",{className:l},n.map((function(e){return r.createElement("li",{key:e.code,className:o},r.createElement(a.UE,{to:t.originalPath,language:e.code,className:i},e.localName))}))))},u=n(5444),s=(a.Ec,function(e){var t=e.pageTitle,n=e.children,s=e.pageContext,f=(0,u.K2)("3159585216");return r.createElement("div",null,r.createElement("title",null,t," | ",f.site.siteMetadata.title),r.createElement("header",{className:"layout-module--site-title--25jQ-"},r.createElement(a.UE,{to:"/"},f.site.siteMetadata.title)),r.createElement("nav",null,r.createElement("ul",{className:l},r.createElement("li",{className:o},r.createElement(a.UE,{to:"/events",className:i},"Events")),r.createElement("li",{className:o},r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ethereum.solange.dev/",className:i},"Ethereum")),r.createElement("li",{className:o},r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rsk.solange.dev/",className:i},"RSK")),r.createElement("li",{className:o},r.createElement(a.UE,{to:"/about",className:i},"About")))),r.createElement(c,{pageContext:s}),r.createElement("main",null,r.createElement("div",{className:"layout-module--container--018xq"},r.createElement("h1",{className:"layout-module--heading--qeRa0"},t),n)))})},6179:function(e,t,n){"use strict";var r=n(7294),a=n(5414),l=n(5444);t.Z=function(e){var t=e.description,n=e.title,o=e.children,i=(0,l.K2)("63159454").site,c=t||i.siteMetadata.description;return r.createElement(a.q,{title:n,titleTemplate:"%s | "+i.siteMetadata.title},r.createElement("meta",{name:"description",content:c}),r.createElement("meta",{name:"og:title",content:n}),r.createElement("meta",{name:"og:description",content:c}),r.createElement("meta",{name:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:i.siteMetadata.author}),r.createElement("meta",{name:"twitter:title",content:n}),r.createElement("meta",{name:"twitter:description",content:c}),o)}},6178:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),a=n(5444),l=n(5019),o=n(9004),i=n(6179),c=function(e){var t=e.videoURL,n=e.videoTitle;return t.includes("youtu.be/",0)&&(t=t.replace("youtu.be/","www.youtube.com/watch?v=")),t.includes("www.youtube.com/watch?v=",0)&&(t=t.replace("watch?v=","embed/")),r.createElement("div",{className:"responsive-video"},r.createElement("iframe",{src:t,title:n,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,loop:"1",rel:"0"}))},u=function(e){var t=e.data,n=e.pageContext,u=(0,l.$)().t,s=t.item,f=s&&s.title?s.title:u("notTranslated");console.log("TITLE:",f);var m=s&&s.video?s.video.split("\n"):null,p=(s&&s.slides&&s.slides.split("\n"),s&&s.article?s.article.split("\n"):null),d=s&&s.links?s.links.split("\n"):null;return console.log("\n"),r.createElement(o.Z,{pageContext:n,pageTitle:f},r.createElement(i.Z,{title:f}),r.createElement("div",null,s?r.createElement(r.Fragment,null,r.createElement("p",null,s.type,", ",s.date,", ",s.local,", ",u("language")),s.organizer?r.createElement(r.Fragment,null," ",r.createElement("p",null,u("organizer")," ",s.organizer)," "):null,s.description?r.createElement(r.Fragment,null," ",r.createElement("p",null,s.description)," "):null,s.video?r.createElement(r.Fragment,null,r.createElement("h3",null,u("video"),m.length>1?"s":""),m.map((function(e,t){return r.createElement(c,{videoURL:e,videoTitle:s.title})}))):"",p?r.createElement(r.Fragment,null,r.createElement("h3",null,u("article"),p.length>1?"s":""),r.createElement("ul",null,p.map((function(e,t){return r.createElement("li",{key:t},r.createElement(a.rU,{href:e,target:"_blank",rel:"noopener noreferrer"},e))})))):"",d?r.createElement(r.Fragment,null,r.createElement("h3",null,u("links")),r.createElement("ul",null,d.map((function(e,t){return r.createElement("li",{key:t},r.createElement(a.rU,{href:e,target:"_blank",rel:"noopener noreferrer"},e))})))):""):r.createElement("div",null,u("notTranslated"))))}}}]);
//# sourceMappingURL=component---src-templates-event-template-js-06452bd8200a9dcde851.js.map