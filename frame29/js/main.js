$(document).ready(() => {
  // its check browser for suppport WEBp img
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  }
});

// Animate button in header for switch language
$(".language").on("click", () => {
  $(".language__button").toggleClass("language__button_changed");
});

// First screen scripts for switch background, big window with white background color and etc

$(".navigation__item_white-lines").on("mouseenter", function () {
  $(event.currentTarget).addClass("navigation__item_white-lines-active");

  let index = $(".navigation__item_white-lines").index(this);

  if (index != 0 && index != 5) {
    let windowIndex = index - 1;
    $(".window").removeClass("window_active");
    $(".window").eq(windowIndex).addClass("window_active");
  } else {
    $(".window").removeClass("window_active");
  }

  $(".window").on("mouseleave", () => {
    $(".window").removeClass("window_active");
  });

  $(".navigation__item_white-lines").not(this).removeClass("navigation__item_white-lines-active");
});

// burger menu and navigarion
$(".burger-menu").on("click", function () {
  $(".navigation__panel").toggleClass("navigation__panel_active");
  // $(".burger-menu").toggleClass("burger-menu_active");
  $(".burger-menu-active").animate({ opacity: 1, top: "12px" }, 300);
  $("body").toggleClass("lock");
  $(".overflow").toggleClass("shadow");
});

$(".navResponsive__title").click(function () {
  $(".navResponsive__title").siblings().children().removeClass("navResponsive__link_active");

  $(event.currentTarget).toggleClass("navResponsive__arrow_active");

  if ($(".navResponsive__title").not(this)) {
    $(".navResponsive__title").not(this).removeClass("navResponsive__arrow_active");
  }
  $(this).siblings().children().toggleClass("navResponsive__link_active");

  if (!$(this).hasClass("navResponsive__arrow_active")) {
    $(".navResponsive__link").removeClass("navResponsive__link_active");
  }
});

$(".navigation__item").on("click", function () {
  $(event.currentTarget).toggleClass("arrow_active");
  const titleActive = $(event.currentTarget).next().find("h5");

  titleActive.toggleClass("navResponsive__title_active");

  if ($(".navigation__item").not(this)) {
    $(".navigation__item").not(this).removeClass("arrow_active");
  }

  if (!$(this).hasClass("arrow_active")) {
    titleActive.removeClass("navResponsive__title_active");
  }
});

// mouse up
$(document).mouseup(() => {
  // close search input
  if (
    $(event.target).closest('input[type ="search"]').length == 0 &&
    $(event.target).closest("navigation__icon_search")
  ) {
    $(".navigation__icon_search").removeClass("navigation__icon_search-hide");
  }

  //close window in first screen
  if ($(event.target).closest(".window").length == 0) {
    $(".window").removeClass("window_active");
    $(".window__container").removeClass("window__container_active");

    $(".navigation__item_white-lines-active").removeClass("navigation__item_white-lines-active");
  }

  // rotate arrow
  if (
    $(event.target).closest(".navigation__item").length == 0 &&
    $(event.target).closest(".navResponsive__spoiler-wrapper").length == 0
  ) {
    $(".navigation__item").removeClass("arrow_active");
  }

  // disable all spoilers
  if ($(event.target).closest(".navResponsive__spoiler").length == 0) {
    $(".navResponsive__link").removeClass("navResponsive__link_active");
    $(".navResponsive__arrow").removeClass("navResponsive__arrow_active");
    $(".navResponsive__title").removeClass("navResponsive__title_active");
  }

  // rotate panel and burger menu
  if (
    $(event.target).closest(".navigation__panel").length == 0 &&
    $(event.target).closest(".burger-menu").length == 0
  ) {
    $(".navigation__panel").removeClass("navigation__panel_active");
    $(".burger-menu").removeClass("burger-menu_active");
    $(".burger-menu-active").animate({ opacity: "0", top: "-100%" }, 300);

    $("body").removeClass("lock");
    $(".navResponsive__arrow").removeClass("navResponsive__arrow_active");
    $(".overflow").removeClass("shadow");
  }
});

// Click for appear search input in first-screen under sarch icon
$(".navigation__icon_search").on("click", () => {
  if ($(event.target).closest('input[type = "search"]').length == 0) {
    $(event.currentTarget).toggleClass("navigation__icon_search-hide");
  }
});

