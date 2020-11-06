$('input[type="file"]').styler({
  filePlaceholder: "Прикрепить фото:",
  fileBrowse: "",
});
$("select").styler();


$(".jq-checkbox").on("click", function () {
  if ($(this).hasClass("cheсked")) {
    $(".userProfile__delBTN").addClass("userProfile__delBTN_active");
  }
});

/* arrow in texarea select */
$(".jq-selectbox__trigger-arrow").click(function () {
  $(this).toggleClass("jq-selectbox__trigger-arrow_active");
  $(".jq-selectbox__trigger-arrow").not(this).removeClass("jq-selectbox__trigger-arrow_active");
});

$(document).mouseup(() => {
  //  close arrows in input/select
  if ($(event.target).closest(".jq-selectbox__trigger-arrow").length == 0) {
    $(".jq-selectbox__trigger-arrow").removeClass("jq-selectbox__trigger-arrow_active");
  }
});

$(".news  :checkbox").styler();
const checkBoxAll = () => {
  let checked = false;
  $(".userProfile__select-All-Titles").click(function () {
    if (checked) {
      $(".news :checkbox").each(function () {
        $(this).prop("checked", false).trigger("refresh");
        console.log("check-1");
      });
      countCheckedInputs();
      checked = false;
    } else {
      $(".news :checkbox").each(function () {
        $(this).prop("checked", true).trigger("refresh");
      });
      checked = true;
      countCheckedInputs();
    }
    return false;
  });
};
checkBoxAll();

const countCheckedInputs = () => {
  let checkedInput = $(".checked").length;

  if (checkedInput > 0) {
    $(".userProfile__delBTN").addClass("userProfile__delBTN_active");
  } else {
    $(".userProfile__delBTN").removeClass("userProfile__delBTN_active");
  }
};

$(".news__checkbox").on("click", function () {
  countCheckedInputs();
});




