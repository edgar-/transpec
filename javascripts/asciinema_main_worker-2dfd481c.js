Asciinema={},console={log:function(t){postMessage({message:"log",text:t})}},function(){function t(e,n,i){if(e===n)return 0!==e||1/e==1/n;if(null==e||null==n)return e===n;if(e._chain&&(e=e._wrapped),n._chain&&(n=n._wrapped),e.isEqual&&w.isFunction(e.isEqual))return e.isEqual(n);if(n.isEqual&&w.isFunction(n.isEqual))return n.isEqual(e);var r=u.call(e);if(r!=u.call(n))return!1;switch(r){case"[object String]":return e==String(n);case"[object Number]":return e!=+e?n!=+n:0==e?1/e==1/n:e==+n;case"[object Date]":case"[object Boolean]":return+e==+n;case"[object RegExp]":return e.source==n.source&&e.global==n.global&&e.multiline==n.multiline&&e.ignoreCase==n.ignoreCase}if("object"!=typeof e||"object"!=typeof n)return!1;for(var s=i.length;s--;)if(i[s]==e)return!0;i.push(e);var s=0,o=!0;if("[object Array]"==r){if(s=e.length,o=s==n.length)for(;s--&&(o=s in e==s in n&&t(e[s],n[s],i)););}else{if("constructor"in e!="constructor"in n||e.constructor!=n.constructor)return!1;for(var a in e)if(w.has(e,a)&&(s++,!(o=w.has(n,a)&&t(e[a],n[a],i))))break;if(o){for(a in n)if(w.has(n,a)&&!s--)break;o=!s}}return i.pop(),o}var e=this,n=e._,i={},r=Array.prototype,s=Object.prototype,o=r.slice,a=r.unshift,u=s.toString,c=s.hasOwnProperty,l=r.forEach,h=r.map,f=r.reduce,p=r.reduceRight,d=r.filter,g=r.every,m=r.some,v=r.indexOf,y=r.lastIndexOf,s=Array.isArray,_=Object.keys,b=Function.prototype.bind,w=function(t){return new k(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):e._=w,w.VERSION="1.3.1";var x=w.each=w.forEach=function(t,e,n){if(null!=t)if(l&&t.forEach===l)t.forEach(e,n);else if(t.length===+t.length)for(var r=0,s=t.length;s>r&&!(r in t&&e.call(n,t[r],r,t)===i);r++);else for(r in t)if(w.has(t,r)&&e.call(n,t[r],r,t)===i)break};w.map=w.collect=function(t,e,n){var i=[];return null==t?i:h&&t.map===h?t.map(e,n):(x(t,function(t,r,s){i[i.length]=e.call(n,t,r,s)}),t.length===+t.length&&(i.length=t.length),i)},w.reduce=w.foldl=w.inject=function(t,e,n,i){var r=arguments.length>2;if(null==t&&(t=[]),f&&t.reduce===f)return i&&(e=w.bind(e,i)),r?t.reduce(e,n):t.reduce(e);if(x(t,function(t,s,o){r?n=e.call(i,n,t,s,o):(n=t,r=!0)}),!r)throw new TypeError("Reduce of empty array with no initial value");return n},w.reduceRight=w.foldr=function(t,e,n,i){var r=arguments.length>2;if(null==t&&(t=[]),p&&t.reduceRight===p)return i&&(e=w.bind(e,i)),r?t.reduceRight(e,n):t.reduceRight(e);var s=w.toArray(t).reverse();return i&&!r&&(e=w.bind(e,i)),r?w.reduce(s,e,n,i):w.reduce(s,e)},w.find=w.detect=function(t,e,n){var i;return E(t,function(t,r,s){return e.call(n,t,r,s)?(i=t,!0):void 0}),i},w.filter=w.select=function(t,e,n){var i=[];return null==t?i:d&&t.filter===d?t.filter(e,n):(x(t,function(t,r,s){e.call(n,t,r,s)&&(i[i.length]=t)}),i)},w.reject=function(t,e,n){var i=[];return null==t?i:(x(t,function(t,r,s){e.call(n,t,r,s)||(i[i.length]=t)}),i)},w.every=w.all=function(t,e,n){var r=!0;return null==t?r:g&&t.every===g?t.every(e,n):(x(t,function(t,s,o){return(r=r&&e.call(n,t,s,o))?void 0:i}),r)};var E=w.some=w.any=function(t,e,n){e||(e=w.identity);var r=!1;return null==t?r:m&&t.some===m?t.some(e,n):(x(t,function(t,s,o){return r||(r=e.call(n,t,s,o))?i:void 0}),!!r)};w.include=w.contains=function(t,e){var n=!1;return null==t?n:v&&t.indexOf===v?-1!=t.indexOf(e):n=E(t,function(t){return t===e})},w.invoke=function(t,e){var n=o.call(arguments,2);return w.map(t,function(t){return(w.isFunction(e)?e||t:t[e]).apply(t,n)})},w.pluck=function(t,e){return w.map(t,function(t){return t[e]})},w.max=function(t,e,n){if(!e&&w.isArray(t))return Math.max.apply(Math,t);if(!e&&w.isEmpty(t))return-1/0;var i={computed:-1/0};return x(t,function(t,r,s){r=e?e.call(n,t,r,s):t,r>=i.computed&&(i={value:t,computed:r})}),i.value},w.min=function(t,e,n){if(!e&&w.isArray(t))return Math.min.apply(Math,t);if(!e&&w.isEmpty(t))return 1/0;var i={computed:1/0};return x(t,function(t,r,s){r=e?e.call(n,t,r,s):t,r<i.computed&&(i={value:t,computed:r})}),i.value},w.shuffle=function(t){var e,n=[];return x(t,function(t,i){0==i?n[0]=t:(e=Math.floor(Math.random()*(i+1)),n[i]=n[e],n[e]=t)}),n},w.sortBy=function(t,e,n){return w.pluck(w.map(t,function(t,i,r){return{value:t,criteria:e.call(n,t,i,r)}}).sort(function(t,e){var n=t.criteria,i=e.criteria;return i>n?-1:n>i?1:0}),"value")},w.groupBy=function(t,e){var n={},i=w.isFunction(e)?e:function(t){return t[e]};return x(t,function(t,e){var r=i(t,e);(n[r]||(n[r]=[])).push(t)}),n},w.sortedIndex=function(t,e,n){n||(n=w.identity);for(var i=0,r=t.length;r>i;){var s=i+r>>1;n(t[s])<n(e)?i=s+1:r=s}return i},w.toArray=function(t){return t?t.toArray?t.toArray():w.isArray(t)?o.call(t):w.isArguments(t)?o.call(t):w.values(t):[]},w.size=function(t){return w.toArray(t).length},w.first=w.head=function(t,e,n){return null==e||n?t[0]:o.call(t,0,e)},w.initial=function(t,e,n){return o.call(t,0,t.length-(null==e||n?1:e))},w.last=function(t,e,n){return null==e||n?t[t.length-1]:o.call(t,Math.max(t.length-e,0))},w.rest=w.tail=function(t,e,n){return o.call(t,null==e||n?1:e)},w.compact=function(t){return w.filter(t,function(t){return!!t})},w.flatten=function(t,e){return w.reduce(t,function(t,n){return w.isArray(n)?t.concat(e?n:w.flatten(n)):(t[t.length]=n,t)},[])},w.without=function(t){return w.difference(t,o.call(arguments,1))},w.uniq=w.unique=function(t,e,n){var n=n?w.map(t,n):t,i=[];return w.reduce(n,function(n,r,s){return 0!=s&&(e===!0?w.last(n)==r:w.include(n,r))||(n[n.length]=r,i[i.length]=t[s]),n},[]),i},w.union=function(){return w.uniq(w.flatten(arguments,!0))},w.intersection=w.intersect=function(t){var e=o.call(arguments,1);return w.filter(w.uniq(t),function(t){return w.every(e,function(e){return w.indexOf(e,t)>=0})})},w.difference=function(t){var e=w.flatten(o.call(arguments,1));return w.filter(t,function(t){return!w.include(e,t)})},w.zip=function(){for(var t=o.call(arguments),e=w.max(w.pluck(t,"length")),n=Array(e),i=0;e>i;i++)n[i]=w.pluck(t,""+i);return n},w.indexOf=function(t,e,n){if(null==t)return-1;var i;if(n)return n=w.sortedIndex(t,e),t[n]===e?n:-1;if(v&&t.indexOf===v)return t.indexOf(e);for(n=0,i=t.length;i>n;n++)if(n in t&&t[n]===e)return n;return-1},w.lastIndexOf=function(t,e){if(null==t)return-1;if(y&&t.lastIndexOf===y)return t.lastIndexOf(e);for(var n=t.length;n--;)if(n in t&&t[n]===e)return n;return-1},w.range=function(t,e,n){arguments.length<=1&&(e=t||0,t=0);for(var n=arguments[2]||1,i=Math.max(Math.ceil((e-t)/n),0),r=0,s=Array(i);i>r;)s[r++]=t,t+=n;return s};var A=function(){};w.bind=function(t,e){var n,i;if(t.bind===b&&b)return b.apply(t,o.call(arguments,1));if(!w.isFunction(t))throw new TypeError;return i=o.call(arguments,2),n=function(){if(!(this instanceof n))return t.apply(e,i.concat(o.call(arguments)));A.prototype=t.prototype;var r=new A,s=t.apply(r,i.concat(o.call(arguments)));return Object(s)===s?s:r}},w.bindAll=function(t){var e=o.call(arguments,1);return 0==e.length&&(e=w.functions(t)),x(e,function(e){t[e]=w.bind(t[e],t)}),t},w.memoize=function(t,e){var n={};return e||(e=w.identity),function(){var i=e.apply(this,arguments);return w.has(n,i)?n[i]:n[i]=t.apply(this,arguments)}},w.delay=function(t,e){var n=o.call(arguments,2);return setTimeout(function(){return t.apply(t,n)},e)},w.defer=function(t){return w.delay.apply(w,[t,1].concat(o.call(arguments,1)))},w.throttle=function(t,e){var n,i,r,s,o,a=w.debounce(function(){o=s=!1},e);return function(){n=this,i=arguments;r||(r=setTimeout(function(){r=null,o&&t.apply(n,i),a()},e)),s?o=!0:t.apply(n,i),a(),s=!0}},w.debounce=function(t,e){var n;return function(){var i=this,r=arguments;clearTimeout(n),n=setTimeout(function(){n=null,t.apply(i,r)},e)}},w.once=function(t){var e,n=!1;return function(){return n?e:(n=!0,e=t.apply(this,arguments))}},w.wrap=function(t,e){return function(){var n=[t].concat(o.call(arguments,0));return e.apply(this,n)}},w.compose=function(){var t=arguments;return function(){for(var e=arguments,n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},w.after=function(t,e){return 0>=t?e():function(){return--t<1?e.apply(this,arguments):void 0}},w.keys=_||function(t){if(t!==Object(t))throw new TypeError("Invalid object");var e,n=[];for(e in t)w.has(t,e)&&(n[n.length]=e);return n},w.values=function(t){return w.map(t,w.identity)},w.functions=w.methods=function(t){var e,n=[];for(e in t)w.isFunction(t[e])&&n.push(e);return n.sort()},w.extend=function(t){return x(o.call(arguments,1),function(e){for(var n in e)t[n]=e[n]}),t},w.defaults=function(t){return x(o.call(arguments,1),function(e){for(var n in e)null==t[n]&&(t[n]=e[n])}),t},w.clone=function(t){return w.isObject(t)?w.isArray(t)?t.slice():w.extend({},t):t},w.tap=function(t,e){return e(t),t},w.isEqual=function(e,n){return t(e,n,[])},w.isEmpty=function(t){if(w.isArray(t)||w.isString(t))return 0===t.length;for(var e in t)if(w.has(t,e))return!1;return!0},w.isElement=function(t){return!(!t||1!=t.nodeType)},w.isArray=s||function(t){return"[object Array]"==u.call(t)},w.isObject=function(t){return t===Object(t)},w.isArguments=function(t){return"[object Arguments]"==u.call(t)},w.isArguments(arguments)||(w.isArguments=function(t){return!(!t||!w.has(t,"callee"))}),w.isFunction=function(t){return"[object Function]"==u.call(t)},w.isString=function(t){return"[object String]"==u.call(t)},w.isNumber=function(t){return"[object Number]"==u.call(t)},w.isNaN=function(t){return t!==t},w.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"==u.call(t)},w.isDate=function(t){return"[object Date]"==u.call(t)},w.isRegExp=function(t){return"[object RegExp]"==u.call(t)},w.isNull=function(t){return null===t},w.isUndefined=function(t){return void 0===t},w.has=function(t,e){return c.call(t,e)},w.noConflict=function(){return e._=n,this},w.identity=function(t){return t},w.times=function(t,e,n){for(var i=0;t>i;i++)e.call(n,i)},w.escape=function(t){return(""+t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},w.mixin=function(t){x(w.functions(t),function(e){j(e,w[e]=t[e])})};var F=0;w.uniqueId=function(t){var e=F++;return t?t+e:e},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/.^/,C=function(t){return t.replace(/\\\\/g,"\\").replace(/\\'/g,"'")};w.template=function(t,e){var n=w.templateSettings,n="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+t.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(n.escape||T,function(t,e){return"',_.escape("+C(e)+"),'"}).replace(n.interpolate||T,function(t,e){return"',"+C(e)+",'"}).replace(n.evaluate||T,function(t,e){return"');"+C(e).replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",i=new Function("obj","_",n);return e?i(e,w):function(t){return i.call(this,t,w)}},w.chain=function(t){return w(t).chain()};var k=function(t){this._wrapped=t};w.prototype=k.prototype;var S=function(t,e){return e?w(t).chain():t},j=function(t,e){k.prototype[t]=function(){var t=o.call(arguments);return a.call(t,this._wrapped),S(e.apply(w,t),this._chain)}};w.mixin(w),x("pop,push,reverse,shift,sort,splice,unshift".split(","),function(t){var e=r[t];k.prototype[t]=function(){var n=this._wrapped;e.apply(n,arguments);var i=n.length;return("shift"==t||"splice"==t)&&0===i&&delete n[0],S(n,this._chain)}}),x(["concat","join","slice"],function(t){var e=r[t];k.prototype[t]=function(){return S(e.apply(this._wrapped,arguments),this._chain)}}),k.prototype.chain=function(){return this._chain=!0,this},k.prototype.value=function(){return this._wrapped}}.call(this),function(){var t,e=this,n=e.Backbone,i=Array.prototype.slice,r=Array.prototype.splice;t="undefined"!=typeof exports?exports:e.Backbone={},t.VERSION="0.9.1";var s=e._;!s&&"undefined"!=typeof require&&(s=require("underscore"));var o=e.jQuery||e.Zepto||e.ender;t.setDomLibrary=function(t){o=t},t.noConflict=function(){return e.Backbone=n,this},t.emulateHTTP=!1,t.emulateJSON=!1,t.Events={on:function(t,e,n){for(var i,t=t.split(/\s+/),r=this._callbacks||(this._callbacks={});i=t.shift();){i=r[i]||(r[i]={});var s=i.tail||(i.tail=i.next={});s.callback=e,s.context=n,i.tail=s.next={}}return this},off:function(t,e,n){var i,r,s;if(t){if(r=this._callbacks)for(t=t.split(/\s+/);i=t.shift();)if(s=r[i],delete r[i],e&&s)for(;(s=s.next)&&s.next;)(s.callback!==e||n&&s.context!==n)&&this.on(i,s.callback,s.context)}else delete this._callbacks;return this},trigger:function(t){var e,n,r,s;if(!(r=this._callbacks))return this;for(s=r.all,(t=t.split(/\s+/)).push(null);e=t.shift();)s&&t.push({next:s.next,tail:s.tail,event:e}),(n=r[e])&&t.push({next:n.next,tail:n.tail});for(s=i.call(arguments,1);n=t.pop();)for(e=n.tail,r=n.event?[n.event].concat(s):s;(n=n.next)!==e;)n.callback.apply(n.context||this,r);return this}},t.Events.bind=t.Events.on,t.Events.unbind=t.Events.off,t.Model=function(t,e){var n;if(t||(t={}),e&&e.parse&&(t=this.parse(t)),(n=y(this,"defaults"))&&(t=s.extend({},n,t)),e&&e.collection&&(this.collection=e.collection),this.attributes={},this._escapedAttributes={},this.cid=s.uniqueId("c"),!this.set(t,{silent:!0}))throw Error("Can't create an invalid model");delete this._changed,this._previousAttributes=s.clone(this.attributes),this.initialize.apply(this,arguments)},s.extend(t.Model.prototype,t.Events,{idAttribute:"id",initialize:function(){},toJSON:function(){return s.clone(this.attributes)},get:function(t){return this.attributes[t]},escape:function(t){var e;return(e=this._escapedAttributes[t])?e:(e=this.attributes[t],this._escapedAttributes[t]=s.escape(null==e?"":""+e))},has:function(t){return null!=this.attributes[t]},set:function(e,n,i){var r,o;if(s.isObject(e)||null==e?(r=e,i=n):(r={},r[e]=n),i||(i={}),!r)return this;if(r instanceof t.Model&&(r=r.attributes),i.unset)for(o in r)r[o]=void 0;if(!this._validate(r,i))return!1;this.idAttribute in r&&(this.id=r[this.idAttribute]);var n=this.attributes,a=this._escapedAttributes,u=this._previousAttributes||{},c=this._setting;this._changed||(this._changed={}),this._setting=!0;for(o in r)e=r[o],s.isEqual(n[o],e)||delete a[o],i.unset?delete n[o]:n[o]=e,this._changing&&!s.isEqual(this._changed[o],e)&&(this.trigger("change:"+o,this,e,i),this._moreChanges=!0),delete this._changed[o],s.isEqual(u[o],e)&&s.has(n,o)==s.has(u,o)||(this._changed[o]=e);return c||(!i.silent&&this.hasChanged()&&this.change(i),this._setting=!1),this},unset:function(t,e){return(e||(e={})).unset=!0,this.set(t,null,e)},clear:function(t){return(t||(t={})).unset=!0,this.set(s.clone(this.attributes),t)},fetch:function(e){var e=e?s.clone(e):{},n=this,i=e.success;return e.success=function(t,r,s){return n.set(n.parse(t,s),e)?(i&&i(n,t),void 0):!1},e.error=t.wrapError(e.error,n,e),(this.sync||t.sync).call(this,"read",this,e)},save:function(e,n,i){var r,o;if(s.isObject(e)||null==e?(r=e,i=n):(r={},r[e]=n),i=i?s.clone(i):{},i.wait&&(o=s.clone(this.attributes)),e=s.extend({},i,{silent:!0}),r&&!this.set(r,i.wait?e:i))return!1;var a=this,u=i.success;return i.success=function(t,e,n){return e=a.parse(t,n),i.wait&&(e=s.extend(r||{},e)),a.set(e,i)?(u?u(a,t):a.trigger("sync",a,t,i),void 0):!1},i.error=t.wrapError(i.error,a,i),n=this.isNew()?"create":"update",n=(this.sync||t.sync).call(this,n,this,i),i.wait&&this.set(o,e),n},destroy:function(e){var e=e?s.clone(e):{},n=this,i=e.success,r=function(){n.trigger("destroy",n,n.collection,e)};if(this.isNew())return r();e.success=function(t){e.wait&&r(),i?i(n,t):n.trigger("sync",n,t,e)},e.error=t.wrapError(e.error,n,e);var o=(this.sync||t.sync).call(this,"delete",this,e);return e.wait||r(),o},url:function(){var t=y(this.collection,"url")||y(this,"urlRoot")||_();return this.isNew()?t:t+("/"==t.charAt(t.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(t){if(this._changing||!this.hasChanged())return this;this._moreChanges=this._changing=!0;for(var e in this._changed)this.trigger("change:"+e,this,this._changed[e],t);for(;this._moreChanges;)this._moreChanges=!1,this.trigger("change",this,t);return this._previousAttributes=s.clone(this.attributes),delete this._changed,this._changing=!1,this},hasChanged:function(t){return arguments.length?this._changed&&s.has(this._changed,t):!s.isEmpty(this._changed)},changedAttributes:function(t){if(!t)return this.hasChanged()?s.clone(this._changed):!1;var e,n,i=!1,r=this._previousAttributes;for(n in t)s.isEqual(r[n],e=t[n])||((i||(i={}))[n]=e);return i},previous:function(t){return arguments.length&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return s.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(t,e){if(e.silent||!this.validate)return!0;var t=s.extend({},this.attributes,t),n=this.validate(t,e);return n?(e&&e.error?e.error(this,n,e):this.trigger("error",this,n,e),!1):!0}}),t.Collection=function(t,e){e||(e={}),e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,{silent:!0,parse:e.parse})},s.extend(t.Collection.prototype,t.Events,{model:t.Model,initialize:function(){},toJSON:function(){return this.map(function(t){return t.toJSON()})},add:function(t,e){var n,i,o,a,u,c={},l={};for(e||(e={}),t=s.isArray(t)?t.slice():[t],n=0,i=t.length;i>n;n++){if(!(o=t[n]=this._prepareModel(t[n],e)))throw Error("Can't add an invalid model to a collection");if(c[a=o.cid]||this._byCid[a]||null!=(u=o.id)&&(l[u]||this._byId[u]))throw Error("Can't add the same model to a collection twice");c[a]=l[u]=o}for(n=0;i>n;n++)(o=t[n]).on("all",this._onModelEvent,this),this._byCid[o.cid]=o,null!=o.id&&(this._byId[o.id]=o);if(this.length+=i,r.apply(this.models,[null!=e.at?e.at:this.models.length,0].concat(t)),this.comparator&&this.sort({silent:!0}),e.silent)return this;for(n=0,i=this.models.length;i>n;n++)c[(o=this.models[n]).cid]&&(e.index=n,o.trigger("add",o,this,e));return this},remove:function(t,e){var n,i,r,o;for(e||(e={}),t=s.isArray(t)?t.slice():[t],n=0,i=t.length;i>n;n++)(o=this.getByCid(t[n])||this.get(t[n]))&&(delete this._byId[o.id],delete this._byCid[o.cid],r=this.indexOf(o),this.models.splice(r,1),this.length--,e.silent||(e.index=r,o.trigger("remove",o,this,e)),this._removeReference(o));return this},get:function(t){return null==t?null:this._byId[null!=t.id?t.id:t]},getByCid:function(t){return t&&this._byCid[t.cid||t]},at:function(t){return this.models[t]},sort:function(t){if(t||(t={}),!this.comparator)throw Error("Cannot sort a set without a comparator");var e=s.bind(this.comparator,this);return 1==this.comparator.length?this.models=this.sortBy(e):this.models.sort(e),t.silent||this.trigger("reset",this,t),this},pluck:function(t){return s.map(this.models,function(e){return e.get(t)})},reset:function(t,e){t||(t=[]),e||(e={});for(var n=0,i=this.models.length;i>n;n++)this._removeReference(this.models[n]);return this._reset(),this.add(t,{silent:!0,parse:e.parse}),e.silent||this.trigger("reset",this,e),this},fetch:function(e){e=e?s.clone(e):{},void 0===e.parse&&(e.parse=!0);var n=this,i=e.success;return e.success=function(t,r,s){n[e.add?"add":"reset"](n.parse(t,s),e),i&&i(n,t)},e.error=t.wrapError(e.error,n,e),(this.sync||t.sync).call(this,"read",this,e)},create:function(t,e){var n=this,e=e?s.clone(e):{},t=this._prepareModel(t,e);if(!t)return!1;e.wait||n.add(t,e);var i=e.success;return e.success=function(r,s){e.wait&&n.add(r,e),i?i(r,s):r.trigger("sync",t,s,e)},t.save(null,e),t},parse:function(t){return t},chain:function(){return s(this.models).chain()},_reset:function(){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(e,n){return e instanceof t.Model?e.collection||(e.collection=this):(n.collection=this,e=new this.model(e,n),e._validate(e.attributes,n)||(e=!1)),e},_removeReference:function(t){this==t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,n,i){("add"==t||"remove"==t)&&n!=this||("destroy"==t&&this.remove(e,i),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],this._byId[e.id]=e),this.trigger.apply(this,arguments))}}),s.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(e){t.Collection.prototype[e]=function(){return s[e].apply(s,[this.models].concat(s.toArray(arguments)))}}),t.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)};var a=/:\w+/g,u=/\*\w+/g,c=/[-[\]{}()+?.,\\^$|#\s]/g;s.extend(t.Router.prototype,t.Events,{initialize:function(){},route:function(e,n,i){return t.history||(t.history=new t.History),s.isRegExp(e)||(e=this._routeToRegExp(e)),i||(i=this[n]),t.history.route(e,s.bind(function(r){r=this._extractParameters(e,r),i&&i.apply(this,r),this.trigger.apply(this,["route:"+n].concat(r)),t.history.trigger("route",this,n,r)},this)),this},navigate:function(e,n){t.history.navigate(e,n)},_bindRoutes:function(){if(this.routes){var t,e=[];for(t in this.routes)e.unshift([t,this.routes[t]]);t=0;for(var n=e.length;n>t;t++)this.route(e[t][0],e[t][1],this[e[t][1]])}},_routeToRegExp:function(t){return t=t.replace(c,"\\$&").replace(a,"([^/]+)").replace(u,"(.*?)"),RegExp("^"+t+"$")},_extractParameters:function(t,e){return t.exec(e).slice(1)}}),t.History=function(){this.handlers=[],s.bindAll(this,"checkUrl")};var l=/^[#\/]/,h=/msie [\w.]+/,f=!1;s.extend(t.History.prototype,t.Events,{interval:50,getFragment:function(t,e){if(null==t)if(this._hasPushState||e){var t=window.location.pathname,n=window.location.search;n&&(t+=n)}else t=window.location.hash;return t=decodeURIComponent(t),t.indexOf(this.options.root)||(t=t.substr(this.options.root.length)),t.replace(l,"")},start:function(t){if(f)throw Error("Backbone.history has already been started");this.options=s.extend({},{root:"/"},this.options,t),this._wantsHashChange=!1!==this.options.hashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.options.pushState||!window.history||!window.history.pushState);var t=this.getFragment(),e=document.documentMode;return(e=h.exec(navigator.userAgent.toLowerCase())&&(!e||7>=e))&&(this.iframe=o('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(t)),this._hasPushState?o(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!e?o(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=t,f=!0,t=window.location,e=t.pathname==this.options.root,this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!e?(this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&e&&t.hash&&(this.fragment=t.hash.replace(l,""),window.history.replaceState({},document.title,t.protocol+"//"+t.host+this.options.root+this.fragment)),this.options.silent?void 0:this.loadUrl())},stop:function(){o(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),f=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();return t==this.fragment&&this.iframe&&(t=this.getFragment(this.iframe.location.hash)),t==this.fragment||t==decodeURIComponent(this.fragment)?!1:(this.iframe&&this.navigate(t),this.loadUrl()||this.loadUrl(window.location.hash),void 0)},loadUrl:function(t){var e=this.fragment=this.getFragment(t);return s.any(this.handlers,function(t){return t.route.test(e)?(t.callback(e),!0):void 0})},navigate:function(t,e){if(!f)return!1;e&&!0!==e||(e={trigger:e});var n=(t||"").replace(l,"");this.fragment==n||this.fragment==decodeURIComponent(n)||(this._hasPushState?(0!=n.indexOf(this.options.root)&&(n=this.options.root+n),this.fragment=n,window.history[e.replace?"replaceState":"pushState"]({},document.title,n)):this._wantsHashChange?(this.fragment=n,this._updateHash(window.location,n,e.replace),this.iframe&&n!=this.getFragment(this.iframe.location.hash)&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,n,e.replace))):window.location.assign(this.options.root+t),e.trigger&&this.loadUrl(t))},_updateHash:function(t,e,n){n?t.replace(t.toString().replace(/(javascript:|#).*$/,"")+"#"+e):t.hash=e}}),t.View=function(t){this.cid=s.uniqueId("view"),this._configure(t||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()};var p=/^(\S+)\s*(.*)$/,d="model,collection,el,id,attributes,className,tagName".split(",");s.extend(t.View.prototype,t.Events,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this},make:function(t,e,n){return t=document.createElement(t),e&&o(t).attr(e),n&&o(t).html(n),t},setElement:function(t,e){return this.$el=o(t),this.el=this.$el[0],!1!==e&&this.delegateEvents(),this},delegateEvents:function(t){if(t||(t=y(this,"events"))){this.undelegateEvents();for(var e in t){var n=t[e];if(s.isFunction(n)||(n=this[t[e]]),!n)throw Error('Event "'+t[e]+'" does not exist');var i=e.match(p),r=i[1],i=i[2],n=s.bind(n,this),r=r+(".delegateEvents"+this.cid);""===i?this.$el.bind(r,n):this.$el.delegate(i,r,n)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(t){this.options&&(t=s.extend({},this.options,t));for(var e=0,n=d.length;n>e;e++){var i=d[e];t[i]&&(this[i]=t[i])}this.options=t},_ensureElement:function(){if(this.el)this.setElement(this.el,!1);else{var t=y(this,"attributes")||{};this.id&&(t.id=this.id),this.className&&(t["class"]=this.className),this.setElement(this.make(this.tagName,t),!1)}}}),t.Model.extend=t.Collection.extend=t.Router.extend=t.View.extend=function(t,e){var n=v(this,t,e);return n.extend=this.extend,n};var g={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};t.sync=function(e,n,i){var r=g[e],a={type:r,dataType:"json"};return i.url||(a.url=y(n,"url")||_()),i.data||!n||"create"!=e&&"update"!=e||(a.contentType="application/json",a.data=JSON.stringify(n.toJSON())),t.emulateJSON&&(a.contentType="application/x-www-form-urlencoded",a.data=a.data?{model:a.data}:{}),!t.emulateHTTP||"PUT"!==r&&"DELETE"!==r||(t.emulateJSON&&(a.data._method=r),a.type="POST",a.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r)}),"GET"!==a.type&&!t.emulateJSON&&(a.processData=!1),o.ajax(s.extend(a,i))},t.wrapError=function(t,e,n){return function(i,r){r=i===e?r:i,t?t(e,r,n):e.trigger("error",e,r,n)}};var m=function(){},v=function(t,e,n){var i;return i=e&&e.hasOwnProperty("constructor")?e.constructor:function(){t.apply(this,arguments)},s.extend(i,t),m.prototype=t.prototype,i.prototype=new m,e&&s.extend(i.prototype,e),n&&s.extend(i,n),i.prototype.constructor=i,i.__super__=t.prototype,i},y=function(t,e){return t&&t[e]?s.isFunction(t[e])?t[e]():t[e]:null},_=function(){throw Error('A "url" property or function must be specified')}}.call(this),function(){String.prototype.times=function(t){return Array.prototype.join.call({length:t+1},this)}}.call(this),function(){Asciinema.Brush=function(){function t(t){var e,n;null==t&&(t={}),this.fg=void 0,this.bg=void 0,this.blink=!1,this.bold=!1,this.underline=!1,this.inverse=!1;for(e in t)n=t[e],this[e]=n}return t.default_fg=7,t.default_bg=0,t.cache={},t.clearCache=function(){return this.cache={}},t["default"]=function(){return this._default||(this._default=this.create())},t.hash=function(t){return""+t.fg+"_"+t.bg+"_"+t.blink+"_"+t.bold+"_"+t.underline+"_"+t.inverse},t.create=function(t){var e,n;return null==t&&(t={}),n=this.hash(t),e=this.cache[n],e||(e=new Asciinema.Brush(t),this.cache[n]=e),e},t.prototype.hash=function(){return Asciinema.Brush.hash(this)},t.prototype.attributes=function(){return{fg:this.fg,bg:this.bg,blink:this.blink,bold:this.bold,underline:this.underline,inverse:this.inverse}},t.prototype.fgColor=function(){var t;return this.inverse?(t=this.calculateBgColor(),void 0!==t?t:Asciinema.Brush.default_bg):this.calculateFgColor()},t.prototype.bgColor=function(){var t;return this.inverse?(t=this.calculateFgColor(),void 0!==t?t:Asciinema.Brush.default_fg):this.calculateBgColor()},t.prototype.calculateFgColor=function(){var t;return t=this.fg,void 0!==t&&8>t&&this.bold&&(t+=8),t},t.prototype.calculateBgColor=function(){var t;return t=this.bg,void 0!==t&&8>t&&this.blink&&(t+=8),t},t.prototype.hasDefaultFg=function(){var t;return t=this.fgColor(),void 0===t||t===Asciinema.Brush.default_fg},t.prototype.hasDefaultBg=function(){var t;return t=this.bgColor(),void 0===t||t===Asciinema.Brush.default_bg},t}()}.call(this),function(){var t=[].slice;Asciinema.Movie=function(){function e(t){this.options=t,_.extend(this,Backbone.Events),this.reset(),this.startTimeReporter()}return e.prototype.MIN_DELAY=.01,e.prototype.reset=function(){return this.frameNo=0,this.completedFramesTime=0,this.playing=!1,this.lastFrameAt=void 0,this.clearPauseState()},e.prototype.call=function(){var e,n;return n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],this[n].apply(this,e)},e.prototype.now=function(){return(new Date).getTime()},e.prototype.stdout_frames=function(){return this.options.stdout_frames},e.prototype.play=function(){return this.isPlaying()?void 0:this.isFinished()?this.restart():this.isPaused()?this.resume():this.start()},e.prototype.start=function(){return this.playing=!0,this.trigger("started"),this.lastFrameAt=this.now(),this.nextFrame()},e.prototype.stop=function(){var t;return this.playing=!1,this.cancelNextFrameProcessing(),t=this.now(),this.adjustFrameWaitTime(t),this.pausedAt=t},e.prototype.cancelNextFrameProcessing=function(){return clearInterval(this.nextFrameTimeoutId)},e.prototype.adjustFrameWaitTime=function(t){var e,n;return n=this.resumedAt||this.lastFrameAt,e=t-n,this.totalFrameWaitTime+=e},e.prototype.restart=function(){return this.reset(),this.start()},e.prototype.pause=function(){return this.isPaused()?void 0:(this.stop(),this.trigger("paused"))},e.prototype.resume=function(){var t,e,n,i,r;if(!this.isPlaying())return this.playing=!0,this.resumedAt=this.now(),r=this.stdout_frames()[this.frameNo],e=r[0],t=r[1],i=1e3*e,n=i-this.totalFrameWaitTime,this.processFrameWithDelay(n),this.trigger("resumed")},e.prototype.togglePlay=function(){return this.isPlaying()?this.pause():this.play()},e.prototype.isPlaying=function(){return this.playing},e.prototype.isPaused=function(){return!this.isPlaying()&&!this.isFinished()&&this.frameNo>0},e.prototype.isFinished=function(){return!this.isPlaying()&&this.frameNo>=this.stdout_frames().length},e.prototype.seek=function(t){return this.stop(),this.rewindTo(t),this.resume()},e.prototype.rewindTo=function(t){var e,n,i,r,s,o,a,u,c,l;for(r=this.options.duration,o=r*t/100,s=0,a=0,u=0,i=n=void 0;o>a&&(l=this.stdout_frames()[s],i=l[0],e=l[1],!(a+i>=o));)this.trigger("render",e),a+=i,s+=1;return this.frameNo=s,this.completedFramesTime=1e3*a,this.lastFrameAt=this.now(),c=o-a,this.totalFrameWaitTime=1e3*c},e.prototype.startTimeReporter=function(){return this.timeReportId=setInterval(function(t){return function(){return t.trigger("time",t.currentTime())}}(this),500)},e.prototype.stopTimeReporter=function(){return clearInterval(this.timeReportId)},e.prototype.currentTime=function(){return this.completedFramesTime+this.currentFrameTime()},e.prototype.currentFrameTime=function(){return this.isPlaying()?this.playingFrameTime():this.isPaused()?this.pausedFrameTime():0},e.prototype.playingFrameTime=function(){return this.frameWasPaused()?this.currentFrameWithPauseTime():this.currentFrameWithNoPauseTime()},e.prototype.frameWasPaused=function(){return!!this.pausedAt},e.prototype.currentFrameWithPauseTime=function(){return this.totalFrameWaitTime+this.sinceResumeTime()},e.prototype.currentFrameWithNoPauseTime=function(){return this.now()-this.lastFrameAt},e.prototype.sinceResumeTime=function(){return this.now()-this.resumedAt},e.prototype.pausedFrameTime=function(){return this.totalFrameWaitTime},e.prototype.clearPauseState=function(){return this.pausedAt=void 0,this.resumedAt=void 0,this.totalFrameWaitTime=0},e.prototype.nextFrame=function(){var t,e,n,i;return n=this.stdout_frames()[this.frameNo],n&&0!==n.length?(e=n[0],t=n[1],i=1e3*e*(1/this.options.speed),this.processFrameWithDelay(i),!0):(this.playing=!1,this.trigger("finished"),!1)},e.prototype.processFrameWithDelay=function(t){return this.nextFrameTimeoutId=setTimeout(function(t){return function(){return t.trigger("wakeup"),t.processFrame()
}}(this),t)},e.prototype.processFrame=function(){var t,e,n;return n=this.stdout_frames()[this.frameNo],e=n[0],t=n[1],this.trigger("render",t),this.frameNo+=1,this.completedFramesTime+=1e3*e,this.lastFrameAt=this.now(),this.clearPauseState(),this.nextFrame()},e}()}.call(this),function(){var t,e=[].slice;t=void 0,addEventListener("message",function(e){return function(n){var i;switch(i=n.data,i.message){case"init":return e.initialize(i.options);case"call":switch(i.objectName){case"movie":return t[i.method].apply(t,i.args)}}}}(this)),this.initialize=function(n){return t=new Asciinema.Movie({stdout_frames:n.stdout_frames,duration:n.duration,speed:n.speed,benchmark:n.benchmark,cols:n.cols,lines:n.lines}),t.on("all",function(){var t,n;return n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],postMessage({evt:n,src:"movie",args:t})})}}.call(this);