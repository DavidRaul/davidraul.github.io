parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({UWhY:[function(require,module,exports){var n=[].slice.call(document.querySelectorAll("p.placeholder"));n.forEach(function(n){n.innerHTML=n.textContent.split(" ").filter(function(n){return n.length>4}).map(function(n){return'<span class="placeholder__word">'.concat(n,"</span>")}).join(" ")})},{}]},{},["UWhY"],null);parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({TvQq:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=Object.assign||function(e){for(var o,t=1;t<arguments.length;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e},o=function(e){return"IMG"===e.tagName},t=function(e){return NodeList.prototype.isPrototypeOf(e)},n=function(e){return e&&1===e.nodeType},i=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},r=function(e){try{return Array.isArray(e)?e.filter(o):t(e)?[].slice.call(e).filter(o):n(e)?[e].filter(o):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(o):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},d=function(e){var o=document.createElement("div");return o.classList.add("medium-zoom-overlay"),o.style.background=e,o},m=function(e){var o=e.getBoundingClientRect(),t=o.top,n=o.left,i=o.width,r=o.height,d=e.cloneNode(),m=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,a=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=t+m+"px",d.style.left=n+a+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d},a=function(o,t){var n=e({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(o,n);var i=document.createEvent("CustomEvent");return i.initCustomEvent(o,n.bubbles,n.cancelable,n.detail),i},c=window.Promise||function(e){function o(){}e(o,o)},l=function o(t){var l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},u=function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];var n=o.reduce(function(e,o){return[].concat(e,r(o))},[]);return n.filter(function(e){return-1===g.indexOf(e)}).forEach(function(e){g.push(e),e.classList.add("medium-zoom-image")}),v.forEach(function(e){var o=e.type,t=e.listener,i=e.options;n.forEach(function(e){e.addEventListener(o,t,i)})}),w},s=function(){var o=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target,t=function(){var o=Math.min,t={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},r=void 0,d=void 0;if(y.container)if(y.container instanceof Object)r=(t=e({},t,y.container)).width-t.left-t.right-2*y.margin,d=t.height-t.top-t.bottom-2*y.margin;else{var m=(n(y.container)?y.container:document.querySelector(y.container)).getBoundingClientRect(),a=m.width,c=m.height,l=m.left,u=m.top;t=e({},t,{width:a,height:c,left:l,top:u})}r=r||t.width-2*y.margin,d=d||t.height-2*y.margin;var s=b.zoomedHd||b.original,f=i(s)?r:s.naturalWidth||r,p=i(s)?d:s.naturalHeight||d,g=s.getBoundingClientRect(),v=g.top,h=g.left,z=g.width,E=g.height,w=o(f,r)/z,L=o(p,d)/E,H=o(w,L),C="scale("+H+") translate3d("+((r-z)/2-h+y.margin+t.left)/H+"px, "+((d-E)/2-v+y.margin+t.top)/H+"px, 0)";b.zoomed.style.transform=C,b.zoomedHd&&(b.zoomedHd.style.transform=C)};return new c(function(e){if(o&&-1===g.indexOf(o))e(w);else if(b.zoomed)e(w);else{if(o)b.original=o;else{if(!(0<g.length))return void e(w);var i=g;b.original=i[0]}if(b.original.dispatchEvent(a("medium-zoom:open",{detail:{zoom:w}})),z=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,h=!0,b.zoomed=m(b.original),document.body.appendChild(E),y.template){var r=n(y.template)?y.template:document.querySelector(y.template);b.template=document.createElement("div"),b.template.appendChild(r.content.cloneNode(!0)),document.body.appendChild(b.template)}if(document.body.appendChild(b.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),b.original.classList.add("medium-zoom-image--hidden"),b.zoomed.classList.add("medium-zoom-image--opened"),b.zoomed.addEventListener("click",f),b.zoomed.addEventListener("transitionend",function o(){h=!1,b.zoomed.removeEventListener("transitionend",o),b.original.dispatchEvent(a("medium-zoom:opened",{detail:{zoom:w}})),e(w)}),b.original.getAttribute("data-zoom-src")){b.zoomedHd=b.zoomed.cloneNode(),b.zoomedHd.removeAttribute("srcset"),b.zoomedHd.removeAttribute("sizes"),b.zoomedHd.src=b.zoomed.getAttribute("data-zoom-src"),b.zoomedHd.onerror=function(){clearInterval(d),console.warn("Unable to reach the zoom image target "+b.zoomedHd.src),b.zoomedHd=null,t()};var d=setInterval(function(){b.zoomedHd.complete&&(clearInterval(d),b.zoomedHd.classList.add("medium-zoom-image--opened"),b.zoomedHd.addEventListener("click",f),document.body.appendChild(b.zoomedHd),t())},10)}else if(b.original.hasAttribute("srcset")){b.zoomedHd=b.zoomed.cloneNode(),b.zoomedHd.removeAttribute("sizes");var c=b.zoomedHd.addEventListener("load",function(){b.zoomedHd.removeEventListener("load",c),b.zoomedHd.classList.add("medium-zoom-image--opened"),b.zoomedHd.addEventListener("click",f),document.body.appendChild(b.zoomedHd),t()})}else t()}})},f=function(){return new c(function(e){!h&&b.original?(h=!0,document.body.classList.remove("medium-zoom--opened"),b.zoomed.style.transform="",b.zoomedHd&&(b.zoomedHd.style.transform=""),b.template&&(b.template.style.transition="opacity 150ms",b.template.style.opacity=0),b.original.dispatchEvent(a("medium-zoom:close",{detail:{zoom:w}})),b.zoomed.addEventListener("transitionend",function o(){b.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(b.zoomed),b.zoomedHd&&document.body.removeChild(b.zoomedHd),document.body.removeChild(E),b.zoomed.classList.remove("medium-zoom-image--opened"),b.template&&document.body.removeChild(b.template),h=!1,b.zoomed.removeEventListener("transitionend",o),b.original.dispatchEvent(a("medium-zoom:closed",{detail:{zoom:w}})),b.original=null,b.zoomed=null,b.zoomedHd=null,b.template=null,e(w)})):e(w)})},p=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target;return b.original?f():s({target:e})},g=[],v=[],h=!1,z=0,y=l,b={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?y=t:(t||"string"==typeof t)&&u(t),y=e({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},y);var E=d(y.background);document.addEventListener("click",function(e){var o=e.target;return o===E?void f():void(-1===g.indexOf(o)||p({target:o}))}),document.addEventListener("keyup",function(e){27===(e.keyCode||e.which)&&f()}),document.addEventListener("scroll",function(){if(!h&&b.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(z-e)>y.scrollOffset&&setTimeout(f,150)}}),window.addEventListener("resize",f);var w={open:s,close:f,toggle:p,update:function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=o;if(o.background&&(E.style.background=o.background),o.container&&o.container instanceof Object&&(t.container=e({},y.container,o.container)),o.template){var i=n(o.template)?o.template:document.querySelector(o.template);t.template=i}return y=e({},y,t),g.forEach(function(e){e.dispatchEvent(a("medium-zoom:update",{detail:{zoom:w}}))}),w},clone:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return o(e({},y,t))},attach:u,detach:function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];b.zoomed&&f();var n=0<o.length?o.reduce(function(e,o){return[].concat(e,r(o))},[]):g;return n.forEach(function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(a("medium-zoom:detach",{detail:{zoom:w}}))}),g=g.filter(function(e){return-1===n.indexOf(e)}),w},on:function(e,o){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return g.forEach(function(n){n.addEventListener("medium-zoom:"+e,o,t)}),v.push({type:"medium-zoom:"+e,listener:o,options:t}),w},off:function(e,o){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return g.forEach(function(n){n.removeEventListener("medium-zoom:"+e,o,t)}),v=v.filter(function(t){return t.type!=="medium-zoom:"+e||t.listener.toString()!==o.toString()}),w},getOptions:function(){return y},getImages:function(){return g},getZoomedImage:function(){return b.original}};return w};function u(e,o){void 0===o&&(o={});var t=o.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var s=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";u(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");var f=l;exports.default=f},{}],H99C:[function(require,module,exports){"use strict";var e=t(require("medium-zoom"));function t(e){return e&&e.__esModule?e:{default:e}}var o=(0,e.default)("#zoom-default"),a=(0,e.default)("#zoom-margin",{margin:48}),n=(0,e.default)("#zoom-background",{background:"#212530"}),r=(0,e.default)("#zoom-scrollOffset",{scrollOffset:0,background:"rgba(25, 18, 25, .9)"}),c=(0,e.default)("#zoom-trigger"),u=document.querySelector("#button-trigger");u.addEventListener("click",function(){return c.open()});var i=(0,e.default)("#zoom-detach");i.on("closed",function(){return i.detach()});var l=[o,a,n,r,c,i],d=document.querySelector("#history");l.forEach(function(e){e.on("open",function(e){var t=(new Date).toLocaleTimeString();d.innerHTML+='<li>Image "<em>'.concat(e.target.alt,'</em>" was zoomed at ').concat(t,"</li>")}),e.on("detach",function(e){var t=(new Date).toLocaleTimeString();d.innerHTML+='<li>Image <em>"'.concat(e.target.alt,'"</em> was detached at ').concat(t,"</li>")})})},{"medium-zoom":"TvQq"}]},{},["H99C"],null);