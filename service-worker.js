self.addEventListener("install", function (event) {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open("cache-v1").then(function (cache) {
      return cache.addAll([
        "../assets/images/home/hyt-hero-video.mp4",
        "./assets/images/home/hyt-logo.png",
        "./assets/images/home/poster.jpg",
        "./assets/images/work/work-gallery-1.webp",
        "./assets/images/work/work-gallery-2.webp",
        "./assets/images/work/work-gallery-3.webp",
        "./assets/images/work/work-gallery-4.webp",
        "./assets/images/work/work-gallery-5.webp",
        "./assets/images/work/work-gallery-6.webp",
        "./assets/images/work/work-gallery-7.webp",
        "./assets/images/work/work-gallery-8.webp",
        "./assets/images/work/work-gallery-9.webp",
        "./assets/images/work/work-gallery-10.webp",
        "./assets/images/contact/work-gallery (1).webp",
        "./assets/images/contact/work-gallery (2).webp",
        "./assets/images/contact/work-gallery (3).webp",
        "./assets/images/contact/work-gallery (4).webp",
        "./assets/images/contact/work-gallery (5).webp",
        "./assets/images/contact/work-gallery (6).webp",
        "./assets/images/contact/work-gallery (10).webp",
        "./assets/images/contact/work-gallery (11).webp",
        "./assets/images/contact/work-gallery (12).webp"
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log('Respuesta encontrada en la caché');
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});