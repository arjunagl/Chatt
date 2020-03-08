const establishConnectionToServer = () => {};

/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
self.addEventListener('install', function installEvent(event) {
  console.log('inside install');
  establishConnectionToServer();
});

self.addEventListener('fetch', function fetchEvent(event) {
  event.respondWith(
    caches.open('chatt-dynamic').then(function cacheOpen(cache) {
      return cache.match(event.request).then(function cacheOpenResponse(response) {
        return (
          response ||
          fetch(event.request).then(function fetchRequestEvent(frResponse) {
            cache.put(event.request, frResponse.clone());
            return response;
          })
        );
      });
    })
  );
});
