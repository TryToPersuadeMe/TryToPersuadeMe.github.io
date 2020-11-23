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
$(document).ready(function () {
  $(".dateCalendar").daterangepicker({
    singleDatePicker: true,
    showDropdowns: false,
    autoApply: true,
    linkedCalendars: false,
    showCustomRangeLabel: false,

    opens: "center",
    locale: {
      format: "DD-MM-YYYY",
      daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      firstDay: 1,
    },
  });
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
