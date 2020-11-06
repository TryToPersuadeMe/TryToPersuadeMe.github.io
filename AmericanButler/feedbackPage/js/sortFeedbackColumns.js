/* icon for active button */
const sortIcon = () => {
  /* color for active button */
  $(".sort__button").removeClass("sort__button_active");
  $(event.currentTarget).addClass("sort__button_active");

  /* icon for active sort button */
  $(".sort__icon").appendTo($(event.currentTarget));
  $(".sort__icon").css({ display: "block" });
  $(".sort__icon").toggleClass("sort__icon_up");
};

/* check window.width for append in slick if necessary */
const checkSlickWidth__appendTo = (arr) => {
  if ($(window).width() > 1100) {
    arr.appendTo(".feedbackItem-slick-js");
  } else {
    arr.appendTo($(".feedbackItem-slick-js").find(".slick-track"));
  }
};

/* sort by first word of  */
const sortHeader = {
  str: (a, b) => a.text().localeCompare(b.text()),
};

/* animation */

const feedbackAnimation = (state) => {
  state === 0
    ? $(".feedbackItem").animate({ opacity: 0 }, 200)
    : $(".feedbackItem").animate({ opacity: 1 }, 200);
};

$(".sort-Header-js").click(function () {
  sortIcon();
  feedbackAnimation(0);
  setTimeout(() => {
    const $this = $(this),
      data = $this.data(),
      compare = sortHeader[data.type],
      field = `.${data.field}`,
      order = +data.order || 1;

    const sortedArr = $(".feedbackItem").sort((a, b) => order * compare($(field, a), $(field, b)));

    checkSlickWidth__appendTo(sortedArr);

    $this.data("order", order * -1);
  }, 300);

  setTimeout(() => {
    feedbackAnimation(1);
  }, 400);
});

/* sort by rating */
$(".sort-Rating-js").click(function () {
  sortIcon();
  feedbackAnimation(0);

  setTimeout(() => {
    // получаем порядок сортировки
    var order = parseInt($(this).data("order"), 10);

    // сортируем все элементы li, которые имеют атрибут data-sort
    const sortedArr = $(".feedbackItem").sort(function (a, b) {
      var x = parseInt($(b).data("rating"), 10);
      var y = parseInt($(a).data("rating"), 10);
      return (x < y ? -1 : 1) * order;
    });

    checkSlickWidth__appendTo(sortedArr);
    // инвертируем порядок сортировки
    $(this).data("order", order * -1);
  }, 300);

  setTimeout(() => {
    feedbackAnimation(1);
  }, 400);
});

/* sort by Date */

$(".sort-Date-js").click(function () {
  sortIcon();
  feedbackAnimation(0);

  setTimeout(() => {
    // получаем порядок сортировки
    var order = parseInt($(this).data("order"), 10);

    // сортируем все элементы li, которые имеют атрибут data-sort
    const sortedArr_years = $(".feedbackItem").sort(function (a, b) {
      var x = parseInt($(b).data("year"), 10);
      var y = parseInt($(a).data("year"), 10);
      return (x < y ? -1 : 1) * order;
    });

    const sortedArr_month = sortedArr_years.sort(function (a, b) {
      var x = parseInt($(b).data("month"), 10);
      var y = parseInt($(a).data("month"), 10);
      return (x < y ? -1 : 1) * order;
    });

    const sortedArr_day = sortedArr_month.sort(function (a, b) {
      var x = parseInt($(b).data("month"), 10);
      var y = parseInt($(a).data("month"), 10);
      return (x < y ? -1 : 1) * order;
    });

    checkSlickWidth__appendTo(sortedArr_day);
    // инвертируем порядок сортировки
    $(this).data("order", order * -1);
  }, 300);

  setTimeout(() => {
    feedbackAnimation(1);
  }, 400);
});
