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
});;
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

  /* table spoiler */
  $(".table__spoiler").on("click", () => {
    $(event.currentTarget).children().toggleClass("arrowSpoiler_active");
    $(".table__wrapper").slideToggle(300);
});;

  /* feedback */
  var windowHeight = $(window).height();

$(document).on("scroll", function () {
    var self = $(".feedback__wrapper"),
        height = self.offset().top + self.height();
    if ($(document).scrollTop() + windowHeight >= height) {
        $(".feedback__content").addClass("feedback__content_active");
    }
});;

  /* cards resize js */
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

});;

  /* article resize js */
  /* article responsive  */
const article__title = $(".article__title");

const resizeArticle = () => {
  if ($(window).width() > 1440) {
    $(".article__title:eq(0)").prependTo(".columnTitleJS:eq(0)");
  } else if ($(window).width() < 1440 && $(window).width() > 769) {
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

  /* show next COMMENTS row start */
  $(function () {
    $(".user").slice(0, 3).show();
    $(".comments__button-js").on("click", function (element) {
        element.preventDefault();
        $(".user:hidden").slice(0, 3).slideDown().css({ display: "flex" });
    });
});
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

  /* article columns slider */
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

  /* map */
  google.maps.event.addDomListener(window, "load", init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        zoom: 11,

        center: new google.maps.LatLng(40.67, -73.94),

        styles: [
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
            },
            {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{ color: "#ffffff" }, { lightness: 17 }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
            },
            {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }, { lightness: 18 }],
            },
            {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }, { lightness: 16 }],
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#dedede" }, { lightness: 21 }],
            },
            {
                elementType: "labels.text.stroke",
                stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
            },
            {
                elementType: "labels.text.fill",
                stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
            },
            { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
            },
            {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{ color: "#fefefe" }, { lightness: 20 }],
            },
            {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
            },
        ],
    };

    var mapElement = document.getElementById("map");

    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.67, -73.94),
        map: map,
        title: "Snazzy!",
    });
};

  const popUpGlobalClass = $(".globalPopUp-js");
const popUp__activeGlobalClass = "globalPopUp-js__active";

const loginRegisterPopUp = () => {
  /* popUp */

  popUpGlobalClass.eq(0).addClass(popUp__activeGlobalClass);
  $(".overflow").addClass("popUp__shadow");
  $("body").addClass("popUp__Lock");

  $(".registrationForm__title_login-js").on("click", function () {
    popUpGlobalClass.eq(1).addClass(popUp__activeGlobalClass);
    popUpGlobalClass.eq(0).removeClass(popUp__activeGlobalClass);
  });

  $(".registrationForm__title_register-js").on("click", function () {
    popUpGlobalClass.eq(0).addClass(popUp__activeGlobalClass);
    popUpGlobalClass.eq(1).removeClass(popUp__activeGlobalClass);
  });

  $(".registrationForm__closeIcon").on("click", () => {
    popUpGlobalClass.removeClass(popUp__activeGlobalClass);
    $(".overflow").removeClass("popUp__shadow");

    $("body").removeClass("popUp__Lock");
  });

  /* popUp end */

  /* password form */
  $("#travelOrderForm__PopUp_form").validate({
    rules: {
      travelOrderForm__PopUp_checkbox: "required",
      travelOrderForm__PopUp_name: "required",
      travelOrderForm__PopUp_name_2: "required",
      travelOrderForm__PopUp_email: {
        required: true,
        email: true,
      },
      travelOrderForm__PopUp_password: "required",
      travelOrderForm__PopUp_password_2: {
        required: true,
        equalTo: "#travelOrderForm__PopUp_password",
      },
    },
  });
};

$(".navigation__icon_hide-360px, .navResponsive__login").on("click", () => {
  loginRegisterPopUp();
});

$(document).mouseup(() => {
  // close search input
  if ($(event.target).closest(popUpGlobalClass).length == 0) {
    popUpGlobalClass.removeClass(popUp__activeGlobalClass);
    $(".overflow").removeClass("popUp__shadow");
    $("body").removeClass("popUp__Lock");
  }
});
;
  const applicationFormPopUp = () => {
  /* popUp */

  popUpGlobalClass.eq(2).addClass(popUp__activeGlobalClass);
  $(".overflow").addClass("popUp__shadow");
  $("body").addClass("popUp__Lock");

  $(".applicationFormPopUp__closeIcon").on("click", () => {
    popUpGlobalClass.removeClass(popUp__activeGlobalClass);
    $(".overflow").removeClass("popUp__shadow");
    $("body").removeClass("popUp__Lock");
  });
};

$(".travel-order__button, .travel-order__button-550px").on("click", () => {
  applicationFormPopUp();
});
;
});
