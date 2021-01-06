new Swiper(".sliderGallery__slider", {
  pagination: {
    el: ".sliderGallery__pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".sliderGallery__button-next",
    prevEl: ".sliderGallery__button-prev",
  },

  /* Количество слайдов для показа */
  slidesPerView: 3,
  /* адаптив по высоте */
  // autoHeight:"auto"
  /* адаптив */
  // watchOverflow: true,
  /* отсутпы между слайдами */
  spaceBetween: 50,
  /* центрирование слайда*/
  // centeredSlides: true,
  /* стартовый слайд */
  // initialSlide: 1,
  /* Количество пролистываемых слайдов */
  slidesPerGroup: 3,

  /* несколько рядом в слайдере */
  // slidesPerColumn: 1,
  /* скорость прокуртки */
  // speed: 500,
  /* вертикальный слайдер */
  // direction: "vertical",
  /* эффекты переключения */

  // effect: "coverflow",
  // coverflowEffect: {
  //   // угол
  //   rotate: 20,
  //   stretch: 50,
  //   slidesShadows: true,
  // },

  // effect: "fade",
  // effect: "fade",
  // fadeEffect: {
  // смена прозрачности
  // crossFade: true,
  // },
  // effect: "flip",
  // flipEffect: {
  /* тень */
  //   slidesShadows: true,
  //   limitRotation: true,
  // },
  // effect: "cube",
  // cubeEffect: {
  /* тень */
  // slidesShadows: true,
  // shadow: true,
  // shadowEffect: 20,
  // shadowScale: 0.94,
  //   limitRotation: true,
  // },
  /* бесконечная прокрутка */
  // loop:true
  // loopSize:3
  /* автопрокрутка */
  // autoplay:{
  /* время прокуртки */
  // delay:1000,
  /* закончить напоследнем слайде */
  // stopOnLastSslide:true,
  /* отключитьпосле ручного переключения */
  // disableOnInteracion:false
  // }
  /*  breakpoints: {
    320: {},
  }, */
});
;
document.addEventListener("click", () => {
  if (event.target.classList.contains("spoiler")) {
    event.target.classList.toggle("spoiler_active");
  }
});
