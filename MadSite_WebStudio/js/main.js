const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  }
});

/* slider */
$(document).ready(() => {
  /* feed back section slider */
  $(".slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    centerMode: false,
    dots: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  });
});
;

/* tabs */
window.addEventListener("DOMContentLoaded", () => {
  let tabs = new Tabs({
    button: ".tabsPanel__li",
    button_active: "tabsPanel__li_active",

    contentWrapper: ".tabsSlide__item",
    acontentWrapper_animation: "tabsSlide__item_animation",
    contentWrapper_activate: "tabsSlide__item_activate",
  });
});

let animDuration = 200;

class Tabs {
  constructor(props) {
    this.button = document.querySelectorAll(props.button);
    this.button_active = props.button_active;

    this.contentWrapper = document.querySelectorAll(props.contentWrapper);
    this.acontentWrapper_animation = props.acontentWrapper_animation;
    this.contentWrapper_activate = props.contentWrapper_activate;

    this.arrOfTabsValues = [];

    this.handleClick();
  }

  handleClick() {
    let key;

    for (let index = 0; index < this.button.length; index++) {
      /* get value of wrappers tabs*/
      this.arrOfTabsValues.push(this.contentWrapper[index]);

      this.button[index].addEventListener("click", () => {
        /* get current key from li button attribute */
        key = event.target.getAttribute("data-key");

        /* compate key and value */
        this.compareKeyAndValue.bind(this, key)();

        /* give active class current li button */
        event.target.classList.add(this.button_active);
      });
    }
  }

  /* compate key and value */
  compareKeyAndValue(key) {
    for (let index = 0; index < this.arrOfTabsValues.length; index++) {
      this.button[index].classList.remove(this.button_active);
      if (key == this.arrOfTabsValues[index].dataset.value) {
        this.arrOfTabsValues[index].classList.add(this.contentWrapper_activate);
        setTimeout(() => {
          this.arrOfTabsValues[index].classList.add(this.acontentWrapper_animation);
        }, animDuration);
      } else {
        this.arrOfTabsValues[index].classList.remove(this.contentWrapper_activate);
        setTimeout(() => {
          this.arrOfTabsValues[index].classList.remove(this.acontentWrapper_animation);
        }, animDuration);
      }
    }
  }
}
;

/* popUp */
class PopUp {
  constructor(props) {
    this.buttons = document.querySelectorAll(props.buttons);

    this.popUp = document.querySelector(props.popUp);
    this.popUp_closeIcon = document.querySelector(props.popUp_closeIcon);
    this.globalWrapper = document.querySelector(props.globalWrapper);
    this.globalWrapper_shadow = props.globalWrapper_shadow;

    this.popUp_active = props.popUp_active;
    this.body = document.querySelector("body");

    this.openPopUp.bind(this)();
    this.clickCloseIcon.bind(this)();
    this.windowClick();
  }

  openPopUp() {
    for (let index = 0; index < this.buttons.length; index++) {
      this.buttons[index].addEventListener("click", () => {
        this.popUp.classList.add(this.popUp_active);

        this.body.classList.add("body-lock");
        this.globalWrapper.classList.add("wrapper_shadow");
      });
    }
  }

  closePopUp() {
    this.popUp.classList.remove(this.popUp_active);
    this.body.classList.remove("body-lock");
    this.globalWrapper.classList.remove("wrapper_shadow");
  }

  clickCloseIcon() {
    if (this.popUp_closeIcon) {
      console.log("Asd");
      this.popUp_closeIcon.addEventListener("click", (event) => {
        event.target == this.popUp_closeIcon ? this.closePopUp() : false;
      });
    }
  }

  windowClick() {
    window.addEventListener("click", () => {
      if (event.target == this.globalWrapper) {
        this.closePopUp();
      }
    });
  }
}

let popUp = new PopUp({
  buttons: ".popUp-callButton-js",

  popUp: ".feedbackForm",
  popUp_active: "feedbackForm_active",
  popUp_closeIcon: ".feedbackForm__closeIcon",

  body: "body",
  body_lock: "body-lock",

  globalWrapper: ".wrapper",
  globalWrapper_shadow: "wrapper_shadow",
});
;

/* typer for text */
class TypeIt extends PopUp {
  constructor(props) {
    super(props);

    this.typeText = document.querySelectorAll(props.typeText);
    this.textArea = document.querySelector(props.textArea);
    this.popUp_closeIcon = popUp.popUp_closeIcon;
    this.popUp = popUp.popUp;
    this.popUp_active = popUp.popUp_active;

    this.buttons = popUp.buttons;
    this.text;

    this.buttonClick();
    this.clickCloseIcon();
  }

  /* click on button with text in data attribute */
  buttonClick() {
    this.buttons.forEach((element) => {
      element.addEventListener("click", () => {
        this.text = element.dataset.typingtext;

        this.typeContent();
      });
    });
  }

  /* typing text */
  typeContent() {
    this.ch = 0;
    this.typeContent = () => {
      if (this.ch > this.text.length) return;

      /* clear placeholder when popUp deactivated */
      if (!this.popUp.classList.contains(this.popUp_active)) {
        this.ch = 0;
        return this.textArea.removeAttribute("placeholder");
      }

      this.textArea.setAttribute("placeholder", this.text.substring(0, this.ch++));
      setTimeout(this.typeContent, ~~(Math.random() * (300 - 60 + 1) + 60));
    };

    this.typeContent();
  }
}

const typeIt = new TypeIt({
  typeText: ".typer",
  textArea: ".feedbackForm__input_textarea",
});
;

/* responsive navigation */
class Header {
  constructor(props) {
    this.burgerIcon = document.querySelector(props.burgerIcon);
    this.burgerIcon_active = props.burgerIcon_active;

    this.header = document.querySelector(props.header);
    this.header_active = props.header_active;

    this.body = document.getElementsByTagName(props.body)[0];

    this.globalWrapper = document.querySelector(props.globalWrapper);

    /* click on burger icon */
    this.burgerClick();

    /* click != burger icon or header. its close menu*/
  }

  burgerClick() {
    this.burgerIcon.addEventListener("click", () => {
      event.currentTarget.classList.toggle(this.burgerIcon_active);
      this.header.classList.toggle(this.header_active);

      this.body.classList.toggle("body-lock");
      this.globalWrapper.classList.toggle("wrapper_shadow");
    });
  }

  closeMenu() {
    this.burgerIcon.classList.remove(this.burgerIcon_active);
    this.header.classList.remove(this.header_active);

    this.body.classList.remove("body-lock");
    this.globalWrapper.classList.remove("wrapper_shadow");
  }
}

const responsive = new Header({
  burgerIcon: ".header__burgerMenu",
  burgerIcon_active: "header__burgerMenu_active",

  header: ".header__navigation",
  header_active: "header__navigation_active",

  body: "body",
  globalWrapper: ".wrapper",

  globalWrapper_shadow: "wrapper_shadow",
});
;
