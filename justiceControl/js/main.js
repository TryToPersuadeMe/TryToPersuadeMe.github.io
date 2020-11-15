// import "./select/style.scss";

class Select {
  constructor(el) {
    if (typeof el === "string") {
      el = document.querySelectorAll(el);
    }

    if (typeof el[Symbol.iterator] === "function") {
      return [...el].map((n) => new Select(n));
    }

    this.$select = el;

    this.$inputField = this.$select.querySelector("input");
    this.$label = this.$select.querySelector(".select__label");

    this.$body = document.querySelector("body");

    this.handleClick();
    this.hanldeClickWindow();
  }

  openState() {
    this.$select.classList.add("open");
  }

  closeState() {
    this.$select.classList.remove("open");
  }

  /* open/close dropdown list */
  toggleState() {
    if (this.$select.classList.contains("open")) {
      this.closeState();
    } else {
      this.openState();
    }
  }

  handleClick() {
    this.$select.addEventListener("mouseup", () => {
      this.toggleState();
      this.handleValue();
    });
  }

  /* change value of input */
  handleValue() {
    if (event.target != this.$label) {
      this.$inputField.value = event.target.innerText;
    }
  }

  hanldeClickWindow() {
    window.addEventListener("click", () => {
      if (event.target != this.$label) {
        this.closeState();
      }
    });
  }
}

const select = new Select(".select");
;
class Spoiler {
  constructor(props) {
    this.spoiler = document.querySelector(props.spoiler);
    this.arrow = document.querySelector(props.arrow);
    this.dropDown = document.querySelector(props.dropDown);
    this.button = document.querySelector(props.button);

    this.handleClick();
    this.hanldeClickWindow();
  }

  openState() {
    this.spoiler.classList.add("spoiler_open");
  }

  closeState() {
    this.spoiler.classList.remove("spoiler_open");
  }

  toggleState() {
    if (this.spoiler.classList.contains("spoiler_open")) {
      this.closeState();
      console.log("asd");
    } else {
      this.openState();
    }
  }

  handleClick() {
    this.button.addEventListener("click", () => {
      this.toggleState();
    });
  }

  hanldeClickWindow() {
    window.addEventListener("mouseup", () => {
      if (event.target != this.button) {
        this.closeState();
      }
    });
  }
}

let spoiler = new Spoiler({
  spoiler: ".spoiler",
  button: ".spoiler__button",
  arrow: ".spoiler__arrow",
  dropDown: ".spoiler__list",
});
;
class SpoilerTab {
  constructor(props) {
    this.spoiler = document.querySelectorAll(props.spoiler);
    this.dropDown = document.querySelectorAll(props.dropDown);
    this.button = document.querySelectorAll(props.button);

    this.handleClick();
  }

  openState(currentItem) {
    currentItem.classList.add("spoilerTab__dropDown_open");
  }

  closeState(currentItem) {
    currentItem.classList.remove("spoilerTab__dropDown_open");
  }

  toggleState(currentItem) {
    if (currentItem.classList.contains("spoilerTab__dropDown_open")) {
      this.closeState(currentItem);
    } else {
      this.openState(currentItem);
    }
  }
  handleClick() {
    document.addEventListener("mouseup", () => {
      let index = Array.from(this.button).indexOf(event.target.parentNode);
      let currentItem = this.dropDown[index];
      this.toggleState(currentItem);
    });
  }
}

let spoilerTab = new SpoilerTab({
  spoiler: ".spoilerTab",
  button: ".spoilerTab__button",
  dropDown: ".spoilerTab__dropDown",
});
;
class Header {
  constructor(props) {
    this.burgerIcon_active = document.querySelector(props.burgerIcon_active);
    this.burgerIcon_close = document.querySelector(props.burgerIcon_close);

    this.header = document.querySelector(props.header);
    this.header_active = props.header_active;

    this.body = document.getElementsByTagName(props.body)[0];
    this.wrapper = document.querySelector(props.wrapper);

    /* click on burger icon */
    console.log(this.burgerIcon_close);

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
      console.log(event.target);
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

  header: ".navigation",
  header_active: "navigation_active",

  body: "body",
  wrapper: ".wrapper",
});
;
