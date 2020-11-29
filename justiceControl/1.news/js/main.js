class Header {
  constructor(props) {
    this.burgerIcon_active = document.querySelector(props.burgerIcon_active);
    this.burgerIcon_close = document.querySelector(props.burgerIcon_close);

    this.header = document.querySelector(props.header);
    this.header_active = props.header_active;

    this.body = document.getElementsByTagName(props.body)[0];
    this.wrapper = document.querySelector(props.wrapper);

    /* click on burger icon */

    /* click != burger icon or header. its close menu*/
    this.toggleState();
    this.windowClick();
  }

  toggleState() {
    this.burgerIcon_close.addEventListener("click", () => {
      this.closeState();
    });

    this.burgerIcon_active.addEventListener("click", () => {
      this.openState();
      console.log("asd");
    });
  }

  openState() {
    this.header.classList.add(this.header_active);
    this.body.classList.add("body-lock");
    this.wrapper.classList.add("wrapper_shadow");
  }

  closeState() {
    this.header.classList.remove(this.header_active);
    this.body.classList.remove("body-lock");
    this.wrapper.classList.remove("wrapper_shadow");
  }

  windowClick() {
    window.addEventListener("click", () => {
      if (event.target == this.wrapper) {
        this.header.classList.remove(this.header_active);
        this.body.classList.remove("body-lock");
        this.wrapper.classList.remove("wrapper_shadow");
      }
    });
  }
}

const responsive = new Header({
  burgerIcon_active: ".header__burgerIcon_active",
  burgerIcon_close: ".header__burgerIcon_close",

  header: ".header__wrapper",
  header_active: "header__wrapper_active",

  body: "body",
  wrapper: ".wrapper",
});

class ExitPopup {
  constructor(props) {
    this.exitPopup = document.querySelector(props.exitPopup);
    this.closeIcon = document.querySelector(props.closeIcon);
    this.triggerButton = document.querySelector(props.triggerButton);

    this.body = document.getElementsByTagName(props.body)[0];
    this.wrapper = document.querySelector(props.wrapper);

    this.handleTriggerClick();
    this.windowClick();
    this.handleCloseIcon();
  }

  show() {
    this.exitPopup.classList.add("exitPopup_active");
    this.body.classList.add("body-lock");
    this.wrapper.classList.add("wrapper_shadow");
  }

  hide() {
    this.exitPopup.classList.remove("exitPopup_active");
    this.body.classList.remove("body-lock");
    this.wrapper.classList.remove("wrapper_shadow");
  }

  handleTriggerClick() {
    this.triggerButton.addEventListener("click", () => {
      this.show();
    });
  }

  handleCloseIcon() {
    this.closeIcon.addEventListener("click", () => {
      this.hide();
    });
  }

  windowClick() {
    window.addEventListener("click", () => {
      if (event.target == this.wrapper) {
        this.hide();
      }
    });
  }
}

const exitPopup = new ExitPopup({
  exitPopup: ".exitPopup",
  closeIcon: ".exitPopup__closeIcon",
  triggerButton: ".trigger-exit-popup-js",

  body: "body",
  wrapper: ".wrapper",
});
;
window.addEventListener("DOMContentLoaded", () => {
  let tabs = new Tabs({
    button: ".tabsPanel__li",
    button_active: "tabsPanel__li_active",

    contentWrapper: ".tabsSlide__item",
    contentWrapper_animation: "tabsSlide__item_animation",
    contentWrapper_activate: "tabsSlide__item_activate",
  });
});

let animDuration = 0;

class Tabs {
  constructor(props) {
    this.button = document.querySelectorAll(props.button);
    this.button_active = props.button_active;

    this.contentWrapper = document.querySelectorAll(props.contentWrapper);
    this.contentWrapper_animation = props.contentWrapper_animation;
    this.contentWrapper_activate = props.contentWrapper_activate;

    console.log(this.button);

    this.handleClick();
  }

  handleClick() {
    document.addEventListener("click", () => {
      let key = 0;
      if (event.target.classList.contains("tabsPanel__li")) {
        key = event.target.dataset.key;
        event.target.classList.add(this.button_active);
        this.compareKeyAndValue(key);
      }
    });
  }

  /* compate key and value */
  compareKeyAndValue(key) {
    for (let index = 0; index < this.button.length; index++) {
      if (event.target != this.button[index]) {
        this.button[index].classList.remove(this.button_active);
      }

      if (key == 0) {
        this.contentWrapper[index].classList.add(this.contentWrapper_activate);
        setTimeout(() => {
          this.contentWrapper[index].classList.add(this.contentWrapper_animation);
        }, animDuration);
      } else if (key == this.contentWrapper[index].dataset.value) {
        this.contentWrapper[index].classList.add(this.contentWrapper_activate);
        setTimeout(() => {
          this.contentWrapper[index].classList.add(this.contentWrapper_animation);
        }, animDuration);
      } else {
        this.contentWrapper[index].classList.remove(this.contentWrapper_activate);
        setTimeout(() => {
          this.contentWrapper[index].classList.remove(this.contentWrapper_animation);
        }, animDuration);
      }
    }
  }
}
;
class Valid {
  constructor(props) {
    this.inputs = document.querySelectorAll(".input");
    this.validState = props.validState;
    this.validInputField();
  }

  stateRule() {
    if (event.target.value.length > 0) {
      event.target.classList.add("input__valid");
    } else event.target.classList.remove("input__valid");
  }

  validInputField() {
    document.addEventListener("input", () => {
      this.stateRule();
    });
  }
}

let valid = new Valid({
  validState: "input__valid",
});
;
