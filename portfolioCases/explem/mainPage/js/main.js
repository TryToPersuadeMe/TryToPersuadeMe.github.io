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

class TextSpoiler {
  constructor(el) {
    if (typeof el === "string") {
      el = document.querySelectorAll(el);
    }

    if (typeof el[Symbol.iterator] === "function") {
      return [...el].map((n) => new TextSpoiler(n));
    }

    this.$spoiler = el;

    this.$dropList = this.$spoiler.querySelector(".textSpoiler-dropList");
    this.$button = this.$spoiler.querySelector(".textSpoiler-button");

    this.handleClick();
    this.hanldeClickWindow();
  }

  openState() {
    this.$spoiler.classList.add("opened");
  }

  closeState() {
    this.$spoiler.classList.remove("opened");
  }

  toggleState() {
    if (this.$spoiler.classList.contains("opened")) {
      this.closeState();
    } else {
      this.openState();
    }
  }

  handleClick() {
    this.$button.addEventListener("click", () => {
      this.toggleState();
    });
  }

  hanldeClickWindow() {
    window.addEventListener("click", () => {
      if (event.target != this.$button) {
        this.closeState();
      }
    });
  }
}

const textSpoiler = new TextSpoiler(".textSpoiler");
;
const openMenuDesktop = () => {
  const activateButton = document.querySelector("#open-destrop-menu");

  activateButton.addEventListener("click", () => {});
};

class AnimateDestktopMenu {
  constructor(props) {
    this.$button = document.querySelector(props.button);
    this.$verticalMenu = document.querySelectorAll(".navigation_vertical");
    this.$searchForm = document.querySelector(".searchForm");
    this.$tagBox = document.querySelector(".firstScreenSection__tagsBox");

    this.hideMenuState();
    this.buttonClick();
  }

  hideMenuState() {
    this.hide = {
      opacity: "0",
      visibility: "hidden",
      //   display: "none",
    };

    Object.assign(this.$verticalMenu[0].style, this.hide);
    Object.assign(this.$verticalMenu[1].style, this.hide);
    Object.assign(this.$searchForm.style, this.hide);
    Object.assign(this.$tagBox.style, this.hide);
  }

  showMenuState() {
    this.show = {
      opacity: "1",
      visibility: "visible",
      //   display: "block",
    };

    Object.assign(this.$verticalMenu[0].style, this.show);
    Object.assign(this.$verticalMenu[1].style, this.show);
    Object.assign(this.$searchForm.style, this.show);
    Object.assign(this.$tagBox.style, this.show);
  }

  showAnimate() {
    this.$verticalMenu[0].classList.add("animate__animated", "animate__fadeInLeftBig");
    this.$verticalMenu[1].classList.add("animate__animated", "animate__fadeInRightBig");
    this.$searchForm.classList.add("animate__animated", "animate__fadeInUpBig");
    this.$tagBox.classList.add("animate__animated", "animate__fadeInUpBig");

    this.$verticalMenu[0].classList.remove("animate__fadeOutLeftBig");
    this.$verticalMenu[1].classList.remove("animate__fadeOutRightBig");
    this.$searchForm.classList.remove("animate__fadeOutDownBig");
    this.$tagBox.classList.remove("animate__fadeOutDownBig");
  }

  hideAnimate() {
    this.$verticalMenu[0].classList.remove("animate__fadeInLeftBig");
    this.$verticalMenu[1].classList.remove("animate__fadeInRightBig");
    this.$searchForm.classList.remove("animate__fadeInUpBig");
    this.$tagBox.classList.remove("animate__fadeInUpBig");

    this.$verticalMenu[0].classList.add("animate__animated", "animate__fadeOutLeftBig");
    this.$verticalMenu[1].classList.add("animate__animated", "animate__fadeOutRightBig");
    this.$searchForm.classList.add("animate__animated", "animate__fadeOutDownBig");
    this.$tagBox.classList.add("animate__animated", "animate__fadeOutDownBig");
  }

  toggleState() {
    if (event.currentTarget.classList.contains("active")) {
      this.showAnimate();
      setTimeout(() => {
        this.showMenuState();
      }, 0);
    } else {
      this.hideAnimate();
      setTimeout(() => {
        this.hideMenuState();
      }, 0);
    }
  }

  buttonClick() {
    this.$button.addEventListener("click", () => {
      event.currentTarget.classList.toggle("active");
      this.toggleState();
    });
  }
}

const animateDestktopMenu = new AnimateDestktopMenu({
  button: "#toggle-desktop-menu",
});
;
