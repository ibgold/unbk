// Service Worker minimal pour valider les critères d'installabilité PWA
self.addEventListener("install", (event) => {
  // Force l'activation immédiate du nouveau service worker
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Prend le contrôle immédiat de toutes les pages ouvertes sous ce scope (/unbk/)
  event.waitUntil(self.clients.claim());
});

// Gestionnaire fetch obligatoire pour l'installabilité sur Chrome
self.addEventListener("fetch", (event) => {
  // Stratégie "Network Only" : laisse passer les requêtes normalement
  event.respondWith(fetch(event.request));
});
