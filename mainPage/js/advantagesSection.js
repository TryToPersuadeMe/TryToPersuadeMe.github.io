// advantages responsive design. Hide rows with columns in low viewport width. For Appear  click on arrow
$(".advantages__click").on("click", function () {
    $(".advantages__row").animate({ opacity: "1" }, 500);
    $(".advantages__click").addClass("advantages__click_hide");
    $(".advantages__logo").addClass("advantages__logo_hide");
});