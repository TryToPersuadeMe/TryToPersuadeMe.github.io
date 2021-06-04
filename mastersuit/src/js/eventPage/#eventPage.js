import "@scss/eventPage/eventPage.scss";

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

const playVideo = () => {
  window.addEventListener("click", () => {
    if (event.target.querySelector("video")) {
      const $video = event.target.querySelector("video");
      event.target.classList.add("clicked");
      $video.play();
    }
  });
};

playVideo();
