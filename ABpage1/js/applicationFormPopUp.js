const applicationFormPopUp = () => {
  /* popUp */

  popUpGlobalClass.eq(2).addClass(popUp__activeGlobalClass);
  $(".overflow").addClass("popUp__shadow");
  $("body").addClass("popUp__Lock");

  $(".applicationFormPopUp__closeIcon").on("click", () => {
    popUpGlobalClass.removeClass(popUp__activeGlobalClass);
    $(".overflow").removeClass("popUp__shadow");
    $("body").removeClass("popUp__Lock");
  });
};

$(".travel-order__button, .travel-order__button-550px").on("click", () => {
  applicationFormPopUp();
});
