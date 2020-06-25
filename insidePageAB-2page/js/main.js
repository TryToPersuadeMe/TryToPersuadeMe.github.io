$(document).ready(() => {
  /* /*   /* navigation and footer js. Global JS */
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

  /* Arrow for back in prev page. Appear on window.width <768px and when user scroll in 2 section */
  var windowHeight = $(window).height();

$(document).on("scroll", function () {
    var self = $("main").children().eq(2),
        height = self.offset().top + self.height();
    if ($(document).scrollTop() + windowHeight >= height) {
        $(".arrowBackPage-fixed").addClass("arrowBackPage-fixed_active");
    } else $(".arrowBackPage-fixed").removeClass("arrowBackPage-fixed_active");
});;

  /* formstyler for selects */
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
$('input[type="reset"]').styler();
$('input[type="checkbox"]').styler();
$('input[type="checkbox"]').click(function (e) {
  $('input[type="checkbox"]').toggleClass("jq-checkbox_active");
  e.preventDefault();
  $("input:checkbox").attr("disabled", true).trigger("refresh");
});

/* application form change placeholder  */
$(".application__form")
  .find(".jq-selectbox")
  .on("click", function () {
    let indexInput = ($(event.currentTarget).index() - 5) / 2;
    console.log(indexInput);

    let placeholder = {
      color: "#0094F7",
      fontWeight: "500",
    };

    let changePlaceholder = $(event.currentTarget).find(".placeholder");

    if (indexInput == 0) {
      changePlaceholder.text("Что вас интересует?").css(placeholder);
    } else if (indexInput == 1) {
      changePlaceholder.text("Сколько максимум?").css(placeholder);
    }
  });

/* find Filer selects change placeholder  */
$(".findFilter-form__selectWrapper").on("click", function () {
  let indexInput = $(event.currentTarget).index();

  let placeholder = {
    color: "#0094F7",
    fontWeight: "500",
  };

  let changePlaceholder = $(event.currentTarget).find(".placeholder");

  if (indexInput == 0) {
    changePlaceholder.text("Что вас интересует?").css(placeholder);
  } else if (indexInput == 1) {
    changePlaceholder.text("Конечная цель?").css(placeholder);
  }
});
;

  /* responsive  flip cards */
  /* qwe */
/* CARDS responsive START */
const resizeFlipCards = () => {
  if ($(window).width() < 1025) {
    $(".flipcard").appendTo(".offers__wrapperResponsive-js");
    /* show on button click */
    $(function () {
      $(".flipcard").slice(0, 4).show();
      $(".offers__button-js").on("click", function (element) {
        element.preventDefault();
        $(".flipcard:hidden").slice(0, 4).slideDown();
      });
    });
  } else {
    $(".offers__row-js").append((i) => $(".flipcard").slice(i * 3, (i + 3) * 3));
  }
};
resizeFlipCards();

$(window).on("resize", function () {
  resizeFlipCards();
  console.log("resizeFlipCards-3");
});
;

  /* same JS for responsive  link cards */
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

  /* responsive article */
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

  /* purchases slider */
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
;

  /* purchases slider */
  // advantages responsive design. Hide rows with columns in low viewport width. For Appear  click on arrow
$(".advantages__click").on("click", function () {
    $(".advantages__row").animate({ opacity: "1" }, 500);
    $(".advantages__click").addClass("advantages__click_hide");
    $(".advantages__logo").addClass("advantages__logo_hide");
});;

  /* feedback slider */
  // Feedback slider

$(".feedback__sliderColumn").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  // fade: true,
  dotsClass: "slider-control__dots",
});

$(".slider-control__arrow_prev").on("click", () => {
  $(".feedback__sliderColumn").slick("slickPrev");
});

$(".slider-control__arrow_next").on("click", () => {
  $(".feedback__sliderColumn").slick("slickNext");
});

const resizeControl = () => {
  $(".slider-control__dots").appendTo(".slider-control");
  if ($(window).width() < 701) {
    $(".slider-control").appendTo(".feedback__sliderColumn");
  } else {
    $(".slider-control").appendTo(".feedback__photo-wrapper");
  }
};

$(window).on("resize", function () {
  resizeControl();
  console.log("resizeControl-2");

});

resizeControl();
;

  /* askQuestion popUp */
  var myFuncCalls = 0;
console.log(myFuncCalls);


const popUpFunction = (popUpClass, popUpClass_active, popUp_button, popUp_closeIcon) => {
  $("." + popUp_button).on("click", () => {
    $("." + popUpClass).addClass(popUpClass_active);
    $(".overflow").addClass("shadow-popUp");
    $("body").addClass("lock-popUp");
  
  });

  $("." + popUp_closeIcon).on("click", () => {
    $("." + popUpClass).removeClass(popUpClass_active);
    $(".overflow").removeClass("shadow-popUp");
    $("body").removeClass("lock-popUp");
  });
/* 
  $(document).mouseup(() => {
    // close search input
    if ($(event.target).closest($("." + popUpClass)).length > 2) {
      console.log($(event.target).closest($("." + popUpClass).length));
      $(".overflow").removeClass("shadow-popUp");
      $("body").removeClass("lock-popUp");
      $("." + popUpClass).removeClass(popUpClass_active);
    }
  });
 */
  /* popUp end */
};

/*  ask question section popUp */
let popUp_AskQuestion = "popUp";
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
let popUp_findFilter = "findFilter-form";
let popUp_findFilter_active = "findFilter-form_active";
let popUp_findFilter_button = "findFilter-form__popUp-button";
let popUp_findFilter_closeIcon = "findFilter-form__closeIcon";

popUpFunction(
  popUp_findFilter,
  popUp_findFilter_active,
  popUp_findFilter_button,
  popUp_findFilter_closeIcon
);

/* find filter popUp */
let popUp_consultationForm = "consultationForm";
let popUp_consultationForm_active = "consultationForm_active";
let popUp_consultationForm_button = "consultation__button-responsivePopup";
let popUp_consultationForm_closeIcon = "consultationForm__closeIcon";

popUpFunction(
  popUp_consultationForm,
  popUp_consultationForm_active,
  popUp_consultationForm_button,
  popUp_consultationForm_closeIcon
);
;

  /* slider on Hover  */
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

  /*  */
  var windowHeight = $(window).height();

$(document).on("scroll", function () {
    var self = $("main").children().eq(2),
        height = self.offset().top + self.height();
    if ($(document).scrollTop() + windowHeight >= height) {
        $(".findFilter-form__popUp-button").addClass("findFilter-form__popUp-button_active");
    } else $(".findFilter-form__popUp-button").removeClass("findFilter-form__popUp-button_active");
});;
});
