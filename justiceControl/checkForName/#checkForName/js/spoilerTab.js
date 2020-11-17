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
      let index = Array.from(this.button).indexOf(event.target.parentNode);
      let currentItem = this.dropDown[index];
      this.toggleState(currentItem);
    });
  }
}

let spoilerTab = new SpoilerTab({
  spoiler: ".spoilerTab",
  button: ".spoilerTab__button",
  dropDown: ".spoilerTab__dropDown",
});
