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
  burgerIcon: "burgerIcon",
  burgerIcon_active: "burgerIcon_active",
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