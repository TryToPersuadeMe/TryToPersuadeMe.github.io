const findFilterPopUp = (popUpClass, popUpClass_active, popUp_button, popUp_closeIcon) => {
  $("." + popUp_button).on("click", () => {
    popUpClass.addClass(popUpClass_active);
    $("main").addClass("shadow");
    $("body").addClass("lock");
  });

  $("." + popUp_closeIcon).on("click", () => {
    popUpClass.removeClass(popUpClass_active);
    $("main").removeClass("shadow");
    $("body").removeClass("lock");

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
      $("body").removeClass("lock");

    } else {
      $("body").addClass("lock");
    }
  });
  /* popUp end */
};

/* find filter popUp */
let popUp_findFilter = $(".findFilter-form");
let popUp_findFilter_active = "findFilter-form_active";
let popUp_findFilter_button = "findFilter-form__popUp-button";
let popUp_findFilter_closeIcon = "findFilter-form__closeIcon";

findFilterPopUp(
  popUp_findFilter,
  popUp_findFilter_active,
  popUp_findFilter_button,
  popUp_findFilter_closeIcon
);
