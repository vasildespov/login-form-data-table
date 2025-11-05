const CACHE_NAME = "no-internet";
const OFFLINE_IMAGE_URL = "/no-internet.jpg";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.add(OFFLINE_IMAGE_URL);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes(OFFLINE_IMAGE_URL)) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
    );
    return;
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
