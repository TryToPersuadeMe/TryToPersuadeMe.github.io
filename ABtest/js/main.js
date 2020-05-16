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

  $(".navigation__panel")
    .children()
    .on("click", function () {
      let index = $(event.currentTarget).index();

      if (index != 0) {
        $(".navigation__item").eq(index).addClass("navigation__item_active");

        let windowIndex = index - 1;
        $(".window").removeClass("window_active");
        $(".window").eq(windowIndex).addClass("window_active");
      } else {
        $(".window").removeClass("window_active");
      }
    });

  $(document).mouseup(() => {
    if ($(event.target).closest(".window").length == 0) {
      $(".window").removeClass("window_active");
    }
  });

  // first screen slider

  $(".first-screen__sliderContent").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".first-screen__slider",
    draggable: false,
  });

  $(".first-screen__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".first-screen__background",
    asNavFor: ".first-screen__sliderContent",
    dots: true,
    speed: 500,
  });

  $(".first-screen__slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    if (currentSlide != nextSlide) {
      $(".first-screen")
        .addClass(`first-screen_background-${nextSlide}`)
        .removeClass(`first-screen_background-${currentSlide}`);
    }

    if (nextSlide != 0) {
      $(".logo").addClass("logo_blue");
      $(".first-screen").find("nav").addClass("first-screen__navigation");
    } else {
      $(".logo").removeClass("logo_blue");
      $(".first-screen").find("nav").removeClass("first-screen__navigation");
    }
  });

  // Appear dont when click in input form in TRAVEL ORDER block

  $(".dots-list_point").on("click", function () {
    const clicked = $(event.currentTarget).index() / 2;
    const points = $(".dots-list__item");

    $(`.dots-list__item:eq(${clicked - 1})`).addClass("dots-list__item_active");
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
  });

  $(".row__images-keys").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".category",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    draggable: false,
    waitForAnimate: false,
    swipe: false,
    touchMove: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
          infinite: true,
          swipe: true,
          draggable: true,
          touchMove: true,
        },
      },
    ],
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
    slidesToShow: 4,
    slidesToScroll: 1,
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

  $(".purchases__navigation").slick("setPosition");
  $(".purchases__slider").slick("setPosition");
  $(".row__images-keys").slick("setPosition");

  // Feedback slider
  $(".feedback__sliderPhoto").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    asNavFor: ".feedback__sliderColumn",
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 701,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  });

  $(".feedback__sliderColumn").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".feedback__sliderPhoto",
    centerMode: true,
    responsive: [
      {
        breakpoint: 701,
        settings: {
          arrows: true,
          dots: true,
          adaptiveHeight: true,
        },
      },
    ],
  });

  // Change  SELECT/input style/checkbox. jquery.formstyler.min.js + animate all arrows
  $("select").styler({
    selectPlaceholde: true,
  });

  $(".jq-selectbox__trigger-arrow").click(function () {
    $(this).toggleClass("jq-selectbox__trigger-arrow_active");
    $(".jq-selectbox__trigger-arrow").not(this).removeClass("jq-selectbox__trigger-arrow_active");
  });

  $(document).mouseup(() => {
    if ($(event.target).closest(".jq-selectbox__trigger-arrow").length == 0) {
      $(".jq-selectbox__trigger-arrow").removeClass("jq-selectbox__trigger-arrow_active");
    }
  });

  $('input[type="checkbox"]').styler();
  $('input[type="checkbox"]').click(function (e) {
    $('input[type="checkbox"]').toggleClass("jq-checkbox_active");
    e.preventDefault();
    $("input:checkbox").attr("disabled", true).trigger("refresh");
  });

  // Plugin for change calendar from/to
  $('input[name="travelDate-from"],input[name="travelDate-to"]').daterangepicker({
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

  $('input[name="travelDate-from"],input[name="travelDate-to"]').on(
    "apply.daterangepicker",
    function (ev, picker) {
      $(this).val(picker.startDate.format("DD/MM/YYYY"));
    }
  );

  $('input[name="travelDate-from"],input[name="travelDate-to"]').on(
    "cancel.daterangepicker",
    function (ev, picker) {
      $(this).val("");
    }
  );

  // Plugin for change calendar  with range dates in category for every form
  $(
    'input[name="dataCar-1"],input[name="dataCar-2"],input[name="dataCar-3"],input[name="dataBoat-1"],input[name="dataBoat-2"],input[name="dataBoat-3"],input[name="dataApprts-1"],input[name="dataApprts-2"],input[name="dataApprts-3"]'
  ).daterangepicker({
    singleDatePicker: false,
    autoApply: true,
    locale: {
      direction: "ltr",
      format: "DD/MM/YYYY HH:mm",
      separator: " - ",
      applyLabel: "Apply",
      cancelLabel: "Clear",
      fromLabel: "From",
      toLabel: "To",
      customRangeLabel: "Custom",
      daysOfWeek: ["Вс", "Пон", "Вт", "Ср", "Чт", "Пт", "Сб"],
      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентбярь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
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
    'input[name="dataCar-1"],input[name="dataCar-2"],input[name="dataCar-3"],input[name="dataBoat-1"],input[name="dataBoat-2"],input[name="dataBoat-3"],input[name="dataApprts-1"],input[name="dataApprts-2"],input[name="dataApprts-3"]'
  ).on("apply.daterangepicker", function (ev, picker) {
    $(this).val(
      picker.startDate.format("DD/MM/YYYY") + " - " + picker.endDate.format("DD/MM/YYYY")
    );
  });

  $(
    'input[name="dataCar-1"],input[name="dataCar-2"],input[name="dataCar-3"],input[name="dataBoat-1"],input[name="dataBoat-2"],input[name="dataBoat-3"],input[name="dataApprts-1"],input[name="dataApprts-2"],input[name="dataApprts-3"]'
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
    $(".burger-menu").toggleClass("burger-menu_active");
    $("body").toggleClass("lock");
  });

  $(".navResponsive__title").click(function () {
    $(".navResponsive__title")
      .siblings()
      .children()
      .not(this)
      .removeClass("navResponsive__link_active");

    $(this).siblings().children().toggleClass("navResponsive__link_active");
  });

  $(document).mouseup(() => {
    // rotate arrow
    if ($(event.target).closest(".navigation__item").length == 0) {
      $(".navigation__item").removeClass("arrow_active");
    }

    // disable all spoilers
    if ($(event.target).closest(".navResponsive__spoiler").length == 0) {
      $(".navResponsive__title").removeClass("navResponsive__title_active");
      $(".navResponsive__link").removeClass("navResponsive__link_active");
    }

    // rotate panel and burger menu
    if (
      $(event.target).closest(".navigation__panel").length == 0 &&
      $(event.target).closest(".burger-menu").length == 0
    ) {
      $(".navigation__panel").removeClass("navigation__panel_active");
      $(".burger-menu").removeClass("burger-menu_active");
      $("body").removeClass("lock");
    }
  });

  // Click for appear search input in first-screen under sarch icon
  $(".navigation__icon_search").on("click", () => {
    if ($(event.target).closest('input[type = "search"]').length == 0) {
      $(event.currentTarget).toggleClass("navigation__icon_search-hide");
    }
  });

  $(document).mouseup(() => {
    if (
      $(event.target).closest('input[type ="search"]').length == 0 &&
      $(event.target).closest("navigation__icon_search")
    ) {
      $(".navigation__icon_search").removeClass("navigation__icon_search-hide");
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

  $(".navigation__item").click(function () {
    $(event.currentTarget).toggleClass("arrow_active");
    if ($(".navigation__item").not(this)) {
      $(".navigation__item").not(this).removeClass("arrow_active");
    }
    $(this).next().find("h5").toggleClass("navResponsive__title_active");
    // console.log($(".navigation__item").next().hasClass("navResponsive__spoiler-wrapper").length);
  });
});
