/* CARDS responsive START */
const resizeLinkCards = () => {
  if ($(window).width() < 1025) {
    const $items = $(".linkCards__item");

    $(".linkCards__item").appendTo(".linkCards__wrapperResponsive-js");
    /* show on button click */
    $(function () {
      $(".linkCards__item").slice(0, 4).show();
      $(".linkCards__button").on("click", function (element) {
        element.preventDefault();
        $(".linkCards__item:hidden").slice(0, 4).slideDown();
      });
    });
  } else {
    $(".linkCards__row").append((i) => $items.slice(i * 3, (i + 1) * 3));
  }
};
resizeLinkCards();

/* $(window).on("resize", function () {
  resizeLinkCards();
}); */
