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

$(window).on("resize", function () {
  socialMediaFeedback_showMore();
});
