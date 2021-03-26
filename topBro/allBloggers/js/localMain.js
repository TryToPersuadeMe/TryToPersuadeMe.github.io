class Select {
  constructor(el) {
    if (typeof el === "string") {
      el = document.querySelectorAll(el);
    }

    if (typeof el[Symbol.iterator] === "function") {
      return [...el].map((n) => new Select(n));
    }

    this.$select = el;

    this.$visibleLabelText = this.$select.querySelector(".select__visibleText");
    this.$hiddenInput = this.$select.querySelector(".select__input");

    this.$dropdown = this.$select.querySelector(".select__dropdown");

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
    if (event.target.classList.contains("select__item")) {
      this.$visibleLabelText.innerText = event.target.innerText;
      this.$hiddenInput.value = this.$visibleLabelText.innerText;
      this.$hiddenInput.setAttribute("name", this.$visibleLabelText.innerText);
    }
  }

  hanldeClickWindow() {
    window.addEventListener("click", () => {
      console.log(document.querySelectorAll(".select__dropdown"));

      if (event.target != this.$label && event.target != this.$hiddenInput) {
        this.closeState();
      }
    });
  }
}

const select = new Select(".select");
;
