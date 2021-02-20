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
    $(".fixedArrowUp").addClass("fixedArrowUp__active");
  } else {
    $(".arrowBackPage-fixed").removeClass("arrowBackPage-fixed_active");
    $(".fixedArrowUp").removeClass("fixedArrowUp__active");
  }
});
;

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


/* find Filer selects change placeholder  */
$(".sendFeedbackForm__selectWrapper").on("click", function () {
  let indexInput = $(event.currentTarget).index() - 2;
  console.log(indexInput);
  let placeholder = {
    color: "#0094F7",
    fontWeight: "500",
  };

  let changePlaceholder = $(event.currentTarget).find(".placeholder");

  if (indexInput == 0) {
    changePlaceholder.text("Товар или услуга").css(placeholder);
  }
});
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

  
let textArea_words = 0


const loginForm_popUp = (popUpClass, popUpClass_active, popUp_button, popUp_closeIcon) => {
  $("." + popUp_button).on("click", (event) => {
    if (
      $(".sendFeedbackForm__textArea textarea").val().length > textArea_words &&
      $(".jq-selectbox").hasClass("changed")
    ) {
      popUpClass.addClass(popUpClass_active);
      $("main").addClass("shadow");
      $("body").addClass("lock");
      event.preventDefault();
    } else {
      event.preventDefault();
    }
  });

  $("." + popUp_closeIcon).on("click", () => {
    popUpClass.removeClass(popUpClass_active);
    $("main").removeClass("shadow");
    $("body").removeClass("lock");
  });

  $(document).mouseup(() => {
    // close search input
    if ($(event.target).closest(popUp_loginForm).length == 0) {
      popUpClass.removeClass(popUpClass_active);
      $("main").removeClass("shadow");
      $("body").removeClass("lock");
    } else {
      $("body").addClass("lock");
    }
  });
};

/* ask question section popUp */
let popUp_loginForm = $(".loginForm-popUp");
let popUp_loginForm_active = "loginForm-popUp_active";
let popUp_loginForm_button = "sendFeedbackForm__button";
let popUp_loginForm_closeIcon = "loginForm-popUp__closeIcon";

loginForm_popUp(
  popUp_loginForm,
  popUp_loginForm_active,
  popUp_loginForm_button,
  popUp_loginForm_closeIcon
);
;

  /* read  more */

$(".feedbackItem__spoiler_readMore-js").on("click", () => {
  $(event.currentTarget).parent().next().slideToggle(300);
  $(event.currentTarget).css({ display: "none" });
});

/* roll up  */
$(".feedbackItem__spoiler_сut-js").on("click", function () {
  $(event.currentTarget).closest(".feedbackItem__text-wrapper").slideToggle(300);
  $(event.currentTarget)
    .closest(".feedbackItem__text-wrapper_active")
    .find(".feedbackItem__spoiler_readMore-js")
    .css({ display: "inline" });
});

/* show more columns when user presses button  */
const feedbackItem_showMore = () => {
  $(function () {
    $(".feedbackItem").slice(0, 4).show();
    $(".feedbackSection__button_feedbackColumns-js").on("click", function (element) {
      element.preventDefault();
      $(".feedbackItem:hidden").slice(0, 4).slideDown();
    });
  });
};
feedbackItem_showMore();

/* slick slider */

const slickSettings = () => {
  $(".feedbackItem-slick-js").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    swipe: true,
    arrows: true,
    easing: "LINEAR",
    centerMode: true,
    variableWidth: true,
  });
};

const callFeedback_slick_responsive = () => {
  if ($(window).width() < 1100) {
    slickSettings();
  }
};

callFeedback_slick_responsive();

$(window).on("resize", function () {
  changeInstagrammPlace();

  if (window.innerWidth > 1100) {
    $(".feedbackItem-slick-js").slick("unslick");
  } else {
    slickSettings();
  }
});

/* instagramm icon */
const userInstagramm = $(".feedbackItem__instagramm");

const changeInstagrammPlace = () => {
  if ($(window).width() < 551) {
    for (let el = 0; el < userInstagramm.length; el++) {
      userInstagramm.eq(el).appendTo($(".feedbackItem__row").eq(el));
    }
  } else {
    for (let el = 0; el < userInstagramm.length; el++) {
      userInstagramm.eq(el).appendTo($(".feedbackItem__job").eq(el));
    }
  }
};

changeInstagrammPlace();
;

  /* panel control feedback with tabs and etc */
  /* feedback columns  */
let totalFeedbackItem = $(".feedbackItem").length;
let totalFeedbackItem_span = $(".panelControlFeedback__category_totalFeedbacks-js span");

/* social media items */
let totalSocialMedia = $(".socialMediaFeedback__item").length;
let totalSocialMedia_span = $(".panelControlFeedback__category_socialMedia-js span");

/* function */
const changeTotal = (item, quantity) => {
  item.text(quantity);
};

/* call function  */
changeTotal(totalFeedbackItem_span, totalFeedbackItem);
changeTotal(totalSocialMedia_span, totalSocialMedia);

$(".panelControlFeedback__category").on("click", function () {
  /* active color span */
  let currentIndex = $(event.currentTarget).index();
  if (currentIndex == 1) {
    $(".sort").css({ display: "none" });
  } else {
    $(".sort").css({ display: "flex" });
  }
  console.log(currentIndex);
  $(event.currentTarget).addClass("panelControlFeedback__category_active");
  $(".panelControlFeedback__category")
    .not($(this))
    .removeClass("panelControlFeedback__category_active");

  /* switch tabs */
  $(".feedbackSection__tab ").removeClass("feedbackSection__tab_active");
  $(".feedbackSection__tab ").eq(currentIndex).addClass("feedbackSection__tab_active");

  /* reload slick */
  $(".feedbackItem-slick-js").slick("setPosition");


});
;

  /* show more columns when user presses button  */
const socialMediaFeedback_showMore = () => {
  if ($(window).width() > 769) {
    $(function () {
      $(".socialMediaFeedback__item").slice(0, 2).show();
      $(".socialMediaFeedback__button-js").on("click", function (element) {
        element.preventDefault();
        $(".socialMediaFeedback__item:hidden").slice(0, 2).slideDown();
      });
    });
  }
};
socialMediaFeedback_showMore();

const slickSettings_socialMedia = () => {
  $(".socialMediaFeedback-slick-js").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    swipe: true,
    arrows: true,
    easing: "LINEAR",
    // centerMode: true,
    // variableWidth: true,
  });
};

const callFeedback_socialMedia_responsive = () => {
  if ($(window).width() < 1100) {
    slickSettings_socialMedia();
  }
};

callFeedback_socialMedia_responsive();

$(window).on("resize", function () {
  socialMediaFeedback_showMore();

  if (window.innerWidth > 1100) {
    $(".socialMediaFeedback-slick-js").slick("unslick");
  } else {
    slickSettings_socialMedia();
  }
});
;

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
;


const qwe = () =>{
  $(".feedbackItem__userPhoto").next().addClass("feedbackItem__userInfo-wrapper")

}
  qwe()
});
