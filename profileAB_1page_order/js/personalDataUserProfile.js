$(":checkbox").styler();

/* password form */
$("#changePassForm").validate({
  rules: {
    changePasswordInput: "required",
    changePasswordInput2: {
      required: true,
      equalTo: "#changePasswordInput",
    },
  },
});

/* email form */

/* active buttons */
let formPassword = "changePassForm";

const activeBTN = (currentForm) => {
  $("#" + currentForm).on("blur keyup", function () {
    if ($("#" + currentForm).valid()) {
      $(event.currentTarget)
        .find(".securityChangeForm__okBTN")
        .addClass("securityChangeForm__okBTN_active");
    } else {
      $(event.currentTarget)
        .find(".securityChangeForm__okBTN")
        .removeClass("securityChangeForm__okBTN_active");
    }
  });
};

activeBTN(formPassword);

const countCheckedInputs_notifications = () => {
  let checkedInput = $(".checked").length;

  if (checkedInput > 0) {
    $(".notifications .securityChangeForm__okBTN").addClass("securityChangeForm__okBTN_active");
  } else {
    $(".notifications .securityChangeForm__okBTN").removeClass("securityChangeForm__okBTN_active");
  }
};
countCheckedInputs_notifications();

$(".notifications label").on("click", function () {
  countCheckedInputs_notifications();
});
