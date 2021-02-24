<<<<<<< HEAD
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  speed: 600,
  allowTouchMove: false,
  autoHeight: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: false,
    hide: false,
  },

  pagination: {
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + ("Level " + index) + "</span>";
    },
    clickable: true,
  },
});
;
=======
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  speed: 600,
  allowTouchMove: false,
  autoHeight: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: false,
    hide: false,
  },

  pagination: {
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + ("Level " + index) + "</span>";
    },
    clickable: true,
  },
});
;
>>>>>>> f935f812fd7300c2365d9124319a7dcba95c545b
