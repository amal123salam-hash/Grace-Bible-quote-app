const CACHE_NAME = 'grace-v1';
const ASSETS = [
  '/Grace-Bible-quote-app/',
  '/Grace-Bible-quote-app/index.html',
  '/Grace-Bible-quote-app/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
