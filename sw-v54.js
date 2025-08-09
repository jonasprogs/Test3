self.addEventListener('install', e=>{
  e.waitUntil(caches.open('diy-motion-v54').then(c=>c.addAll(['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'])));
});
self.addEventListener('activate', e=>{ self.clients.claim(); });
self.addEventListener('fetch', e=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
