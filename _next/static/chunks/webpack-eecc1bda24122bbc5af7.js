!function(){"use strict";var e={},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,loaded:!1,exports:{}},i=!0;try{e[r].call(a.exports,a,a.exports,t),i=!1}finally{i&&delete n[r]}return a.loaded=!0,a.exports}t.m=e,t.amdO={},function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));u&&(e.splice(f--,1),n=o())}return n}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]}}(),t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))},t.u=function(e){return 774===e?"static/chunks/framework-797e445d5c1eeaf950e4.js":"static/chunks/"+({5:"24c43472",20:"0a5d238a",182:"2edb282b",309:"22fb67c0",546:"020d8314",646:"3e36de45",651:"2979ab21",661:"a29ae703",999:"51c52c66"}[e]||e)+"."+{5:"c6fe6c79b378b1ff0fd0",20:"4cbe2df41b038a97780e",182:"739b6edbc3f19808bef4",298:"396af65612498c8e44eb",309:"a75d88b09a8967d2569e",546:"3b394e243d57bc505f92",646:"3e3242a04a90c00c7839",651:"95e10131d83e9715918a",661:"dceae57293dd4b2727ea",728:"30b3b6f4c3bedf234c7d",999:"f2424f8d2e0939989c73"}[e]+".js"},t.miniCssF=function(e){return"static/css/6d67faf5ed9f44a7ef73.css"},t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={},n="_N_E:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var l=f[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+a){u=l;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var s=function(n,t){u.onerror=u.onload=null,clearTimeout(b);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},t.p="/non-fungible-matrix//_next/",function(){var e={272:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else if(272!=n){var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error;t.l(i,(function(r){if(t.o(e,n)&&(0!==(o=e[n])&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}}),"chunk-"+n,n)}else e[n]=0},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],c=r[2],f=0;for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var d=c(t);for(n&&n(r);f<i.length;f++)a=i[f],t.o(e,a)&&e[a]&&e[a][0](),e[i[f]]=0;return t.O(d)},r=self.webpackChunk_N_E=self.webpackChunk_N_E||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}()}();