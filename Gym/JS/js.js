$(document).ready(() => {
  // Burger menu
  $(".burger-menu").on("click", () => {
    $(event.currentTarget).toggleClass("burger-menu_active");
    $(".navigation").toggleClass("navigation_active");
    $("body").toggleClass("lock");
  });
  // Customize burger menu
  $(document).mouseup(() => {
    if (
      $(event.target).closest(".navigation").length == 0 &&
      $(event.target).closest(".burger-menu").length == 0
    ) {
      $(".navigation").removeClass("navigation_active");
      $("body").removeClass("lock");
      $(".burger-menu").removeClass("burger-menu_active");
    }
  });

  // Image Back Ground
  function ibg() {
    $.each($(".ibg"), function (index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' + $(this).find("img").attr("src") + '")'
        );
      }
    });
  }
  ibg();

  // functon for 2 section named About where are videos
  $(".column__slide-list").on("click", "div", function () {
    const frameActive = "column__frame_active";
    const posterActive = "column__poster_active";

    // Active video
    $(".column__frame")
      .removeClass(frameActive)
      .eq($(this).index())
      .addClass(frameActive);

    // Active poster red border
    $(".column__poster")
      .removeClass(posterActive)
      .eq($(this).index())
      .addClass(posterActive);

    //pause video when "click" on another slide. It depends on  media screen size of user.
    // if >992px = pause video. Video will be continue downloading
    // if <992px = stop video and interrupt download

    const media = () => {
      if ($(window).width() > 992) {
        $("iframe").each(function () {
          $(this)[0].contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        });
      } else {
        $("iframe").each(function () {
          $(this)[0].contentWindow.postMessage(
            '{"event":"command","func":"stopVideo","args":""}',
            "*"
          );
        });
      }
    };
    media();
  });

  // Makes visible trainers name in their photo
  $(".trainers__profile").hover(() => {
    $(event.currentTarget).toggleClass("trainers__profile_active");
    $(event.currentTarget).find(".data").toggleClass("data_active");
  });

  // Slider for feedback of the clients
  $(".feedback__slider").slick({
    dots: true,
    arrow: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Training process slider
  $(".training__slider").slick({
    arrow: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    touchThreshold: 5000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  // Hover OUR MEMBERSHIP PLANS
  $(".price__column").hover(() => {
    $(".price__column").each(() => {
      if (
        $(".price__column").hasClass("price__column_active") &&
        $(".column__period").hasClass("column__period_active") &&
        $(".price__column").find(".button").hasClass("button_active")
      ) {
        $(".price__column").siblings().removeClass("price__column_active");
        $(".column__period").removeClass("column__period_active");
        $(".price__column").find(".button").removeClass("button_active");
      }
    });

    $(event.currentTarget).toggleClass("price__column_active");
    $(event.currentTarget)
      .find(".column__period")
      .toggleClass("column__period_active");
    $(event.currentTarget).find(".button").toggleClass("button_active");
  });

  $(".column__continue-read").click(() => {
    $(event.target).siblings(".text_toggle").slideToggle(300);
    $(event.target).parent().parent().toggleClass("news__column_open");
    $(event.target)
      .parent()
      .parent()
      .siblings(".news__column")
      .toggleClass("news__column_hide");
    $(".column__image").toggleClass("column__image_open");
  });

  // Change text in spoiler of the latest news section
  $(".column__continue-read").click(function () {
    if (!$(this).data("status")) {
      $(this).text("Close");
      $(this).data("status", true);
    } else {
      $(this).text("Continue reading");
      $(this).data("status", false);
    }
  });

  // Slow scroll
  $("body").on("click", '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $("html,body")
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
  });
});
