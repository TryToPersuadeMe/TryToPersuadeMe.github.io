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

$(".findFilter-form__fieldWrapper").on("click", function () {
  let indexInput = $(event.currentTarget).index();
  console.log(indexInput);

  // $(".dots-list__item").not(this).removeClass("dots-list__item_active");
  // $(".dots-list__item").eq(indexInput).addClass("dots-list__item_active");

  let placeholder = {
    color: "#0094F7",
    fontWeight: "500",
  };

  let changePlaceholder = $(event.currentTarget).find(".placeholder");

  if (indexInput == 0) {
    changePlaceholder.text("Что вас интересует?").css(placeholder);
  } else if (indexInput == 1) {
    changePlaceholder.text("Какова конечная цель?").css(placeholder);
  }
});

$(".cardItemForm__select-js").on("click", function () {
  let indexInput = $(event.currentTarget).index() - 1;
  console.log(indexInput);

  // $(".dots-list__item").not(this).removeClass("dots-list__item_active");
  // $(".dots-list__item").eq(indexInput).addClass("dots-list__item_active");

  let placeholder = {
    color: "#0094F7",
    fontWeight: "500",
  };

  let changePlaceholder = $(event.currentTarget).find(".placeholder");

  if (indexInput == 0) {
    changePlaceholder.text("Всего человек?").css(placeholder);
  }
});
