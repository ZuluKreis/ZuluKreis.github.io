'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a86f470320fcf579c5d4952cc08604e5",
"version.json": "f379436329b5ee49b327451ded37be33",
"index.html": "bad95c08d01d879a38a5fcfba8a7fc78",
"/": "bad95c08d01d879a38a5fcfba8a7fc78",
"main.dart.js": "ffcab0aa2bf05cf94cd67fa642f62d11",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"config.js": "8d81f0f6e071c7474bbc9a5ac965cadf",
"favicon.png": "7d4e2f5be6348338cc78509c15e67369",
"icons/Icon-192.png": "89c821c0fab7a6f334b66d252cdf26e5",
"icons/Icon-maskable-192.png": "89c821c0fab7a6f334b66d252cdf26e5",
"icons/Icon-maskable-512.png": "c7335cd098d3cd560c2c8a96dcfef582",
"icons/Icon-512.png": "c7335cd098d3cd560c2c8a96dcfef582",
"manifest.json": "8eb2efa7566140d9b9ee748d0bd62b95",
"config.example.js": "246f966ce54a7253a5a9b0de126f9656",
"assets/AssetManifest.json": "5825f72fb7830c9a13f55ee31e47d5d4",
"assets/NOTICES": "6a0ea6f84dbf0d8c561cd13bd36dcfea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0f4a9f311489d79dd7fbe927ae622aae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/map_launcher/assets/icons/mappls.svg": "1a75722e15a1700115955325fe34502b",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/sygicTruck.svg": "242728853b652fa765de8fba7ecd250f",
"assets/packages/map_launcher/assets/icons/naver.svg": "ef3ef5881d4a2beb187dfc87e23b6133",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/copilot.svg": "b412a5f02e8cef01cdb684b03834cc03",
"assets/packages/map_launcher/assets/icons/truckmeister.svg": "416d2d7d2be53cd772bc59b910082a5b",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/tmap.svg": "50c98b143eb16f802a756294ed04b200",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/tomtomgofleet.svg": "5b12dcb09ec0a67934e6586da67a0149",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/mapyCz.svg": "f5a198b01f222b1201e826495661008c",
"assets/packages/map_launcher/assets/icons/kakao.svg": "1c7c75914d64033825ffc0ff2bdbbb58",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/flitsmeister.svg": "44ba265e6077dd5bf98668dc2b8baec1",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/data/datasources/car_model_mockups/cars.json": "188628dace5a4ea6593c00e14c45be30",
"assets/AssetManifest.bin": "b8c6b329af5dc697c4acba51895f1a93",
"assets/fonts/MaterialIcons-Regular.otf": "4abd1b661104c1b928a9f2b7288e53bf",
"assets/assets/google-maps/car_icon.png": "39b29138177bd9071836ef39e2f6ee9e",
"assets/assets/google-maps/gas_station_icon.png": "7cb062f8e87e7a5061fdd81d619096c0",
"assets/assets/google-maps/blue_circle.png": "e51f8f29ef599577848cc370273717e3",
"assets/assets/icons/car-type-icons/sport.svg": "e96e1bbe41f8bb9950fdfa66197cc626",
"assets/assets/icons/car-type-icons/panelvan.svg": "af23c56736b63e60eeb18239a8b2916c",
"assets/assets/icons/car-type-icons/suv.svg": "eaccc15bf77c863eaa7cb0e409941624",
"assets/assets/icons/car-type-icons/muscle.svg": "65023a3f6ffe4beed018f1f9294af4b0",
"assets/assets/icons/car-type-icons/targa.svg": "9d0b5b112c3bb39a56d00bb8a92118a1",
"assets/assets/icons/car-type-icons/pickup.svg": "21cc33b089f6e4a7cd18bec4295728cd",
"assets/assets/icons/car-type-icons/passengerVan.svg": "ac468a4de6ff4fb6db90ac7e2185ce14",
"assets/assets/icons/car-type-icons/coupe.svg": "f715b2fb5f623b2677de8cbe983bf4b6",
"assets/assets/icons/car-type-icons/minivan.svg": "7a618922b56b8b1d259cd6e108ca955f",
"assets/assets/icons/car-type-icons/station.svg": "caf5663a1941b147b4aa3f0ee31f9066",
"assets/assets/icons/car-type-icons/hatchback.svg": "8685871f903d58d93f32cdbfff7934f3",
"assets/assets/icons/car-type-icons/sedan.svg": "3225fec4f9c7fcb25093db2404f84974",
"assets/assets/icons/car-type-icons/cuv.svg": "9fba1c2f4b5f11f3c9b40e423e29b211",
"assets/assets/icons/car-type-icons/limousine.svg": "53b52ada243ad7522fba9b3868980908",
"assets/assets/icons/car-type-icons/cabriolet.svg": "528124ad267d75705f27f7534accd4cb",
"assets/assets/icons/car-type-icons/camperVan.svg": "3c537fb0acc2c300cc882975be9c6e35",
"assets/assets/icons/car-type-icons/micro.svg": "5df1ff35e82c9aaf96e4e2d4955e40b2",
"assets/assets/icons/car-type-icons/liftback.svg": "ae953a4c718f718fc98724233e1da6e4",
"assets/assets/icons/car-type-icons/vanTruck.svg": "eeaaaef40507db1c31116814f0cec105",
"assets/assets/icons/car-type-icons/roadster.svg": "c851c3f7dad5313a9994a7c50f95eab3",
"assets/assets/icons/car-type-icons/superCar.svg": "f13f5e3f6576af627cf0f0942cd26c5b",
"assets/assets/price-history/e5-e10.png": "b55f9486dd4306e8de2dc37cbe9dca9c",
"assets/assets/price-history/myplot.png": "5999849062d43c82cca4b87aea1d8b17",
"assets/assets/price-history/diesel.png": "53c6c90f268b43824c9c14980046c695",
"assets/assets/price-history/e5-diesel.png": "8f2b037d3fd3822b523febbbeaa16f7d",
"assets/assets/price-history/e10-diesel.png": "2ec26967baaa0b3bea91549953f54605",
"assets/assets/price-history/e5.png": "73c3b24cd5b0ffb84d061b8b6bcf8225",
"assets/assets/price-history/e10.png": "0134fe84b4b2d7dbe89e2f7b4ef863d3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
