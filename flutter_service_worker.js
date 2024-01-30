'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3438b81c26e580d248733f2d6f643414",
"index.html": "9a42a2b53d073a1fe447e0064cce132c",
"/": "9a42a2b53d073a1fe447e0064cce132c",
"main.dart.js": "3966384ecc82284336dee67af1f86051",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "338ad804b6acccd73566f51249b787be",
"assets/AssetManifest.json": "d4bceeda25ff909405946d6ed9aec88a",
"assets/NOTICES": "b67f19628fccd363a253d8376dfb36e0",
"assets/FontManifest.json": "b417c8197e08be3f18101f9b01bf0e45",
"assets/AssetManifest.bin.json": "745e8072ede4fa20a6e2c9a203067ecf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "67149bbcd76643759fdbea8f33f9bfe3",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "7a25aaac2aa9d46000168ec059abac03",
"assets/fonts/MaterialIcons-Regular.otf": "d3edadde4057f5288154d84611da90d2",
"assets/assets/check.png": "d5b3f982e860255bbef4f79ca5413b55",
"assets/assets/bnr2.png": "370b3690dc4c30ce04d9fe0ee7509fe5",
"assets/assets/bnr1.png": "fd8bb00f5abcf1337f0f20d69bbd1e82",
"assets/assets/up.png": "5fe632f4f8e155e30d0e248e75ac9e67",
"assets/assets/r2.png": "ff0162146bea02e2b5b839fa0303ef69",
"assets/assets/service.png": "488421228342831d51d4134b2b289612",
"assets/assets/service.jpg": "b2e1fa94b62cf27b85241a96a79fd496",
"assets/assets/r3.png": "57f6e4ac98ab251f6d0bdab203462ab8",
"assets/assets/r1.png": "299e0e233a650e60f1288908ffc3a745",
"assets/assets/down.png": "e418b9ce80e4167c45323af7fa257045",
"assets/assets/bg-profile.png": "18b2d5b794473721db6a21dbda8a4c5e",
"assets/assets/r4.png": "54c2008e6b0df713b70852d7dd7d7df2",
"assets/assets/Screenshot.png": "54d9e195223e0a3bc3d27dbd295fe75a",
"assets/assets/verify.gif": "ae2e434e79646dd843318ed7b8ebc4d3",
"assets/assets/check.gif": "425a5271f4bba72cf87501606a98a52d",
"assets/assets/logo.png": "33a5d8ef72d80e6fe1d346d5e62ce646",
"assets/assets/logo2.png": "31126f9ea5dcf75461ed0c78b4f364f9",
"assets/assets/money.png": "65e80ded8f4aeb5363dd19be9ca72309",
"assets/assets/profile.jpg": "ab576b25523ff310b0bd26f02b38f61d",
"assets/assets/profile.png": "2ea57baf0bc2b6fd1493234b8ccbf2cb",
"assets/assets/placholder.jpg": "b08fc121bb62d59a71631c604ade375a",
"assets/assets/icon/design.png": "6db187b6352fbe9fdb838464a8690af1",
"assets/assets/icon/account.png": "b597eb35318ad2680ddfa7e0a2443b24",
"assets/assets/icon/hand.png": "d6dde74964329add1ad38d0ad6dc8f1e",
"assets/assets/icon/clients.svg": "e9435444c7235846dbf69fd0cc82db9d",
"assets/assets/icon/expert.png": "fe3689bcd8202649fb533ec82d2bf05c",
"assets/assets/icon/emarket.png": "dbcd1fbf4297c0cdd9373ca9a11ed86a",
"assets/assets/icon/food.png": "ec6d2233b801162dbb223b552c78ebb2",
"assets/assets/icon/shopping-cart.png": "2a81a451c22fc17c0b8a1c270991b841",
"assets/assets/icon/upload.png": "322ada3f0ff34dbd40e5bbc0f5cfa1bf",
"assets/assets/icon/edit.svg": "8e223f2318ad98c4074695665eb6ed6c",
"assets/assets/icon/it.png": "04efc4f4b225b1505d06a3c0b2c438ea",
"assets/assets/icon/audio.png": "99b54f9f947608e2f3e0b03406a72745",
"assets/assets/icon/education.png": "bc73ade76ccaebe0b524153858a31d29",
"assets/assets/icon/edit.png": "05400ef7e42cef066a08f935b7148dc8",
"assets/assets/icon/star.png": "d88db0fbb5a55055311cfaefc74d9e18",
"assets/assets/icon/empty_list.gif": "8770b8c32466f2ac089c886e5d5f3d66",
"assets/assets/icon/admin.png": "6e4f28f4ec4c0e11b110f176489146ca",
"assets/assets/icon/writing.png": "d37d8ab6f6c09b75a1094c43bc01e576",
"assets/assets/profile2.png": "4f301f3b8ad2da5727472ba422295c9c",
"assets/assets/bg-appbar.png": "164493267eeda6988c5b9fbd0dea5c91",
"assets/assets/zd-platform.png": "e06e426257e5c12a34d559f13a064bf7",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
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
