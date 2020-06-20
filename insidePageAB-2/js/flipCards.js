/* CARDS responsive START */
const resizeFlipCards = () => {
  if ($(window).width() < 1025) {
    $(".flipcard").appendTo(".offers__wrapperResponsive-js");
    /* show on button click */
    $(function () {
      $(".flipcard").slice(0, 4).show();
      $(".offers__button-js").on("click", function (element) {
        element.preventDefault();
        $(".flipcard:hidden").slice(0, 4).slideDown();
      });
    });
  } else {
    $(".offers__row-js").append((i) => $(".flipcard").slice(i * 3, (i + 1) * 3));
  }
};
resizeFlipCards();

$(window).on("resize", function () {
  resizeFlipCards();
  console.log("resizeFlipCards-3");
});
