/* CARDS responsive START */

let total_messages = 1;

const show_messages = (quantity) => {
  /* show on button click */
  $(function () {
    $(".user").slice(0, quantity).show();
    $(".messages__button").on("click", function (element) {
      $(".user:hidden").slice(0, quantity).slideDown();
      element.preventDefault();
    });
  });
};

show_messages(total_messages);

$(window).on("resize", function () {
  show_messages(total_messages);
});
