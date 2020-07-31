/* read  more */

$(".feedbackItem__spoiler_readMore-js").on("click", () => {
  $(event.currentTarget).parent().next().slideToggle(300);
  $(event.currentTarget).css({ display: "none" });
});

/* roll up  */
$(".feedbackItem__spoiler_сut-js").on("click", function () {
  $(event.currentTarget).closest(".feedbackItem__text-wrapper").slideToggle(300);
  $(event.currentTarget)
    .closest(".feedbackItem__text-wrapper_active")
    .find(".feedbackItem__spoiler_readMore-js")
    .css({ display: "inline" });
});

/* show more columns when user presses button  */
const feedbackItem_showMore = () => {
  $(function () {
    $(".feedbackItem").slice(0, 4).show();
    $(".feedbackSection__button_feedbackColumns-js").on("click", function (element) {
      element.preventDefault();
      $(".feedbackItem:hidden").slice(0, 4).slideDown();
    });
  });
};
feedbackItem_showMore();

/* slick slider */

const slickSettings = () => {
  $(".feedbackSection__row").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    swipe: true,
    arrows: true,
    easing: "LINEAR",
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          variableWidth: false,
        },
      },
    ],
  });
};

const callFeedback_slick_responsive = () => {
  if ($(window).width() < 1100) {
    slickSettings();
  }
};

callFeedback_slick_responsive();

$(window).on("resize", function () {
  if (window.innerWidth > 1100) {
    $(".feedbackSection__row").slick("unslick");
  } else {
    slickSettings();
  }
});
