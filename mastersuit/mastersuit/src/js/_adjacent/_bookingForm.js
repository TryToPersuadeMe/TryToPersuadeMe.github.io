import * as $ from "jquery";
import moment from "moment";
import momentLocale from "moment/locale/ru";
import daterangepicker from "daterangepicker";

import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
moment.locale("ru");

$(".booking__input_date").daterangepicker({
  singleDatePicker: true,

  autoApply: false,
  locale: {
    format: `MMMM, DD, YYYY`,

    daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    firstDay: 1,
  },
  linkedCalendars: false,
  alwaysShowCalendars: true,

  opens: "center",
});

/* clear */
const $date = document.querySelector(".booking__input_date");

$date.value = "";

const value = () => {
  const $booking = document.querySelector(".daterangepicker");
  $booking.insertAdjacentHTML("beforeend", "<p class='showCustomValue'></p>");
};
value();

const $duplicateValueText = document.querySelector(".showCustomValue");

$(".booking__input_date").on("show.daterangepicker", function (ev, picker) {
  $(".daterangepicker").addClass("opened");
});

$(".booking__input_date").on("hide.daterangepicker", function (ev, picker) {
  $(".daterangepicker").removeClass("opened");
  $(".daterangepicker").find("swiper-slide-active");

  const $daterangepicker = document.querySelector(".daterangepicker");
  const $curretnSlideTime = $daterangepicker.querySelector(".swiper-slide-active").getAttribute("value");

  $date.value = $date.value + " " + $curretnSlideTime + ":00";
});

/* time slider  */
const timeSlider = () => {
  const $booking = document.querySelector(".daterangepicker");
  $booking.insertAdjacentHTML("beforeend", "<div class='dateSlider swiper-container'><div class='swiper-wrapper'></div></div>");

  const dateTimeSlider = new Swiper(".dateSlider", {
    speed: 600,
    loopedSlides: 8,
    slidesPerView: "auto",
    centeredSlides: true,

    loop: true,

    direction: "vertical",
    spaceBetween: 2,
    mousewheel: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    on: {
      beforeInit: function () {
        for (let index = 0; index < 24; index++) {
          this.addSlide(index, `<div class="swiper-slide" value=${index}>${index} : 00</div>`);
        }
      },

      afterInit: function () {
        $duplicateValueText.innerText = "Выберите дату бронирования";
      },
    },
  });
};

timeSlider();
