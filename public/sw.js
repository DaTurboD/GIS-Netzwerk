if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,n)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=n(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/NGQTTvTKrzF0Q8qDZ5dW9/_buildManifest.js",revision:"38c36e4fdb097d53843df64d31c5f17b"},{url:"/_next/static/NGQTTvTKrzF0Q8qDZ5dW9/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/29107295.cd143b0d7dd3d3b2b8a5.js",revision:"7bb420b5a19931cc52f7d17f386a2239"},{url:"/_next/static/chunks/c96af78981e9634bae170f2127897d481ae89f2a.9bea487ccd720c8d83ca.js",revision:"84403efd18474a6ddfca1255039c888a"},{url:"/_next/static/chunks/commons.8985f177a4b60255d055.js",revision:"dddf5a9917d1c76e0f4b85e0812a73ed"},{url:"/_next/static/chunks/ea88be26.a69f80d31d3a0dd898a5.js",revision:"98abed796500b8adf4eae84095c82e9c"},{url:"/_next/static/chunks/fede175b2bcdf1d214f0d988d609ae6a889699dd.253f607762f94dbf1779.js",revision:"4bea5cd807be86a27c1af7af9d48010c"},{url:"/_next/static/chunks/framework.1d36bc031662b4dc4c28.js",revision:"7eafc2b810ea3395615465510119d273"},{url:"/_next/static/chunks/main-110bca1b3645a8499c45.js",revision:"c8f90b0cd410a63e850a12d12903089a"},{url:"/_next/static/chunks/pages/%5Bslug%5D-7b08d10eaea0ccbf394a.js",revision:"d6202eabaa1829ae4abdd574281cbe6f"},{url:"/_next/static/chunks/pages/_app-09781b7c1f7587912fb3.js",revision:"f42c1f47554977c429818b538c12d440"},{url:"/_next/static/chunks/pages/_error-00aa27e041d80416b00f.js",revision:"6074c384b24118212b328aceff37caeb"},{url:"/_next/static/chunks/pages/blog-faff38e0659d870ba8fd.js",revision:"20541b7348f4fff9607be41bda190728"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-810cec6bcf5ee3389833.js",revision:"e944655eed855d94436fcb47e4262e3c"},{url:"/_next/static/chunks/pages/blog/themen/%5Bslug%5D-9e8bab4a3453c702a140.js",revision:"b495d2d0988624823f9bc6aa17657979"},{url:"/_next/static/chunks/pages/index-4f58c3a30245b944957e.js",revision:"f90614ef30a0fa7754faea91bba86f18"},{url:"/_next/static/chunks/pages/jobs-5d966654df7ee3395d55.js",revision:"69d9192613b3d95cf1228dde276b5ef2"},{url:"/_next/static/chunks/pages/jobs/%5Bslug%5D-d3aa3e2fa9307dbf70c6.js",revision:"2efa37cec365a8d0ee2a086517bfa130"},{url:"/_next/static/chunks/pages/jobs/stellenanzeige-erstellen-03653e203a62c2bdefde.js",revision:"9585335aa8487b7d80a1121012fa925d"},{url:"/_next/static/chunks/pages/werben-2d9ff47a0fa094703f2e.js",revision:"894438e15b68d467561f271d88775a89"},{url:"/_next/static/chunks/polyfills-0a2dccd2aa0d7ea1a89f.js",revision:"dc57e31a3bf18e0306300c1a9fba3bc6"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/4d2d404f4db37275f1d0.css",revision:"6dc926f1770b381f8612325c2fa519c5"},{url:"/_next/static/css/5783e3ec7ec4b1fd33a2.css",revision:"3382172069cff8d02ed3256977d19364"},{url:"/favicon/android-chrome-192x192.png",revision:"9e465bb59f36f0785b82222d8148fb88"},{url:"/favicon/android-chrome-512x512.png",revision:"b50d82000faecce20906f51e83cca52a"},{url:"/favicon/apple-touch-icon.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/browserconfig.xml",revision:"765146e15223505546b54d3db36babf3"},{url:"/favicon/favicon-16x16.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/favicon-32x32.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/favicon.ico",revision:"091c09c38908f76168913c3ad99cab6e"},{url:"/favicon/gis-netzwerk_favicon.png",revision:"c70f8e29cfbc381db9eb1bd75c2aeac0"},{url:"/favicon/mstile-150x150.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/favicon/safari-pinned-tab.svg",revision:"40c9bc99e963fb841cd147f0374682fe"},{url:"/favicon/site.webmanifest",revision:"6b8775db3649d22526b894b1a9cfc62f"},{url:"/robots.txt",revision:"b6b6cd30efb30525ab84e21781e1a3cc"},{url:"/service-worker.js",revision:"8933728d27d6292fd486c11a231c7c86"},{url:"/service-worker.js.map",revision:"5736dd486c744aff3c45a7c80d1ede61"},{url:"/sitemap.xml",revision:"04b56b52d8bd1191587d98e4e9bcfe3e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
