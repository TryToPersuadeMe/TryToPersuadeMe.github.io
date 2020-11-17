const sliderWrapper = ".manyArticles__row";

const slickSettings = () => {
  $(sliderWrapper).slick({
    responsive: [
      { breakpoint: 4000, settings: "unslick" },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          dots: false,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
};

slickSettings();

$(window).on("resize", function () {
  if ($(window).width() < 768) {
    slickSettings();
  } else {
    $(sliderWrapper).slick("unslick");
  }
});
