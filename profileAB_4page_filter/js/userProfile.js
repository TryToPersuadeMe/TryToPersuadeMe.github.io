
$(".userProfile__tabLink").on("click", function () {
  $(".userProfile__tabLink").removeClass("userProfile__tabLink_active");
  $(event.currentTarget).addClass("userProfile__tabLink_active");
});