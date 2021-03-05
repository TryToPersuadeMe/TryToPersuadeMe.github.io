var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  speed: 600,
  allowTouchMove: false,
  autoHeight: true,
  spaceBetween: 100,
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
