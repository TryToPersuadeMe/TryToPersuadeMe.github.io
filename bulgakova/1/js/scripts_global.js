class ResponsiveHeader {
  constructor(props) {
    this.navigation = document.querySelector("." + props.navigation);
    this.burgerIcon = document.querySelector("#" + props.burgerIcon.open);
    this.closeBurgerIcon = document.querySelector("#" + props.burgerIcon.close);

    this.header = document.querySelector("." + props.header);

    this.htmlBody = document.querySelector("body");

    this.BurgerClick();
    this.closeBurgerClick()
    this.WindowClick();
  }

  openState() {
    this.navigation.classList.add("active");
    this.burgerIcon.classList.add("active");
    this.htmlBody.classList.add("body-overlay");

    this.header.classList.add("menuOpened");
  }

  closeState() {
    this.navigation.classList.remove("active");
    this.burgerIcon.classList.remove("active");
    this.htmlBody.classList.remove("body-overlay");

    this.header.classList.remove("menuOpened");
  }

  BurgerClick() {
    this.burgerIcon.addEventListener("click", () => {
      this.openState();
    });
  }
  closeBurgerClick() {
    this.closeBurgerIcon.addEventListener("click", () => {
      this.closeState();
    });
  }

  WindowClick() {
    document.addEventListener("click", () => {
      if (event.target.classList.contains("body-overlay") && this.navigation.classList.contains("active")) {
        this.closeState();
      }
    });
  }
}

const headerBurgerMenu = new ResponsiveHeader({
  navigation: "responsiveMenu",
  burgerIcon: {
    open: "open-menu-js",
    close: "close-menu-js",
  },

  header: "header",
});
;
/* class CallPopUp {
  constructor(props) {
    if (props.button.status) {
      this.$button = document.querySelector("." + props.button.selector);
      this.button_data = props.button.data;
      this.openButtonClick(props);
    }

    this.$popUp = document.querySelector("." + props.popUp.selector);
    this.$closeIcon = this.$popUp.querySelector("." + props.popUp.closeIcon);

    this.htmlBody = document.querySelector("body");

    this.closeButtonClick();
    this.WindowClick();
  }

  openState() {
    this.$popUp.classList.add("active");
    this.htmlBody.classList.add("body-overlay");
  }

  closeState() {
    this.$popUp.classList.remove("active");
    this.htmlBody.classList.remove("body-overlay");
  }

  openButtonClick() {
    this.$button.addEventListener("click", () => {
      this.openState();
    });
  }
  closeButtonClick() {
    this.$closeIcon.addEventListener("click", () => {
      this.closeState();
    });
  }

  WindowClick() {
    document.addEventListener("click", () => {
      if (event.target.classList.contains("body-overlay") && this.$popUp.classList.contains("active")) {
        this.closeState();
      }
    });
  }
}

const callPopUp = new CallPopUp({
  button: {
    status: true,
    data: "requestCall",
    selector: "button-call-popUp-js",
  },

  popUp: {
    selector: "requestCall",
    closeIcon: "popUp__closeBurgerIcon",
  },
});

document.addEventListener("mouseleave", () => {
  const $header = document.querySelector("header");

  const callCatchlead = new CallPopUp({
    button: {
      status: false,
      data: "",
      selector: "",
    },
    popUp: {
      selector: "catchLead",
      closeIcon: "popUp__closeBurgerIcon",
    },
  });

  if ($header.dataset.status != "was_called") {
    const $popUp_arr = document.querySelectorAll(".popUp");

    $header.setAttribute("data-status", "was_called");
    callCatchlead.openState();
    $popUp_arr.forEach((value) => {
      console.log(value);
      if (!value.classList.contains("catchLead")) value.classList.remove("active");
    });
  }
});
 */;
