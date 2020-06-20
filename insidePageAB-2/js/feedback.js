// Feedback slider

$(".feedback__sliderColumn").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  // fade: true,
  dotsClass: "slider-control__dots",
});

$(".slider-control__arrow_prev").on("click", () => {
  $(".feedback__sliderColumn").slick("slickPrev");
});

$(".slider-control__arrow_next").on("click", () => {
  $(".feedback__sliderColumn").slick("slickNext");
});

const resizeControl = () => {
  $(".slider-control__dots").appendTo(".slider-control");
  if ($(window).width() < 701) {
    $(".slider-control").appendTo(".feedback__sliderColumn");
  } else {
    $(".slider-control").appendTo(".feedback__photo-wrapper");
  }
};

/* $(window).on("resize", function () {
  resizeControl();
}); */

resizeControl();
