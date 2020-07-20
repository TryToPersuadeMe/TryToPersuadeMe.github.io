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
$('input[type="reset"]').styler();
$('input[type="checkbox"]').styler();
$('input[type="checkbox"]').click(function (e) {
  $('input[type="checkbox"]').toggleClass("jq-checkbox_active");
  e.preventDefault();
  $("input:checkbox").attr("disabled", true).trigger("refresh");
});

/* application form change placeholder  */
$(".application__form")
  .find(".jq-selectbox")
  .on("click", function () {
    let indexInput = ($(event.currentTarget).index() - 5) / 2;
    console.log(indexInput);

    let placeholder = {
      color: "#0094F7",
      fontWeight: "500",
    };

    let changePlaceholder = $(event.currentTarget).find(".placeholder");

    if (indexInput == 0) {
      changePlaceholder.text("Что вас интересует?").css(placeholder);
    } else if (indexInput == 1) {
      changePlaceholder.text("Сколько максимум?").css(placeholder);
    }
  });

/* find Filer selects change placeholder  */
$(".findFilter-form__selectWrapper").on("click", function () {
  let indexInput = $(event.currentTarget).index();

  let placeholder = {
    color: "#0094F7",
    fontWeight: "500",
  };

  let changePlaceholder = $(event.currentTarget).find(".placeholder");

  if (indexInput == 0) {
    changePlaceholder.text("Что вас интересует?").css(placeholder);
  } else if (indexInput == 1) {
    changePlaceholder.text("Конечная цель?").css(placeholder);
  }
});
