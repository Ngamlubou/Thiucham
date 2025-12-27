const CACHE_NAME = "thiucham-v1";

const FILES_TO_CACHE = [  "./",
  "./index.html",
  "./app.js",
  "./Hiuna_Khomlui.js",
  "./Luisan.js",
  "./Khristen_Madui_Lui.js" ];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))  );});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)    )  );});
