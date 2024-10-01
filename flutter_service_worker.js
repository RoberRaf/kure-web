'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a9c69b4d04bc8baedd6a8120610d7294",
"index.html": "69e35b376bc26b5530b5a5c993bac39c",
"/": "69e35b376bc26b5530b5a5c993bac39c",
"main.dart.js": "56dcab4ca9a237aaedb544c171695e04",
"version.json": "596527af5194244ab504fab3f5a437d6",
"assets/assets/png/name.png": "d9ad3f42d48e3a4d4ed08dcd3a79d62f",
"assets/assets/png/onboarding_1.png": "a3a2c3db01a24db5430e0eace9a63e13",
"assets/assets/png/logo.png": "15b41cc33ca375c537c48539a5500379",
"assets/assets/png/onboarding_2.png": "e75ca131927df50dfe8f6f4f4f07d016",
"assets/assets/png/doctor.png": "ff67f1bfd60866e3fd6f67d5a05d52d8",
"assets/assets/png/category_1.png": "1e4601b6561edf81f4027cc71552cf7d",
"assets/assets/png/reversed_logo.png": "ee3e0974ac4e13b40c191587d3d2ead5",
"assets/assets/png/category_2.png": "22eba68fd4da86c114fbc3c17ae598e6",
"assets/assets/png/category_3.png": "61789fc529c8a2b0926509a0df07feee",
"assets/assets/png/category_4.png": "74c4eef9294683a226d6cdea04083852",
"assets/assets/png/prod_1.png": "b23ff0f870de1a498b01c7a5926a4a0f",
"assets/assets/png/prod_2.png": "83c9df1ab131ee29c6c796ba6aba3077",
"assets/assets/png/prod_3.png": "ff9e4bb232ae2ddd5e92d0205e2e9458",
"assets/assets/png/prod_4.png": "0d854a542151d0bd39ea6e8bfd319387",
"assets/assets/png/prod_5.png": "819d8bf45898af4369045e6816fcd34b",
"assets/assets/png/prod_6.png": "1dbc9b4e30236fb4a8c086be355f9b68",
"assets/assets/png/empty_cart.png": "27b2af1654dfdc386734da464faf839a",
"assets/assets/png/visa.png": "d108a8fd30190159611c445025ca3baa",
"assets/assets/png/apple_pay.png": "d1efd14ca3c6f37ab51cd7ce7d68b764",
"assets/assets/png/madda.png": "d016e68d0f2373e2ff784f32b74de0c8",
"assets/assets/png/tabby.png": "8d6cb5e8551bc0ec1ca1f1e9bf66a355",
"assets/assets/png/tamara.png": "6c8c8e39a3ac861697982f574539e5c0",
"assets/assets/launch_icon.png": "921e7fef5084fa7f71d4f7bb601d0a93",
"assets/assets/fonts/SF-Pro-Rounded-Regular.otf": "6720e086a89d34cb9ca424a3ba913082",
"assets/assets/fonts/SF-Pro-Rounded-Semibold.otf": "02dc9f029efbbe4cd105420f50202dd9",
"assets/assets/fonts/SF-Pro-Rounded-Bold.otf": "bf108f8e2fcbda9e4ea2b18ed7799caf",
"assets/assets/svg/Vector.svg": "c6f0e250e5b03b85134fde28d1e476fd",
"assets/assets/svg/name.svg": "981e33d6353e609ead2e9f524174fd1f",
"assets/assets/svg/home.svg": "ba71d74a643d3143eedae5dcebd4199e",
"assets/assets/svg/cart.svg": "15de30c43a0c4f00fcc44eaca0dbd857",
"assets/assets/svg/reversedvector.svg": "07fb60deb0b72bb9fc56ec1fdc989eb6",
"assets/assets/svg/clock.svg": "4acef1e758241279c15d3fba381507c0",
"assets/assets/svg/user-square.svg": "e4308626248ac3e94a8fb9fa1e7c1c26",
"assets/assets/svg/dector.svg": "54b759d5b895f4ba22515478c0107d2e",
"assets/assets/svg/home_active.svg": "89d6533c4b888b30b8c90f7346e9ee9d",
"assets/assets/svg/cart_active.svg": "49cc418b3f7104a231f7d877e4e38f26",
"assets/assets/svg/frame.svg": "f666d2b8bd8a3623b74050e8895a265d",
"assets/assets/svg/clock_active.svg": "38a419b9d5bc8aab5ba30e49306756bd",
"assets/assets/svg/user-square_active.svg": "55bb2475e5d56952f8a0759991160370",
"assets/assets/svg/warning-2.svg": "8d1778035f7cec650397796a898323c9",
"assets/assets/svg/search-normal.svg": "b5cf88c78ac73e988cf2b8266a26e52d",
"assets/assets/svg/stetoschope.svg": "1e29d005ac577f98b360fba12fbda645",
"assets/assets/svg/shopping-cart.svg": "86227efc6bf60aa2bbc552cc125bf06e",
"assets/assets/svg/doctor_avatarpng.png": "0fa6cf70741d8d0835fcca67ba710e69",
"assets/shorebird.yaml": "f4902ddf8bf218ed200ce7dc717dfd90",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5c122e7dd6057bc4519647aeff6adefc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/fonts/MaterialIcons-Regular.otf": "77bc0d08d074843b3ca4e4162d809215",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "caa898f09a5a5d2a51ba334d33efeefb",
"assets/AssetManifest.bin": "a5aa739875356dab7e6a3127ba75e9c4",
"assets/AssetManifest.bin.json": "4607d613562d155e23ba941ac76a1797",
"assets/FontManifest.json": "ab8afcbcc881d69a13d961369ae3da7f",
"assets/NOTICES": "ba6ab96ecd822f98cb8d18f8ae6fafae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "f5624dd293c60d46d7c977f4e3fe2644"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
