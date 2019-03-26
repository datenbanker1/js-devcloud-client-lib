var LIB=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=27)}([function(t,e,n){"use strict";var o=n(3),r=n(9),s=Object.prototype.toString;function a(t){return"[object Array]"===s.call(t)}function i(t){return null!==t&&"object"==typeof t}function c(t){return"[object Function]"===s.call(t)}function u(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),a(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.call(null,t[r],r,t)}t.exports={isArray:a,isArrayBuffer:function(t){return"[object ArrayBuffer]"===s.call(t)},isBuffer:r,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:i,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===s.call(t)},isFile:function(t){return"[object File]"===s.call(t)},isBlob:function(t){return"[object Blob]"===s.call(t)},isFunction:c,isStream:function(t){return i(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function t(){var e={};function n(n,o){"object"==typeof e[o]&&"object"==typeof n?e[o]=t(e[o],n):e[o]=n}for(var o=0,r=arguments.length;o<r;o++)u(arguments[o],n);return e},extend:function(t,e,n){return u(e,function(e,r){t[r]=n&&"function"==typeof e?o(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,e,n){"use strict";(function(e){var o=n(0),r=n(12),s={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var i,c={adapter:("undefined"!=typeof XMLHttpRequest?i=n(4):void 0!==e&&(i=n(4)),i),transformRequest:[function(t,e){return r(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){c.headers[t]={}}),o.forEach(["post","put","patch"],function(t){c.headers[t]=o.merge(s)}),t.exports=c}).call(this,n(11))},function(t,e,n){t.exports=n(8)},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return t.apply(e,n)}}},function(t,e,n){"use strict";var o=n(0),r=n(13),s=n(15),a=n(16),i=n(17),c=n(5),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(18);t.exports=function(t){return new Promise(function(e,l){var d=t.data,f=t.headers;o.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||i(t.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),t.auth){var w=t.auth.username||"",g=t.auth.password||"";f.Authorization="Basic "+u(w+":"+g)}if(p.open(t.method.toUpperCase(),s(t.url,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,o={data:t.responseType&&"text"!==t.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:t,request:p};r(e,l,o),p=null}},p.onerror=function(){l(c("Network Error",t,null,p)),p=null},p.ontimeout=function(){l(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",p)),p=null},o.isStandardBrowserEnv()){var y=n(19),T=(t.withCredentials||i(t.url))&&t.xsrfCookieName?y.read(t.xsrfCookieName):void 0;T&&(f[t.xsrfHeaderName]=T)}if("setRequestHeader"in p&&o.forEach(f,function(t,e){void 0===d&&"content-type"===e.toLowerCase()?delete f[e]:p.setRequestHeader(e,t)}),t.withCredentials&&(p.withCredentials=!0),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),l(t),p=null)}),void 0===d&&(d=null),p.send(d)})}},function(t,e,n){"use strict";var o=n(14);t.exports=function(t,e,n,r,s){var a=new Error(t);return o(a,e,n,r,s)}},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";function o(t){this.message=t}o.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},o.prototype.__CANCEL__=!0,t.exports=o},function(t,e,n){"use strict";var o=n(0),r=n(3),s=n(10),a=n(1);function i(t){var e=new s(t),n=r(s.prototype.request,e);return o.extend(n,s.prototype,e),o.extend(n,e),n}var c=i(a);c.Axios=s,c.create=function(t){return i(o.merge(a,t))},c.Cancel=n(7),c.CancelToken=n(25),c.isCancel=n(6),c.all=function(t){return Promise.all(t)},c.spread=n(26),t.exports=c,t.exports.default=c},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},function(t,e,n){"use strict";var o=n(1),r=n(0),s=n(20),a=n(21);function i(t){this.defaults=t,this.interceptors={request:new s,response:new s}}i.prototype.request=function(t){"string"==typeof t&&(t=r.merge({url:arguments[0]},arguments[1])),(t=r.merge(o,{method:"get"},this.defaults,t)).method=t.method.toLowerCase();var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},r.forEach(["delete","get","head","options"],function(t){i.prototype[t]=function(e,n){return this.request(r.merge(n||{},{method:t,url:e}))}}),r.forEach(["post","put","patch"],function(t){i.prototype[t]=function(e,n,o){return this.request(r.merge(o||{},{method:t,url:e,data:n}))}}),t.exports=i},function(t,e){var n,o,r=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(t){o=a}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var t=i(f);l=!0;for(var e=u.length;e;){for(c=u,u=[];++d<e;)c&&c[d].run();d=-1,e=u.length}c=null,l=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new h(t,e)),1!==u.length||l||i(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(t,e,n){"use strict";var o=n(0);t.exports=function(t,e){o.forEach(t,function(n,o){o!==e&&o.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[o])})}},function(t,e,n){"use strict";var o=n(5);t.exports=function(t,e,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(o("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},function(t,e,n){"use strict";t.exports=function(t,e,n,o,r){return t.config=e,n&&(t.code=n),t.request=o,t.response=r,t}},function(t,e,n){"use strict";var o=n(0);function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(o.isURLSearchParams(e))s=e.toString();else{var a=[];o.forEach(e,function(t,e){null!=t&&(o.isArray(t)?e+="[]":t=[t],o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),a.push(r(e)+"="+r(t))}))}),s=a.join("&")}return s&&(t+=(-1===t.indexOf("?")?"?":"&")+s),t}},function(t,e,n){"use strict";var o=n(0),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,s,a={};return t?(o.forEach(t.split("\n"),function(t){if(s=t.indexOf(":"),e=o.trim(t.substr(0,s)).toLowerCase(),n=o.trim(t.substr(s+1)),e){if(a[e]&&r.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}}),a):a}},function(t,e,n){"use strict";var o=n(0);t.exports=o.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(t){var o=t;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=r(window.location.href),function(e){var n=o.isString(e)?r(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},function(t,e,n){"use strict";var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function r(){this.message="String contains an invalid character"}r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,s=String(t),a="",i=0,c=o;s.charAt(0|i)||(c="=",i%1);a+=c.charAt(63&e>>8-i%1*8)){if((n=s.charCodeAt(i+=.75))>255)throw new r;e=e<<8|n}return a}},function(t,e,n){"use strict";var o=n(0);t.exports=o.isStandardBrowserEnv()?{write:function(t,e,n,r,s,a){var i=[];i.push(t+"="+encodeURIComponent(e)),o.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),o.isString(r)&&i.push("path="+r),o.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,n){"use strict";var o=n(0);function r(){this.handlers=[]}r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";var o=n(0),r=n(22),s=n(6),a=n(1),i=n(23),c=n(24);function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return u(t),t.baseURL&&!i(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=r(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return u(t),e.data=r(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(u(t),e&&e.response&&(e.response.data=r(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";var o=n(0);t.exports=function(t,e,n){return o.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";var o=n(7);function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){"use strict";n.r(e);var o={access:{address:"https://access.datenbanker.at"},authentication:{address:"https://authentication.datenbanker.at"},customer:{address:"https://customer.datenbanker.at"},art:{address:"https://art.datenbanker.at"}};function r(t,e,n=""){this.name="serverError",this.code=t,this.errors=e,this.message=n}function s(){this.code="unknownError",this.errors=[],this.name="unknownConnectionError"}var a=n(2),i=n.n(a);class c{constructor(t,e=!1){this.useAppToken=e,this.refreshConfig(t)}refreshConfig(t){this._config=k.getConfig();const{accessToken:e,app:n}=this._config.tokens;this.useAppToken?this._authorization=n:this._authorization=e||n,this._api=t,this.reconnected=!1}async call(t){t.data||(t.data={});const e={method:t.method,url:this._api+t.function,headers:{Authorization:"Bearer "+this._authorization,accept:"application/json","Content-Type":"application/json"},data:t.data,json:!0};let n;try{n=await i()(e)}catch(e){if(e.response){const n=e.response;if(403===n.status&&"accessTokenExpired"===n.data.code&&!1===this.reconnected){try{await this.reconnect(),this.reconnected=!0}catch(t){k.on("notAuthorized")}return this.refreshConfig(this._api),this.call(t)}throw 403===n.status&&k.on("notAuthorized"),n?new r(n.data.code,n.data.errors,n.data.message):(console.log(e),new s)}throw e}return n.data}async reconnect(){const{tokens:t}=k.getConfig(),e=(new u).getPool(),n={method:"POST",url:"https://authentication.datenbanker.at/token/refresh",headers:{Authorization:"Bearer "+t.app,accept:"application/json","Content-Type":"application/json"},data:{pool:e,token:t.refreshToken}};let o;return o=await i()(n),k.setTokens(o.data),o.data}}class u{constructor(t={}){this.user={pool:l(t.user)}}async login(t,e){const n=new c(o.authentication.address,!0),r=await n.call({method:"POST",function:"/login",data:{username:t,password:e,pool:this.user.pool}});return r.accessToken&&r.idToken&&r.refreshToken&&k.setTokens({...r}),r}logout(){k.setTokens(!1)}async challenge(t,e){const n=new c(o.authentication.address),r=await n.call({method:"POST",function:"/challenge",data:{session:e,challenges:t}});return r.accessToken&&r.idToken&&r.refreshToken&&k.setTokens({...r}),r}async resetPassword(t){return new c(o.authentication.address).call({method:"POST",function:"/password/reset",data:{email:t,pool:this.user.pool}})}async resetAccount(t){return new c(o.authentication.address).call({method:"POST",function:"/account/reset",data:{email:t,pool:this.user.pool}})}getPool(){return this.user.pool}}const l=(t={})=>{if(t.pool)return t.pool;const{authentication:e}=k.getConfig().services;return e.user&&e.user.pool&&1===e.user.pool.length?e.user.pool[0]:void 0};function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class f{constructor(){d(this,"pool",{my:async()=>{const t=new c(o.art.address);return await t.call({method:"GET",function:"/pool/my"})},get:async t=>{const e=new c(o.art.address);return await e.call({method:"POST",function:"/pool",data:{id:t}})},getByUser:async t=>{const e=new c(o.art.address);return await e.call({method:"POST",function:"/users/pools",data:{id:t}})},all:async()=>{const t=new c(o.art.address);return await t.call({method:"GET",function:"/pool/all"})},add:async t=>{console.log({...t});const e=new c(o.art.address);return await e.call({method:"POST",function:"/pool/add",data:{...t}})},delete:async t=>{const e=new c(o.art.address);return await e.call({method:"POST",function:"/pool/delete",data:{id:t}})},user:{add:async(t,e)=>{const n=new c(o.art.address);return await n.call({method:"POST",function:"/pool/user/add",data:{pool:e,user:t}})},delete:async(t,e)=>{const n=new c(o.art.address);return await n.call({method:"POST",function:"/pool/user/delete",data:{pool:e,user:t}})}},art:{add:async(t,e)=>{const n=new c(o.art.address);return await n.call({method:"POST",function:"/pool/art/add",data:{pool:e,art:t}})},delete:async(t,e)=>{const n=new c(o.art.address);return await n.call({method:"POST",function:"/pool/art/delete",data:{pool:e,art:t}})}}}),d(this,"artist",{get:async t=>{const e=new c(o.art.address);return await e.call({method:"POST",function:"/artist",data:{id:t}})},getByPerson:async t=>{const e=new c(o.art.address);return await e.call({method:"POST",function:"/artist",data:{person:t}})},all:async()=>{const t=new c(o.art.address);return await t.call({method:"GET",function:"/artist/all"})},add:async t=>{const e=new c(o.art.address);return await e.call({method:"POST",function:"/artist/add",data:{...t}})},update:async t=>{return new c(o.art.address).call({method:"POST",function:"/artist/update",data:{...t}})},delete:async t=>{const e=new c(o.art.address);return await e.call({method:"POST",function:"/artist/delete",data:{id:t}})}}),d(this,"art",{all:async t=>{const e=new c(o.art.address);return await e.call({method:"POST",function:"/art/all",data:{pool:t}})}}),this.config={}}}function p(t){this.message=t,this.name="PoolException"}function h(t){this.message=t,this.name="IdException"}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class w{constructor(t={}){return m(this,"person",{getAll:async(t=!1)=>{!1===t&&(t=this.config.person.pool);const e=new c(o.customer.address);return await e.call({method:"POST",function:"/person/all",data:{pool:t}})},getAllUsersForUserPool:async(t,e=!1,n=!1)=>{!1===n&&(n=this.config.person.pool),!1===e&&(e=this.config.user.pool);const r=new c(o.authentication.address);return await r.call({method:"POST",function:"/user/get",data:{pool:e,person:{id:t,pool:n}}})},get:async(t,e=!1)=>{!1===e&&(e=this.config.person.pool);const n=new c(o.customer.address);return await n.call({method:"POST",function:"/person/get",data:{id:t,pool:e}})},add:async(t,e=!1)=>{!1===e&&(e=this.config.person.pool);const n=new c(o.customer.address);return await n.call({method:"POST",function:"/person/add",data:{pool:e,...t}})},update:async(t,e=!1,n=!1)=>{if(!1===n&&(n=this.config.person.pool),!e)throw new h("Please set an id in Person.update()");const r=new c(o.customer.address);return await r.call({method:"POST",function:"/person/update",data:{id:e,pool:n,...t}})},history:async(t=!1,e=!1,n,r=10)=>{if(!1===e&&(e=this.config.person.pool),!t)throw new h("Please set an id in Person.history()");const s=new c(o.customer.address);return await s.call({method:"POST",function:"/person/history",data:{id:t,pool:e,position:n||"eyJlbnRyeSI6MH0=",amount:r}})},delete:async(t,e=!1)=>{!1===e&&(e=this.config.person.pool);const n=new c(o.customer.address);return await n.call({method:"POST",function:"/person/delete",data:{pool:e,id:t}})},getAllTaskClocks:async(t=!1,e=!1)=>{if(!1===e&&(e=this.config.task.pool),!t)throw new h("Please set an id in Person.getAllTaskClocks()");const n=new c(o.customer.address);return await n.call({method:"POST",function:"/person/task/timeclock/all",data:{id:t,pool:e}})}}),m(this,"opportunity",{getAll:async(t=!1)=>{!1===t&&(t=this.config.opportunity.pool);const e=new c(o.customer.address);return await e.call({method:"POST",function:"/opportunity/all",data:{pool:t}})},get:async(t,e=!1)=>{if(!1===e&&(e=this.config.opportunity.pool),!t)throw new h("Please set an id in Opportunity.get()");const n=new c(o.customer.address);return await n.call({method:"POST",function:"/opportunity/get",data:{id:t,pool:e}})},add:async(t,e=!1)=>{!1===e&&(e=this.config.opportunity.pool);const n=new c(o.customer.address);return await n.call({method:"POST",function:"/opportunity/add",data:{pool:e,...t}})},update:async(t,e,n=!1)=>{if(!1===n&&(n=this.config.opportunity.pool),!e)throw new h("Please set an id in Opportunity.update()");t.persons&&t.persons.map(t=>(t.pool||(t.pool=this.config.person.pool),t));const r=new c(o.customer.address);return await r.call({method:"POST",function:"/opportunity/update",data:{id:e,pool:n,...t}})},delete:async(t,e=!1)=>{if(!1===e&&(e=this.config.opportunity.pool),!t)throw new h("Please set an id for Person.delete()");const n=new c(o.customer.address);return await n.call({method:"POST",function:"/opportunity/delete",data:{id:t,pool:e}})},getPool:async(t=!1)=>{if(!1===t&&(t=this.config.opportunity.pool),!t)throw new h("Please set an id in Opportunity.getPool()");const e=new c(o.customer.address);return await e.call({method:"POST",function:"/opportunity/pool/get",data:{id:t}})}}),m(this,"task",{timeClock:{add:async(t,e,n=[],r=!1)=>{!1===r&&(r=this.config.task.pool);const s=new c(o.customer.address);return await s.call({method:"POST",function:"/task/timeclock/add",data:{pool:r,start:t,end:e,pauses:n}})}}}),this.config={person:{pool:g(t.person)},opportunity:{pool:y(t.opportunity)},task:{pool:T(t.task)},user:{pool:v(t.user)}},{person:this.person,opportunity:this.opportunity,task:this.task}}}const g=(t={})=>{if(t.pool)return t.pool;const{customer:e}=k.getConfig().services;if(e.person&&e.person.pool&&1===e.person.pool.length)return e.person.pool[0];throw new p("Person pool could not be identified!")},y=(t={})=>{if(t.pool)return t.pool;const{customer:e}=k.getConfig().services;if(e.opportunity&&e.opportunity.pool&&1===e.opportunity.pool.length)return e.opportunity.pool[0];throw new p("Opportunity pool could not be identified!")},T=(t={})=>{if(t.pool)return t.pool;const{customer:e}=k.getConfig().services;if(e.task&&e.task.pool&&1===e.task.pool.length)return e.task.pool[0];throw new p("Task pool could not be identified!")},v=(t={})=>{if(t.pool)return t.pool;const{authentication:e}=k.getConfig().services;if(e.user&&e.user.pool&&1===e.user.pool.length)return e.user.pool[0];throw new p("Authentication pool could not be identified!")};var k=new class{init(t){if(!t.apiToken)throw function(t){this.message=t,this.name="apiTokenNotSet"}("Please set an apiToken");let e={tokens:{app:t.apiToken,accessToken:!1,refreshToken:!1,idToken:!1},signedIn:!1,services:t.services||{},handler:t.handler||{},handlerList:["tokenChange","notAuthorized"]};this.config=e}changeAppToken(t){this.config.tokens.app=t}registerHandler(t){this.config.handler={...this.config.handler,...t}}on(t,e={}){this.config.handler[t]&&this.config.handler[t](e)}setTokens(t){!1===t&&(t={accessToken:!1,refreshToken:!1,idToken:!1}),this.on("tokenChange",t),this.config.tokens={...this.config.tokens,...t},this.config.signedIn=!!t.accessToken}getIdToken(){return this.config.tokens.idToken}getConfig(){return this.config}};n.d(e,"Authentication",function(){return u}),n.d(e,"Art",function(){return f}),n.d(e,"Customer",function(){return w}),n.d(e,"DevCloud",function(){return k}),n.d(e,"Connector",function(){return c})}]);export const Authentication=LIB.Authentication;export const Art=LIB.Art;export const Customer=LIB.Customer;export const DevCloud=LIB.DevCloud;export const Connector=LIB.Connector;