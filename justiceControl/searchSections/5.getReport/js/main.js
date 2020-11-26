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

    /* close */
    this.closeIcon = document.querySelector(props.closeIcon);
    this.windowClick();
    this.clickCloseIcon();
  }
  tabClick() {
    for (let index = 0; index < this.tab.length; index++) {
      this.tab[index].addEventListener("click", () => {
        if (this.tab[index].classList.contains("authorizationForm__tab-login-js")) {
          this.authorizationForm.classList.add("authorizationForm_login");
          this.tab[1].classList.add(this.tab_inactive);
          this.tab[0].classList.remove(this.tab_inactive);
        } else {
          this.authorizationForm.classList.remove("authorizationForm_login");
          this.tab[0].classList.add(this.tab_inactive);
          this.tab[1].classList.remove(this.tab_inactive);
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

  closePopUp() {
    this.authorizationForm.classList.remove("authorizationForm_active");

    this.body.classList.remove("body-lock");
    this.wrapper.classList.remove("wrapper_shadow");
  }

  windowClick() {
    window.addEventListener("click", () => {
      if (event.target == this.wrapper) {
        this.closePopUp();
      }
    });
  }

  clickCloseIcon() {
    this.closeIcon.addEventListener("click", () => {
      this.closePopUp();
    });
  }
}

const authorizationForm = new AuthorizationForm({
  authorizationForm: ".authorizationForm",
  tabs: ".authorizationForm__tab",
  tab_inactive: "authorizationForm__tab_inactive",

  loginForm: ".authorizationForm__loginFormWrapper",
  registrationForm: ".authorizationForm__registrationFormWrapper",

  closeIcon: ".authorizationForm__closeIcon",

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
class SelectReport {
  constructor(props) {
    this.button = document.querySelectorAll(props.button);
    this.content = document.querySelector(props.content);
    this.arrow = document.querySelector(props.arrow);
    // this.item = document.querySelector(props.item);

    this.buttonClick();
  }

  buttonClick() {
    document.addEventListener("click", () => {
      if (
        !event.target.offsetParent.classList.contains("boxInformation_valid") &&
        event.target.offsetParent.classList.contains("boxInformation")
      ) {
        this.changeState(event.target.offsetParent);
      }
    });
  }

  changeState(currentEl) {
    currentEl.classList.toggle("boxInformation_show");
    setTimeout(() => {
      currentEl.classList.toggle("boxInformation_animation");
    }, 100);
  }
}

const selectReport = new SelectReport({
  button: ".boxInformation__selectButton",
  content: ".boxInformation__container-js",
  arrow: ".boxInformation__arrow",

  item: ".boxInformation",
});
;