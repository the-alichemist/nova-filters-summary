(()=>{var e={408:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".filters-summary-card h3 span{position:relative;top:1px}.filters-summary-card .remove-filter{height:22px;width:22px}.filters-summary-card .fsc-filter em{opacity:.25}",""]);const i=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var f=l(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:u,updater:h(d,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,f=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function m(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,p=0;function h(e,t){var n,r,o;if(t.singleton){var i=p++;n=v||(v=s(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=l(n[r]);a[o].references--}for(var i=c(e,t),s=0;s<n.length;s++){var u=l(n[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},789:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}},744:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});const r=Vue;var o={key:0,class:"filters-summary-card"},i={class:"flex align-items-center mb-3 font-normal"},a=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 20 20",class:"fill-current"},[(0,r.createElementVNode)("path",{"fill-rule":"nonzero",d:"M.293 5.707A1 1 0 0 1 0 4.999V1A1 1 0 0 1 1 0h18a1 1 0 0 1 1 1v4a1 1 0 0 1-.293.707L13 12.413v2.585a1 1 0 0 1-.293.708l-4 4c-.63.629-1.707.183-1.707-.708v-6.585L.293 5.707zM2 2v2.585l6.707 6.707a1 1 0 0 1 .293.707v4.585l2-2V12a1 1 0 0 1 .293-.707L18 4.585V2H2z"})],-1),l={class:"ml-2"},c={class:"flex flex-wrap"},s={key:0,class:"p-1"},u={class:"text-sm font-bold mb-1"},f=["innerHTML"],d={class:"pl-2"},m=["innerHTML"],v={class:"ml-2"},p=["onClick"];function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}const y={props:{card:{},resourceName:{type:String,required:!0}},data:function(){return{activeFilters:[]}},methods:{watchForFilterChanges:function(){var e=this;this.$watch((function(){return e.$store.getters["".concat(e.resourceName,"/filters")]}),this.getActiveFilters,{deep:!0})},getActiveFilters:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$store.getters["".concat(this.resourceName,"/filters")];this.activeFilters=_.cloneDeep(t).filter((function(e){if("boolean-filter"===e.component){if("object"===h(e.currentValue))for(var t in e.currentValue)if(e.currentValue.hasOwnProperty(t)&&e.currentValue[t])return!0;return!1}return!!e.currentValue})).map((function(t){if(Nova.filtersSummaryResolvers[t.component])t.summary=Nova.filtersSummaryResolvers[t.component](t);else if("select-filter"===t.component){var n;t.summary=null===(n=t.options.find((function(n){return e.nin(n.value)===e.nin(t.currentValue)})))||void 0===n?void 0:n.name}else if("boolean-filter"===t.component){var r=[],o=[];for(var i in t.options.map((function(t){return o[e.nin(t.value)]=t.name})),t.currentValue)t.currentValue[i]&&r.push(o[i]);t.summary=r.length?r.join(", "):"<em>none</em>"}else t.summary=t.currentValue||"N/A";return t}))},nin:function(e){return isNaN(e)?e:Number(e)},del:function(e){var t=this,n="";"boolean-filter"===e.component&&(Object.keys(e.currentValue).map((function(t){e.currentValue[t]=!1})),n=e.currentValue),this.$store.commit("".concat(this.resourceName,"/updateFilterState"),{filterClass:e.class,value:n}),this.$nextTick((function(){t.activeFilters.filter((function(t){return t.class!==e.class})).map((function(e){return{class:e.class,value:e.currentValue}}))}))},getCurrentValue:function(e){return _.find(e.options,(function(t){return"number"==typeof t.value?t.value.toString()===e.currentValue:t.value===e.currentValue})).label}},created:function(){this.getActiveFilters(),this.watchForFilterChanges()},updated:function(){if(this.$el.classList&&this.$el.classList.contains("min-h-40"))return this.$el.classList.remove("min-h-40")}};var g=n(379),b=n.n(g),V=n(408),N={insert:"head",singleton:!1};b()(V.Z,N);V.Z.locals;const w=(0,n(789).Z)(y,[["render",function(e,t,n,h,y,g){return y.activeFilters.length?((0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("h3",i,[a,(0,r.createElementVNode)("span",l,(0,r.toDisplayString)(y.activeFilters.length)+" "+(0,r.toDisplayString)(n.card.labels.active)+" "+(0,r.toDisplayString)(1===y.activeFilters.length?n.card.labels.filter:n.card.labels.filters),1)]),(0,r.createElementVNode)("div",c,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(y.activeFilters,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:(0,r.normalizeClass)(["fsc-filter flex bg-white shadow px-1 py-1 mr-2 mb-2",n.card.stacked?"rounded":"rounded-full align-items-center"]),key:e},[n.card.stacked?((0,r.openBlock)(),(0,r.createElementBlock)("div",s,[(0,r.createElementVNode)("div",u,(0,r.toDisplayString)(e.name),1),(0,r.createElementVNode)("div",{innerHTML:g.getCurrentValue(e)},null,8,f)])):((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,{key:1},[(0,r.createElementVNode)("div",d,(0,r.toDisplayString)(e.name)+":",1),(0,r.createElementVNode)("div",{class:"ml-2 font-bold",innerHTML:g.getCurrentValue(e)},null,8,m)],64)),(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["remove-filter flex align-items-center justify-center font-bold bg-40 cursor-pointer hover:text-white hover:bg-90",n.card.stacked?"rounded":"rounded-full"]),onClick:function(t){return g.del(e)}}," × ",10,p)])],2)})),128))])])):(0,r.createCommentVNode)("",!0)}]])}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),Nova.filtersSummaryResolvers={},Nova.booting((function(e,t,r){e.component("nova-filters-summary",n(744).Z)}))})();