const applicationFormPopUp = () => {
  /* popUp */

  popUp.eq(2).addClass(popUp__active);
  $(".overflow").addClass("popUp__shadow");
  $("body").addClass("popUp__Lock");

  $(".applicationFormPopUp__closeIcon").on("click", () => {
    popUp.removeClass(popUp__active);
    $(".overflow").removeClass("popUp__shadow");
    $("body").removeClass("popUp__Lock");
  });
};

$(".travel-order__button, .travel-order__button-550px").on("click", () => {
  applicationFormPopUp();
});
