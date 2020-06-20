
/* CARDS responsive START */
const resizeFlipCards = () => {
  if ($(window).width() < 1025) {
    const $items = $(".flipcard");

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
    $(".offers__row-js").append((i) => $items.slice(i * 2, (i + 1) * 2));
  }
};
resizeFlipCards();

/* $(window).on("resize", function () {
  resizeFlipCards();
}); */
