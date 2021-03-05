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

class responsiveHeader {
  constructor(props) {
    this.navigation = document.querySelector("." + props.navigation);
    this.burgerIcon = document.querySelector("." + props.burgerIcon);

    this.htmlBody = document.querySelector("body");

    this.BurgerClick();
    this.WindowClick();
  }

  openState() {
    this.navigation.classList.add("active");
    this.burgerIcon.classList.add("active");
    this.htmlBody.classList.add("body-overlay");
  }

  closeState() {
    this.navigation.classList.remove("active");
    this.burgerIcon.classList.remove("active");
    this.htmlBody.classList.remove("body-overlay");
  }

  BurgerClick() {
    this.burgerIcon.addEventListener("click", () => {
      if (!event.currentTarget.classList.contains("active")) {
        this.openState();
      } else {
        this.closeState();
      }
    });
  }

  WindowClick() {
    document.addEventListener("click", () => {
      if (event.target.classList.contains("body-overlay")) {
        this.closeState();
      }
    });
  }
}

const headerBurgerMenu = new responsiveHeader({
  navigation: "header",
  burgerIcon: "burgerIcon",
});
;
var navPanel = new Swiper(".navigationSlider__container", {
  spaceBetween: 30,
  watchOverflow: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    375: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    575: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    769: {
      slidesPerView: 3,
    },
  },
});

var sidebar = new Swiper(".sideBar__sliderContainer", {
  slidesPerView: 1.4,

  spaceBetween: 30,
});

const resizeSlider = () => {
  if (window.innerWidth >= 768) {
    sidebar.destroy(false, true);
    console.log("slider destroy");
  } else {
    sidebar.init();
    console.log("slider init");
  }
};

window.addEventListener("resize", () => {
  resizeSlider();
});

resizeSlider();


;
// class ResponsiveBlock {
//   constructor(props) {
//     this.$block = document.querySelector(props.block);
//     this.$newParent = document.querySelector(props.newParent);
//     this.$oldParent = document.querySelector(props.oldParent);
//     this.windowWidth = props.windowWidth;

//     this.togglePosition();
//     this.windowEventHandler();
//   }

//   moveBlock(parent) {
//     parent.appendChild(this.$block);
//   }

//   togglePosition() {
//     if (window.innerWidth < this.windowWidth) {
//       this.moveBlock(this.$newParent);
//     } else {
//       this.moveBlock(this.$oldParent);
//     }
//   }

//   windowEventHandler() {
//     window.addEventListener("resize", () => {
//       this.togglePosition();
//     });
//   }
// }

// const responsiveBlock = new ResponsiveBlock({
//   block: ".navUlListContetnt__responsiveTitle-js",
//   oldParent: ".card",
//   newParent: ".menu__container",
//   windowWidth: "900",
// });
;
