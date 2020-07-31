// Change  SELECT/input style/checkbox. jquery.formstyler.min.js + animate all arrows
$("select").styler({
  selectPlaceholde: true,
});

$(".jq-selectbox__trigger-arrow").click(function () {
  $(this).toggleClass("jq-selectbox__trigger-arrow_active");
  $(".jq-selectbox__trigger-arrow").not(this).removeClass("jq-selectbox__trigger-arrow_active");
});

// mouse up
$(document).mouseup(() => {
  //  close arrows in input/select
  if ($(event.target).closest(".jq-selectbox__trigger-arrow").length == 0) {
    $(".jq-selectbox__trigger-arrow").removeClass("jq-selectbox__trigger-arrow_active");
  }
});


/* find Filer selects change placeholder  */
$(".sendFeedbackForm__selectWrapper").on("click", function () {
  let indexInput = $(event.currentTarget).index() - 2;
  console.log(indexInput);
  let placeholder = {
    color: "#0094F7",
    fontWeight: "500",
  };

  let changePlaceholder = $(event.currentTarget).find(".placeholder");

  if (indexInput == 0) {
    changePlaceholder.text("Товар или услуга").css(placeholder);
  }
});
