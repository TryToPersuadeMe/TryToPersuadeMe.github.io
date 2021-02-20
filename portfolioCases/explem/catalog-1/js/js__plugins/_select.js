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

