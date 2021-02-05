const dragAndDrop = () => {
  const $panel = document.querySelector(".filters");
  let offsetY;

  $panel.addEventListener("touchstart", () => {
    offsetY = event.pageY;
    console.log(event.targetTouches);
  });

  $panel.addEventListener("touchend", () => {
    let elementY = event.pageY - offsetY;
    console.log("asd");
    if (elementY < 0) {
      event.currentTarget.style.top = "0px";
    } else {
      event.currentTarget.style.top = elementY + "px";
    }
  });
  const startPosition = () => {
    $panel.style.top = ($panel.scrollHeight / 100) * 70 + "px";
  };

  window.addEventListener("resize", () => {
    startPosition();
  });

  startPosition();
};

dragAndDrop();
