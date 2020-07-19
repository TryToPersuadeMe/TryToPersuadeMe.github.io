let userProfile_news = "userProfile__news";
let userMessages = "user"

/* CARDS responsive START */
const showOnClick = (item, quantity, flex) => {
  displayFlex = flex;

  /* show on button click */
  $(function () {
    $("." + item)
      .slice(0, quantity)
      .show();
    $(".showOnClick-js").on("click", function (element) {
      if (displayFlex == true) {
        $("." + item + ":hidden")
          .slice(0, quantity)
          .slideDown()
          .css({ display: "flex" });
        element.preventDefault();
      }
    });
  });
};

showOnClick(userProfile_news, 2, true);
showOnClick(userMessages, 2, false);

$(window).on("resize", function () {
  showOnClick(userProfile_news, 2, true);
  showOnClick(userMessages, 2, false);

});
