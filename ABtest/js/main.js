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

  // first screen slider
  $(".first-screen__sliderContent").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".first-screen__slider",
    draggable: false,
    adaptiveHeight: true,
  });

  $(".first-screen__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".first-screen__sliderContent",
    dots: true,
    speed: 500,
    adaptiveHeight: true,
  });

  $(".first-screen__slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    if (currentSlide != nextSlide) {
      $(".first-screen")
        .addClass(`first-screen_background-${nextSlide}`)
        .removeClass(`first-screen_background-${currentSlide}`);
    }
  });

  // Appear dont when click in input form in TRAVEL ORDER block

  $(".dots-list_point").on("click", function () {
    let indexInput = $(event.currentTarget).index() / 2 - 1;
    $(".dots-list__item").not(this).removeClass("dots-list__item_active");
    $(".dots-list__item").eq(indexInput).addClass("dots-list__item_active");

    let placeholder = {
      color: "#0094F7",
      fontWeight: "500",
    };

    let changePlaceholder = $(event.currentTarget).find(".placeholder");

    if (indexInput == 0) {
      changePlaceholder.text("Что вас интересует?").css(placeholder);
    } else if (indexInput == 3) {
      changePlaceholder.text("Чем вы хотите заняться?").css(placeholder);
    } else if (indexInput == 4) {
      changePlaceholder.text("Какие условия выберете?").css(placeholder);
    } else if (indexInput == 5) {
      changePlaceholder.text("Ваши предпочтения?").css(placeholder);
    } else if (indexInput == 6) {
      changePlaceholder.text("Как вас встречать?").css(placeholder);
    }
  });

  // Category slider

  $(".category").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".row__images-keys",
    draggable: false,
    waitForAnimate: false,
    swipe: false,
    touchMove: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          infinite: true,
        },
      },
    ],
  });

  $(".row__images-keys").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: ".category",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    waitForAnimate: false,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          variableWidth: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
        },
      },
    ],
  });

  $(".category__slide_small").on("click", () => {
    $(".category__slide_small").not(this).removeClass("category__slide_small-active");

    $(event.currentTarget).addClass("category__slide_small-active");
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

  resizeControl();

  $(window).on("resize", function () {
    resizeControl();
    $(".purchases__navigation").slick("setPosition");
    $(".purchases__slider").slick("setPosition");
    $(".row__images-keys").slick("setPosition");
  });

  // Change  SELECT/input style/checkbox. jquery.formstyler.min.js + animate all arrows
  $("select").styler({
    selectPlaceholde: true,
  });

  $(".jq-selectbox__trigger-arrow").click(function () {
    $(this).toggleClass("jq-selectbox__trigger-arrow_active");
    $(".jq-selectbox__trigger-arrow").not(this).removeClass("jq-selectbox__trigger-arrow_active");
  });

  $('input[type="checkbox"]').styler();
  $('input[type="checkbox"]').click(function (e) {
    $('input[type="checkbox"]').toggleClass("jq-checkbox_active");
    e.preventDefault();
    $("input:checkbox").attr("disabled", true).trigger("refresh");
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

  // advantages responsive design. Hide rows with columns in low viewport width. For Appear  click on arrow
  $(".advantages__click").on("click", function () {
    $(".advantages__row").animate({ opacity: "1" }, 500);
    $(".advantages__click").addClass("advantages__click_hide");
    $(".advantages__logo").addClass("advantages__logo_hide");
  });

  // burger menu and navigarion
  $(".burger-menu").on("click", function () {
    $(".navigation__panel").toggleClass("navigation__panel_active");
    // $(".burger-menu").toggleClass("burger-menu_active");
    $(".burger-menu-active").animate({ opacity: 1, top: "12px" }, 300);
    $("body").toggleClass("lock");
    $("body").toggleClass("shadow");
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

    //  close arrows in input/select
    if ($(event.target).closest(".jq-selectbox__trigger-arrow").length == 0) {
      $(".jq-selectbox__trigger-arrow").removeClass("jq-selectbox__trigger-arrow_active");
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
      $("body").removeClass("shadow");
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

  $(".map_mobile").on("click", () => {
    $(".map_mobile").addClass("shadow");
    $(".tour__button").addClass("tour__button_active");
  });
});
