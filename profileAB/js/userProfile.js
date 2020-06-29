$('input[type="file"]').styler({
  filePlaceholder: "Прикрепить фото",
  fileBrowse:"",
});
$('select').styler()

$(".userProfile__tabLink").on("click", function () {
  $(".userProfile__tabLink").removeClass("userProfile__tabLink_active");
  $(event.currentTarget).addClass("userProfile__tabLink_active");
});

const checkBoxAll = () => {
  $(":checkbox").styler();

  var checked = false;
  $(".userProfile__select-All-Titles").click(function () {
    if (checked) {
      $(":checkbox").each(function () {
        $(this).prop("checked", false).trigger("refresh");
      });
      checked = false;
    } else {
      $(":checkbox").each(function () {
        $(this).prop("checked", true).trigger("refresh");
      });
      checked = true;
    }
    return false;
  });
};

checkBoxAll();



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