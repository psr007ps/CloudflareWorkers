!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){async function n(e){var t=[{name:"linkedin",url:"https://www.linkedin.com/in/pranshushrivastava/ "},{name:"github",url:"https://github.com/psr007ps"},{name:"leetcode",url:"https://leetcode.com/lestat25/"}];if("links"===e.url.substr(e.url.lastIndexOf("/")+1))return new Response(JSON.stringify(t),{headers:{"Content-Type":"json"}});const n={headers:{"content-type":"text/html;charset=UTF-8"}},o=await fetch(a,n),l=await async function(e){const{headers:t}=e,n=t.get("content-type")||"";return n.includes("application/json")?JSON.stringify(await e.json()):(n.includes("application/text")||n.includes("text/html"),await e.text())}(o),c=new Response(l,n);return(new HTMLRewriter).on("div#links",new i(t)).on("div#profile",new r).on("h1#name",new r).on("img#avatar",new r).on("title",new r).on("body",new r).on("div#social",new s).transform(c)}addEventListener("fetch",e=>{e.respondWith(n(e.request));const t=new URL("http://my-worker.pranshu.workers.dev/");t.port=8080,e.respondWith(fetch(t,request))});class s{element(e){e.removeAttribute("style"),e.append('<a href="https://www.google.com/">',{html:!0}).append('<svg> <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/google.svg" /> </svg></a>',{html:!0}),e.append('<a href="https://www.cloudflare.com/">',{html:!0}).append('<svg> <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/cloudflare.svg" /> </svg></a>',{html:!0}),e.append('<a href="https://www.linkedin.com/in/pranshushrivastava/">',{html:!0}).append('<svg> <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" /> </svg></a>',{html:!0}),e.append('<a href="https://github.com/psr007ps">',{html:!0}).append('<svg> <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" /> </svg></a>',{html:!0}),e.append('<a href="https://leetcode.com/lestat25/">',{html:!0}).append('<svg> <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/leetcode.svg" /> </svg></a>',{html:!0})}}class r{element(e){console.log(e.tagName),"div"===e.tagName?e.removeAttribute("style"):"h1"===e.tagName?e.setInnerContent("pshri002@ucr.edu",{html:!0}):"img"===e.tagName?e.setAttribute("src","https://www.w3schools.com/images/picture.jpg"):"title"===e.tagName?e.setInnerContent("Pranshu Shrivastava",{html:!0}):"body"===e.tagName&&e.setAttribute("class","bg-teal-800")}}class i{constructor(e){this.links=e}async element(e){this.links.forEach(t=>{e.append('<a href="'+t.url+'">'+t.name+"</a>",{html:!0})})}}const a="https://static-links-page.signalnerve.workers.dev/static/html"}]);