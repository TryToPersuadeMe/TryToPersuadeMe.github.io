class Spoiler {
  constructor(props) {
    this.spoiler = document.querySelector(props.spoiler);
    this.arrow = document.querySelector(props.arrow);
    this.dropDown = document.querySelector(props.dropDown);
    this.button = document.querySelector(props.button);
    this.q = document.querySelectorAll(props.dropDown);

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
      if (event.target.offsetParent.classList.contains("spoilerTab__button")) {
        let index = Array.from(this.button).indexOf(event.target.parentNode);
        let currentItem = this.dropDown[index];
        this.toggleState(currentItem);
      }
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

class LogedState {
  constructor(props) {
    this.$loginButton = document.querySelector(props.loginButton);
    this.$exitButton = document.querySelector(props.exitButton);

    this.$logedState = document.querySelector(props.logedState);
    this.$unLogedState = document.querySelector(props.unLogedState);

    this.logedStateButtons = props.logedStateButtons;
    this.clickLogin = this.clickLogin.bind(this)();
    this.clickExit = this.clickExit.bind(this)();
  }

  clickLogin() {
    this.$loginButton.addEventListener("click", () => {
      this.$logedState.classList.remove(this.logedStateButtons);
      this.$unLogedState.classList.add(this.logedStateButtons);
    });
  }

  clickExit() {
    this.$exitButton.addEventListener("click", () => {
      this.$logedState.classList.add(this.logedStateButtons);
      this.$unLogedState.classList.remove(this.logedStateButtons);
    });
  }
}

const loged = new LogedState({
  logedStateButtons: "login-js_changeState",

  exitButton: ".login-js__exit",
  loginButton: ".login-js__loginButton",

  logedState: ".login-js_loged",
  unLogedState: ".login-js_unloged",
});
;
window.addEventListener("DOMContentLoaded", () => {
  let range1 = new rSlider({
    element: ".rangeInput__line",
    tick: 1,
  });
});

class rSlider {
  constructor(args) {
    this.el = document.querySelector(args.element);
    this.min = +this.el.min || 0;
    this.max = +this.el.max || 100;
    this.step = +this.el.step || 1;
    this.tick = args.tick || this.step;
    this.addTicks();
    this.dataRange = document.createElement("div");
    this.valueInput = document.createElement("input");
    this.dataRange.className = "rangeInput__button";
    this.valueInput.className = "rangeInput__valueInput";
    this.valueInput.setAttribute("readonly", "");
    this.el.parentElement.appendChild(this.dataRange, this.el);
    this.dataRange.appendChild(this.valueInput, this.el);

    this.updatePos();

    this.el.addEventListener("input", () => {
      this.updatePos();
    });
  }

  addTicks() {
    let wrap = document.createElement("div");
    wrap.className = "range";
    this.el.parentElement.insertBefore(wrap, this.el);
    wrap.appendChild(this.el);
  }

  getRangePercent() {
    let max = this.el.max,
      min = this.el.min,
      relativeValue = this.el.value - min,
      ticks = max - min,
      percent = relativeValue / ticks;
    this.valueInput.value = Math.trunc(percent * 100) + " %";
    return percent;
  }

  updatePos() {
    let percent = this.getRangePercent(),
      left = percent * 100,
      emAdjust = percent * 3;
    this.dataRange.style.left = `calc(${left}% - ${emAdjust}em)`;
    this.valueInput.style.left = `calc(${left}% - ${emAdjust}em)`;
  }
}
;
