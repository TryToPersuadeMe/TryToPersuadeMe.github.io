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

;

  /* popUp */
  /* popUp */
const popUp = $(".popUp");
const popUp__active = "popUp_active";

$(".popUp__button-active").on("click", () => {
    popUp.addClass(popUp__active);
    $("main").addClass("shadow");
    $("body").addClass("lock");
});

$(".popUp__closeIcon").on("click", () => {
    popUp.removeClass(popUp__active);
    $("main").removeClass("shadow");
});

$(document).mouseup(() => {
    // close search input

    if ($(event.target).closest(popUp).length == 0) {
        popUp.removeClass(popUp__active);
        $("main").removeClass("shadow");
    }
});
  /* popUp end */
;

  /* arrow back in prev page START */

  var windowHeight = $(window).height();

$(document).on("scroll", function () {
    var self = $("main").children().eq(2),
        height = self.offset().top + self.height();
    if ($(document).scrollTop() + windowHeight >= height) {
        $(".arrowBackPage-fixed").addClass("arrowBackPage-fixed_active");
    } else $(".arrowBackPage-fixed").removeClass("arrowBackPage-fixed_active");
});;

  /* arrow back in prev page END */

  /* profile link */
  $('input[type="file"]').styler({
  filePlaceholder: "Прикрепить фото",
  fileBrowse: "",
});
$("select").styler();

$(".userProfile__tabLink").on("click", function () {
  $(".userProfile__tabLink").removeClass("userProfile__tabLink_active");
  $(event.currentTarget).addClass("userProfile__tabLink_active");
});

$(".jq-checkbox").on("click", function () {
  if ($(this).hasClass("cheсked")) {
    $(".userProfile__delBTN").addClass("userProfile__delBTN_active");
  }
});

/* arrow in texarea select */
$(".jq-selectbox__trigger-arrow").click(function () {
  $(this).toggleClass("jq-selectbox__trigger-arrow_active");
  $(".jq-selectbox__trigger-arrow").not(this).removeClass("jq-selectbox__trigger-arrow_active");
});

$(document).mouseup(() => {
  //  close arrows in input/select
  if ($(event.target).closest(".jq-selectbox__trigger-arrow").length == 0) {
    $(".jq-selectbox__trigger-arrow").removeClass("jq-selectbox__trigger-arrow_active");
  }
});

const checkBoxAll = () => {
  $(":checkbox").styler();

  let checked = false;
  $(".userProfile__select-All-Titles").click(function () {
    if (checked) {
      $(":checkbox").each(function () {
        $(this).prop("checked", false).trigger("refresh");
      });
      countCheckedInputs();
      checked = false;
    } else {
      $(":checkbox").each(function () {
        $(this).prop("checked", true).trigger("refresh");
      });
      checked = true;
      countCheckedInputs();
    }
    return false;
  });
};
checkBoxAll();

const countCheckedInputs = () => {
  let checkedInput = $(".checked").length;
  console.log(checkedInput);

  if (checkedInput > 0) {
    $(".userProfile__delBTN").addClass("userProfile__delBTN_active");
  } else {
    $(".userProfile__delBTN").removeClass("userProfile__delBTN_active");
  }
};

$(".jq-checkbox").on("click", function () {
  countCheckedInputs();
});

/* const checkBoxAll = () => {
  $(":checkbox").styler();

  var checked = false;
  $(".userProfile__select-All-Titles").click(function () {
    if (checked) {
      $(":checkbox").each(function () {
        $(this).prop("checked", false).trigger("refresh");
      });
      countCheckedInputs();
      checked = false;
    } else {
      $(":checkbox").each(function () {
        $(this).prop("checked", true).trigger("refresh");
      });
      checked = true;
      countCheckedInputs();
    }
    return false;
  });
}; */
;

  /* article responsive */
  /* article responsive  */
const article__title = $(".userProfile__title");

const resizeArticle = () => {
  if ($(window).width() > 949) {
    for (let el = 0; el < article__title.length; el++) {
      article__title.eq(el).prependTo($(".containerTitleJS").eq(el));
    }
  } else if ($(window).width() < 949) {
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
});