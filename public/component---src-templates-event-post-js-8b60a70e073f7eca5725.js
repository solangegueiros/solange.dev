(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"33yf":function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",a=!1,l=arguments.length-1;l>=-1&&!a;l--){var i=l>=0?arguments[l]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,a="/"===i.charAt(0))}return(a?"/":"")+(t=n(r(t.split("/"),(function(e){return!!e})),!a).join("/"))||"."},t.normalize=function(e){var l=t.isAbsolute(e),i="/"===a(e,-1);return(e=n(r(e.split("/"),(function(e){return!!e})),!l).join("/"))||l||(e="."),e&&i&&(e+="/"),(l?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var a=r(e.split("/")),l=r(n.split("/")),i=Math.min(a.length,l.length),o=i,c=0;c<i;c++)if(a[c]!==l[c]){o=c;break}var u=[];for(c=o;c<a.length;c++)u.push("..");return(u=u.concat(l.slice(o))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,a=!0,l=e.length-1;l>=1;--l)if(47===(t=e.charCodeAt(l))){if(!a){r=l;break}}else a=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=function(e){"string"!=typeof e&&(e+="");var t,n=0,r=-1,a=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!a){n=t+1;break}}else-1===r&&(a=!1,r=t+1);return-1===r?"":e.slice(n,r)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,r=-1,a=!0,l=0,i=e.length-1;i>=0;--i){var o=e.charCodeAt(i);if(47!==o)-1===r&&(a=!1,r=i+1),46===o?-1===t?t=i:1!==l&&(l=1):-1!==t&&(l=-1);else if(!a){n=i+1;break}}return-1===t||-1===r||0===l||1===l&&t===r-1&&t===n+1?"":e.slice(t,r)};var a="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("8oxB"))},"5t3b":function(e,t,n){e.exports={header:"header-module--header--FApqg",headerMenu:"header-module--headerMenu--3Yqbs"}},"8oxB":function(e,t){var n,r,a=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===l||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:l}catch(e){n=l}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,u=[],s=!1,m=-1;function f(){s&&c&&(s=!1,c.length?u=c.concat(u):m=-1,u.length&&g())}function g(){if(!s){var e=o(f);s=!0;for(var t=u.length;t;){for(c=u,u=[];++m<t;)c&&c[m].run();m=-1,t=u.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||s||o(g)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),l=n("7ljp"),i=n("Frpm"),o=n("Wbzz"),c=n("dDsW"),u=n("5t3b"),s=n.n(u),m=n("l79G"),f=n.n(m),g=n("RHiG"),h=n.n(g),p=n("Ex7p"),d=n.n(p),E=function(e){var t=e.pageContext,n=Object(c.a)(),a=Object(o.useStaticQuery)("3000541721").site.siteMetadata.title;return r.createElement(r.Fragment,null,r.createElement("header",{className:s.a.header},r.createElement(i.a,{to:"/"},a)," | ",r.createElement(i.a,{to:"/events/"},n.formatMessage({id:"events"}))," | ",r.createElement(i.a,{to:"/blog/"},n.formatMessage({id:"blog"}))," | ",r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ethereum.solange.dev/"},"Ethereum")," | ",r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rsk.solange.dev/"},"RSK")," | ",r.createElement(i.a,{to:"/about/"},n.formatMessage({id:"about"})),r.createElement("ul",{className:s.a.headerMenu},r.createElement(i.a,{to:t.originalPath,language:"en"},r.createElement(d.a,{className:"CountryFlag"})),r.createElement(i.a,{to:t.originalPath,language:"es"},r.createElement(h.a,{className:"CountryFlag"})),r.createElement(i.a,{to:t.originalPath,language:"pt"},r.createElement(f.a,{className:"CountryFlag"})))))},y=function(){var e=Object(o.useStaticQuery)("440568431");return a.a.createElement(a.a.Fragment,null,a.a.createElement("footer",{style:{padding:"0.5rem 0",margin:"1rem auto",background:"#FFD700"}},a.a.createElement("p",{style:{textAlign:"center",margin:"1rem auto"}},"© 2017 - ",(new Date).getFullYear(),", ",e.site.siteMetadata.author)))},v=(n("wmEu"),{a:i.b});t.a=function(e){var t=e.children,n=e.pageContext;return r.createElement(r.Fragment,null,r.createElement(E,{pageContext:n}),r.createElement("main",{style:{margin:"1rem auto",maxWidth:800,padding:"0 1rem"}},r.createElement(l.MDXProvider,{components:v},t)),r.createElement(y,{pageContext:n}))}},Ex7p:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("rect",{y:"0",fill:"#FFFFFF",width:"513",height:"342",key:0}),r.createElement("g",{fill:"#D80027",key:1},[r.createElement("rect",{y:"0",width:"513",height:"38",key:0}),r.createElement("rect",{y:"76",width:"513",height:"38",key:1}),r.createElement("rect",{y:"152",width:"513",height:"38",key:2}),r.createElement("rect",{y:"228",width:"513",height:"38",key:3}),r.createElement("rect",{y:"304",width:"513",height:"38",key:4})]),r.createElement("rect",{y:"0",fill:"#2E52B2",width:"256.5",height:"190",key:2}),r.createElement("g",{fill:"#FFFFFF",key:3},[r.createElement("polygon",{points:"47.8,141.9 43.8,129.1 39.5,141.9 26.3,141.9 37,149.6 33,162.4 43.8,154.5 54.5,162.4 50.3,149.6\n\t\t61.2,141.9 \t",key:0}),r.createElement("polygon",{points:"104.2,141.9 100.1,129.1 95.9,141.9 82.7,141.9 93.4,149.6 89.3,162.4 100.1,154.5 110.8,162.4\n\t\t106.8,149.6 117.6,141.9 \t",key:1}),r.createElement("polygon",{points:"160.6,141.9 156.4,129.1 152.4,141.9 138.9,141.9 149.8,149.6 145.6,162.4 156.4,154.5 167.3,162.4\n\t\t163.1,149.6 173.9,141.9 \t",key:2}),r.createElement("polygon",{points:"216.9,141.9 212.8,129.1 208.6,141.9 195.4,141.9 206.1,149.6 202.1,162.4 212.8,154.5 223.6,162.4\n\t\t219.4,149.6 230.3,141.9 \t",key:3}),r.createElement("polygon",{points:"100.1,78.3 95.9,91.1 82.7,91.1 93.4,99 89.3,111.6 100.1,103.8 110.8,111.6 106.8,99 117.6,91.1\n\t\t104.2,91.1 \t",key:4}),r.createElement("polygon",{points:"43.8,78.3 39.5,91.1 26.3,91.1 37,99 33,111.6 43.8,103.8 54.5,111.6 50.3,99 61.2,91.1 47.8,91.1\n\t\t",key:5}),r.createElement("polygon",{points:"156.4,78.3 152.4,91.1 138.9,91.1 149.8,99 145.6,111.6 156.4,103.8 167.3,111.6 163.1,99 173.9,91.1\n\t\t160.6,91.1 \t",key:6}),r.createElement("polygon",{points:"212.8,78.3 208.6,91.1 195.4,91.1 206.1,99 202.1,111.6 212.8,103.8 223.6,111.6 219.4,99 230.3,91.1\n\t\t216.9,91.1 \t",key:7}),r.createElement("polygon",{points:"43.8,27.7 39.5,40.3 26.3,40.3 37,48.2 33,60.9 43.8,53 54.5,60.9 50.3,48.2 61.2,40.3 47.8,40.3 \t",key:8}),r.createElement("polygon",{points:"100.1,27.7 95.9,40.3 82.7,40.3 93.4,48.2 89.3,60.9 100.1,53 110.8,60.9 106.8,48.2 117.6,40.3\n\t\t104.2,40.3 \t",key:9}),r.createElement("polygon",{points:"156.4,27.7 152.4,40.3 138.9,40.3 149.8,48.2 145.6,60.9 156.4,53 167.3,60.9 163.1,48.2 173.9,40.3\n\t\t160.6,40.3 \t",key:10}),r.createElement("polygon",{points:"212.8,27.7 208.6,40.3 195.4,40.3 206.1,48.2 202.1,60.9 212.8,53 223.6,60.9 219.4,48.2 230.3,40.3\n\t\t216.9,40.3 \t",key:11})])])}a.defaultProps={version:"1.1",viewBox:"0 0 513 342"},e.exports=a,a.default=a},Frpm:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));n("eq4K");var r=n("zLVn"),a=n("q1tI"),l=n("Wbzz"),i=n("B+z7"),o=n("yAkg"),c=function(e){var t=e.to,n=e.language,c=Object(r.a)(e,["to","language"]),u=Object(o.a)(),s=u.defaultLang,m=u.prefixDefault,f=u.locale,g=n||f;return a.createElement(l.Link,Object.assign({},c,{to:Object(i.localizedPath)({defaultLang:s,prefixDefault:m,locale:g,path:t})}))};function u(e){var t=e.href,n=e.children,l=Object(r.a)(e,["href","children"]);return/^#/.test(t)||!/^\/(?!\/)/.test(t)||function(e){return/\..+$/.test(e)}(t)?a.createElement("a",Object.assign({},l,{href:t}),n):a.createElement(c,Object.assign({},l,{to:t}),n)}n("YwZP")},RHiG:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("rect",{y:"85.331",fill:"#FFDA44",width:"512",height:"341.337",key:0}),r.createElement("g",{key:1},[r.createElement("rect",{y:"85.331",fill:"#D80027",width:"512",height:"113.775",key:0}),r.createElement("rect",{y:"312.882",fill:"#D80027",width:"512",height:"113.775",key:1})])])}a.defaultProps={viewBox:"0 85.333 512 341.333"},e.exports=a,a.default=a},dDsW:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n("2OET"),l=n("N3fz");function i(){var e=r.useContext(a.a);return Object(l.c)(e),e}},l79G:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("rect",{y:"0",fill:"#6DA544",width:"512",height:"341.3",key:0}),r.createElement("polygon",{fill:"#FFDA44",points:"256,19.3 461.4,170.7 256,322 50.6,170.7 \t",key:1}),r.createElement("circle",{fill:"#FFFFFF",cx:"256",cy:"170.7",r:"86.5",key:2}),r.createElement("g",{key:3},[r.createElement("path",{fill:"#0052B4",d:"M212.8,165.3c-15,0-29.5,2.3-43.2,6.5c0.6,47.2,39.1,85.3,86.4,85.3c29.3,0,55.2-14.6,70.8-36.9\n\t\tC300.1,186.8,258.9,165.3,212.8,165.3z",key:0}),r.createElement("path",{fill:"#0052B4",d:"M340.9,187.2c1-5.4,1.6-10.9,1.6-16.6c0-47.8-38.7-86.5-86.5-86.5c-35.6,0-66.2,21.6-79.5,52.3\n\t\tc11.7-2.4,23.8-3.7,36.2-3.7C263,132.8,308.4,153.7,340.9,187.2z",key:1})])])}a.defaultProps={version:"1.1",viewBox:"0 0 512 341.3"},e.exports=a,a.default=a},mcr3:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("dDsW"),i=n("Bl7J"),o=n("vrFN"),c=function(e){var t=e.videoURL,n=e.videoTitle;return t.includes("www.youtube.com/",0)&&(t=t.replace("watch?v=","embed/")),a.a.createElement("div",{className:"responsive-video"},a.a.createElement("iframe",{src:t,title:n,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,loop:"1",rel:"0"}))};n("33yf"),t.default=function(e){var t=e.data,n=e.pageContext,r=Object(l.a)(),u=t.item,s=u.language,m=u.video?u.video.split("\n"):null,f=u.article?u.article.split("\n"):null,g=(u.slides&&u.slides.split("\n"),u.links?u.links.split("\n"):null);return a.a.createElement(i.a,{pageContext:n},u?a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{title:u.title||"Title"}),a.a.createElement("h1",null,u.title),a.a.createElement("p",null,u.type,", ",u.date,", ",u.local,", ",r.formatMessage({id:s})),u.organizer?a.a.createElement(a.a.Fragment,null," ",a.a.createElement("p",null,r.formatMessage({id:"organizer"})," ",u.organizer)," "):null,u.description?a.a.createElement(a.a.Fragment,null," ",a.a.createElement("p",null,u.description)," "):null,u.video?a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,r.formatMessage({id:"video"}),m.length>1?"s":""),m.map((function(e,t){return a.a.createElement(c,{videoURL:e,videoTitle:u.title})}))):"",f?a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,r.formatMessage({id:"article"}),f.length>1?"s":""),a.a.createElement("ul",null,f.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e))})))):"",g?a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,r.formatMessage({id:"links"})),a.a.createElement("ul",null,g.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e))})))):""):a.a.createElement("div",null,r.formatMessage({id:"not translated"})))}},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),l=n("qhky"),i=n("Wbzz");t.a=function(e){var t=e.description,n=e.title,r=e.children,o=Object(i.useStaticQuery)("63159454").site,c=t||o.siteMetadata.description;return a.a.createElement(l.a,{title:n,titleTemplate:"%s | "+o.siteMetadata.title},a.a.createElement("meta",{name:"description",content:c}),a.a.createElement("meta",{name:"og:title",content:n}),a.a.createElement("meta",{name:"og:description",content:c}),a.a.createElement("meta",{name:"og:type",content:"website"}),a.a.createElement("meta",{name:"twitter:card",content:"summary"}),a.a.createElement("meta",{name:"twitter:creator",content:o.siteMetadata.author}),a.a.createElement("meta",{name:"twitter:title",content:n}),a.a.createElement("meta",{name:"twitter:description",content:c}),r)}},wmEu:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-event-post-js-8b60a70e073f7eca5725.js.map