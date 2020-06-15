
$(".slider__row_big").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider__row_small",
  waitForAnimate: false,
  draggable: false,
  swipe: false,
  touchMove: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        draggable: true,
        swipe: true,
        touchMove: true,
      },
    },
  ],
});

$(".slider__row_small").slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  asNavFor: ".slider__row_big",
  arrows: false,
  dots: false,
  focusOnSelect: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1001,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        cssEase: "linear",
      },
    },

    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,

      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,

      },
    },
  ],
});

// current active slide in category in small row
$(".slider__slide_small").on("click", () => {
  $(".slider__slide_small").not(this).removeClass("slider__slide_small-active");

  $(event.currentTarget).addClass("slider__slide_small-active");
});
