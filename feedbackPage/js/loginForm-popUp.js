
let textArea_words = 0


const loginForm_popUp = (popUpClass, popUpClass_active, popUp_button, popUp_closeIcon) => {
  $("." + popUp_button).on("click", (event) => {
    if (
      $(".sendFeedbackForm__textArea textarea").val().length > textArea_words &&
      $(".jq-selectbox").hasClass("changed")
    ) {
      popUpClass.addClass(popUpClass_active);
      $("main").addClass("shadow");
      $("body").addClass("lock");
      event.preventDefault();
    } else {
      event.preventDefault();
    }
  });

  $("." + popUp_closeIcon).on("click", () => {
    popUpClass.removeClass(popUpClass_active);
    $("main").removeClass("shadow");
    $("body").removeClass("lock");
  });

  $(document).mouseup(() => {
    // close search input
    if ($(event.target).closest(popUp_loginForm).length == 0) {
      popUpClass.removeClass(popUpClass_active);
      $("main").removeClass("shadow");
      $("body").removeClass("lock");
    } else {
      $("body").addClass("lock");
    }
  });
};

/* ask question section popUp */
let popUp_loginForm = $(".loginForm-popUp");
let popUp_loginForm_active = "loginForm-popUp_active";
let popUp_loginForm_button = "sendFeedbackForm__button";
let popUp_loginForm_closeIcon = "loginForm-popUp__closeIcon";

loginForm_popUp(
  popUp_loginForm,
  popUp_loginForm_active,
  popUp_loginForm_button,
  popUp_loginForm_closeIcon
);
