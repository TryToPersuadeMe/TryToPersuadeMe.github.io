/* article responsive end */

/* CARDS responsive START */
const resizeNews = () => {
  if ($(window).width() > 769) {
    $(function () {
      $(".news").slice(0, 3).show();
      $(".box__button").on("click", function (element) {
        element.preventDefault();
        $(".news:hidden").slice(0, 3).slideDown();
      });
    });
  } else {
    $(function () {
      $(".news").slice(0, 4).show();
      $(".box__button").on("click", function (element) {
        element.preventDefault();
        $(".news:hidden").slice(0, 3).slideDown();
      });
    });
  }
};
resizeNews();

$(window).on("resize", function () {
  resizeNews();
});
