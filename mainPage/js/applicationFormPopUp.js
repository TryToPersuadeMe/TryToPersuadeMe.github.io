const applicationFormPopUp = () => {
  /* popUp */
  const popUp = $(".applicationFormPopUp");
  const popUp__active = "applicationFormPopUp_active";

  $(".travel-order__button, .travel-order__button-550px").on("click", () => {
    popUp.eq(0).addClass(popUp__active);
    $(".overflow").addClass("popUp__shadow");
    $("body").addClass("popUp__Lock");
  });

  $(".applicationFormPopUp__closeIcon").on("click", () => {
    popUp.removeClass(popUp__active);
    $(".overflow").removeClass("popUp__shadow");
    $("body").removeClass("popUp__Lock");
  });

  $(document).mouseup(() => {
    // close search input

    if ($(event.target).closest(popUp).length == 0) {
      popUp.removeClass(popUp__active);
      $(".overflow").removeClass("popUp__shadow");
      $("body").removeClass("popUp__Lock");
    }
  });
  /* popUp end */
};

applicationFormPopUp();