// spoiler under else button in first-screen
$(".navigation__item_else").on("click", () => {
  $(event.currentTarget).css({ overflow: "visible" });
  $(event.currentTarget).addClass("navigation__item_else-active");
  $(".window__column_navigation-spoiler").addClass("window__column_active");
});

$(".navigation__item_else").on("mouseleave", () => {
  $(event.currentTarget).css({ overflow: "hidden" });
  $(".window__column_navigation-spoiler").removeClass("window__column_active");
  $(event.currentTarget).removeClass("navigation__item_else-active");
});

// Slow scroll
$("body").on("click", '[href*="#"]', function (e) {
  var fixed_offset = 20;
  $("html,body")
    .stop()
    .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
  e.preventDefault();
});
;
  var windowHeight = $(window).height();

$(document).on("scroll", function () {
    var self = $("main").children().eq(2),
        height = self.offset().top + self.height();
    if ($(document).scrollTop() + windowHeight >= height) {
        $(".arrowBackPage-fixed").addClass("arrowBackPage-fixed_active");
    } else $(".arrowBackPage-fixed").removeClass("arrowBackPage-fixed_active");
});;
  // Change  SELECT/input style/checkbox. jquery.formstyler.min.js + animate all arrows
$("select").styler({
  selectPlaceholde: true,
});

$(".jq-selectbox__trigger-arrow").click(function () {
  $(this).toggleClass("jq-selectbox__trigger-arrow_active");
  $(".jq-selectbox__trigger-arrow").not(this).removeClass("jq-selectbox__trigger-arrow_active");
});

// mouse up
$(document).mouseup(() => {
  //  close arrows in input/select
  if ($(event.target).closest(".jq-selectbox__trigger-arrow").length == 0) {
    $(".jq-selectbox__trigger-arrow").removeClass("jq-selectbox__trigger-arrow_active");
  }
});

$(".findFilter-form__fieldWrapper").on("click", function () {
  let indexInput = $(event.currentTarget).index();
  console.log(indexInput);

  // $(".dots-list__item").not(this).removeClass("dots-list__item_active");
  // $(".dots-list__item").eq(indexInput).addClass("dots-list__item_active");

  let placeholder = {
    color: "#0094F7",
    fontWeight: "500",
  };

  let changePlaceholder = $(event.currentTarget).find(".placeholder");

  if (indexInput == 0) {
    changePlaceholder.text("Что вас интересует?").css(placeholder);
  } else if (indexInput == 1) {
    changePlaceholder.text("Какова конечная цель?").css(placeholder);
  }
});

$(".cardItemForm__select-js").on("click", function () {
  let indexInput = $(event.currentTarget).index() - 1;
  console.log(indexInput);

  // $(".dots-list__item").not(this).removeClass("dots-list__item_active");
  // $(".dots-list__item").eq(indexInput).addClass("dots-list__item_active");

  let placeholder = {
    color: "#0094F7",
    fontWeight: "500",
  };

  let changePlaceholder = $(event.currentTarget).find(".placeholder");

  if (indexInput == 0) {
    changePlaceholder.text("Всего человек?").css(placeholder);
  }
});
;
  $(".slider__row_big").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider__row_small",
  waitForAnimate: false,
  draggable: false,
  swipe: false,
  touchMove: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        draggable: true,
        swipe: true,
        touchMove: true,
      },
    },
  ],
});

$(".slider__row_small").slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  asNavFor: ".slider__row_big",
  arrows: false,
  dots: false,
  focusOnSelect: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1001,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        cssEase: "linear",
      },
    },

    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        cssEase: "linear",
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        cssEase: "linear",
      },
    },
  ],
});

// current active slide in category in small row
$(".slider__slide_small").on("click", () => {
  $(".slider__slide_small").not(this).removeClass("slider__slide_small-active");

  $(event.currentTarget).addClass("slider__slide_small-active");
});
;
  /* CARDS responsive START */
const resizeLinkCards = () => {
  if ($(window).width() < 1025) {
    $(".linkCards__item").appendTo(".linkCards__wrapperResponsive-js");
    /* show on button click */
    $(function () {
      $(".linkCards__item").slice(0, 4).show();
      $(".linkCards__button").on("click", function (element) {
        element.preventDefault();
        $(".linkCards__item:hidden").slice(0, 4).slideDown();
      });
    });
  } else {
    $(".linkCards__row").append((i) => $(".linkCards__item").slice(i * 3, (i + 3) * 3));
  }
};
resizeLinkCards();

