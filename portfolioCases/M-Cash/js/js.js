$(document).ready(() => {
  // Slider slick - Partners
  $(".partners__slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    easing: "easy",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    variableWidth: true
  });
  // Slider slick - Review
  $(".review__slider").slick({
    arrows: true,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });

  //spoiler
  $(".spoiler__arrow").on("click", () => {
    $(event.currentTarget)
      .toggleClass("spoiler__arrow_active")
      .next()
      .children()
      .slideToggle(300);
  });

  //burger menu
  $(".header__burger-menu").on("click", () => {
    $(event.currentTarget).toggleClass("header__burger-menu_active");
    $(".header__navigation").toggleClass("header__navigation_active");
    $("body").toggleClass("lock");
  });

  //Image Back Ground
  function ibg() {
    $.each($(".ibg"), function(index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' +
            $(this)
              .find("img")
              .attr("src") +
            '")'
        );
      }
    });
  }
  ibg();
});
