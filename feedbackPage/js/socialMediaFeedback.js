/* show more columns when user presses button  */
const socialMediaFeedback_showMore = () => {
  if ($(window).width() > 769) {
    $(function () {
      $(".socialMediaFeedback__item").slice(0, 2).show();
      $(".socialMediaFeedback__button-js").on("click", function (element) {
        element.preventDefault();
        $(".socialMediaFeedback__item:hidden").slice(0, 2).slideDown();
      });
    });
  }
};
socialMediaFeedback_showMore();

const slickSettings_socialMedia = () => {
  $(".socialMediaFeedback-slick-js").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    swipe: true,
    arrows: true,
    easing: "LINEAR",
    // centerMode: true,
    // variableWidth: true,
  });
};

const callFeedback_socialMedia_responsive = () => {
  if ($(window).width() < 1100) {
    slickSettings_socialMedia();
  }
};

callFeedback_socialMedia_responsive();

$(window).on("resize", function () {
  socialMediaFeedback_showMore();

  if (window.innerWidth > 1100) {
    $(".socialMediaFeedback-slick-js").slick("unslick");
  } else {
    slickSettings_socialMedia();
  }
});