$(window).on("resize", function () {
  resizeLinkCards();
  console.log("resizeLinkCards-4");
});
;
  /* article responsive  */
const article__title = $(".article__title");

const resizeArticle = () => {
  if ($(window).width() < 1440 && $(window).width() > 769) {
    for (let el = 0; el < article__title.length; el++) {
      article__title.eq(el).prependTo($(".containerTitleJS").eq(el));
    }
  } else if ($(window).width() < 769) {
    for (let el = 0; el < article__title.length; el++) {
      article__title.eq(el).prependTo($(".columnTitleJS").eq(el));
    }
  }
};

resizeArticle();

$(window).on("resize", function () {
  resizeArticle();
  console.log("resizeArticle-1");
  
});
;
  const popUpFunction = (popUpClass, popUpClass_active, popUp_button, popUp_closeIcon) => {

  $("." + popUp_button).on("click", () => {
    popUpClass.addClass(popUpClass_active);
    $("main").addClass("shadow");
    $("body").addClass("lock");
  });

  $("." + popUp_closeIcon).on("click", () => {
    popUpClass.removeClass(popUpClass_active);
    $("main").removeClass("shadow");
    $("body").removeClass("lock");

  });

  $(document).mouseup(() => {
    // close search input
    if (
      $(event.target).closest($(".popUp")).length == 0 &&
      $(event.target).closest($(".findFilter-form")).length == 0 &&
      $(event.target).closest($(".consultationForm")).length == 0

    ) {
      popUpClass.removeClass(popUpClass_active);
      $("main").removeClass("shadow");
      $("body").removeClass("lock");

    } else {
      $("body").addClass("lock");
    }
  });
  /* popUp end */
};

/* ask question section popUp */
let popUp_AskQuestion = $(".popUp");
let popUp_AskQuestion_active = "popUp_active";
let popUp_AskQuestion_button = "popUp__button-active";
let popUp_AskQuestion_closeIcon = "popUp__closeIcon";

popUpFunction(
  popUp_AskQuestion,
  popUp_AskQuestion_active,
  popUp_AskQuestion_button,
  popUp_AskQuestion_closeIcon
);

/* find filter popUp */
let popUp_findFilter = $(".findFilter-form");
let popUp_findFilter_active = "findFilter-form_active";
let popUp_findFilter_button = "findFilter-form__popUp-button";
let popUp_findFilter_closeIcon = "findFilter-form__closeIcon";

popUpFunction(
  popUp_findFilter,
  popUp_findFilter_active,
  popUp_findFilter_button,
  popUp_findFilter_closeIcon
);
;
  $(".category__row").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  swipe: true,
  arrows: true,
  speed: 1500,
  easing: "LINEAR",
  variableWidth: true,
  centerMode: true,
  touchThreshold: 30,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 380,
      settings: {
        arrows: true,
      },
    },
  ],
});

function playsl(slider, play_st, play_typ) {
  if (play_st == true) {
    if (play_typ == "slickNext") slider.slick("slickNext");
    if (play_typ == "slickPrev") slider.slick("slickPrev");
  }
}

$(".category__row")
  .find(".slick-next")
  .mouseenter(function () {
    console.log("find next");

    play_typ = "slickNext";
    play_st = true;
    slider = $(this).parent();
    timerId = setInterval(function () {
      playsl(slider, play_st, play_typ);
    }, 220);

    return false;
  });

$(".category__row")
  .find(".slick-prev")
  .mouseenter(function () {
    console.log("find prev");

    play_typ = "slickPrev";
    play_st = true;
    slider = $(this).parent();
    timerId = setInterval(function () {
      playsl(slider, play_st, play_typ);
    }, 220);

    return false;
  });

$(".category__row").on("mouseout", () => {
  play_st = false;
});

$(".category__wrapper").on("click", () => {
  play_st = false;
});

playsl();

;
  // Plugin for change calendar from/to
$('input[name="cardItemForm-Date"]').daterangepicker({
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

$('input[name="cardItemForm-Date"]').daterangepicker({
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
$('input[name="cardItemForm-Date"]').on("apply.daterangepicker", function (ev, picker) {
  $(this).val(picker.startDate.format("DD/MM/YYYY"));
});

$('input[name="cardItemForm-Date"]').on("cancel.daterangepicker", function (ev, picker) {
  $(this).val("");
});
;
});
