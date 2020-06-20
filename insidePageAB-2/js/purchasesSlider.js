/* purchases slider */
$(".category").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".row__images-keys",
  draggable: false,
  swipe: false,
  touchMove: false,
  infinite: true,
});

$(".row__images-keys").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".category",
  dots: false,
  arrows: false,
  focusOnSelect: true,
  variableWidth: true,
  // centerMode:false,

  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

// current active slide in category in small row
// $(".category__slide_small").on("click", () => {
//   $(".category__slide_small").not(this).removeClass("category__slide_small-active");
//   $(event.currentTarget).addClass("category__slide_small-active");

// });

// add active mark when swaipe small slides in ourchases block
$(".row__images-keys").on("afterChange", function (event, slick, currentSlide, nextSlide) {
  $(".category__slide_small").removeClass("category__slide_small-active");
  $(".row__images-keys").find(".slick-current").addClass("category__slide_small-active");
});

$(".row__images-keys").on("click", () => {
  console.log($(event.target).index());
});

$(".purchases__navigation")
  .find("li")
  .on("click", () => {
    if (!$(event.currentTarget).hasClass("slick-current")) {
      $(".row__images-keys").slick("goTo", 0, true);
      $(".category__slide_small").eq(0).addClass("slick-current");
    }
  });

$(".purchases__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".purchases__navigation",
  draggable: false,
  waitForAnimate: false,
  swipe: false,
  touchMove: false,
  infinite: false,
});

$(".purchases__navigation").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  asNavFor: ".purchases__slider",
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  draggable: false,
  waitForAnimate: false,
  swipe: false,
  touchMove: false,
  infinite: false,
});

// Plugin for change calendar from/to
$('input[name="travelDate-from"],input[name="purchasesFrom"]').daterangepicker({
  singleDatePicker: true,
  locale: {
    direction: "ltr",
    format: "DD/MM/YYYY HH:mm",
    separator: " - ",
    applyLabel: "Apply",
    cancelLabel: "Clear",
    fromLabel: "From",
    toLabel: "To",
    customRangeLabel: "Custom",
    daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    firstDay: 1,
  },
  showCustomRangeLabel: false,
  startDate: "05/05/2020",
  endDate: "05/11/2020",
  opens: "right",
  autoUpdateInput: false,
});

$('input[name="travelDate-to"],input[name="purchasesTo"]').daterangepicker({
  singleDatePicker: true,
  locale: {
    direction: "ltr",
    format: "DD/MM/YYYY HH:mm",
    separator: " - ",
    applyLabel: "Apply",
    cancelLabel: "Clear",
    fromLabel: "From",
    toLabel: "To",
    customRangeLabel: "Custom",
    daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    firstDay: 1,
  },
  showCustomRangeLabel: false,
  startDate: "05/05/2020",
  endDate: "05/11/2020",
  opens: "left",
  autoUpdateInput: false,
});

$(
  'input[name="travelDate-from"],input[name="travelDate-to"],input[name="purchasesTo"],input[name="purchasesFrom"]'
).on("apply.daterangepicker", function (ev, picker) {
  $(this).val(picker.startDate.format("DD/MM/YYYY"));
});

$(
  'input[name="travelDate-from"],input[name="travelDate-to"],input[name="purchasesTo"],input[name="purchasesFrom"]'
).on("cancel.daterangepicker", function (ev, picker) {
  $(this).val("");
});

$(window).on("resize", function () {
  console.log("resize slider-5");
  
  $(".purchases__navigation").slick("setPosition");
  $(".purchases__slider").slick("setPosition");
  $(".row__images-keys").slick("setPosition");
});
