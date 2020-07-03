const popUp = $(".globalPopUp-js");
const popUp__active = "globalPopUp-js__active";

const loginRegisterPopUp = () => {
  /* popUp */

  popUp.eq(0).addClass(popUp__active);
  $(".overflow").addClass("popUp__shadow");
  $("body").addClass("popUp__Lock");

  $(".registrationForm__title_login-js").on("click", function () {
    popUp.eq(1).addClass(popUp__active);
    popUp.eq(0).removeClass(popUp__active);
  });

  $(".registrationForm__title_register-js").on("click", function () {
    popUp.eq(0).addClass(popUp__active);
    popUp.eq(1).removeClass(popUp__active);
  });

  $(".registrationForm__closeIcon").on("click", () => {
    popUp.removeClass(popUp__active);
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
  if ($(event.target).closest(popUp).length == 0) {
    popUp.removeClass(popUp__active);
    $(".overflow").removeClass("popUp__shadow");
    $("body").removeClass("popUp__Lock");
  }
});
