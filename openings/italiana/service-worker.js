const CACHE_NAME = "la-italiana-v26-integrated-colors";
const APP_SHELL = [
  "../../profiles.js?v=20261029-colors-2",
  "./",
  "./index.html",
  "./styles.css?v=20260809-global-density-1",
  "./app.js?v=20260809-global-density-1",
  "./expansion-games.js",
  "./exercise-data.js",
  "./entrenar.html",
  "./training.css?v=20261029-integrated-3",
  "./trainer.js?v=20261029-integrated-3",
  "./training-core.js?v=20261029-integrated-3",
  "./training-lines.js?v=20261029-integrated-3",
  "./vendor/chess.js",
  "./manifest.webmanifest",
  "./assets/chess-pieces-modern.svg",
  "./assets/favicon-32.png",
  "./assets/apple-touch-icon.png",
  "./assets/app-icon-192.png",
  "./assets/app-icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key.startsWith("la-italiana-") && key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then(response => response || (event.request.mode === "navigate" ? caches.match("./") : new Response("Recurso no disponible sin conexión", {status:503}))))
  );
});
