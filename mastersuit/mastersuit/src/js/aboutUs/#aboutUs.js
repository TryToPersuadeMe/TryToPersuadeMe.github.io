import "@scss/aboutUs/aboutUs.scss";

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

// var picture = new WOW({
//   boxClass: "parralax", // animated element css class (default is wow)
//   animateClass: "currentZIndex", // animation css class (default is animated)
//   offset: 150, // distance to the element when triggering the animation (default is 0)
//   mobile: true, // trigger animations on mobile devices (default is true)
//   live: true, // act on asynchronously loaded content (default is true)

//   scrollContainer: ".pictureBlock", // optional scroll container selector, otherwise use window,
//   // resetAnimation: true, // reset animation on end (default is true)
// });
// picture.init();

window.addEventListener("scroll", () => {
  const $allPictures = document.querySelectorAll(".currentZIndex");
  if ($allPictures.length > 0) {
    console.log("ads");
  }
});
