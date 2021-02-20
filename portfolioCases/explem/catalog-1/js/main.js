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

/* custom plugin */
class Select {
  constructor(el) {
    if (typeof el === "string") {
      el = document.querySelectorAll(el);
    }

    if (typeof el[Symbol.iterator] === "function") {
      return [...el].map((n) => new this.constructor(n));
    }

    this.$select = el;

    // this.$inputField = this.$select.querySelector("input");
    this.$label = this.$select.querySelector(".select-title-js");
    this.$droplist = this.$select.querySelector(".select-droplist-js");

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
    if (
      this.$select.classList.contains("open") &&
      event.target.parentNode != this.$droplist &&
      event.target != this.$droplist
    ) {
      this.closeState();
    } else {
      this.openState();
    }
  }

  handleClick() {
    this.$select.addEventListener("mouseup", () => {
      this.toggleState();
    });
  }

  /* change value of input */

  hanldeClickWindow() {
    window.addEventListener("click", () => {
      if (event.target.parentNode != this.$select && event.target.parentNode != this.$droplist) {
        this.closeState();
      }
    });
  }
}


const select = new Select(".select");

;

const catalogPanel = () => {
  const $container = document.querySelector(".shop__panel");
  let $resetButton = document.querySelector(".panel__button_reset");
  let $callFiltersButton = document.querySelector(".panel__button_callFilters");
  let $submitButton = document.querySelector(".panel__button_submit");
  let $filtersPopUp = document.querySelector(".mainFilters");
  let $htmlWrapper = document.querySelector(".wrapper");

  const removePopup = () => {
    $filtersPopUp.classList.remove("active");
    $htmlWrapper.classList.remove("wrapper_locked");
  };
  
  

  $container.addEventListener("click", () => {
    let $input = event.target.querySelector("input");
    let $title = event.target.offsetParent.previousElementSibling;

    if (event.target.classList.contains("selectCheckboxes__line")) {
      /* mark if some input was chose */
      if ($input.hasAttribute("disabled")) return false;
      $input.checked ? ($input.checked = false) : ($input.checked = true);

      /* mark label if have active inputs */
      let $inputCheked = event.target.offsetParent.querySelectorAll("input:checked");
      if ($inputCheked.length) {
        $title.classList.add("chose");
        $resetButton.classList.add("active");
        $submitButton.removeAttribute("disabled");
      } else {
        $title.classList.remove("chose");
        $resetButton.classList.remove("active");
        $submitButton.setAttribute("disabled", true);
      }
    }
  });

  /* delete chose class from chosen selects */
  $resetButton.addEventListener("click", () => {
    let $activatedFilters = document.querySelectorAll(".chose");
    $activatedFilters.forEach((value) => value.classList.remove("chose"));
    removePopup();
    $submitButton.setAttribute("disabled", true);
    event.currentTarget.classList.remove("active");
  });

  $callFiltersButton.addEventListener("click", () => {
    event.preventDefault();

    $filtersPopUp.classList.add("active");
    $htmlWrapper.classList.add("wrapper_locked");
  });

  $submitButton.addEventListener("click", () => {
    event.preventDefault();
    removePopup();
    $callFiltersButton.classList.add("chose");
  });
};

catalogPanel();

const responsiveBlock = (element, newParent, oldParent, width) => {
  const $block = document.querySelector(element);
  const $newParent = document.querySelector(newParent);
  const $oldParent = document.querySelector(oldParent);

  window.innerWidth <= width ? $newParent.prepend($block) : $oldParent.prepend($block);
};

window.addEventListener("resize", () => responsiveBlock(".shop__panel", "main", ".shop", 1024));

document.addEventListener("DOMContentLoaded", () => {
  responsiveBlock(".shop__panel", "main", ".shop", 1024);
});
;
