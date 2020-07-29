const popUpGlobalClass = $(".globalPopUp-js");
const popUp__activeGlobalClass = "globalPopUp-js__active";

const loginRegisterPopUp = () => {
  /* popUp */

  popUpGlobalClass.eq(0).addClass(popUp__activeGlobalClass);
  $(".overflow").addClass("popUp__shadow");
  $("body").addClass("popUp__Lock");

  $(".registrationForm__title_login-js").on("click", function () {
    popUpGlobalClass.eq(1).addClass(popUp__activeGlobalClass);
    popUpGlobalClass.eq(0).removeClass(popUp__activeGlobalClass);
  });

  $(".registrationForm__title_register-js").on("click", function () {
    popUpGlobalClass.eq(0).addClass(popUp__activeGlobalClass);
    popUpGlobalClass.eq(1).removeClass(popUp__activeGlobalClass);
  });

  $(".registrationForm__closeIcon").on("click", () => {
    popUpGlobalClass.removeClass(popUp__activeGlobalClass);
    $(".overflow").removeClass("popUp__shadow");

    $("body").removeClass("popUp__Lock");
  });

  /* popUp end */

  /* password form */
  $("#travelOrderForm__PopUp_form").validate({
    rules: {
      travelOrderForm__PopUp_checkbox: "required",
      travelOrderForm__PopUp_name: "required",
      travelOrderForm__PopUp_name_2: "required",
      travelOrderForm__PopUp_email: {
        required: true,
        email: true,
      },
      travelOrderForm__PopUp_password: "required",
      travelOrderForm__PopUp_password_2: {
        required: true,
        equalTo: "#travelOrderForm__PopUp_password",
      },
    },
  });
};

$(".navigation__icon_hide-360px, .navResponsive__login").on("click", () => {
  loginRegisterPopUp();
});

$(document).mouseup(() => {
  // close search input
  if ($(event.target).closest(popUpGlobalClass).length == 0) {
    popUpGlobalClass.removeClass(popUp__activeGlobalClass);
    $(".overflow").removeClass("popUp__shadow");
    $("body").removeClass("popUp__Lock");
  }
});
