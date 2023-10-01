'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "af6fb5b37b5d6dcc27ceea9b3c54ddaf",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "1fb0f7ce5bf18b957ff9dfd4b4cdb22b",
"index.html": "73f2c83aba8a6376b78d703c1071d92e",
"/": "73f2c83aba8a6376b78d703c1071d92e",
"main.dart.js": "03370e57d4e1b215b9589b84c24ff499",
"flutter.js": "0b19a3d1d54c58174c41cd35acdd9388",
"favicon.png": "a14c7a2e4e57c5ad73bf05ccf77385dc",
"manifest.json": "b5f18f29753fd7fe0e31cbdcd759fc95",
"assets/AssetManifest.json": "404e56baf602daf86dc18cc1a1102964",
"assets/NOTICES": "81ae96c1fc78ecf5515c49ca7d49e0d9",
"assets/FontManifest.json": "8b69437f68febf4fdeb2035588b51d23",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "4b8eb1a6f21476300c2990a72192ad0c",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/notespace.png": "d90dd5ddea6aeca1ab400993d4988cf0",
"assets/assets/images/fitracker.png": "2146a069a7ff8ad9ec4e14464b5deb0a",
"assets/assets/images/logo.png": "e0a3af05a952f4e04959aed818e93b04",
"assets/assets/images/colorpicker.png": "f438abbe6f94b84db6a3c54d51fbbac7",
"assets/assets/images/essences.png": "27087010c1a67e59d39ba6a495ada2ce",
"assets/assets/icons/app_store.svg": "62837ce3fdcf54d61bfcaa2383628838",
"assets/assets/icons/google_play.svg": "7f74805f433482d4e91227ea68d509e0",
"assets/assets/fonts/SF_Medium.otf": "84d3637759a89aa1b59df2a828544511",
"assets/assets/fonts/SF_Bold.otf": "94348d7ee70c258261a757b66596c4f9",
"assets/assets/fonts/SF_Regular.otf": "f4245a5167ad609c4ba2d0850d553bd2",
"assets/assets/fonts/SF_Semibold.otf": "2723a0240d8e4fd81b39668e0e33640a",
"assets/assets/translations/tr.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/hu.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/nl.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/ms.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/ja.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/de.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/ru.json": "a3c8e7befdec7ab8ac647917f51b62ea",
"assets/assets/translations/pl.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/uk.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/fi.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/sk.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/pt.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/en.json": "7688c182c27d9b7202f5f318231f9cac",
"assets/assets/translations/it.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/hr.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/zh-Hans.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/fr.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/el.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/ro.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/hi.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/ca.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/ko.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/he.json": "8002129137ab5b32ddfc5a66c4807048",
"assets/assets/translations/vi.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/cs.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/id.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/da.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/th.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/sv.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/es.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/ar.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/zh-Hant.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/nb.json": "99914b932bd37a50b983c5e7c90ae93b",
"canvaskit/skwasm.js": "5256dd3e40ec9fe1fc9faa51a116bcfd",
"canvaskit/skwasm.wasm": "90759a1a3aafd4c3342434282c03eb67",
"canvaskit/chromium/canvaskit.js": "2829bb10a7eb9912e12b452dfd671141",
"canvaskit/chromium/canvaskit.wasm": "6e438effb1d80c9eea1d2df9b2cfbde8",
"canvaskit/canvaskit.js": "3bd93dfe6f74ec4261f82b4d4c2c63dc",
"canvaskit/canvaskit.wasm": "a1e5e08efdcf0c734957d8d043137ece",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
