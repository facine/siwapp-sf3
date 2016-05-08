/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-borderradius-cssgradients-fontface-geolocation-domprefixes-mq-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?C.className.baseVal=t:C.className=t)}function o(e,t){return typeof e===t}function s(){var e,t,n,r,s,i,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function l(e,n,r,o){var s,l,f,u,c="modernizr",d=i("div"),p=a();if(parseInt(r,10))for(;r--;)f=i("div"),f.id=o?o[r]:c+(r+1),d.appendChild(f);return s=i("style"),s.type="text/css",s.id="s"+c,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),l=n(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=u,C.offsetHeight):d.parentNode.removeChild(d),!!l}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+c(t[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function p(e,t,r,s){function a(){c&&(delete R.style,delete R.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var l=d(e,r);if(!o(l,"undefined"))return l}for(var c,p,m,g,h,v=["modernizr","tspan"];!R.style;)c=!0,R.modElem=i(v.shift()),R.style=R.modElem.style;for(m=e.length,p=0;m>p;p++)if(g=e[p],h=R.style[g],u(g,"-")&&(g=f(g)),R.style[g]!==n){if(s||o(r,"undefined"))return a(),"pfx"==t?g:!0;try{R.style[g]=r}catch(y){}if(R.style[g]!=h)return a(),"pfx"==t?g:!0}return a(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function g(e,t,n){var r;for(var s in e)if(e[s]in t)return n===!1?e[s]:(r=t[e[s]],o(r,"function")?m(r,n||t):r);return!1}function h(e,t,n,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+k.join(i+" ")+i).split(" ");return o(t,"string")||o(t,"undefined")?p(a,t,r,s):(a=(e+" "+T.join(i+" ")+i).split(" "),g(a,t,n))}function v(e,t,r){return h(e,n,n,t,r)}var y=[],w=[],b={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("geolocation","geolocation"in navigator);var x=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=x;var C=t.documentElement,S="svg"===C.nodeName.toLowerCase(),_="Moz O ms Webkit",T=b._config.usePrefixes?_.toLowerCase().split(" "):[];b._domPrefixes=T,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,s=x.length-1;s>o;o++)e=0===o?"to ":"",r+=t+x[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var a=i("a"),l=a.style;return l.cssText=r,(""+l.backgroundImage).indexOf("gradient")>-1});var E=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();b.mq=E;var P=b.testStyles=l,z=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return n||o||r}();z?Modernizr.addTest("fontface",!1):P('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,s=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",i=/src/i.test(s)&&0===s.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)});var k=b._config.usePrefixes?_.split(" "):[];b._cssomPrefixes=k;var N={elem:i("modernizr")};Modernizr._q.push(function(){delete N.elem});var R={style:N.elem.style};Modernizr._q.unshift(function(){delete R.style});b.testProp=function(e,t,r){return p([e],n,t,r)};b.testAllProps=h,b.testAllProps=v,Modernizr.addTest("borderradius",v("borderRadius","0px",!0)),s(),r(y),delete b.addTest,delete b.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);