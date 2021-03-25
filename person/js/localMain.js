var allBloggersSliderSection = new Swiper(".allBloggers__slider", {
  spaceBetween: 20,
  // centeredSlides: true,
  // slidesPerView: "auto",
  speed: 500,
  watchOverflow: true,
  scrollbar: {
    el: ".allBloggers__scrollbar",
    hide: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1.3,
    },
    481: {
      slidesPerView: 1.5,
    },

    601: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 2.5,
    },
    // when window width is >= 480px
    1000: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
    },
  },
});
;

var personalCardCustomScroll = new Swiper(".personalCard__containerInfo", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  freeModeMomentum: false,
  freeModeMomentumBounce: false,
  scrollbar: {
    el: ".personalCard__scrollBar",
  },
  mousewheel: true,
});
;

window.onload = function () {
  const $anchors = document.querySelectorAll("a");
  $anchors.forEach((item) => item.classList.add("hoverable"));

  trackMouse(".hoverable", ".js-pointer");
};

function trackMouse(hover, pointer) {
  var $hover = document.querySelectorAll(hover);
  var $pointer = document.querySelector(pointer);

  var off = 50;
  var first = !0;

  function mouseX(evt) {
    if (!evt) evt = window.event;
    if (evt.pageX) return evt.pageX;
    else if (evt.clientX)
      return evt.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    else return 0;
  }

  function mouseY(evt) {
    if (!evt) evt = window.event;
    if (evt.pageY) return evt.pageY;
    else if (evt.clientY)
      return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    else return 0;
  }

  function follow(evt) {
    if (first) {
      first = !1;
      $pointer.style.opacity = 1;
    }

    TweenMax.to($pointer, 0.7, {
      left: parseInt(mouseX(evt)) - off + "px",
      top: parseInt(mouseY(evt)) - off + "px",
      ease: Power3.easeOut,
    });
  }
  document.onmousemove = follow;
  console.log($hover);

  (function hoverable() {
    $hover.forEach(function (item) {
      item.addEventListener("mouseover", function () {
        $pointer.classList.add("hide");
      });
      item.addEventListener("mouseout", function () {
        $pointer.classList.remove("hide");
      });
    });
  })();
}
;
