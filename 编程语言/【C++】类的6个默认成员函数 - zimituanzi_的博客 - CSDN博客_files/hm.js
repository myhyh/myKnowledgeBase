(function(){var h={},mt={},c={id:"6bcd52f51e9b3dce32bec4a3997715ac",dm:["csdn.net","dingyue.programmer.com.cn","gitbook.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:true,align:1,nv:1,vdur:1800000,age:31536000000,rec:1,rp:[[119608, 2]],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,aet:'a,input,button',hca:'1E164A37CCA2BA43',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var s=void 0,t=!0,u=null,v=!1;mt.cookie={};mt.cookie.set=function(b,a,e){var f;e.F&&(f=new Date,f.setTime(f.getTime()+e.F));document.cookie=b+"="+a+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(f?"; expires="+f.toGMTString():"")+(e.Yb?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:u};
mt.cookie.xb=function(b,a){try{var e="Hm_ck_"+ +new Date;mt.cookie.set(e,"is-cookie-enabled",{domain:b,path:a,F:s});var f="is-cookie-enabled"===mt.cookie.get(e)?"1":"0";mt.cookie.set(e,"",{domain:b,path:a,F:-1});return f}catch(g){return"0"}};mt.lang={};mt.lang.d=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};mt.lang.ya=function(b){return mt.lang.d(b,"Number")&&isFinite(b)};mt.lang.ea=function(){return mt.lang.d(c.aet,"String")};
mt.lang.h=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.O=function(b,a){var e=v;if(b==u||!mt.lang.d(b,"Array")||a===s)return e;if(Array.prototype.indexOf)e=-1!==b.indexOf(a);else for(var f=0;f<b.length;f++)if(b[f]===a){e=t;break}return e};
(function(){var b=mt.lang;mt.e={};mt.e.ua=function(a){return document.getElementById(a)};mt.e.ba=function(a,b){var f=[],g=[];if(!a)return g;for(;a.parentNode!=u;){for(var m=0,p=0,n=a.parentNode.childNodes.length,d=0;d<n;d++){var l=a.parentNode.childNodes[d];if(l.nodeName===a.nodeName&&(m++,l===a&&(p=m),0<p&&1<m))break}if((n=""!==a.id)&&b){f.unshift("#"+encodeURIComponent(a.id));break}else n&&(n="#"+encodeURIComponent(a.id),n=0<f.length?n+">"+f.join(">"):n,g.push(n)),f.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+
(1<m?"["+p+"]":""));a=a.parentNode}g.push(f.join(">"));return g};mt.e.va=function(a){return(a=mt.e.ba(a,t))&&a.length?String(a[0]):""};mt.e.Ub=function(a){return mt.e.ba(a,v)};mt.e.$a=function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return u};mt.e.bb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.e.hb=function(a){var b={top:0,left:0};if(!a)return b;var f=mt.e.bb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());
return{top:b.top+(window.pageYOffset||f.scrollTop)-(f.clientTop||0),left:b.left+(window.pageXOffset||f.scrollLeft)-(f.clientLeft||0)}};mt.e.getAttribute=function(a,b){var f=a.getAttribute&&a.getAttribute(b)||u;if(!f&&a.attributes&&a.attributes.length)for(var g=a.attributes,m=g.length,p=0;p<m;p++)g[p].nodeName===b&&(f=g[p].nodeValue);return f};mt.e.N=function(a){var b="document";a.tagName!==s&&(b=a.tagName);return b.toLowerCase()};mt.e.lb=function(a){var e="";a.textContent?e=b.trim(a.textContent):
a.innerText&&(e=b.trim(a.innerText));e&&(e=e.replace(/\s+/g," ").substring(0,255));return e};mt.e.cb=function(a){var b=mt.e.N(a);"input"===b&&("button"===a.type||"submit"===a.type)?a=a.value||"":"img"===b?(b=mt.e.getAttribute,a=b(a,"alt")||b(a,"title")||b(a,"src")):a="body"===b||"html"===b?["(hm-default-content-for-",b,")"].join(""):mt.e.lb(a);return String(a).substring(0,255)};(function(){(mt.e.Ba=function(){function a(){if(!a.Q){a.Q=t;for(var b=0,f=g.length;b<f;b++)g[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(f){setTimeout(b,
1);return}a()}var f=v,g=[],m;document.addEventListener?m=function(){document.removeEventListener("DOMContentLoaded",m,v);a()}:document.attachEvent&&(m=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",m),a())});(function(){if(!f)if(f=t,"complete"===document.readyState)a.Q=t;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",m,v),window.addEventListener("load",a,v);else if(document.attachEvent){document.attachEvent("onreadystatechange",
m);window.attachEvent("onload",a);var g=v;try{g=window.frameElement==u}catch(n){}document.documentElement.doScroll&&g&&b()}})();return function(b){a.Q?b():g.push(b)}}()).Q=v})();return mt.e})();mt.event={};mt.event.c=function(b,a,e){b.attachEvent?b.attachEvent("on"+a,function(a){e.call(b,a)}):b.addEventListener&&b.addEventListener(a,e,v)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=v};
(function(){var b=mt.event;mt.g={};mt.g.da=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.vb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:s;mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.Eb=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.G=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.A=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.orientation=0;(function(){function a(){var a=0;window.orientation!==s&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==s)&&(a=screen.orientation.angle);mt.g.orientation=a}a();b.c(window,"orientationchange",a)})();return mt.g})();
mt.m={};mt.m.parse=function(b){return(new Function("return ("+b+")"))()};
mt.m.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(f){switch(typeof f){case "undefined":return"undefined";case "number":return isFinite(f)?String(f):"null";case "string":return b(f);case "boolean":return String(f);
default:if(f===u)return"null";if(f instanceof Array){var e=["["],m=f.length,p,n,d;for(n=0;n<m;n++)switch(d=f[n],typeof d){case "undefined":case "function":case "unknown":break;default:p&&e.push(","),e.push(mt.m.stringify(d)),p=1}e.push("]");return e.join("")}if(f instanceof Date)return'"'+f.getFullYear()+"-"+a(f.getMonth()+1)+"-"+a(f.getDate())+"T"+a(f.getHours())+":"+a(f.getMinutes())+":"+a(f.getSeconds())+'"';p=["{"];n=mt.m.stringify;for(m in f)if(Object.prototype.hasOwnProperty.call(f,m))switch(d=
f[m],typeof d){case "undefined":case "unknown":case "function":break;default:e&&p.push(","),e=1,p.push(n(m)+":"+n(d))}p.push("}");return p.join("")}}}();mt.localStorage={};mt.localStorage.U=function(){if(!mt.localStorage.j)try{mt.localStorage.j=document.createElement("input"),mt.localStorage.j.type="hidden",mt.localStorage.j.style.display="none",mt.localStorage.j.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.j)}catch(b){return v}return t};
mt.localStorage.set=function(b,a,e){var f=new Date;f.setTime(f.getTime()+e||31536E6);try{window.localStorage?(a=f.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.U()&&(mt.localStorage.j.expires=f.toUTCString(),mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.setAttribute(b,a),mt.localStorage.j.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),e=b.substring(0,a)-0;if(e&&e>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.U())try{return mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.getAttribute(b)}catch(f){}return u};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.U())try{mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.removeAttribute(b),mt.localStorage.j.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){if(window.sessionStorage)try{window.sessionStorage.setItem(b,a)}catch(e){}};
mt.sessionStorage.get=function(b){return window.sessionStorage?window.sessionStorage.getItem(b):u};mt.sessionStorage.remove=function(b){window.sessionStorage&&window.sessionStorage.removeItem(b)};mt.Ea={};mt.Ea.log=function(b,a){var e=new Image,f="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[f]=e;e.onload=function(){e.onload=u;e=window[f]=u;a&&a(b)};e.src=b};mt.ka={};
mt.ka.mb=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return b};
mt.ka.Tb=function(b,a,e,f,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+e+'" height="'+f+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+e+'" height="'+f+'" src="'+a+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.k=function(b,a){var e=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return e?e[3]:u};mt.url.Vb=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:u};mt.url.fb=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):u};mt.url.aa=function(b){return(b=mt.url.fb(b))?b.replace(/:\d+$/,""):b};mt.url.ba=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):u};
(function(){function b(){for(var a=v,b=document.getElementsByTagName("script"),f=b.length,f=100<f?100:f,g=0;g<f;g++){var m=b[g].src;if(m&&0===m.indexOf("https://hm.baidu.com/h")){a=t;break}}return a}return h.Za=b})();var A=h.Za;
h.l={Wb:"http://tongji.baidu.com/hm-web/welcome/ico",ia:"hm.baidu.com/hm.gif",La:"tongji.baidu.com",rb:"hmmd",tb:"hmpl",Pb:"utm_medium",qb:"hmkw",Rb:"utm_term",ob:"hmci",Ob:"utm_content",ub:"hmsr",Qb:"utm_source",pb:"hmcu",Nb:"utm_campaign",B:0,z:Math.round(+new Date/1E3),D:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",R:A()||"https:"===document.location.protocol?"https:":"http:",Xb:0,Ra:6E5,yb:6E5,Fb:5E3,Sa:5,C:1024,Qa:1,w:2147483647,Fa:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
H:t,qa:["a","input","button"],Na:{id:"data-hm-id",X:"data-hm-class",na:"data-hm-xpath",content:"data-hm-content",la:"data-hm-tag",link:"data-hm-link"},pa:"data-hm-enabled",oa:"data-hm-disabled"};(function(){var b={r:{},c:function(a,b){this.r[a]=this.r[a]||[];this.r[a].push(b)},L:function(a,b){this.r[a]=this.r[a]||[];for(var f=this.r[a].length,g=0;g<f;g++)this.r[a][g](b)}};return h.o=b})();
(function(){function b(b,f){var g=document.createElement("script");g.charset="utf-8";a.d(f,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=u,f()}:g.onload=function(){f()});g.src=b;var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(g,m)}var a=mt.lang;return h.load=b})();
(function(){function b(){var b="";h.b.a.nv?(b=encodeURIComponent(document.referrer),window.sessionStorage?e.set("Hm_from_"+c.id,b):a.set("Hm_from_"+c.id,b,864E5)):b=(window.sessionStorage?e.get("Hm_from_"+c.id):a.get("Hm_from_"+c.id))||"";return b}var a=mt.localStorage,e=mt.sessionStorage;return h.ta=b})();
(function(){var b=mt.e,a=mt.lang,e=mt.event,f=mt.g,g=h.l,m=h.o,p=[],n={Ga:function(){c.ctrk&&(e.c(document,"mouseup",n.Pa()),e.c(window,"unload",function(){n.S()}),setInterval(function(){n.S()},g.Ra))},Pa:function(){return function(a){a=n.ab(a);if(""!==a){var b=(g.R+"//"+g.ia+"?"+h.b.Da().replace(/ep=[^&]*/,"ep="+encodeURIComponent(a))).length;b+(g.w+"").length>g.C||(b+encodeURIComponent(p.join("!")+(p.length?"!":"")).length+(g.w+"").length>g.C&&n.S(),p.push(a),(p.length>=g.Sa||/\*a\*/.test(a))&&
n.S())}}},ab:function(l){var k=l.target||l.srcElement;if(0===g.Qa){var d=(k.tagName||"").toLowerCase();if("embed"==d||"object"==d)return""}var q;f.da?(q=Math.max(document.documentElement.scrollTop,document.body.scrollTop),d=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),d=l.clientX+d,q=l.clientY+q):(d=l.pageX,q=l.pageY);l=n.gb(l,k,d,q);var r=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:d-=r/2;break;case 2:d-=r}r=
[];r.push(d);r.push(q);r.push(l.zb);r.push(l.Ab);r.push(l.Cb);r.push(a.h(l.Bb));r.push(l.Sb);r.push(l.nb);(k="a"===(k.tagName||"").toLowerCase()?k:b.$a(k))?(r.push("a"),r.push(a.h(encodeURIComponent(k.href)))):r.push("b");return r.join("*")},gb:function(l,k,d,q){l=b.va(k);var r=0,e=0,x=0,g=0;if(k&&(r=k.offsetWidth||k.clientWidth,e=k.offsetHeight||k.clientHeight,g=b.hb(k),x=g.left,g=g.top,a.d(k.getBBox,"Function")&&(e=k.getBBox(),r=e.width,e=e.height),"html"===(k.tagName||"").toLowerCase()))r=Math.max(r,
k.clientWidth),e=Math.max(e,k.clientHeight);return{zb:Math.round(100*((d-x)/r)),Ab:Math.round(100*((q-g)/e)),Cb:f.orientation,Bb:l,Sb:r,nb:e}},S:function(){0!==p.length&&(h.b.a.et=2,h.b.a.ep=p.join("!"),h.b.i(),p=[])}},d={Ja:function(){c.ctrk&&setInterval(d.Gb,g.Fb)},Gb:function(){var a=f.G()+f.A();0<a-h.b.a.vl&&(h.b.a.vl=a)}};m.c("pv-b",n.Ga);m.c("pv-b",d.Ja);return n})();
(function(){var b=mt.lang,a=mt.e,e=mt.event,f=mt.g,g=h.l,m=h.o,p=+new Date,n=[],d={sa:function(){return function(l){if(h.b&&h.b.H&&c.aet&&c.aet.length){var k=l.target||l.srcElement;if(k){var e=h.b.qa,q=a.getAttribute(k,g.pa)!=u?t:v;if(a.getAttribute(k,g.oa)==u)if(q)d.V(d.$(k,l));else{var r=a.N(k);if(b.O(e,"*")||b.O(e,r))d.V(d.$(k,l));else for(;k.parentNode!=u;){var q=k.parentNode,r=a.N(q),f="a"===r&&b.O(e,"a")?t:v,r="button"===r&&b.O(e,"button")?t:v,x=a.getAttribute(q,g.pa)!=u?t:v;if(a.getAttribute(q,
g.oa)==u&&(f||r||x)){d.V(d.$(q,l));break}k=k.parentNode}}}}}},$:function(l,k){var d={},q=g.Na;d.id=a.getAttribute(l,q.id)||a.getAttribute(l,"id")||"";d.X=a.getAttribute(l,q.X)||a.getAttribute(l,"class")||"";d.na=a.getAttribute(l,q.na)||a.va(l);d.content=a.getAttribute(l,q.content)||a.cb(l);d.la=a.getAttribute(l,q.la)||a.N(l);d.link=a.getAttribute(l,q.link)||a.getAttribute(l,"href")||"";d.type=k.type||"click";q=b.ya(l.offsetTop)?l.offsetTop:0;"click"===k.type?q=f.da?k.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):k.pageY:"touchend"===k.type&&(k.ga&&b.d(k.ga.changedTouches,"Array")&&k.ga.changedTouches.length)&&(q=k.ga.changedTouches[0].pageY);d.Mb=q;return d},V:function(a){var k=b.h;a=[+new Date-(h.b.s!==s?h.b.s:p),k(a.id),k(a.X),k(a.la),k(a.na),k(a.link),k(a.content),a.type,a.Mb].join("*");d.W(a);b.d(this.J(),"Function")&&this.J()()},W:function(a){a.length>g.C||(encodeURIComponent(n.join("!")+a).length>g.C&&(d.K(n.join("!")),n=[]),n.push(a))},K:function(a){h.b.a.et=5;h.b.a.ep=a;h.b.i()},
J:function(){return function(){n&&n.length&&(d.K(n.join("!")),n=[])}}};b.ea()&&""!==c.aet&&m.c("pv-b",function(){e.c(document,"click",d.sa());"ontouchend"in document&&e.c(window,"touchend",d.sa());e.c(window,"unload",d.J())});return d})();
(function(){var b=mt.event,a=mt.g,e=h.l,f=h.o,g=+new Date,m=[],p=u,n={Va:function(){return function(){h.b&&(h.b.H&&c.aet&&c.aet.length)&&(window.clearTimeout(p),p=window.setTimeout(function(){n.Ia(a.G()+a.A())},150))}},Ia:function(a){n.W([+new Date-(h.b.s!==s?h.b.s:g),a].join("*"))},W:function(a){if(encodeURIComponent(m.join("!")+a).length>e.C||3<m.length)n.K(m.join("!")),m=[];m.push(a)},K:function(b){h.b.a.et=6;h.b.a.vh=a.A();h.b.a.ep=b;h.b.i()},J:function(){return function(){m&&m.length&&(n.K(m.join("!")),
m=[])}}};mt.lang.ea()&&""!==c.aet&&f.c("pv-b",function(){b.c(window,"scroll",n.Va());b.c(window,"unload",n.J())});return n})();
(function(){var b=mt.e,a=h.l,e=h.load,f=h.ta;h.o.c("pv-b",function(){var g=a.protocol+"//crs.baidu.com/";c.rec&&b.Ba(function(){for(var m=0,p=c.rp.length;m<p;m++){var n=c.rp[m][0],d=c.rp[m][1],l=b.ua("hm_t_"+n);if(d&&!(2==d&&!l||l&&""!==l.innerHTML))l="",l=Math.round(Math.random()*a.w),l=4==d?g+"hl.js?"+["siteId="+c.id,"planId="+n,"rnd="+l].join("&"):g+"t.js?"+["siteId="+c.id,"planId="+n,"from="+f(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
l].join("&"),e(l)}})})})();(function(){var b=h.l,a=h.load,e=h.ta;h.o.c("pv-b",function(){if(c.trust&&c.vcard){var f="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+e(),"rnd="+Math.round(Math.random()*b.w),"hm=1"].join("&");a(f)}})})();
(function(){function b(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.Y.ib()+","+h.Y.eb();h.b.i()}}function a(){clearTimeout(z);var b;y&&(b="visible"==document[y]);x&&(b=!document[x]);n="undefined"==typeof b?t:b;if((!p||!d)&&n&&l)r=t,w=+new Date;else if(p&&d&&(!n||!l))r=v,q+=+new Date-w;p=n;d=l;z=setTimeout(a,100)}function e(a){var b=document,l="";if(a in b)l=a;else for(var q=["webkit","ms","moz","o"],k=0;k<q.length;k++){var d=q[k]+a.charAt(0).toUpperCase()+a.slice(1);if(d in b){l=
d;break}}return l}function f(b){if(!("focus"==b.type||"blur"==b.type)||!(b.target&&b.target!=window))l="focus"==b.type||"focusin"==b.type?t:v,a()}var g=mt.event,m=h.o,p=t,n=t,d=t,l=t,k=+new Date,w=k,q=0,r=t,y=e("visibilityState"),x=e("hidden"),z;a();(function(){var b=y.replace(/[vV]isibilityState/,"visibilitychange");g.c(document,b,a);g.c(window,"pageshow",a);g.c(window,"pagehide",a);"object"==typeof document.onfocusin?(g.c(document,"focusin",f),g.c(document,"focusout",f)):(g.c(window,"focus",f),
g.c(window,"blur",f))})();h.Y={ib:function(){return+new Date-k},eb:function(){return r?+new Date-w+q:q}};m.c("pv-b",function(){g.c(window,"unload",b())});return h.Y})();
(function(){var b=mt.lang,a=h.l,e=h.load,f={wb:function(f){if((window._dxt===s||b.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var m=h.b.M();e([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(m)].join(""),f)}},Lb:function(a){if(b.d(a,"String")||b.d(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Ta=f})();
(function(){function b(a,b,d,q){if(!(a===s||b===s||q===s)){if(""===a)return[b,d,q].join("*");a=String(a).split("!");for(var e,f=v,x=0;x<a.length;x++)if(e=a[x].split("*"),String(b)===e[0]){e[1]=d;e[2]=q;a[x]=e.join("*");f=t;break}f||a.push([b,d,q].join("*"));return a.join("!")}}function a(b){for(var k in b)if({}.hasOwnProperty.call(b,k)){var d=b[k];e.d(d,"Object")||e.d(d,"Array")?a(d):b[k]=String(d)}}var e=mt.lang,f=mt.m,g=mt.g,m=h.l,p=h.o,n=h.Ta,d={I:[],T:0,za:v,p:{ma:"",page:""},init:function(){d.f=
0;p.c("pv-b",function(){d.Ua();d.Xa()});p.c("pv-d",function(){d.Ya();d.p.page=""});p.c("stag-b",function(){h.b.a.api=d.f||d.T?d.f+"_"+d.T:"";h.b.a.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),d.p.ma,d.p.page].join("!")});p.c("stag-d",function(){h.b.a.api=0;d.f=0;d.T=0})},Ua:function(){var a=window._hmt||[];if(!a||e.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var l=arguments[b];e.d(l,"Array")&&(a.cmd[a.id].push(l),"_setAccount"===
l[0]&&(1<l.length&&/^[0-9a-f]{32}$/.test(l[1]))&&(l=l[1],a.id=l,a.cmd[l]=a.cmd[l]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},Xa:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],e=/^_track(Event|MobConv|Order|RTEvent)$/,q=0,f=b.length;q<f;q++){var g=b[q];e.test(g[0])?d.I.push(g):d.ha(g)}a.cmd[c.id]={push:d.ha}},Ya:function(){if(0<d.I.length)for(var a=0,b=d.I.length;a<b;a++)d.ha(d.I[a]);d.I=u},ha:function(a){var b=a[0];if(d.hasOwnProperty(b)&&
e.d(d[b],"Function"))d[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(d.f|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],v===a||t===a))d.f|=2,h.b.wa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){d.f|=4;h.b.a.et=0;h.b.a.ep="";h.b.a.vl=g.G()+g.A();h.b.a.kb=0;h.b.ca?(h.b.a.nv=0,h.b.a.st=4):h.b.ca=t;var b=h.b.a.u,e=h.b.a.su;h.b.a.u=m.protocol+"//"+document.location.host+a[1];d.za||(h.b.a.su=document.location.href);h.b.i();h.b.a.u=b;
h.b.a.su=e;h.b.s=+new Date}},_trackEvent:function(a){2<a.length&&(d.f|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=e.h(a[1])+"*"+e.h(a[2])+(a[3]?"*"+e.h(a[3]):"")+(a[4]?"*"+e.h(a[4]):""),h.b.i())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],f=a[4]||3;if(0<b&&6>b&&0<f&&4>f){d.T++;for(var q=(h.b.a.cv||"*").split("!"),r=q.length;r<b-1;r++)q.push("*");q[b-1]=f+"*"+e.h(a[2])+"*"+e.h(a[3]);h.b.a.cv=q.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+
c.id,encodeURIComponent(a),c.age):h.b.Db("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var d=e.h(a[1]);a=e.h(a[2]);if(d!==s&&a!==s){var f=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f=b(f,d,1,a);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var f=e.h(a[1]);a=e.h(a[2]);if(f!==s&&a!==s){var g=d.p.ma,g=b(g,f,2,a);d.p.ma=g}}},_setPageTag:function(a){if(!(3>a.length)){var f=e.h(a[1]);a=e.h(a[2]);if(f!==s&&a!==s){var g=d.p.page,
g=b(g,f,3,a);d.p.page=g}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?m.protocol+"//"+window.location.host+a[1]:a[1],d.za=t)},_trackOrder:function(b){b=b[1];e.d(b,"Object")&&(a(b),d.f|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=f.stringify(b),h.b.i())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])d.f|=32,h.b.a.et=93,h.b.a.ep=a,h.b.i()},_trackRTPageview:function(b){b=b[1];e.d(b,"Object")&&(a(b),b=f.stringify(b),
512>=encodeURIComponent(b).length&&(d.f|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(e.d(b,"Object")){a(b);b=encodeURIComponent(f.stringify(b));var k=function(a){var b=h.b.a.rt;d.f|=128;h.b.a.et=90;h.b.a.rt=a;h.b.i();h.b.a.rt=b},g=b.length;if(900>=g)k.call(this,b);else for(var g=Math.ceil(g/900),q="block|"+Math.round(Math.random()*m.w).toString(16)+"|"+g+"|",r=[],y=0;y<g;y++)r.push(y),r.push(b.substring(900*y,900*y+900)),k.call(this,q+r.join("|")),r=[]}},_setUserId:function(a){a=a[1];n.wb();
n.Lb(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],v===a||t===a))h.b.xa=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],v===a||t===a))h.b.H=a}};d.init();h.Ma=d;return h.Ma})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=t,this.a={},this.xa=this.wa=t,this.H=k.H,this.qa=g.ea()&&0<c.aet.length?c.aet.split(","):"",this.ca=v,this.init())}var a=mt.url,e=mt.Ea,f=mt.ka,g=mt.lang,m=mt.cookie,p=mt.g,n=mt.localStorage,d=mt.sessionStorage,l=mt.m,k=h.l,w=h.o;b.prototype={fa:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},Aa:function(a,b){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(b)},P:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.Aa(b,c.dm[d]))return t}else{var f=a.aa(b);if(f&&this.fa(f,c.dm[d]))return t}return v},M:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.fa(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},Z:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.Aa(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,"$1")+
"/"}return"/"},jb:function(){if(!document.referrer)return k.z-k.B>c.vdur?1:4;var b=v;this.P(document.referrer)&&this.P(document.location.href)?b=t:(b=a.aa(document.referrer),b=this.fa(b||"",document.location.hostname));return b?k.z-k.B>c.vdur?1:4:3},getData:function(a){try{return m.get(a)||d.get(a)||n.get(a)}catch(b){}},setData:function(a,b,f){try{m.set(a,b,{domain:this.M(),path:this.Z(),F:f}),f?n.set(a,b,f):d.set(a,b)}catch(e){}},Db:function(a){try{m.set(a,"",{domain:this.M(),path:this.Z(),F:-1}),
d.remove(a),n.remove(a)}catch(b){}},Jb:function(){var a,b,d,f,e;k.B=this.getData("Hm_lpvt_"+c.id)||0;13===k.B.length&&(k.B=Math.round(k.B/1E3));b=this.jb();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){f=d.split(",");for(e=f.length-1;0<=e;e--)13===f[e].length&&(f[e]=""+Math.round(f[e]/1E3));for(;2592E3<k.z-f[0];)f.shift();e=4>f.length?2:3;for(1===a&&f.push(k.z);4<f.length;)f.shift();d=f.join(",");f=f[f.length-1]}else d=k.z,f="",e=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,
k.z);d=m.xb(this.M(),this.Z());if(0===c.nv&&this.P(document.location.href)&&(""===document.referrer||this.P(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=f;this.a.lv=e},Da:function(){for(var a=[],b=this.a.et,d=+new Date,f=0,e=k.Fa.length;f<e;f++){var g=k.Fa[f],l=this.a[g];"undefined"!==typeof l&&""!==l&&("tt"!==g||"tt"===g&&0===b)&&(("ct"!==g||"ct"===g&&0===b)&&("kb"!==g||"kb"===g&&3===b))&&a.push(g+"="+encodeURIComponent(l))}switch(b){case 0:a.push("sn="+k.D);this.a.rt&&
a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+k.D);break;case 5:a.push("sn="+k.D);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 6:a.push("sn="+k.D);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 85:a.push("sn="+k.D);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},Kb:function(){this.Jb();this.a.si=c.id;this.a.hca=s;this.a.su=document.referrer;this.a.hh=window.location.hash;this.a.ds=p.Eb;this.a.cl=p.colorDepth+"-bit";this.a.ln=String(p.language).toLowerCase();
this.a.ja=p.javaEnabled?1:0;this.a.ck=p.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=f.mb();this.a.v="1.2.43";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";this.a.vl=p.G()+p.A();var b=document.location.href;this.a.cm=a.k(b,k.rb)||"";this.a.cp=a.k(b,k.tb)||a.k(b,k.Pb)||"";this.a.cw=a.k(b,k.qb)||a.k(b,k.Rb)||"";this.a.ci=a.k(b,k.ob)||a.k(b,k.Ob)||"";this.a.cf=a.k(b,k.ub)||a.k(b,k.Qb)||"";this.a.cu=a.k(b,k.pb)||a.k(b,k.Nb)||""},init:function(){try{this.Kb(),
0===this.a.nv?this.Ib():this.ra(),h.b=this,this.Oa(),w.L("pv-b"),this.Hb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(k.R+"//"+k.ia+"?"+b.join("&"))}},Hb:function(){function a(){w.L("pv-d")}this.wa?(this.ca=t,this.a.et=0,this.a.ep="",this.a.vl=p.G()+p.A(),this.i(a)):a();this.s=+new Date},i:function(a){if(this.xa){var b=this;b.a.rnd=Math.round(Math.random()*k.w);w.L("stag-b");
var d=k.R+"//"+k.ia+"?"+b.Da();w.L("stag-d");b.Ka(d);e.log(d,function(d){b.Ca(d);g.d(a,"Function")&&a.call(b)})}},Oa:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),f=a.aa(document.referrer)===k.La?1:0,e=a.k(b,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(e);b&&(d.test(b)&&f&&g)&&(this.a.rnd=Math.round(Math.random()*k.w),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",k.protocol+"//"+c.js+e+".js?"+
this.a.rnd),e=document.getElementsByTagName("script")[0],e.parentNode.insertBefore(b,e))},Ka:function(a){var b;try{b=l.parse(d.get("Hm_unsent_"+c.id)||"[]")}catch(f){b=[]}var e=this.a.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);d.set("Hm_unsent_"+c.id,l.stringify(b))},Ca:function(a){var b;try{b=l.parse(d.get("Hm_unsent_"+c.id)||"[]")}catch(f){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,
"")){b.splice(e,1);break}b.length?d.set("Hm_unsent_"+c.id,l.stringify(b)):this.ra()}},ra:function(){d.remove("Hm_unsent_"+c.id)},Ib:function(){var a=this,b;try{b=l.parse(d.get("Hm_unsent_"+c.id)||"[]")}catch(f){b=[]}if(b.length)for(var g=function(b){e.log(k.R+"//"+b,function(b){a.Ca(b)})},m=0;m<b.length;m++)g(b[m])}};return new b})();
(function(){var b=mt.event,a=mt.lang,e=h.l;if(c.kbtrk&&"undefined"!==typeof h.b){h.b.a.kb=a.ya(h.b.a.kb)?h.b.a.kb:0;var f=function(){h.b.a.et=85;h.b.a.ep=h.b.a.kb;h.b.i()};b.c(document,"keyup",function(){h.b.a.kb++});b.c(window,"unload",function(){f()});setInterval(f,e.yb)}})();var B=h.l,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var b=mt.g,a=mt.lang,e=mt.event,f=mt.m;if("undefined"!==typeof h.b&&(c.med||(!b.da||7<b.vb)&&c.cvcc)){var g,m,p,n,d=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},l=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===v)return v},k=function(b,d){var e={};e.n=g;e.t="clk";e.v=b;if(d){var k=d.getAttribute("href"),l=d.getAttribute("onclick")?""+d.getAttribute("onclick"):u,m=d.getAttribute("id")||"";p.test(k)?(e.sn="mediate",
e.snv=k):a.d(l,"String")&&p.test(l)&&(e.sn="wrap",e.snv=l);e.id=m}h.b.a.et=86;h.b.a.ep=f.stringify(e);h.b.i();for(e=+new Date;400>=+new Date-e;);};if(c.med)m="/zoosnet",g="swt",p=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,n={click:function(){for(var a=[],b=d(document.getElementsByTagName("a")),b=[].concat.apply(b,d(document.getElementsByTagName("area"))),b=[].concat.apply(b,d(document.getElementsByTagName("img"))),e,f,g=0,k=b.length;g<k;g++)e=b[g],f=e.getAttribute("onclick"),
e=e.getAttribute("href"),(p.test(f)||p.test(e))&&a.push(b[g]);return a}};else if(c.cvcc){m="/other-comm";g="other";p=c.cvcc.q||s;var w=c.cvcc.id||s;n={click:function(){for(var a=[],b=d(document.getElementsByTagName("a")),b=[].concat.apply(b,d(document.getElementsByTagName("area"))),b=[].concat.apply(b,d(document.getElementsByTagName("img"))),e,f,g,k=0,l=b.length;k<l;k++)e=b[k],p!==s?(f=e.getAttribute("onclick"),g=e.getAttribute("href"),w?(e=e.getAttribute("id"),(p.test(f)||p.test(g)||w.test(e))&&
a.push(b[k])):(p.test(f)||p.test(g))&&a.push(b[k])):w!==s&&(e=e.getAttribute("id"),w.test(e)&&a.push(b[k]));return a}}}if("undefined"!==typeof n&&"undefined"!==typeof p){var q;m+=/\/$/.test(m)?"":"/";var r=function(b,d){if(q===d)return k(m+b,d),v;if(a.d(d,"Array")||a.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(q===d[e])return k(m+b+"/"+(e+1),d[e]),v};e.c(document,"mousedown",function(b){b=b||window.event;q=b.target||b.srcElement;var d={};for(l(n,function(b,e){d[b]=a.d(e,"Function")?e():document.getElementById(e)});q&&
q!==document&&l(d,r)!==v;)q=q.parentNode})}}})();(function(){var b=mt.e,a=mt.lang,e=mt.event,f=mt.m;if("undefined"!==typeof h.b&&a.d(c.cvcf,"Array")&&0<c.cvcf.length){var g={Ha:function(){for(var a=c.cvcf.length,f,n=0;n<a;n++)(f=b.ua(decodeURIComponent(c.cvcf[n])))&&e.c(f,"click",g.Wa())},Wa:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=f.stringify(a);h.b.i()}}};b.Ba(function(){g.Ha()})}})();
(function(){var b=mt.event,a=mt.m;if(c.med&&"undefined"!==typeof h.b){var e=+new Date,f={n:"anti",sb:0,kb:0,clk:0},g=function(){h.b.a.et=86;h.b.a.ep=a.stringify(f);h.b.i()};b.c(document,"click",function(){f.clk++});b.c(document,"keyup",function(){f.kb=1});b.c(window,"scroll",function(){f.sb++});b.c(window,"unload",function(){f.t=+new Date-e;g()});b.c(window,"load",function(){setTimeout(g,5E3)})}})();})();
