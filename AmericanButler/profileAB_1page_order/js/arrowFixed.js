var windowHeight = $(window).height();

$(document).on("scroll", function () {
    var self = $("main").children().eq(1),
        height = self.offset().top + self.height();
    if ($(document).scrollTop() + windowHeight >= height) {
        $(".arrowBackPage-fixed").addClass("arrowBackPage-fixed_active");
    } else $(".arrowBackPage-fixed").removeClass("arrowBackPage-fixed_active");
});