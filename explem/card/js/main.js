const updateSidesSlides = () => {
  const slidesArr = document.querySelectorAll(".additionalSlide");
  const slide_next = document.querySelector(".swiper-slide-next");
  const slide_prev = document.querySelector(".swiper-slide-prev");
  const slide_current = document.querySelector(".swiper-slide-active");
  slidesArr[0].innerHTML = slide_next.innerHTML;
  slidesArr[1].innerHTML = slide_prev.innerHTML;
};

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  speed: 500,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiperStuffSlider__pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 4,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiperStuffSlider__button_next",
    prevEl: ".swiperStuffSlider__button_prev",
  },

  on: {
    transitionEnd: function () {
      updateSidesSlides();
    },
    resize: function () {
      if (window.innerWidth <= 1000) {
        this.changeDirection("vertical", true);
      } else {
        this.changeDirection("horizontal", true);
      }
    },
    beforeInit: function () {
      if (window.innerWidth <= 1000) {
        this.changeDirection("vertical", true);
      } else {
        this.changeDirection("horizontal", true);
      }
    },
  },
});
;
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
const countPerClick = (button, counter) => {
  const $button = document.querySelectorAll(button);
  const $counter = document.querySelector(counter);
  let totalQuantity = Number($counter.innerText);

  const plus = () => {
    $counter.dataset.counted = "true";
    totalQuantity = totalQuantity + 1;
    $counter.innerText = totalQuantity;
  };

  const minus = () => {
    $counter.dataset.counted = "false";
    totalQuantity = totalQuantity - 1;
    $counter.innerText = totalQuantity;
  };

  const toggle = () => {
    if ($counter.dataset.counted == "true") {
      minus();
    } else {
      plus();
    }
  };

  if ($button.length > 1) {
    $button.forEach((el) => el.addEventListener("click", () => toggle()));
  } else {
    $button[0].addEventListener("mouseup", () => toggle());
  }
};

countPerClick(".filters__addFavoriteButton", "#favorites-counter");
countPerClick(".filters__button", "#bag-counter");
;
const dragAndDrop = () => {
  const $panel = document.querySelector(".filters");
  let offsetY;

  $panel.addEventListener("touchstart", () => {
    offsetY = event.pageY;
  });

  $panel.addEventListener("touchend", () => {
    let elementY = event.pageY - offsetY;

    if (elementY < 0) {
      event.currentTarget.style.top = "0px";
    } else {
      event.currentTarget.style.top = elementY + "px";
    }
  });
  const startPosition = () => {
    $panel.style.top = ($panel.scrollHeight / 100) * 80 + "px";
    console.log("asd");
  };

  window.addEventListener("resize", () => {
    startPosition();
  });

  startPosition();
};

dragAndDrop();
;
