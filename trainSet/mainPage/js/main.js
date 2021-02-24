<<<<<<< HEAD
var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 7000,
  },
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
<<<<<<< HEAD:trainSet/mainPage/js/main.js
    this.navigation.classList.add("responsiveMenu_active");
=======
    this.navigation.classList.add("active");
>>>>>>> f935f812fd7300c2365d9124319a7dcba95c545b:goodStone/innerContent/js/main.js
    this.burgerIcon.classList.add(this.burgerIcon_active);
    this.htmlBody.classList.add("bodyOverlay");
  }

  closeState() {
<<<<<<< HEAD:trainSet/mainPage/js/main.js
    this.navigation.classList.remove("responsiveMenu_active");
=======
    this.navigation.classList.remove("active");
>>>>>>> f935f812fd7300c2365d9124319a7dcba95c545b:goodStone/innerContent/js/main.js
    this.burgerIcon.classList.remove(this.burgerIcon_active);
    this.htmlBody.classList.remove("bodyOverlay");
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
      if (event.target.classList.contains("bodyOverlay")) {
        this.closeState();
      }
    });
  }
}

const headerBurgerMenu = new responsiveHeader({
<<<<<<< HEAD:trainSet/mainPage/js/main.js
  navigation: "responsiveMenu",
  burgerIcon: "burgerMenu",
  burgerIcon_active: "burgerMenu_active",
=======
  navigation: "navigation",
  burgerIcon: "burgerIcon",
  burgerIcon_active: "burgerIcon_active",
>>>>>>> f935f812fd7300c2365d9124319a7dcba95c545b:goodStone/innerContent/js/main.js
});
;
=======
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
    this.navigation.classList.add("responsiveMenu_active");
    this.burgerIcon.classList.add(this.burgerIcon_active);
    this.htmlBody.classList.add("bodyOverlay");
  }

  closeState() {
    this.navigation.classList.remove("responsiveMenu_active");
    this.burgerIcon.classList.remove(this.burgerIcon_active);
    this.htmlBody.classList.remove("bodyOverlay");
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
      if (event.target.classList.contains("bodyOverlay")) {
        this.closeState();
      }
    });
  }
}

const headerBurgerMenu = new responsiveHeader({
  navigation: "responsiveMenu",
  burgerIcon: "burgerMenu",
  burgerIcon_active: "burgerMenu_active",
});
;
>>>>>>> f935f812fd7300c2365d9124319a7dcba95c545b
