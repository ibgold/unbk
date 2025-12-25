// Service Worker minimal (MVP) pour garantir l'installabilité PWA
self.addEventListener("install", (event) => {
  // Force l'activation immédiate du nouveau service worker
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Prend le contrôle immédiat de toutes les pages ouvertes sous ce scope
  event.waitUntil(self.clients.claim());
});

// Un gestionnaire d'événement fetch est souvent requis pour l'installabilité Chrome
self.addEventListener("fetch", (event) => {
  // On laisse passer les requêtes normalement (Network Only)
  // Nécessaire pour valider les critères PWA sans mise en cache complexe
});
