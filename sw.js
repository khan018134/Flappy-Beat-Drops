const CACHE_NAME = 'flappy-beat-drop-v3';
const APP_SHELL = [
  './',
  './index.html',
  './input-fix.js',
  './install.html',
  './manifest.webmanifest',
  './favicon.svg',
  './assets/app-icon.svg',
  './assets/cover.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key.startsWith('flappy-beat-drop-') && key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

async function addInputFix(response) {
  if (!response || !response.ok) return response;
  const html = await response.text();
  if (!html.includes('./input-fix.js')) {
    const updated = html.replace('</body>', '<script src="./input-fix.js" defer></script></body>');
    const headers = new Headers(response.headers);
    headers.delete('content-length');
    return new Response(updated, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
  return new Response(html, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  // Google Fonts: serve from cache when available so fonts work offline.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        const cached = await cache.match(request);
        const network = fetch(request)
          .then(response => {
            if (response.ok || response.type === 'opaque') cache.put(request, response.clone());
            return response;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    const isGamePage = url.pathname.endsWith('/') || url.pathname.endsWith('/index.html');
    event.respondWith(
      fetch(request)
        .then(async response => {
          if (response.ok) {
            const page = isGamePage ? await addInputFix(response.clone()) : response.clone();
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, page.clone());
            return page;
          }
          return response;
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_NAME);
          const cached = await cache.match(request) || await cache.match('./index.html') || await cache.match('./');
          return isGamePage ? addInputFix(cached) : cached;
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
