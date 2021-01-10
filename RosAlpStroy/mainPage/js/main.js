new Swiper(".sliderGallery__slider", {
  pagination: {
    el: ".sliderGallery__pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".sliderGallery__button-next",
    prevEl: ".sliderGallery__button-prev",
  },
  grabCursor: true,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: true,
    loadPrevNext: true,
  },

  watchSlidesProgress: false,
  watchSlidesVisibility: false,

  spaceBetween: 50,
  breakpoints: {
    319: {
      slidesPerGroup: 1,
      spaceBetween: 50,
      slidesPerView: 1,
    },
    769: {
      slidesPerGroup: 2,
      spaceBetween: 35,
      slidesPerView: 2,
    },

    1001: {
      slidesPerGroup: 3,
      slidesPerView: 3,
    },
  },

  speed: 800,
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

const headerBurgerMenu = new responsiveHeader({
  navigation: "navigation",
  burgerIcon: "header__burgerMenu",
});

const dropListNavigation = () => {
  const button = document.querySelectorAll(".dropList__toggleButton");
  const droplist = document.querySelectorAll(".dropList");

  button.forEach((value, index) => {
    value.addEventListener("click", () => droplist[index].classList.toggle("dropList_active"));
  });
};

dropListNavigation();
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

