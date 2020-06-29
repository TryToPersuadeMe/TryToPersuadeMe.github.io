$('input[type="file"]').styler({
  filePlaceholder: "Прикрепить фото",
  fileBrowse: "",
});
$("select").styler();

$(".userProfile__tabLink").on("click", function () {
  $(".userProfile__tabLink").removeClass("userProfile__tabLink_active");
  $(event.currentTarget).addClass("userProfile__tabLink_active");
});

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

const checkBoxAll = () => {
  $(":checkbox").styler();

  let checked = false;
  $(".userProfile__select-All-Titles").click(function () {
    if (checked) {
      $(":checkbox").each(function () {
        $(this).prop("checked", false).trigger("refresh");
      });
      countCheckedInputs();
      checked = false;
    } else {
      $(":checkbox").each(function () {
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
  console.log(checkedInput);

  if (checkedInput > 0) {
    $(".userProfile__delBTN").addClass("userProfile__delBTN_active");
  } else {
    $(".userProfile__delBTN").removeClass("userProfile__delBTN_active");
  }
};

$(".jq-checkbox").on("click", function () {
  countCheckedInputs();
});

/* const checkBoxAll = () => {
  $(":checkbox").styler();

  var checked = false;
  $(".userProfile__select-All-Titles").click(function () {
    if (checked) {
      $(":checkbox").each(function () {
        $(this).prop("checked", false).trigger("refresh");
      });
      countCheckedInputs();
      checked = false;
    } else {
      $(":checkbox").each(function () {
        $(this).prop("checked", true).trigger("refresh");
      });
      checked = true;
      countCheckedInputs();
    }
    return false;
  });
}; */
