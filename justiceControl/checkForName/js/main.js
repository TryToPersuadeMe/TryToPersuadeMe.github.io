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
const sliderWrapper = ".manyArticles__row";

const slickSettings = () => {
  $(sliderWrapper).slick({
    responsive: [
      { breakpoint: 4000, settings: "unslick" },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          dots: false,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
};

slickSettings();

$(window).on("resize", function () {
  if ($(window).width() < 768) {
    slickSettings();
  } else {
    $(sliderWrapper).slick("unslick");
  }
});
;
class rSlider {
  constructor(args) {
    this.el = document.querySelector(args.element);

    this.form = document.querySelector(args.form);

    this.dataRange = document.createElement("div");
    this.valueInput = document.createElement("input");
    this.progressBar = document.createElement("span");

    this.valueInput.className = "rangeInput__valueInput";
    this.progressBar.className = "rangeInput__progressBar";
    this.valueInput.setAttribute("readonly", "");

    this.el.parentElement.appendChild(this.progressBar, this.el);
    this.progressBar.appendChild(this.valueInput, this.el);

    this.inputs = document.querySelectorAll(".watch-progressBar-js");

    // this.stateText = document.querySelectorAll(args.stateText);

    this.updatePos();
  }

  center(width) {
    if (width > 50) {
      this.valueInput.style.transform = "translateX(-50%)";
      // this.changeText(1);
    } else {
      this.valueInput.style.transform = "translateX(50%)";
      // this.changeText(01);
    }
  }

  updatePos() {
    let widthPerItem = 100 / this.inputs.length;
    let count = 0;
    this.valueInput.value = "0 %";

    this.form.addEventListener("click", () => {
      if (event.target.classList.contains("select__item")) {
        count = count + 1;
        this.progressBar.style.maxWidth = this.dataRange.offsetWidth + widthPerItem * count + "%";
        this.valueInput.value = Math.trunc(widthPerItem * count) + "%";
      }
    });

    for (let index = 0; index < this.inputs.length; index++) {
      this.inputs[index].setAttribute("data-watch", "false");
      this.inputs[index].value = "";
      this.inputs[index].addEventListener("input", () => {
        if (widthPerItem < 0 || count < 0) {
          this.valueInput.value = "0 %";
          count = 0;
          widthPerItem = 100 / this.inputs.length;
          return;
        }

        if (event.target.checked || event.target.value.length > 0) {
          if (event.target.dataset.watch == "true") return;
          count++;
          event.target.setAttribute("data-watch", "true");
          this.progressBar.style.maxWidth = this.dataRange.offsetWidth + widthPerItem * count + "%";
          this.valueInput.value = Math.trunc(widthPerItem * count) + "%";
          this.center(widthPerItem * count);
        } else {
          count--;
          this.valueInput.value = Math.trunc(widthPerItem * count) + "%";
          this.progressBar.style.maxWidth = widthPerItem * count + "%";
          event.target.setAttribute("data-watch", "false");
          this.center(widthPerItem * count);
        }
      });
    }
  }

  select() {
    document.addEventListener("loc", listener, options);
  }

  // changeText(el) {
  //   this.stateText[el].classList.add("state__text_active");
  // }
}
let range1 = new rSlider({
  element: ".rangeInput__line",
  form: "#form",
  watchingFields: ".watch-progressBar-js",
  tick: 1,
  // stateText: ".state__text",
});
;
class AuthorizationForm {
  constructor(props) {
    this.authorizationForm = document.querySelector(props.authorizationForm);
    this.tab = document.querySelectorAll(props.tabs);
    this.tab_inactive = props.tab_inactive;
    this.loginForm = document.querySelector(props.loginForm);
    this.registrationForm = document.querySelector(props.registrationForm);
    this.tabClick();

    /* popUp */
    this.loginButton = document.querySelector(".login-js__loginButton");
    this.registrationButton = document.querySelector(".login-js__registration");
    this.body = document.getElementsByTagName("body")[0];
    this.wrapper = document.querySelector(props.wrapper);
    this.popUp();

     this.windowClick()
  }
  tabClick() {
    for (let index = 0; index < this.tab.length; index++) {
      this.tab[index].addEventListener("click", () => {
        if (this.tab[index].classList.contains("authorizationForm__tab-login-js")) {
          this.authorizationForm.classList.add("authorizationForm_login");
          this.tab[0].classList.add(this.tab_inactive);
          this.tab[1].classList.remove(this.tab_inactive);
        } else {
          this.authorizationForm.classList.remove("authorizationForm_login");
          this.tab[1].classList.add(this.tab_inactive);
          this.tab[0].classList.remove(this.tab_inactive);
        
        }
      });
    }
  }

  popUp() {
    this.loginButton.addEventListener("click", () => {
      this.authorizationForm.classList.add("authorizationForm_active");
      this.body.classList.add("body-lock");
      this.wrapper.classList.add("wrapper_shadow");
    });

    this.registrationButton.addEventListener("click", () => {
      this.authorizationForm.classList.add("authorizationForm_active");
      this.body.classList.add("body-lock");
      this.wrapper.classList.add("wrapper_shadow");
    });
  }

  windowClick() {
    window.addEventListener("click", () => {
      if (event.target == this.wrapper) {
        this.authorizationForm.classList.remove("authorizationForm_active");

        console.log(this.authorizationForm);

        this.body.classList.remove("body-lock");
        this.wrapper.classList.remove("wrapper_shadow");
      }
    });
  }
}

const authorizationForm = new AuthorizationForm({
  authorizationForm: ".authorizationForm",
  tabs: ".authorizationForm__tab",
  tab_inactive: "authorizationForm__tab_inactive",
  loginForm: ".authorizationForm__loginFormWrapper",
  registrationForm: ".authorizationForm__registrationFormWrapper",
  wrapper: ".wrapper",
});

const togglePasswodVisible = () => {
  const showIcon = document.querySelectorAll(".show-password-js");
  for (let index = 0; index < showIcon.length; index++) {
    showIcon[index].addEventListener("click", () => {
      if (showIcon[index].classList.contains("show-password-js-visible")) {
        showIcon[index].previousElementSibling.type = "password";
        showIcon[index].classList.remove("show-password-js-visible");
      } else {
        showIcon[index].previousElementSibling.type = "text";
        showIcon[index].classList.add("show-password-js-visible");
      }
    });
  }
};

togglePasswodVisible();
;
