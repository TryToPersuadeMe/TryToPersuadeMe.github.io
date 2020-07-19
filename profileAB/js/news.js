/* CARDS responsive START */

let total_news = 2;

const show_news = (quantity) => {
  /* show on button click */
  $(function () {
    $(".userProfile__news").slice(0, quantity).show();
    $(".news__button").on("click", function (element) {
      $(".userProfile__news:hidden").slice(0, quantity).slideDown().css({ display: "flex" });
      element.preventDefault();
    });
  });
};

show_news(total_news);

$(window).on("resize", function () {
  show_news(total_news);
});
