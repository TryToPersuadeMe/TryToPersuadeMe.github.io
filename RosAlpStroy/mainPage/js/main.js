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
;
/* const burgerIcon = document.querySelector(".header__burgerMenu");
const navigation = document.querySelector(".navigation");
const
burgerIcon.addEventListener("click", () => {
  navigation.classList.toggle("navigation_active");
  burgerIcon.classList.toggle("header__burgerMenu_active");
  burgerIcon.classList.toggle("header__burgerMenu_active");
  burgerIcon.classList.toggle("header__burgerMenu_active");
});
 */

class responsiveHeader {
  constructor(props) {
    this.navigation = document.querySelector("." + props.navigation);
    this.burgerIcon = document.querySelector("." + props.burgerIcon);

    this.htmlBody = document.querySelector("body");
    this.burgerIcon_active = props.burgerIcon + "_active";

    this.toggleState();
  }

  openState() {
    this.navigation.classList.add("navigation_active");
    this.burgerIcon.classList.add("header__burgerMenu_active");
    this.htmlBody.classList.add("body-lock");
    this.htmlBody.classList.add("body-shadow");
  }

  closeState() {
    this.navigation.classList.remove("navigation_active");
    this.burgerIcon.classList.remove("header__burgerMenu_active");
    this.htmlBody.classList.remove("body-lock");
    this.htmlBody.classList.remove("body-shadow");
  }

  toggleState() {
    document.addEventListener("click", () => {
      console.log(event.target.classList.contains(this.burgerIcon_active));
      if (
        event.target == this.burgerIcon &&
        !event.target.classList.contains(this.burgerIcon_active)
      ) {
        this.openState();
      } else if (
        event.target == this.htmlBody ||
        event.target.classList.contains(this.burgerIcon_active)
      ) {
        this.closeState();
      }
    });
  }
}

const exitPopup = new responsiveHeader({
  navigation: "navigation",
  burgerIcon: "header__burgerMenu",
});
;

/* slow scroll */
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
