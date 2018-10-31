"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","d3c722adb3d8bbc944718ad7cb9a8eb8"],["static/css/main.de0becd2.css","6fac3f1d7f2c82f42f3a64d01d3ea571"],["static/js/main.3529bb2d.js","60215d94039dff4b60aadbbb4492b30e"],["static/media/Ewa.135cffa5.PNG","135cffa5f0160c9bda2f997ffea14516"],["static/media/Filttr.a9e0df8c.PNG","a9e0df8c616b66160c568fbc35e6d8ad"],["static/media/Fresha.27cb79a7.PNG","27cb79a7edeaebe4a115d2e2ea5d2ae6"],["static/media/LeonAppView.2d718b0d.PNG","2d718b0dc14290abd3b1d1892cb95452"],["static/media/Shedul.479315f7.PNG","479315f73276cc2aa47840e196536cc4"],["static/media/abaPlus.776b50b2.PNG","776b50b2993d5ce448b258d903b55e9f"],["static/media/ahmedman.e1a60856.PNG","e1a60856f197dd707ce490f0c2bf7c00"],["static/media/background11.6002499d.jpg","6002499df20e5fb445503577f14d7561"],["static/media/background8.820e8c80.jpg","820e8c808a5baf83b9af35bb72f1adc1"],["static/media/galaxian.2202bf81.PNG","2202bf812d087d914bf2e6535c7d31b0"],["static/media/html5css3.66f7ed53.png","66f7ed535efc6a71b39dfd02172d9e47"],["static/media/impro1.946f0296.jpg","946f029619f85b2907ea3940c3bbf824"],["static/media/impro2.065afa19.jpg","065afa190b1e87616ebc6858d04f795f"],["static/media/impro3.3ab85a27.jpg","3ab85a27a365d0cf85d447dddd266967"],["static/media/js.03d471c6.png","03d471c6a43c17a3496228b5b43512e6"],["static/media/kamilograpp.141d0aa5.PNG","141d0aa57279575b902e4af6caac53a7"],["static/media/liSign.f81f41ad.png","f81f41ad19c139df5a6164dd65af7fdb"],["static/media/orbitals.c90c57f3.png","c90c57f325a884f5727b7c538524a9b2"],["static/media/personPic.4bc6a64f.png","4bc6a64f58d8333257f9e15d046769c8"],["static/media/q.27494ee2.PNG","27494ee273b13ac964b4b458dba066c3"],["static/media/react.9e67a48f.png","9e67a48fa9ffee51ba6e047cce92da0b"],["static/media/redux.59c46753.png","59c467536111a981d904a050d335c2be"],["static/media/stareMiasto.2e06d0f2.jpg","2e06d0f2d91a9c1dd39a89addc40859a"],["static/media/testWebGL.020347c2.png","020347c2f354e0f2652f98040b9bdb2a"],["static/media/togedo.b6baecc1.svg","b6baecc1199153e48666719839c5d77b"],["static/media/youTube.a7d15b38.png","a7d15b38eecf4509455d9f6f5e9bd690"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/kamilglinski/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});