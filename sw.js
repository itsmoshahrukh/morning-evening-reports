// Offline cache for the installed app. A new version is picked up automatically on the next visit.
const CACHE = 'reports-7ac6f362af02';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png', 'icons/apple-touch-icon.png', 'icons/favicon-32.png', 'py/pyodide.js', 'py/pyodide.asm.js', 'py/pyodide.asm.wasm', 'py/pyodide-lock.json', 'py/python_stdlib.b64.txt', 'lib/et_xmlfile.b64.txt', 'lib/openpyxl.b64.txt', 'lib/xlrd.b64.txt', 'lib/app.b64.txt'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // the page itself: try the network first so updates show up, fall back to the saved copy when offline
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put('index.html', copy)); return r; })
      .catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req)));
});
