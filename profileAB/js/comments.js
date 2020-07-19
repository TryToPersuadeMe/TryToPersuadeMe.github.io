$(function () {
    $(".user").slice(0, 3).show();
    $(".comments__button-js").on("click", function (element) {
        element.preventDefault();
        $(".user:hidden").slice(0, 3).slideDown().css({ display: "flex" });
    });
});
