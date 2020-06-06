// $(".slider").slick({
//   arrow: false,
//   dots: false,
//      ***---responsive Height ---***
// adaptiveHeight: false,
//      ***--- Slides to show in slider ---***
// slidesToShow: 1,
//      ***--- show slides per one click on button ---***
// slidesToScroll: 1,
//      ***--- scroll speed ---***
// speed: 300,
//      ***--- type of animation ---***
//  easing: "LINEAR",
//      ***--- infinite scroll ---***
// infinite: true,
//      ***--- first slide to show ---***
// initialSlide: 0,
//      ***--- slides autoplay ---***
// autoplay: false,
// autoplaySpeed: 3000,
// pauseOnFocus: true,
// pauseOnHover: true,
// pauseOnDotsHover: true,
//      ***--- turn Off swipe in tracklist on PC ---***
// draggable: true,
//      ***--- turn Off swipe in tracklist on mobiles ---***
// swipe: true,
//      ***---  ---***
// touchThreshold: 5,
//      ***--- block swipe contol with swipe-focus image ---***
// touchMove: true,
//      ***--- block/unblock click button for swipe without expect of animate finish ---***
// waitForAnimate: true,
//      ***--- center mode for center slide ---***
// centerMode: false,
//      ***--- auto width for slides ---***
// variableWidth: false,
//      ***--- rows in slider track ---***
// rows: 1,
//      ***--- slides per row ---***
// slidesPerRow: 1,
//      ***---  vertical slider ---***
// vertical: false,
//      ***--- allows use  vertical swipe ---***
// verticalSwiping: false,
//      ***--- fade img instead slider ---***
// fade: false,
//      ***--- connect with another slider ---***
// asNavFor: ".class"
//      ***---  responsive breakpoints---***
// responsive: [
//     {
//         breakpoint: 767,
//         settings: {
//             // settings here
//         }
//     }
// ]
//      ***--- arrows/dots in another div ---***
// appendArrows:$(".class")
// appendDots: $(".class")
// });

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
      breakpoint: 900,
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
