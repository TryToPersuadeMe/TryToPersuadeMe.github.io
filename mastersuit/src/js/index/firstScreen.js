import Swiper from "swiper";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
SwiperCore.use([Pagination, Autoplay]);
import "swiper/swiper-bundle.css";

const firstScreenSlider = new Swiper(".firstScreen__slider", {
  speed: 1700,

  autoplay: {
    delay: 1300,
  },
  pagination: {
    el: ".firstScreen__pagination",
    clickable: true,
  },
});
