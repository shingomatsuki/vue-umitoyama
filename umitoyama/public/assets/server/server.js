module.exports=function(t){var e={},n={0:0};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(e){if(0!==n[e]){var r=require("./"+{1:"f50f90fcb25820416b9b",2:"21c23e3a71fe0d61a74e",3:"5858e56428406491c96b",4:"c565ce038b6f49aa78d2",5:"06c995e11b7b8037c64c"}[e]+".js"),o=r.modules,c=r.ids;for(var l in o)t[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},r.p="/assets/",r.oe=function(t){process.nextTick(function(){throw t})},r(r.s=13)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function r(t,e,n,r,o,c,l,d){var h,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),c&&(f._scopeId="data-v-"+c),l?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},f._ssrRegister=h):o&&(h=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),h)if(f.functional){f._injectStyles=h;var m=f.render;f.render=function(t,e){return h.call(e),m(t,e)}}else{var x=f.beforeCreate;f.beforeCreate=x?[].concat(x,h):[h]}return{exports:t,options:f}}n.d(e,"a",function(){return r})},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports=require("vue-no-ssr")},function(t,e){t.exports=require("vue-client-only")},function(t,e){t.exports=require("vue-router")},function(t,e){t.exports=require("vuex")},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e){t.exports=require("markdown-it")},function(t,e,n){t.exports=n(18)},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},function(t,e,n){"use strict";n.r(e),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o});const r=()=>({count:0}),o={add(t){t.count+=1}}},function(t,e,n){"use strict";n.r(e);var r=n(9),o=n(0),c=n.n(o),l=n(10),d=n.n(l);var h={};function f(t){return t.then(t=>t.default||t)}function m(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function x(t,e=!1){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).map(r=>(e&&e.push(n),t.components[r]))))}function y(t,e){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).reduce((r,o)=>(t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r),[])))}(t,async(t,n,r,o)=>("function"!=typeof t||t.options||(t=await t()),r.components[o]=t=m(t),"function"==typeof e?e(t,n,r,o):t)))}async function v(t){if(t)return await y(t),{...t,meta:x(t).map((e,n)=>({...e.options.meta,...(t.matched[n]||{}).meta}))}}async function w(t,e){t.context||(t.context={isStatic:!1,isDev:!1,isHMR:!1,app:t,store:t.store,payload:e.payload,error:e.error,base:"/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,n)=>{if(!e)return;t.context._redirected=!0;let r=typeof path;"number"==typeof e||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=e),e=302),"object"===r&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:n,status:e}):(path=function(t,e){let n;const r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));let o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&([path,o]=c);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+n}).filter(Boolean).join("&")}(e));return l+=o?"#"+o:""}(path,n),t.context.next({path:path,status:e}))},t.context.beforeNuxtRender=t=>e.beforeRenderFns.push(t));const[n,r]=await Promise.all([v(e.route),v(e.from)]);e.route&&(t.context.route=n),e.from&&(t.context.from=r),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=Boolean(e.isHMR),t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function _(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():C(t[0],e).then(()=>_(t.slice(1),e))}function C(t,e){let n;return(n=2===t.length?new Promise(n=>{t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function $(t,e){return function(t){const e=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){let path="";const data=n||{},o=(r||{}).pretty?k:encodeURIComponent;for(let i=0;i<t.length;i++){const n=t[i];if("string"==typeof n){path+=n;continue}const r=data[n.name||"pathMatch"];let c;if(null==r){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(r)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let t=0;t<r.length;t++){if(c=o(r[t]),!e[i].test(c))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(c)+"`");path+=(0===t?n.prefix:n.delimiter)+c}}else{if(c=n.asterisk?encodeURI(r).replace(/[?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase()):o(r),!e[i].test(c))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+c+'"');path+=n.prefix+c}}return path}}(function(t,e){const n=[];let r=0,o=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=j.exec(t));){const e=l[0],d=l[1],h=l.index;if(path+=t.slice(o,h),o=h+e.length,d){path+=d[1];continue}const f=t[o],m=l[2],x=l[3],y=l[4],v=l[5],w=l[6],_=l[7];path&&(n.push(path),path="");const C=null!=m&&null!=f&&f!==m,$="+"===w||"*"===w,j="?"===w||"*"===w,k=l[2]||c,pattern=y||v;n.push({name:x||r++,prefix:m||"",delimiter:k,optional:j,repeat:$,partial:C,asterisk:Boolean(_),pattern:pattern?T(pattern):_?".*":"[^"+S(k)+"]+?"})}o<t.length&&(path+=t.substr(o));path&&n.push(path);return n}(t,e))}const j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function k(t){return encodeURI(t).replace(/[\/?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function S(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$\/()])/g,"\\$1")}var O=n(11),E=n.n(O),N=n(6),P=n.n(N),A=n(5),R=n.n(A),M=n(7),D=n.n(M);c.a.use(D.a);const L={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){let r=!1;const o=x(t);o.length<2&&o.every(t=>!1!==t.options.scrollToTop)?r={x:0,y:0}:o.some(t=>t.options.scrollToTop)&&(r={x:0,y:0}),n&&(r=n);const c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick(()=>c.$emit("triggerScroll")),new Promise(e=>{c.$once("triggerScroll",()=>{if(t.hash){let e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(r={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})},routes:[{path:"/access",component:()=>f(n.e(1).then(n.bind(null,31))),name:"access"},{path:"/menu",component:()=>f(n.e(3).then(n.bind(null,34))),name:"menu"},{path:"/news",component:()=>f(n.e(4).then(n.bind(null,32))),name:"news"},{path:"/recipe",component:()=>f(n.e(5).then(n.bind(null,33))),name:"recipe"},{path:"/",component:()=>f(n.e(2).then(n.bind(null,35))),name:"index"}],fallback:!1};var I={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:n}){data.nuxtChild=!0;const r=e,o=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition;let l=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&l++,e=e.$parent;data.nuxtChildDepth=l;const d=o[l]||c,h={};B.forEach(t=>{void 0!==d[t]&&(h[t]=d[t])});const f={};U.forEach(t=>{"function"==typeof d[t]&&(f[t]=d[t].bind(r))});const m=f.beforeEnter;if(f.beforeEnter=t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(r,t)},!1===d.css){const t=f.leave;f.leave=(e,n)=>{t&&t.call(r,e),r.$nextTick(n)}}let x=t("routerView",data);return n.keepAlive&&(x=t("keep-alive",{props:n.keepAliveProps},[x])),t("transition",{props:h,on:f},[x])}};const B=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],U=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var F={name:"NuxtError",props:{error:{type:Object,default:null}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}}},K=n(1);var H=Object(K.a)(F,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])},[],!1,function(t){var e=n(14);e.__inject__&&e.__inject__(t)},null,"ab544050").exports,V={name:"Nuxt",components:{NuxtChild:I,NuxtError:H},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||$(this.$route.matched[0].path)(this.$route.params);const[t]=this.$route.matched;if(!t)return this.$route.path;const e=t.components.default;if(e&&e.options){const{options:t}=e;if(t.key)return"function"==typeof t.key?t.key(this.$route):t.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},z={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var J=Object(K.a)(z,void 0,void 0,!1,function(t){var e=n(15);e.__inject__&&e.__inject__(t)},null,"3a9771e8").exports;const W={_default:Object(K.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)},[],!1,function(t){var e=n(16);e.__inject__&&e.__inject__(t)},null,"61d36ab2").exports};var X={head:{title:"umitoyama",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render(t,e){const n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error,this.context=this.$options.context},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},async refresh(){const t=function(t,e=!1){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.instances).map(r=>(e&&e.push(n),t.instances[r]))))}(this.$route);if(!t.length)return;this.$loading.start();const e=t.map(async t=>{const p=[];return t.$options.fetch&&p.push(C(t.$options.fetch,this.context)),t.$options.asyncData&&p.push(C(t.$options.asyncData,this.context).then(e=>{for(const n in e)c.a.set(t.$data,n,e[n])})),Promise.all(p)});try{await Promise.all(e)}catch(t){this.$loading.fail(),function(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}(t),this.error(t)}this.$loading.finish()},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&W["_"+t]||(t="default"),this.layoutName=t,this.layout=W["_"+t],this.layout},loadLayout:t=>(t&&W["_"+t]||(t="default"),Promise.resolve(W["_"+t]))},components:{NuxtLoading:J}},G=n(8),Q=n.n(G);c.a.use(Q.a);const Y=["state","getters","actions","mutations"];let Z={};Z.modules=Z.modules||{},function(t,e){t=t.default||t;const n=e.replace(/\.(js|mjs)$/,"").split("/");let r=n[n.length-1];const o=`store/${e}`;if(t="state"===r?function(t,e){if("function"!=typeof t){console.warn(`${e} should export a method that returns an object`);const n=Object.assign({},t);return()=>n}return et(t,e)}(t,o):et(t,o),Y.includes(r)){const e=r;return void ot(nt(Z,n,{isProperty:!0}),t,e)}"index"===r&&(n.pop(),r=n[n.length-1]);const c=nt(Z,n);for(const e of Y)ot(c,t[e],e);!1===t.namespaced&&delete c.namespaced}(n(17),"counter.js");const tt=Z instanceof Function?Z:()=>new Q.a.Store(Object.assign({strict:!1},Z));function et(t,e){if(t.state&&"function"!=typeof t.state){console.warn(`'state' should be a method that returns an object in ${e}`);const n=Object.assign({},t.state);t=Object.assign({},t,{state:()=>n})}return t}function nt(t,e,{isProperty:n=!1}={}){if(!e.length||n&&1===e.length)return t;const r=e.shift();return t.modules[r]=t.modules[r]||{},t.modules[r].namespaced=!0,t.modules[r].modules=t.modules[r].modules||{},nt(t.modules[r],e,{isProperty:n})}function ot(t,e,n){e&&("state"===n?t.state=e||t.state:t[n]=Object.assign({},t[n],e))}var st=n(12),it=n.n(st),at=({app:t},e)=>{e("md",new it.a({breaks:!0,html:!0}))};c.a.component(P.a.name,P.a),c.a.component(R.a.name,{...R.a,render:(t,e)=>R.a.render(t,e)}),c.a.component(I.name,I),c.a.component("NChild",I),c.a.component(V.name,V),c.a.use(E.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const ct={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function ut(t){const e=await new D.a(L),n=tt(t);n.$router=e;const r=n.registerModule;n.registerModule=(path,t,e)=>r.call(n,path,t,Object.assign({preserveState:!1},e));const o={router:e,store:n,nuxt:{defaultTransition:ct,transitions:[ct],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},ct,{name:t}):Object.assign({},ct,t):ct),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,o.context._errored=Boolean(e),e=e?function(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}(e):null;const n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=e,t&&(t.nuxt.error=e),e}},...X};n.app=o;const l=t?t.next:t=>o.router.push(t);let d;if(t)d=e.resolve(t.url).route;else{const path=function(base,t){let path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(e.options.base);d=e.resolve(path).route}await w(o,{route:d,next:l,error:o.nuxt.error.bind(o),store:n,payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t});const h=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,n[t]=o[t];const r="__nuxt_"+t+"_installed__";c.a[r]||(c.a[r]=!0,c.a.use(()=>{c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get(){return this.$root.$options[t]}})}))};return"function"==typeof at&&await at(o.context,h),t&&t.url&&await new Promise((n,r)=>{e.push(t.url,n,()=>{const r=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,o.context.route=await v(e),o.context.params=e.params||{},o.context.query=e.query||{},r(),n()})})}),{app:o,store:n,router:e}}var lt={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}}};c.a.component(lt.name,lt),c.a.component("NLink",lt),global.fetch||(global.fetch=d.a);const pt=()=>new c.a({render:t=>t("div")}),ht=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(r.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=async t=>{t.redirected=!1,t.next=ht(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],error:null,state:null,serverRendered:!0};const{app:e,router:n,store:r}=await ut(t),o=new c.a(e);t.meta=o.$meta(),t.asyncData={};const l=async()=>{await Promise.all(t.beforeRenderFns.map(e=>C(e,{Components:y,nuxtState:t.nuxt}))),t.rendered=()=>{t.nuxt.state=r.state}},d=async()=>{const n="function"==typeof H.layout?H.layout(e.context):H.layout;return t.nuxt.layout=n||"default",await o.loadLayout(n),o.setLayout(n),await l(),o},f=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),d()),y=x(n.match(t.url));if(r._actions&&r._actions.nuxtServerInit)try{await r.dispatch("nuxtServerInit",e.context)}catch(t){throw console.debug("Error occurred when calling nuxtServerInit: ",t.message),t}if(t.redirected)return pt();if(t.nuxt.error)return d();let v=[];if(v=v.map(t=>"function"==typeof t?t:("function"!=typeof h[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),h[t])),await _(v,e.context),t.redirected)return pt();if(t.nuxt.error)return d();let w=y.length?y[0].options.layout:H.layout;if("function"==typeof w&&(w=w(e.context)),await o.loadLayout(w),t.nuxt.error)return d();if(w=o.setLayout(w),t.nuxt.layout=o.layoutName,v=[],(w=m(w)).options.middleware&&(v=v.concat(w.options.middleware)),y.forEach(t=>{t.options.middleware&&(v=v.concat(t.options.middleware))}),v=v.map(t=>"function"==typeof t?t:("function"!=typeof h[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),h[t])),await _(v,e.context),t.redirected)return pt();if(t.nuxt.error)return d();let $=!0;try{for(const t of y)if("function"==typeof t.options.validate&&!($=await t.options.validate(e.context)))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),d()}if(!$)return t._generate&&(t.nuxt.serverRendered=!1),f();if(!y.length)return f();const j=await Promise.all(y.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=C(n.options.asyncData,e.context);o.then(e=>(t.asyncData[n.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){const data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(n),e)),r.push(o)}else r.push(null);return n.options.fetch?r.push(n.options.fetch(e.context)):r.push(null),Promise.all(r)}));return t.nuxt.data=j.map(t=>t[0]||{}),t.redirected?pt():t.nuxt.error?d():(await l(),o)}}]);
//# sourceMappingURL=server.js.map