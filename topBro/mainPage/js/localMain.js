var descriptionSlider = new Swiper(".casesExample__slider", {
  spaceBetween: 20,
  watchOverflow: true,
  speed: 800,
  autoHeight: true,

  scrollbar: {
    el: ".allBloggers__scrollbar",
    hide: false,
  },

  navigation: {
    nextEl: ".allBloggers-button-next",
    prevEl: ".allBloggers-button-prev",
  },

  breakpoints: {
    // when window width is >= 640px

    320: {
      slidesPerView: 1,
    },

    769: {
      slidesPerView: 1.3,
    },

    1025: {
      slidesPerView: 1.5,
    },
  },
});
;
var commentsSlider = new Swiper(".ourClientsSection__comments-slider ", {
  slidesPerView: 1,
  centeredSlides: true,

  speed: 600,
  autoHeight: true,
  on: {
    init: function () {
      this.$wrapperEl[0].insertAdjacentHTML("afterbegin", `<div class="swiper-slide dummySlide comment"></div>`);
      // this.$wrapperEl[0].insertAdjacentHTML("afterbegin", `<div class="swiper-slide dummySlide clientInfo"></div>`);

      this.updateProgress();
      this.updateSize();
      this.updateSlides();
    },
    beforeTransitionStart: function () {
      if (this.activeIndex <= 1) {
        this.allowSlidePrev = false;
      } else {
        this.allowSlidePrev = true;
      }
    },

    activeIndexChange: function () {
      if (this.activeIndex == 0) {
        this.slideTo(1);
      }
    },
  },
});

var clientsSlider = new Swiper(".ourClientsSection__clienInfo-slider", {
  speed: 600,
  slidesPerView: "auto",
  centeredSlides: true,
  navigation: {
    nextEl: ".comment-button-next",
    prevEl: ".comment-button-prev",
  },

  breakpoints: {
    320: {
      // slidesPerView: 1,
      spaceBetween: 10,
    },
    376: {
      spaceBetween: 30,
    },
    // 481: {
    //   slidesPerView: "auto",
    // },
  },

  on: {
    init: function () {
      this.$wrapperEl[0].insertAdjacentHTML("beforeend", `<div class="swiper-slide dummySlide clientInfo"></div>`);

      this.updateProgress();
      this.updateSize();
      this.updateSlides();
    },
    beforeTransitionStart: function () {
      if (this.activeIndex <= 1) {
        this.allowSlidePrev = false;
      } else {
        this.allowSlidePrev = true;
      }
    },

    activeIndexChange: function () {
      if (this.activeIndex == 0) {
        this.slideTo(1);
      }
    },
  },
});

commentsSlider.controller.control = clientsSlider;
clientsSlider.controller.control = commentsSlider;
clientsSlider.slideTo(Math.round(3));
;
