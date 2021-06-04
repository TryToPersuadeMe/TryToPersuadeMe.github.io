import WOW from "wow.js";

var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 150, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)

  // scrollContainer: null, // optional scroll container selector, otherwise use window,
  // resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

/* popUp */
document.addEventListener("click", () => {
  let $window;
  if (event.target.classList.contains("call-popUp-js")) {
    console.log(event.target);
    let window_num = event.target.dataset.window;
    $window = document.querySelector(`#popUpWindow-js-${window_num}`);
    $window.classList.add("popUp_active");
    document.body.classList.add("popUp-shadow");
  }

  /* закрытие окна по клику на кнопку закрытия */
  if (event.target.classList.contains("popUp__closeButton")) {
    const $activePopUp = document.querySelector(".popUp_active");
    $activePopUp.classList.remove("popUp_active");
    document.body.classList.remove("popUp-shadow");
  }

  if (event.target.classList.contains("popUp-shadow")) {
    const $activePopUp = document.querySelector(".popUp_active");
    $activePopUp.classList.remove("popUp_active");
    document.body.classList.remove("popUp-shadow");
  }
});
