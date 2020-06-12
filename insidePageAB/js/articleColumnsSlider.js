$(".category__row").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  draggable: true,
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
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        draggable: true,
        swipe: true,
        arrows: false,
        speed: 1500,
        easing: "LINEAR",
        variableWidth: true,
        centerMode: true,
        touchThreshold: 30,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        draggable: true,
        swipe: true,
        arrows: false,
        speed: 1500,
        easing: "LINEAR",
        variableWidth: true,
        centerMode: true,
        touchThreshold: 30,
      },
    },
  ],
});

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
// hover

// hover

// hover

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

playsl();
