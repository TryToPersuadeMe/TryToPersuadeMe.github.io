const updateSidesSlides = () => {
  const slidesArr = document.querySelectorAll(".additionalSlide");
  const slide_next = document.querySelector(".swiper-slide-next");
  const slide_prev = document.querySelector(".swiper-slide-prev");
  const slide_current = document.querySelector(".swiper-slide-active");
  slidesArr[0].innerHTML = slide_next.innerHTML;
  slidesArr[1].innerHTML = slide_prev.innerHTML;
};

const addClass = () => {
  const $container = document.querySelector(".swiper-wrapper");
  const $slide = $container.querySelectorAll(".swiper-slide");
  $slide.forEach((el) => el.children[0].classList.add("swiper-zoom-container"));
};

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  speed: 500,
  loop: true,
  zoom: {
    maxRatio: 3,
  },

  pagination: {
    el: ".swiperStuffSlider__pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 0,
  },
  navigation: {
    nextEl: ".swiperStuffSlider__button_next",
    prevEl: ".swiperStuffSlider__button_prev",
  },

  on: {
    slideChangeTransitionEnd: function () {
      updateSidesSlides();
    },
    resize: function () {
      if (window.innerWidth <= 1000) {
        this.changeDirection("vertical", true);
      } else {
        this.changeDirection("horizontal", true);
      }
    },
    beforeInit: function () {
      addClass();
      if (window.innerWidth <= 1000) {
        this.changeDirection("vertical", true);
      } else {
        this.changeDirection("horizontal", true);
      }
    },
  },
});
