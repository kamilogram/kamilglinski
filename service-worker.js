"use strict";var precacheConfig=[["/kamilglinski/index.html","ba8b3543b466cdc8d73c8bbac177c65d"],["/kamilglinski/static/css/main.2840a844.css","6d1639e69d6b304aea629e4c261ff40c"],["/kamilglinski/static/js/main.90a0552b.js","18210b3135689a1674dcb6cf34cb64a6"],["/kamilglinski/static/media/Ewa.135cffa5.PNG","135cffa5f0160c9bda2f997ffea14516"],["/kamilglinski/static/media/Filttr.a9e0df8c.PNG","a9e0df8c616b66160c568fbc35e6d8ad"],["/kamilglinski/static/media/Fresha.27cb79a7.PNG","27cb79a7edeaebe4a115d2e2ea5d2ae6"],["/kamilglinski/static/media/LeonAppView.2d718b0d.PNG","2d718b0dc14290abd3b1d1892cb95452"],["/kamilglinski/static/media/Shedul.479315f7.PNG","479315f73276cc2aa47840e196536cc4"],["/kamilglinski/static/media/abaPlus.776b50b2.PNG","776b50b2993d5ce448b258d903b55e9f"],["/kamilglinski/static/media/background13.ea10e26a.png","ea10e26a8608277d5b6de199d01b8389"],["/kamilglinski/static/media/background14.36958679.png","369586796f45a261d1fb148a991d8a2a"],["/kamilglinski/static/media/creditea.2fcc624a.jpg","2fcc624a18eae5c77e187c5826bd5079"],["/kamilglinski/static/media/hapipozyczki.17a7c81d.jpg","17a7c81d6fca2b448a548dd500dd7977"],["/kamilglinski/static/media/html5css3.66f7ed53.png","66f7ed535efc6a71b39dfd02172d9e47"],["/kamilglinski/static/media/impro1.946f0296.jpg","946f029619f85b2907ea3940c3bbf824"],["/kamilglinski/static/media/impro2.065afa19.jpg","065afa190b1e87616ebc6858d04f795f"],["/kamilglinski/static/media/impro3.3ab85a27.jpg","3ab85a27a365d0cf85d447dddd266967"],["/kamilglinski/static/media/js.03d471c6.png","03d471c6a43c17a3496228b5b43512e6"],["/kamilglinski/static/media/kamilograpp.141d0aa5.PNG","141d0aa57279575b902e4af6caac53a7"],["/kamilglinski/static/media/liSign.f81f41ad.png","f81f41ad19c139df5a6164dd65af7fdb"],["/kamilglinski/static/media/orbitals.c90c57f3.png","c90c57f325a884f5727b7c538524a9b2"],["/kamilglinski/static/media/personPic.a1dfc279.png","a1dfc27954fb6549bbb4fec0d8c15443"],["/kamilglinski/static/media/q.27494ee2.PNG","27494ee273b13ac964b4b458dba066c3"],["/kamilglinski/static/media/react.9e67a48f.png","9e67a48fa9ffee51ba6e047cce92da0b"],["/kamilglinski/static/media/redux.59c46753.png","59c467536111a981d904a050d335c2be"],["/kamilglinski/static/media/stareMiasto.2e06d0f2.jpg","2e06d0f2d91a9c1dd39a89addc40859a"],["/kamilglinski/static/media/testWebGL.020347c2.png","020347c2f354e0f2652f98040b9bdb2a"],["/kamilglinski/static/media/togedo.4eaa249e.svg","4eaa249e75f8a28c5f353e8f26a1b9ef"],["/kamilglinski/static/media/youTube.a7d15b38.png","a7d15b38eecf4509455d9f6f5e9bd690"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var i=new URL(e);return"/"===i.pathname.slice(-1)&&(i.pathname+=a),i.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,i,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(i)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var i=new URL(a).pathname;return e.some(function(e){return i.match(e)})},stripIgnoredUrlParameters=function(e,i){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return i.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],i=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,i,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(i){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!i.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var i=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!i.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,i=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(i))||(i=addDirectoryIndex(i,t),e=urlsToCacheKeys.has(i));var n="/kamilglinski/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(i=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(i)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(i)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});