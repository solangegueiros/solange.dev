(self.webpackChunksolange_dev=self.webpackChunksolange_dev||[]).push([[701],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3884:function(e){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(i){c=!0,a=i}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}},e.exports.__esModule=!0,e.exports.default=e.exports},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},3038:function(e,t,n){var r=n(2858),a=n(3884),o=n(379),l=n(521);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},8893:function(e,t,n){"use strict";n.d(t,{$:function(){return d}});var r=n(3038),a=n.n(r),o=n(9713),l=n.n(o),c=n(7294),i=n(6502);function u(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var s={};function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&s[t[0]]||("string"==typeof t[0]&&(s[t[0]]=new Date),u.apply(void 0,t))}function p(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return f("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],a=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var l=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!l(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!l(r,e)||a&&!l(o,e))))}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,c.useContext)(i.OO)||{},o=r.i18n,l=r.defaultNS,u=n||o||(0,i.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new i.zv),!u){f("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},y=[s,{},!1];return y.t=s,y.i18n={},y.ready=!1,y}u.options.react&&void 0!==u.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var d=g(g(g({},(0,i.JP)()),u.options.react),t),h=d.useSuspense,E=d.keyPrefix,v=e||l||u.options&&u.options.defaultNS;v="string"==typeof v?[v]:v||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(v);var k=(u.isInitialized||u.initializedStoreOnce)&&v.every((function(e){return m(e,u,d)}));function b(){return u.getFixedT(null,"fallback"===d.nsMode?v:v[0],E)}var x=(0,c.useState)(b),w=a()(x,2),O=w[0],N=w[1],F=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=d.bindI18n,t=d.bindI18nStore;function n(){F.current&&N(b)}return F.current=!0,k||h||p(u,v,(function(){F.current&&N(b)})),e&&u&&u.on(e,n),t&&u&&u.store.on(t,n),function(){F.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,n)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,n)}))}}),[u,v.join()]);var P=(0,c.useRef)(!0);(0,c.useEffect)((function(){F.current&&!P.current&&N(b),P.current=!1}),[u]);var j=[O,u,k];if(j.t=O,j.i18n=u,j.ready=k,k)return j;if(!k&&!h)return j;throw new Promise((function(e){p(u,v,(function(){e()}))}))}},2724:function(e,t,n){"use strict";n.d(t,{RD:function(){return r.R},Ow:function(){return m},UE:function(){return s},Ec:function(){return p},ql:function(){return i.q}});var r=n(6752);function a(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var o=n(7294),l=n(5444),c=n(3346),i=n(6410),u=["to","language"],s=function(e){var t=e.to,n=e.language,r=a(e,u),s=(0,i.q)(),f=s.defaultLang,p=s.prefixDefault,m=s.locale,y=n||m;return o.createElement(l.rU,Object.assign({},r,{to:(0,c.localizedPath)({defaultLang:f,prefixDefault:p,locale:y,path:t})}))},f=["href","children"];function p(e){var t=e.href,n=e.children,r=a(e,f);return/^#/.test(t)||!/^\/(?!\/)/.test(t)||function(e){return/\..+$/.test(e)}(t)?o.createElement("a",Object.assign({},r,{href:t}),n):o.createElement(s,Object.assign({},r,{to:t}),n)}n(9694);var m=function(){var e=(0,i.q)().config;return o.createElement("ul",null,e.map((function(e){return o.createElement("li",{key:e.code},e.localName," (",e.name,")")})))}},1941:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(7294),a=n(2724),o=n(8893),l=n(6795),c=n(8204),i=n.n(c),u=n(1585),s=n.n(u),f=n(135),p=n.n(f),m=(p(),s(),i(),function(e){var t=e.pageContext,n=(0,o.$)().t,c=(0,a.ql)().config;return r.createElement("p",null,n("language"),":",r.createElement("nav",null,r.createElement("ul",{className:l.FV},c.map((function(e){return r.createElement("li",{key:e.code,className:l.up},r.createElement(a.UE,{to:t.originalPath,language:e.code,className:l.cP},e.localName))})))))}),y=n(5444),g=(a.Ec,function(e){var t=e.pageTitle,n=e.children,o=e.pageContext,c=(0,y.K2)("3159585216");return r.createElement("div",null,r.createElement("title",null,t," | ",c.site.siteMetadata.title),r.createElement("header",{className:l.y7},r.createElement(a.UE,{to:"/"},c.site.siteMetadata.title)),r.createElement("nav",null,r.createElement("ul",{className:l.FV},r.createElement("li",{className:l.up},r.createElement(a.UE,{to:"/events",className:l.cP},"Events")),r.createElement("li",{className:l.up},r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ethereum.solange.dev/",className:l.cP},"Ethereum")),r.createElement("li",{className:l.up},r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://academy.rsk.dev.br/",className:l.cP},"RSK Academy")),r.createElement("li",{className:l.up},r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rsk.solange.dev/",className:l.cP},"RSK")),r.createElement("li",{className:l.up},r.createElement(a.UE,{to:"/about",className:l.cP},"About")))),r.createElement(m,{pageContext:o}),r.createElement("main",null,r.createElement("div",{className:l.nC},r.createElement("h1",{className:l.nP},t),n)))})},6795:function(e,t,n){"use strict";n.d(t,{nC:function(){return r},nP:function(){return a},FV:function(){return o},up:function(){return l},cP:function(){return c},y7:function(){return i}});var r="layout-module--container--018xq",a="layout-module--heading--qeRa0",o="layout-module--nav-links--XbiRf",l="layout-module--nav-link-item--oDZCV",c="layout-module--nav-link-text--15j7n",i="layout-module--site-title--25jQ-"},8204:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("rect",{y:"0",fill:"#6DA544",width:"512",height:"341.3",key:0}),r.createElement("polygon",{fill:"#FFDA44",points:"256,19.3 461.4,170.7 256,322 50.6,170.7 \t",key:1}),r.createElement("circle",{fill:"#FFFFFF",cx:"256",cy:"170.7",r:"86.5",key:2}),r.createElement("g",{key:3},[r.createElement("path",{fill:"#0052B4",d:"M212.8,165.3c-15,0-29.5,2.3-43.2,6.5c0.6,47.2,39.1,85.3,86.4,85.3c29.3,0,55.2-14.6,70.8-36.9\r\n\t\tC300.1,186.8,258.9,165.3,212.8,165.3z",key:0}),r.createElement("path",{fill:"#0052B4",d:"M340.9,187.2c1-5.4,1.6-10.9,1.6-16.6c0-47.8-38.7-86.5-86.5-86.5c-35.6,0-66.2,21.6-79.5,52.3\r\n\t\tc11.7-2.4,23.8-3.7,36.2-3.7C263,132.8,308.4,153.7,340.9,187.2z",key:1})])])}a.defaultProps={version:"1.1",viewBox:"0 0 512 341.3"},e.exports=a,a.default=a},1585:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("rect",{y:"85.331",fill:"#FFDA44",width:"512",height:"341.337",key:0}),r.createElement("g",{key:1},[r.createElement("rect",{y:"85.331",fill:"#D80027",width:"512",height:"113.775",key:0}),r.createElement("rect",{y:"312.882",fill:"#D80027",width:"512",height:"113.775",key:1})])])}a.defaultProps={viewBox:"0 85.333 512 341.333"},e.exports=a,a.default=a},135:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("rect",{y:"0",fill:"#FFFFFF",width:"513",height:"342",key:0}),r.createElement("g",{fill:"#D80027",key:1},[r.createElement("rect",{y:"0",width:"513",height:"38",key:0}),r.createElement("rect",{y:"76",width:"513",height:"38",key:1}),r.createElement("rect",{y:"152",width:"513",height:"38",key:2}),r.createElement("rect",{y:"228",width:"513",height:"38",key:3}),r.createElement("rect",{y:"304",width:"513",height:"38",key:4})]),r.createElement("rect",{y:"0",fill:"#2E52B2",width:"256.5",height:"190",key:2}),r.createElement("g",{fill:"#FFFFFF",key:3},[r.createElement("polygon",{points:"47.8,141.9 43.8,129.1 39.5,141.9 26.3,141.9 37,149.6 33,162.4 43.8,154.5 54.5,162.4 50.3,149.6\r\n\t\t61.2,141.9 \t",key:0}),r.createElement("polygon",{points:"104.2,141.9 100.1,129.1 95.9,141.9 82.7,141.9 93.4,149.6 89.3,162.4 100.1,154.5 110.8,162.4\r\n\t\t106.8,149.6 117.6,141.9 \t",key:1}),r.createElement("polygon",{points:"160.6,141.9 156.4,129.1 152.4,141.9 138.9,141.9 149.8,149.6 145.6,162.4 156.4,154.5 167.3,162.4\r\n\t\t163.1,149.6 173.9,141.9 \t",key:2}),r.createElement("polygon",{points:"216.9,141.9 212.8,129.1 208.6,141.9 195.4,141.9 206.1,149.6 202.1,162.4 212.8,154.5 223.6,162.4\r\n\t\t219.4,149.6 230.3,141.9 \t",key:3}),r.createElement("polygon",{points:"100.1,78.3 95.9,91.1 82.7,91.1 93.4,99 89.3,111.6 100.1,103.8 110.8,111.6 106.8,99 117.6,91.1\r\n\t\t104.2,91.1 \t",key:4}),r.createElement("polygon",{points:"43.8,78.3 39.5,91.1 26.3,91.1 37,99 33,111.6 43.8,103.8 54.5,111.6 50.3,99 61.2,91.1 47.8,91.1\r\n\t\t",key:5}),r.createElement("polygon",{points:"156.4,78.3 152.4,91.1 138.9,91.1 149.8,99 145.6,111.6 156.4,103.8 167.3,111.6 163.1,99 173.9,91.1\r\n\t\t160.6,91.1 \t",key:6}),r.createElement("polygon",{points:"212.8,78.3 208.6,91.1 195.4,91.1 206.1,99 202.1,111.6 212.8,103.8 223.6,111.6 219.4,99 230.3,91.1\r\n\t\t216.9,91.1 \t",key:7}),r.createElement("polygon",{points:"43.8,27.7 39.5,40.3 26.3,40.3 37,48.2 33,60.9 43.8,53 54.5,60.9 50.3,48.2 61.2,40.3 47.8,40.3 \t",key:8}),r.createElement("polygon",{points:"100.1,27.7 95.9,40.3 82.7,40.3 93.4,48.2 89.3,60.9 100.1,53 110.8,60.9 106.8,48.2 117.6,40.3\r\n\t\t104.2,40.3 \t",key:9}),r.createElement("polygon",{points:"156.4,27.7 152.4,40.3 138.9,40.3 149.8,48.2 145.6,60.9 156.4,53 167.3,60.9 163.1,48.2 173.9,40.3\r\n\t\t160.6,40.3 \t",key:10}),r.createElement("polygon",{points:"212.8,27.7 208.6,40.3 195.4,40.3 206.1,48.2 202.1,60.9 212.8,53 223.6,60.9 219.4,48.2 230.3,40.3\r\n\t\t216.9,40.3 \t",key:11})])])}a.defaultProps={version:"1.1",viewBox:"0 0 513 342"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=59c4921130161c71378c7b4f6c1b7f6308c26aea-4de47ecc713047465b3a.js.map