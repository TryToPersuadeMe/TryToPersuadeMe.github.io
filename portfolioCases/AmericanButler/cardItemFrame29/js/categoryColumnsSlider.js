$(".category__row").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  swipe: true,
  arrows: true,
  speed: 1500,
  easing: "LINEAR",
  variableWidth: true,
  centerMode: true,
  touchThreshold: 30,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 380,
      settings: {
        arrows: true,
      },
    },
  ],
});

function playsl(slider, play_st, play_typ) {
  if (play_st == true) {
    if (play_typ == "slickNext") slider.slick("slickNext");
    if (play_typ == "slickPrev") slider.slick("slickPrev");
  }
}

$(".category__row")
  .find(".slick-next")
  .mouseenter(function () {
    console.log("find next");

    play_typ = "slickNext";
    play_st = true;
    slider = $(this).parent();
    timerId = setInterval(function () {
      playsl(slider, play_st, play_typ);
    }, 220);

    return false;
  });

$(".category__row")
  .find(".slick-prev")
  .mouseenter(function () {
    console.log("find prev");

    play_typ = "slickPrev";
    play_st = true;
    slider = $(this).parent();
    timerId = setInterval(function () {
      playsl(slider, play_st, play_typ);
    }, 220);

    return false;
  });

$(".category__row").on("mouseout", () => {
  play_st = false;
});

$(".category__wrapper").on("click", () => {
  play_st = false;
});

playsl();

