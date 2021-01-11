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

class responsiveHeader {
  constructor(props) {
    this.navigation = document.querySelector("." + props.navigation);
    this.burgerIcon = document.querySelector("." + props.burgerIcon);
    this.burgerIcon_active = props.burgerIcon_active;

    this.htmlBody = document.querySelector("body");

    this.BurgerClick();
    this.WindowClick();
  }

  openState() {
    this.navigation.classList.add("navigation_active");
    this.burgerIcon.classList.add(this.burgerIcon_active);
    this.htmlBody.classList.add("body-lock");
    this.htmlBody.classList.add("body-shadow");
  }

  closeState() {
    this.navigation.classList.remove("navigation_active");
    this.burgerIcon.classList.remove(this.burgerIcon_active);
    this.htmlBody.classList.remove("body-lock");
    this.htmlBody.classList.remove("body-shadow");
  }

  BurgerClick() {
    this.burgerIcon.addEventListener("click", () => {
      if (!event.currentTarget.classList.contains(this.burgerIcon_active)) {
        this.openState();
      } else {
        this.closeState();
      }
    });
  }

  WindowClick() {
    document.addEventListener("click", () => {
      if (event.target.classList.contains("body-lock", "body-shadow")) {
        console.log("asd");
        this.closeState();
      }
    });
  }
}

const headerBurgerMenu = new responsiveHeader({
  navigation: "navigation",
  burgerIcon: "header__burgerMenu",
  burgerIcon_active: "header__burgerMenu_active",
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

/* lazy google map */
window.addEventListener("load", (event) => {
  const googleMap = document.querySelector("#googleMap");
  const src = googleMap.getAttribute("data-src");
  googleMap.removeAttribute("data-src");
  googleMap.setAttribute("src", src);
});
