// Service Worker minimal pour satisfaire les critères d'installation PWA
const CACHE_NAME = 'unbreakable-v1';
const ASSETS = [
  './',
  './index.html',
  './logo.png'
];

// Installation : Mise en cache des ressources de base
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activation : Nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Stratégie : Network First (on privilégie le réseau pour les données à jour)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
