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
