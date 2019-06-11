var LIB=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=27)}([function(t,e,n){"use strict";var o=n(3),r=n(9),s=Object.prototype.toString;function i(t){return"[object Array]"===s.call(t)}function a(t){return null!==t&&"object"==typeof t}function c(t){return"[object Function]"===s.call(t)}function u(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),i(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.call(null,t[r],r,t)}t.exports={isArray:i,isArrayBuffer:function(t){return"[object ArrayBuffer]"===s.call(t)},isBuffer:r,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===s.call(t)},isFile:function(t){return"[object File]"===s.call(t)},isBlob:function(t){return"[object Blob]"===s.call(t)},isFunction:c,isStream:function(t){return a(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function t(){var e={};function n(n,o){"object"==typeof e[o]&&"object"==typeof n?e[o]=t(e[o],n):e[o]=n}for(var o=0,r=arguments.length;o<r;o++)u(arguments[o],n);return e},extend:function(t,e,n){return u(e,function(e,r){t[r]=n&&"function"==typeof e?o(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,e,n){"use strict";(function(e){var o=n(0),r=n(12),s={"Content-Type":"application/x-www-form-urlencoded"};function i(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a,c={adapter:("undefined"!=typeof XMLHttpRequest?a=n(4):void 0!==e&&(a=n(4)),a),transformRequest:[function(t,e){return r(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(i(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(i(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){c.headers[t]={}}),o.forEach(["post","put","patch"],function(t){c.headers[t]=o.merge(s)}),t.exports=c}).call(this,n(11))},function(t,e,n){t.exports=n(8)},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return t.apply(e,n)}}},function(t,e,n){"use strict";var o=n(0),r=n(13),s=n(15),i=n(16),a=n(17),c=n(5),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(18);t.exports=function(t){return new Promise(function(e,d){var l=t.data,p=t.headers;o.isFormData(l)&&delete p["Content-Type"];var f=new XMLHttpRequest,h="onreadystatechange",g=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in f||a(t.url)||(f=new window.XDomainRequest,h="onload",g=!0,f.onprogress=function(){},f.ontimeout=function(){}),t.auth){var m=t.auth.username||"",w=t.auth.password||"";p.Authorization="Basic "+u(m+":"+w)}if(f.open(t.method.toUpperCase(),s(t.url,t.params,t.paramsSerializer),!0),f.timeout=t.timeout,f[h]=function(){if(f&&(4===f.readyState||g)&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in f?i(f.getAllResponseHeaders()):null,o={data:t.responseType&&"text"!==t.responseType?f.response:f.responseText,status:1223===f.status?204:f.status,statusText:1223===f.status?"No Content":f.statusText,headers:n,config:t,request:f};r(e,d,o),f=null}},f.onerror=function(){d(c("Network Error",t,null,f)),f=null},f.ontimeout=function(){d(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",f)),f=null},o.isStandardBrowserEnv()){var y=n(19),T=(t.withCredentials||a(t.url))&&t.xsrfCookieName?y.read(t.xsrfCookieName):void 0;T&&(p[t.xsrfHeaderName]=T)}if("setRequestHeader"in f&&o.forEach(p,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete p[e]:f.setRequestHeader(e,t)}),t.withCredentials&&(f.withCredentials=!0),t.responseType)try{f.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&f.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){f&&(f.abort(),d(t),f=null)}),void 0===l&&(l=null),f.send(l)})}},function(t,e,n){"use strict";var o=n(14);t.exports=function(t,e,n,r,s){var i=new Error(t);return o(i,e,n,r,s)}},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";function o(t){this.message=t}o.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},o.prototype.__CANCEL__=!0,t.exports=o},function(t,e,n){"use strict";var o=n(0),r=n(3),s=n(10),i=n(1);function a(t){var e=new s(t),n=r(s.prototype.request,e);return o.extend(n,s.prototype,e),o.extend(n,e),n}var c=a(i);c.Axios=s,c.create=function(t){return a(o.merge(i,t))},c.Cancel=n(7),c.CancelToken=n(25),c.isCancel=n(6),c.all=function(t){return Promise.all(t)},c.spread=n(26),t.exports=c,t.exports.default=c},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},function(t,e,n){"use strict";var o=n(1),r=n(0),s=n(20),i=n(21);function a(t){this.defaults=t,this.interceptors={request:new s,response:new s}}a.prototype.request=function(t){"string"==typeof t&&(t=r.merge({url:arguments[0]},arguments[1])),(t=r.merge(o,{method:"get"},this.defaults,t)).method=t.method.toLowerCase();var e=[i,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},r.forEach(["delete","get","head","options"],function(t){a.prototype[t]=function(e,n){return this.request(r.merge(n||{},{method:t,url:e}))}}),r.forEach(["post","put","patch"],function(t){a.prototype[t]=function(e,n,o){return this.request(r.merge(o||{},{method:t,url:e,data:n}))}}),t.exports=a},function(t,e){var n,o,r=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{o="function"==typeof clearTimeout?clearTimeout:i}catch(t){o=i}}();var c,u=[],d=!1,l=-1;function p(){d&&c&&(d=!1,c.length?u=c.concat(u):l=-1,u.length&&f())}function f(){if(!d){var t=a(p);d=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,d=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===i||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function g(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new h(t,e)),1!==u.length||d||a(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(t,e,n){"use strict";var o=n(0);t.exports=function(t,e){o.forEach(t,function(n,o){o!==e&&o.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[o])})}},function(t,e,n){"use strict";var o=n(5);t.exports=function(t,e,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(o("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},function(t,e,n){"use strict";t.exports=function(t,e,n,o,r){return t.config=e,n&&(t.code=n),t.request=o,t.response=r,t}},function(t,e,n){"use strict";var o=n(0);function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(o.isURLSearchParams(e))s=e.toString();else{var i=[];o.forEach(e,function(t,e){null!=t&&(o.isArray(t)?e+="[]":t=[t],o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),i.push(r(e)+"="+r(t))}))}),s=i.join("&")}return s&&(t+=(-1===t.indexOf("?")?"?":"&")+s),t}},function(t,e,n){"use strict";var o=n(0),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,s,i={};return t?(o.forEach(t.split("\n"),function(t){if(s=t.indexOf(":"),e=o.trim(t.substr(0,s)).toLowerCase(),n=o.trim(t.substr(s+1)),e){if(i[e]&&r.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([n]):i[e]?i[e]+", "+n:n}}),i):i}},function(t,e,n){"use strict";var o=n(0);t.exports=o.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(t){var o=t;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=r(window.location.href),function(e){var n=o.isString(e)?r(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},function(t,e,n){"use strict";var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function r(){this.message="String contains an invalid character"}r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,s=String(t),i="",a=0,c=o;s.charAt(0|a)||(c="=",a%1);i+=c.charAt(63&e>>8-a%1*8)){if((n=s.charCodeAt(a+=.75))>255)throw new r;e=e<<8|n}return i}},function(t,e,n){"use strict";var o=n(0);t.exports=o.isStandardBrowserEnv()?{write:function(t,e,n,r,s,i){var a=[];a.push(t+"="+encodeURIComponent(e)),o.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),o.isString(r)&&a.push("path="+r),o.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,n){"use strict";var o=n(0);function r(){this.handlers=[]}r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";var o=n(0),r=n(22),s=n(6),i=n(1),a=n(23),c=n(24);function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return u(t),t.baseURL&&!a(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=r(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||i.adapter)(t).then(function(e){return u(t),e.data=r(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(u(t),e&&e.response&&(e.response.data=r(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";var o=n(0);t.exports=function(t,e,n){return o.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";var o=n(7);function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){"use strict";function o(t,e,n=""){this.name="serverError",this.code=t,this.errors=e,this.message=n}function r(){this.code="unknownError",this.errors=[],this.name="unknownConnectionError"}n.r(e);var s=n(2),i=n.n(s);class a{constructor(t,e=!1){this.useAppToken=e,this.refreshConfig(t)}refreshConfig(t){this._config=k.getConfig();const{accessToken:e,app:n}=this._config.tokens;this.useAppToken?this._authorization=n:this._authorization=e||n,this._api=t,this.reconnected=!1}async call(t){t.data||(t.data={});const e={method:t.method,url:this._api+t.function,headers:{Authorization:"Bearer "+this._authorization,accept:"application/json","Content-Type":"application/json"},data:t.data,json:!0};let n;try{n=await i()(e)}catch(e){if(e.response){const n=e.response;if(403===n.status&&"accessTokenExpired"===n.data.code&&!1===this.reconnected){try{await this.reconnect(),this.reconnected=!0}catch(t){k.on("notAuthorized")}return this.refreshConfig(this._api),this.call(t)}throw 403===n.status&&"userNotAllowed"===n.data.code?k.on("userNotAllowed"):403===n.status&&k.on("notAuthorized"),n?new o(n.data.code,n.data.errors,n.data.message):(console.log(e),new r)}throw e}return n.data}async reconnect(){const{tokens:t}=k.getConfig();console.log("START_RECONNECT");const e=(new c).getPool(),n={method:"POST",url:"https://authentication.datenbanker.at/token/refresh",headers:{Authorization:"Bearer "+t.app,accept:"application/json","Content-Type":"application/json"},data:{pool:e,token:t.refreshToken}};let o;try{o=await i()(n),k.setTokens(o.data)}catch(t){console.log("REFRESH ERROR",t,n)}return o.data}}class c{constructor(t={}){var e,n,o;o={add:async(t,e,n=[],o,r=!1)=>{const s=new a(k.getEndPoints().authentication.address);!1===r&&(r=this.config.user.pool);let i={username:t,groups:n,pool:r};return e&&(i.email=e),o&&(i.person=o),s.call({method:"POST",function:"/user/add",data:i})},update:async(t,e,n=!1)=>{const o=new a(k.getEndPoints().authentication.address);return!1===n&&(n=this.config.user.pool),o.call({method:"POST",function:"/user/update",data:{...t,id:e,pool:n}})},getAllPublic:async(t=!1)=>{const e=new a(k.getEndPoints().authentication.address);return!1===t&&(t=this.config.user.pool),e.call({method:"GET",function:`/user/pool/${t}/public`})}},(n="user")in(e=this)?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,this.config={user:{pool:u(t.user)}}}async login(t,e){const n=new a(k.getEndPoints().authentication.address,!0),o=await n.call({method:"POST",function:"/login",data:{username:t,password:e,pool:this.config.user.pool}});return o.accessToken&&o.idToken&&o.refreshToken&&k.setTokens({...o}),o}logout(){k.setTokens(!1)}async challenge(t,e){const n=new a(k.getEndPoints().authentication.address),o=await n.call({method:"POST",function:"/challenge",data:{session:e,challenges:t}});return o.accessToken&&o.idToken&&o.refreshToken&&k.setTokens({...o}),o}async resetPassword(t){return new a(k.getEndPoints().authentication.address).call({method:"POST",function:"/password/reset",data:{email:t,pool:this.config.user.pool}})}async resetAccount(t){return new a(k.getEndPoints().authentication.address).call({method:"POST",function:"/account/reset",data:{email:t,pool:this.config.user.pool}})}getPool(){return this.config.user.pool}}const u=(t={})=>{if(t.pool)return t.pool;const{authentication:e}=k.getConfig().services;return e.user&&e.user.pool&&1===e.user.pool.length?e.user.pool[0]:void 0};function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class l{constructor(){d(this,"pool",{myAll:async()=>{const t=new a(k.getEndPoints().art.address);return await t.call({method:"GET",function:"/my/pools"})},my:async t=>{const e=new a(k.getEndPoints().art.address);return await e.call({method:"GET",function:"/my/pool/"+t})},get:async t=>{const e=new a(k.getEndPoints().art.address);return await e.call({method:"POST",function:"/pool",data:{id:t}})},getByUser:async t=>{const e=new a(k.getEndPoints().art.address);return await e.call({method:"POST",function:"/users/pools",data:{id:t}})},all:async()=>{const t=new a(k.getEndPoints().art.address);return await t.call({method:"GET",function:"/pool/all"})},add:async t=>{console.log({...t});const e=new a(k.getEndPoints().art.address);return await e.call({method:"POST",function:"/pool/add",data:{...t}})},myUpdate:async(t,e)=>{const n=new a(k.getEndPoints().art.address);return await n.call({method:"POST",function:"/my/pool/update",data:{...e,id:t}})},delete:async t=>{const e=new a(k.getEndPoints().art.address);return await e.call({method:"POST",function:"/pool/delete",data:{id:t}})},member:{add:async(t,e)=>{const n=new a(k.getEndPoints().art.address);return await n.call({method:"POST",function:"/pool/user/add",data:{pool:e,user:t}})},invite:async({user:t,permission:e,type:n},o)=>{const r=new a(k.getEndPoints().art.address);return await r.call({method:"POST",function:`/my/pool/${o}/user/invite`,data:{pool:o,user:t,permission:e,type:n}})},inviteRequest:async(t,e)=>{const n=new a(k.getEndPoints().art.address);return await n.call({method:"POST",function:`/my/pool/${e}/user/invite`,data:{accept:t}})},delete:async(t,e,n=!1)=>{const o=new a(k.getEndPoints().art.address);return await o.call({method:n?"POST":"DELETE",function:n?"/pool/user/delete":`/my/pool/${e}/user/${t}/delete`,data:{pool:e,user:t}})}},art:{add:async(t,e)=>{const n=new a(k.getEndPoints().art.address);return await n.call({method:"POST",function:"/pool/art/add",data:{pool:e,art:t}})},delete:async(t,e)=>{const n=new a(k.getEndPoints().art.address);return await n.call({method:"POST",function:"/pool/art/delete",data:{pool:e,art:t}})}}}),d(this,"artist",{get:async t=>{const e=new a(k.getEndPoints().art.address);return await e.call({method:"POST",function:"/artist",data:{id:t}})},getByPerson:async t=>{const e=new a(k.getEndPoints().art.address);return await e.call({method:"POST",function:"/artist",data:{person:t}})},all:async()=>{const t=new a(k.getEndPoints().art.address);return await t.call({method:"GET",function:"/artist/all"})},add:async t=>{const e=new a(k.getEndPoints().art.address);return await e.call({method:"POST",function:"/artist/add",data:{...t}})},update:async t=>{return new a(k.getEndPoints().art.address).call({method:"POST",function:"/artist/update",data:{...t}})},delete:async t=>{const e=new a(k.getEndPoints().art.address);return await e.call({method:"POST",function:"/artist/delete",data:{id:t}})},history:async(t=!1,e,n=10)=>{if(!t)throw new IdException("Please set an id in Artist.history()");const o=new a(k.getEndPoints().art.address);return await o.call({method:"POST",function:"/artist/history",data:{id:t,position:e||"eyJlbnRyeSI6MH0=",amount:n}})}}),d(this,"art",{all:async t=>{const e=new a(k.getEndPoints().art.address);return await e.call({method:"POST",function:"/art/all",data:{pool:t}})}}),this.config={}}}function p(t){this.message=t,this.name="PoolException"}function f(t){this.message=t,this.name="IdException"}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class g{constructor(t={}){return h(this,"person",{getAll:async(t=!1)=>{!1===t&&(t=this.config.person.pool);const e=new a(k.getEndPoints().customer.address);return await e.call({method:"POST",function:"/person/all",data:{pool:t}})},getAllUsersForUserPool:async(t,e=!1,n=!1)=>{!1===n&&(n=this.config.person.pool),!1===e&&(e=this.config.user.pool);const o=new a(k.getEndPoints().authentication.address);return await o.call({method:"POST",function:"/user/get",data:{pool:e,person:{id:t,pool:n}}})},get:async(t,e=!1)=>{!1===e&&(e=this.config.person.pool);const n=new a(k.getEndPoints().customer.address);return await n.call({method:"POST",function:"/person/get",data:{id:t,pool:e}})},add:async(t,e=!1)=>{!1===e&&(e=this.config.person.pool);const n=new a(k.getEndPoints().customer.address);return await n.call({method:"POST",function:"/person/add",data:{pool:e,...t}})},update:async(t,e=!1,n=!1)=>{if(!1===n&&(n=this.config.person.pool),!e)throw new f("Please set an id in Person.update()");const o=new a(k.getEndPoints().customer.address);return await o.call({method:"POST",function:"/person/update",data:{id:e,pool:n,...t}})},history:async(t=!1,e=!1,n,o=10)=>{if(!1===e&&(e=this.config.person.pool),!t)throw new f("Please set an id in Person.history()");const r=new a(k.getEndPoints().customer.address);return await r.call({method:"POST",function:"/person/history",data:{id:t,pool:e,position:n||"eyJlbnRyeSI6MH0=",amount:o}})},delete:async(t,e=!1)=>{!1===e&&(e=this.config.person.pool);const n=new a(k.getEndPoints().customer.address);return await n.call({method:"POST",function:"/person/delete",data:{pool:e,id:t}})},getAllTaskClocks:async(t=!1,e=!1)=>{if(!1===e&&(e=this.config.task.pool),!t)throw new f("Please set an id in Person.getAllTaskClocks()");const n=new a(k.getEndPoints().customer.address);return await n.call({method:"POST",function:"/person/task/timeclock/all",data:{id:t,pool:e}})}}),h(this,"opportunity",{getAll:async(t=!1)=>{!1===t&&(t=this.config.opportunity.pool);const e=new a(k.getEndPoints().customer.address);return await e.call({method:"POST",function:"/opportunity/all",data:{pool:t}})},get:async(t,e=!1)=>{if(!1===e&&(e=this.config.opportunity.pool),!t)throw new f("Please set an id in Opportunity.get()");const n=new a(k.getEndPoints().customer.address);return await n.call({method:"POST",function:"/opportunity/get",data:{id:t,pool:e}})},add:async(t,e=!1)=>{!1===e&&(e=this.config.opportunity.pool);const n=new a(k.getEndPoints().customer.address);return await n.call({method:"POST",function:"/opportunity/add",data:{pool:e,...t}})},update:async(t,e,n=!1)=>{if(!1===n&&(n=this.config.opportunity.pool),!e)throw new f("Please set an id in Opportunity.update()");t.persons&&t.persons.map(t=>(t.pool||(t.pool=this.config.person.pool),t));const o=new a(k.getEndPoints().customer.address);return await o.call({method:"POST",function:"/opportunity/update",data:{id:e,pool:n,...t}})},delete:async(t,e=!1)=>{if(!1===e&&(e=this.config.opportunity.pool),!t)throw new f("Please set an id for Person.delete()");const n=new a(k.getEndPoints().customer.address);return await n.call({method:"POST",function:"/opportunity/delete",data:{id:t,pool:e}})},getPool:async(t=!1)=>{if(!1===t&&(t=this.config.opportunity.pool),!t)throw new f("Please set an id in Opportunity.getPool()");const e=new a(k.getEndPoints().customer.address);return await e.call({method:"POST",function:"/opportunity/pool/get",data:{id:t}})}}),h(this,"task",{timeClock:{add:async(t,e,n=[],o=!1)=>{!1===o&&(o=this.config.task.pool);const r=new a(k.getEndPoints().customer.address);return await r.call({method:"POST",function:"/task/timeclock/add",data:{pool:o,start:t,end:e,pauses:n}})},getAllMy:async(t=!1)=>{!1===t&&(t=this.config.task.pool);const e=new a(k.getEndPoints().customer.address);return await e.call({method:"POST",function:"/my/task/timeclock/all",data:{pool:t}})}}}),this.config={person:{pool:m(t.person)},opportunity:{pool:w(t.opportunity)},task:{pool:y(t.task)},user:{pool:T(t.user)}},{person:this.person,opportunity:this.opportunity,task:this.task}}}const m=(t={})=>{if(t.pool)return t.pool;const{customer:e}=k.getConfig().services;if(e.person&&e.person.pool&&1===e.person.pool.length)return e.person.pool[0];throw new p("Person pool could not be identified!")},w=(t={})=>{if(t.pool)return t.pool;const{customer:e}=k.getConfig().services;if(e.opportunity&&e.opportunity.pool&&1===e.opportunity.pool.length)return e.opportunity.pool[0];throw new p("Opportunity pool could not be identified!")},y=(t={})=>{if(t.pool)return t.pool;const{customer:e}=k.getConfig().services;if(e.task&&e.task.pool&&1===e.task.pool.length)return e.task.pool[0];throw new p("Task pool could not be identified!")},T=(t={})=>{if(t.pool)return t.pool;const{authentication:e}=k.getConfig().services;if(e.user&&e.user.pool&&1===e.user.pool.length)return e.user.pool[0];throw new p("Authentication pool could not be identified!")};var P={access:{address:"https://access.datenbanker.at"},authentication:{address:"https://authentication.datenbanker.at"},customer:{address:"https://customer.datenbanker.at"},art:{address:"https://art.datenbanker.at"}},v={set(t,e){window.localStorage.setItem(t,e)},get:t=>window.localStorage.getItem(t),delete:t=>window.localStorage.removeItem(t)};const E=new class{constructor(){if(window.localStorage)return v;throw"Local Storage not supported!"}};var k=new class{init(t){if(!t.apiToken)throw function(t){this.message=t,this.name="apiTokenNotSet"}("Please set an apiToken");let e={tokens:{app:t.apiToken,accessToken:!1,refreshToken:!1,idToken:!1},groups:[],groupsAlias:t.groups||{},signedIn:!1,services:t.services||{},endPoints:t.endPoints||P,handler:t.handler||{},handlerList:["tokenChange","notAuthorized"]};this.config=e,this.setTokens({accessToken:E.get("user:accessToken"),idToken:E.get("user:idToken"),refreshToken:E.get("user:refreshToken")})}changeAppToken(t){this.config.tokens.app=t}registerHandler(t){this.config.handler={...this.config.handler,...t}}on(t,e={}){this.config.handler[t]&&this.config.handler[t](e)}setTokens(t=!1){if(!1===t&&(t={accessToken:!1,refreshToken:!1,idToken:!1}),t.accessToken){const e=JSON.parse(window.atob(t.accessToken.split(".")[1]));this.config.groups=e.scopes.map(t=>this.config.groupsAlias[t]||t)}else this.config.groups=[];Boolean(t.accessToken)&&E.set("user:accessToken",t.accessToken),Boolean(t.idToken)&&E.set("user:idToken",t.idToken),Boolean(t.refreshToken)&&E.set("user:refreshToken",t.refreshToken),this.on("tokenChange",t),this.config.tokens={...this.config.tokens,...t},this.config.signedIn=!!t.accessToken}getIdToken(){return this.config.tokens.idToken}getGroups(){return this.config.groups}getConfig(){return this.config}getEndPoints(){return this.config.endPoints}};n.d(e,"Authentication",function(){return c}),n.d(e,"Art",function(){return l}),n.d(e,"Customer",function(){return g}),n.d(e,"DevCloud",function(){return k}),n.d(e,"Connector",function(){return a})}]);export const Authentication=LIB.Authentication;export const Art=LIB.Art;export const Customer=LIB.Customer;export const DevCloud=LIB.DevCloud;export const Connector=LIB.Connector;