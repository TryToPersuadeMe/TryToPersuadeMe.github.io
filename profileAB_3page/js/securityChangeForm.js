/* let passwordWords = 1;

$(".securityChangeForm").on("click", function () {
  let inputsForm = $(event.currentTarget).find(".securityChangeForm__inputField");
  let currentBTN = $(event.currentTarget).find(".securityChangeForm__okBTN");

  for (let i = 0; i < inputsForm.length; i++) {
    if (
      inputsForm.eq(i).val() == inputsForm.eq(i + 1).val() &&
      inputsForm.val().length > passwordWords
    ) {
      currentBTN.addClass("securityChangeForm__okBTN_active");
    } 
    // else {
    //     currentBTN.removeClass("securityChangeForm__okBTN_active");
    // }
  }
});
 */

$("input").styler()