/* article responsive end */

/* CARDS responsive START */
const resizeCards = () => {
    if ($(window).width() < 1025) {
        $(".cards__item").appendTo(".cards__wrapperResponsive-js");
        /* show on button click */
        $(function () {
            $(".cards__item").slice(0, 4).show();
            $(".cards__button").on("click", function (element) {
                element.preventDefault();
                $(".cards__item:hidden").slice(0, 4).slideDown();
            });
        });
    } else {
        const $items = $(".cards__item");
        $(".cards__row").append((i) => $items.slice(i * 3, (i + 1) * 3));
    }
};
resizeCards();


$(window).on("resize", function () {
    resizeCards();

});