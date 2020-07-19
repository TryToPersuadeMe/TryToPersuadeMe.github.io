/* CARDS responsive START */

let total = 2;

const showOnClick = (quantity) => {
  /* show on button click */
  $(function () {
    $(".userProfile__news").slice(0, quantity).show();
    $(".news__button").on("click", function (element) {
      $(".userProfile__news:hidden").slice(0, quantity).slideDown().css({ display: "flex" });
      element.preventDefault();
    });
  });
};

showOnClick(total);

$(window).on("resize", function () {
  showOnClick(total);
});
