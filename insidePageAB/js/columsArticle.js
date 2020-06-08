// hover

function playsl(play_st, play_typ) {
  console.log(play_st + " " + play_typ);
  if (play_st == true) {
      if (play_typ == "slickNext") $(".category__row").slick("slickNext");
    // if (play_typ == "slickPrev") $(".logo_slider").slick("slickPrev");
  }
}

var play_st = false;
var play_typ = false;
var timerId = false;

$(".category__row").mouseenter(function () {
  play_typ = "slickNext";

  play_st = true;

  clearInterval(timerId);
  timerId = setInterval(function () {
    playsl(play_st, play_typ);
  });

  return false;
});

// $(".ls_hover_l").mouseenter(function () {
//   play_typ = "slickPrev";

//   play_st = true;

//   clearInterval(timerId);
//   timerId = setInterval(function () {
//     playsl(play_st, play_typ);
//   }, 220);
//   return false;
// });

$(".category__row").mouseout(function () {
  lay_st = false;
  console.log("sdgdfg");
  clearInterval(timerId);
  return false;
});
