var windowHeight = $(window).height();

$(document).on("scroll", function () {
    var self = $("main").children().eq(2),
        height = self.offset().top + self.height();
    if ($(document).scrollTop() + windowHeight >= height) {
        $(".findFilter-form__popUp-button").addClass("findFilter-form__popUp-button_active");
    } else $(".findFilter-form__popUp-button").removeClass("findFilter-form__popUp-button_active");
});