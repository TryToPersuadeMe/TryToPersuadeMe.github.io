$(".table__spoiler").on("click", () => {
    $(event.currentTarget).children().toggleClass("arrowSpoiler_active");
    $(".table__wrapper").slideToggle(300);
});