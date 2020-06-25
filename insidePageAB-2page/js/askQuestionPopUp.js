var myFuncCalls = 0;
console.log(myFuncCalls);


const popUpFunction = (popUpClass, popUpClass_active, popUp_button, popUp_closeIcon) => {
  $("." + popUp_button).on("click", () => {
    $("." + popUpClass).addClass(popUpClass_active);
    $(".overflow").addClass("shadow-popUp");
    $("body").addClass("lock-popUp");
  
  });

  $("." + popUp_closeIcon).on("click", () => {
    $("." + popUpClass).removeClass(popUpClass_active);
    $(".overflow").removeClass("shadow-popUp");
    $("body").removeClass("lock-popUp");
  });
/* 
  $(document).mouseup(() => {
    // close search input
    if ($(event.target).closest($("." + popUpClass)).length > 2) {
      console.log($(event.target).closest($("." + popUpClass).length));
      $(".overflow").removeClass("shadow-popUp");
      $("body").removeClass("lock-popUp");
      $("." + popUpClass).removeClass(popUpClass_active);
    }
  });
 */
  /* popUp end */
};

/*  ask question section popUp */
let popUp_AskQuestion = "popUp";
let popUp_AskQuestion_active = "popUp_active";
let popUp_AskQuestion_button = "popUp__button-active";
let popUp_AskQuestion_closeIcon = "popUp__closeIcon";

popUpFunction(
  popUp_AskQuestion,
  popUp_AskQuestion_active,
  popUp_AskQuestion_button,
  popUp_AskQuestion_closeIcon
);

/* find filter popUp */
let popUp_findFilter = "findFilter-form";
let popUp_findFilter_active = "findFilter-form_active";
let popUp_findFilter_button = "findFilter-form__popUp-button";
let popUp_findFilter_closeIcon = "findFilter-form__closeIcon";

popUpFunction(
  popUp_findFilter,
  popUp_findFilter_active,
  popUp_findFilter_button,
  popUp_findFilter_closeIcon
);

/* find filter popUp */
let popUp_consultationForm = "consultationForm";
let popUp_consultationForm_active = "consultationForm_active";
let popUp_consultationForm_button = "consultation__button-responsivePopup";
let popUp_consultationForm_closeIcon = "consultationForm__closeIcon";

popUpFunction(
  popUp_consultationForm,
  popUp_consultationForm_active,
  popUp_consultationForm_button,
  popUp_consultationForm_closeIcon
);
