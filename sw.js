// KOD DLA OPCJI B (Rekomendowany dla aplikacji mobilnych)
const CACHE_NAME = 'moja-aplikacja-v1';

// Pliki, które mają działać bez internetu (zmień nazwy na swoje!)
const ASSETS = [
  './',
  './icon192.png',
  './icon512.png',
  './index.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
