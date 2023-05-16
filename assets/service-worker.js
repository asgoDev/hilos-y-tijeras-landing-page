self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache-v1').then(function(cache) {
      return cache.addAll([
        './images/home/hyt-hero-video.mp4',
        './images/home/hyt-logo.png',
        './images/home/poster.jpg',
        './images/work/work-gallery-1.webp',
        './images/work/work-gallery-2.webp',
        './images/work/work-gallery-3.webp',
        './images/work/work-gallery-4.webp',
        './images/work/work-gallery-5.webp',
        './images/work/work-gallery-6.webp',
        './images/work/work-gallery-7.webp',
        './images/work/work-gallery-8.webp',
        './images/work/work-gallery-9.webp',
        './images/work/work-gallery-1.webp',
        './images/contact/work-gallery (1).webp',
        './images/contact/work-gallery (2).webp',
        './images/contact/work-gallery (3).webp',
        './images/contact/work-gallery (4).webp',
        './images/contact/work-gallery (5).webp',
        './images/contact/work-gallery (6).webp',
        './images/contact/work-gallery (10).webp',
        './images/contact/work-gallery (11).webp',
        './images/contact/work-gallery (12).webp'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});