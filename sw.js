if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const d=e=>n(e,r),c={module:{uri:r},exports:a,require:d};i[r]=Promise.all(s.map((e=>c[e]||d(e)))).then((e=>(o(...e),a)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-b02548aa.css",revision:null},{url:"assets/index-b3bb5163.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"9f919bf27fd5fa34c260ae0056699786"},{url:"favicon.ico",revision:"7d8ccc28072f81f2ca84eb4823103902"},{url:"apple-touch-icon.png",revision:"de4e1a1160ae4d4a3e8cda457f94809f"},{url:"android-chrome-192x192.png",revision:"788509c990b14a7d0b7903baa1f234a8"},{url:"android-chrome-512x512.png",revision:"7489dd515d068386829f0d652a8c8a17"},{url:"apple-touch-icon2.png",revision:"de4e1a1160ae4d4a3e8cda457f94809f"},{url:"maskable_icon.png",revision:"3276aa7d52e257490a9469ae07909f74"},{url:"manifest.webmanifest",revision:"baa96a19eb629dc48c2f61d99df3c095"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
