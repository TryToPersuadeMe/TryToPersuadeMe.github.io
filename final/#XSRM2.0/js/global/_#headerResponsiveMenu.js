class responsiveHeader {
  constructor(props) {
    this.$navigation = document.querySelector(props.navigation);
    this.$burgerIcon = document.querySelector(props.burgerIcon);

    this.overlay = "overlay";
    this.$htmlBody = document.querySelector("body");

    this.BurgerClick();
    this.WindowClick();
  }

  openState() {
    this.$navigation.classList.add("active");
    this.$burgerIcon.classList.add("active");
    this.$htmlBody.classList.add(this.overlay);
  }

  closeState() {
    this.$navigation.classList.remove("active");
    this.$burgerIcon.classList.remove("active");
    this.$htmlBody.classList.remove(this.overlay);
  }

  BurgerClick() {
    this.$burgerIcon.addEventListener("click", () => {
      if (!event.currentTarget.classList.contains("active")) {
        this.openState();
      } else {
        this.closeState();
      }
    });
  }

  WindowClick() {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains(this.overlay)) {
        this.closeState();
      }
    });
  }
}

const headerBurgerMenu = new responsiveHeader({
  navigation: ".navigation",
  burgerIcon: ".burgerIcon",
});
