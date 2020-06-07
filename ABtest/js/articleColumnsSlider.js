$(".category__row").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  draggable: true,
  swipe: true,
  arrows: true,
  // appendArrows: $(".slick-active"),
});

// On before slide change
// $('.slick-arrow').on('hover', function (event, slick, currentSlide, nextSlide) {
//     var btn = $(this);
//     btn[0].click();

// });

$(".slick-arrow").hover(function (event, slick, currentSlide, nextSlide) {
  var btn = $(this);
  btn[0].click();
});

$(".slick-arrow").mouseenter(function (e) {});

// $(".category__row").on("click", () => {
//     console.log($(event.target));

// });

//   arrows: false,
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
