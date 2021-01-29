var mainSwiper = new Swiper(".mainSlider", {
  slidesPerView: 1,
  mousewheel: true,
  observer: true,
  autoHeight: true,
  observeSlideChildren: true,
  simulateTouch: false,

  on: {
    reachEnd: function () {
      mainSwiper.mousewheel.disable();
    },
  },
});

const dummyForSwiper = document.querySelector("#dummyForSwiper");

window.addEventListener("scroll", () => {
  let dummyY = dummyForSwiper.getBoundingClientRect().top;
  if (dummyY < -50) {
    mainSwiper.mousewheel.disable();
  } else {
    mainSwiper.mousewheel.enable();

  }
});
