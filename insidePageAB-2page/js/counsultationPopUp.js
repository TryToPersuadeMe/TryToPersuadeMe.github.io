const findFilterPopUp = (popUpClass, popUpClass_active, popUp_button, popUp_closeIcon) => {
  $("." + popUp_button).on("click", () => {
    popUpClass.addClass(popUpClass_active);
    $("main").addClass("shadow");
    $("body").addClass("lock");
  });

  $("." + popUp_closeIcon).on("click", () => {
    popUpClass.removeClass(popUpClass_active);
    $("main").removeClass("shadow");
  });

  $(document).mouseup(() => {
    // close search input
    if (
      $(event.target).closest($(".popUp")).length == 0 &&
      $(event.target).closest($(".findFilter-form")).length == 0 &&
      $(event.target).closest($(".consultationForm")).length == 0
    ) {
      popUpClass.removeClass(popUpClass_active);
      $("main").removeClass("shadow");
    }
  });
  /* popUp end */
};

/* find filter popUp */
let popUp_consultationForm = $(".consultationForm");
let popUp_consultationForm_active = "consultationForm_active";
let popUp_consultationForm_button = "consultation__button-responsivePopup";
let popUp_consultationForm_closeIcon = "consultationForm__closeIcon";

findFilterPopUp(
  popUp_consultationForm,
  popUp_consultationForm_active,
  popUp_consultationForm_button,
  popUp_consultationForm_closeIcon
);
