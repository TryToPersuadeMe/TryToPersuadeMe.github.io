var windowHeight = $(window).height();

$(document).on("scroll", function () {
    var self = $(".feedback__wrapper"),
        height = self.offset().top + self.height();
    if ($(document).scrollTop() + windowHeight >= height) {
        $(".feedback__content").addClass("feedback__content_active");
    }
});