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
