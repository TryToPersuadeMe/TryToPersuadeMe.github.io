"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var updateSidesSlides = function updateSidesSlides() {
  var slidesArr = document.querySelectorAll(".additionalSlide");
  var slide_next = document.querySelector(".swiper-slide-next");
  var slide_prev = document.querySelector(".swiper-slide-prev");
  var slide_current = document.querySelector(".swiper-slide-active");
  slidesArr[0].innerHTML = slide_next.innerHTML;
  slidesArr[1].innerHTML = slide_prev.innerHTML;
  console.log(slidesArr);
};

var addClass = function addClass() {
  var $container = document.querySelector(".swiper-wrapper");
  var $slide = $container.querySelectorAll(".swiper-slide");
  $slide.forEach(function (el) {
    return el.children[0].classList.add("swiper-zoom-container");
  });
};

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  speed: 500,
  loop: true,
  loopAdditionalSlides: 1,
  zoom: {
    maxRatio: 3
  },
  pagination: {
    el: ".swiperStuffSlider__pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 0
  },
  navigation: {
    nextEl: ".swiperStuffSlider__button_next",
    prevEl: ".swiperStuffSlider__button_prev"
  },
  on: {
    slideChangeTransitionEnd: function slideChangeTransitionEnd() {
      updateSidesSlides();
    },
    resize: function resize() {
      if (window.innerWidth <= 1000) {
        this.changeDirection("vertical", true);
      } else {
        this.changeDirection("horizontal", true);
      }
    },
    beforeInit: function beforeInit() {
      addClass();

      if (window.innerWidth <= 1000) {
        this.changeDirection("vertical", true);
      } else {
        this.changeDirection("horizontal", true);
      }
    }
  }
});
;

var Select = /*#__PURE__*/function () {
  function Select(el) {
    _classCallCheck(this, Select);

    if (typeof el === "string") {
      el = document.querySelectorAll(el);
    }

    if (typeof el[Symbol.iterator] === "function") {
      return _toConsumableArray(el).map(function (n) {
        return new Select(n);
      });
    }

    this.$select = el;
    this.$inputField = this.$select.querySelector("input");
    this.$label = this.$select.querySelector(".select__label");
    this.$body = document.querySelector("body");
    this.handleClick();
    this.hanldeClickWindow();
  }

  _createClass(Select, [{
    key: "openState",
    value: function openState() {
      this.$select.classList.add("open");
    }
  }, {
    key: "closeState",
    value: function closeState() {
      this.$select.classList.remove("open");
    }
    /* open/close dropdown list */

  }, {
    key: "toggleState",
    value: function toggleState() {
      if (this.$select.classList.contains("open")) {
        this.closeState();
      } else {
        this.openState();
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this = this;

      this.$select.addEventListener("mouseup", function () {
        _this.toggleState();

        _this.handleValue();
      });
    }
    /* change value of input */

  }, {
    key: "handleValue",
    value: function handleValue() {
      if (event.target != this.$label) {
        this.$inputField.value = event.target.innerText;
      }
    }
  }, {
    key: "hanldeClickWindow",
    value: function hanldeClickWindow() {
      var _this2 = this;

      window.addEventListener("click", function () {
        if (event.target != _this2.$label) {
          _this2.closeState();
        }
      });
    }
  }]);

  return Select;
}();

var select = new Select(".select");
;

var responsiveHeader = /*#__PURE__*/function () {
  function responsiveHeader(props) {
    _classCallCheck(this, responsiveHeader);

    this.navigation = document.querySelector("." + props.navigation);
    this.burgerIcon = document.querySelector("." + props.burgerIcon);
    this.burgerIcon_active = props.burgerIcon_active;
    this.htmlBody = document.querySelector("body");
    this.BurgerClick();
    this.WindowClick();
  }

  _createClass(responsiveHeader, [{
    key: "openState",
    value: function openState() {
      this.navigation.classList.add("responsiveMenu_active");
      this.burgerIcon.classList.add(this.burgerIcon_active);
      this.htmlBody.classList.add("bodyOverlay");
    }
  }, {
    key: "closeState",
    value: function closeState() {
      this.navigation.classList.remove("responsiveMenu_active");
      this.burgerIcon.classList.remove(this.burgerIcon_active);
      this.htmlBody.classList.remove("bodyOverlay");
    }
  }, {
    key: "BurgerClick",
    value: function BurgerClick() {
      var _this3 = this;

      this.burgerIcon.addEventListener("click", function () {
        if (!event.currentTarget.classList.contains(_this3.burgerIcon_active)) {
          _this3.openState();
        } else {
          _this3.closeState();
        }
      });
    }
  }, {
    key: "WindowClick",
    value: function WindowClick() {
      var _this4 = this;

      document.addEventListener("click", function () {
        if (event.target.classList.contains("bodyOverlay")) {
          _this4.closeState();
        }
      });
    }
  }]);

  return responsiveHeader;
}();

var headerBurgerMenu = new responsiveHeader({
  navigation: "responsiveMenu",
  burgerIcon: "burgerIcon",
  burgerIcon_active: "burgerIcon_active"
});

var TextSpoiler = /*#__PURE__*/function () {
  function TextSpoiler(el) {
    _classCallCheck(this, TextSpoiler);

    if (typeof el === "string") {
      el = document.querySelectorAll(el);
    }

    if (typeof el[Symbol.iterator] === "function") {
      return _toConsumableArray(el).map(function (n) {
        return new TextSpoiler(n);
      });
    }

    this.$spoiler = el;
    this.$dropList = this.$spoiler.querySelector(".textSpoiler-dropList");
    this.$button = this.$spoiler.querySelector(".textSpoiler-button");
    this.handleClick();
    this.hanldeClickWindow();
  }

  _createClass(TextSpoiler, [{
    key: "openState",
    value: function openState() {
      this.$spoiler.classList.add("opened");
    }
  }, {
    key: "closeState",
    value: function closeState() {
      this.$spoiler.classList.remove("opened");
    }
  }, {
    key: "toggleState",
    value: function toggleState() {
      if (this.$spoiler.classList.contains("opened")) {
        this.closeState();
      } else {
        this.openState();
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this5 = this;

      this.$button.addEventListener("click", function () {
        _this5.toggleState();
      });
    }
  }, {
    key: "hanldeClickWindow",
    value: function hanldeClickWindow() {
      var _this6 = this;

      window.addEventListener("click", function () {
        if (event.target != _this6.$button) {
          _this6.closeState();
        }
      });
    }
  }]);

  return TextSpoiler;
}();

var textSpoiler = new TextSpoiler(".textSpoiler");
;

var countPerClick = function countPerClick(button, counter) {
  var $button = document.querySelectorAll(button);
  var $counter = document.querySelector(counter);
  var totalQuantity = Number($counter.innerText);

  var plus = function plus() {
    $counter.dataset.counted = "true";
    totalQuantity = totalQuantity + 1;
    $counter.innerText = totalQuantity;
  };

  var minus = function minus() {
    $counter.dataset.counted = "false";
    totalQuantity = totalQuantity - 1;
    $counter.innerText = totalQuantity;
  };

  var toggle = function toggle() {
    if ($counter.dataset.counted == "true") {
      minus();
    } else {
      plus();
    }
  };

  if ($button.length > 1) {
    $button.forEach(function (el) {
      return el.addEventListener("click", function () {
        return toggle();
      });
    });
  } else {
    $button[0].addEventListener("mouseup", function () {
      return toggle();
    });
  }
};

countPerClick(".filters__addFavoriteButton", "#favorites-counter");
countPerClick(".filters__button", "#bag-counter");
;

var DragAndDrop = /*#__PURE__*/function () {
  function DragAndDrop(props) {
    _classCallCheck(this, DragAndDrop);

    this.$dragableItem = document.querySelector(props.dragableItem);
    this.$dragIcon = document.querySelector(props.dragIcon);
    this.$closeStickyContent = document.querySelector(props.closeStickyContent);
    this.$htmlBody = document.querySelector("body");
    /* set started position */

    this.startY;
    this.additionalSpaceForY;
    this.startedPosition_DragableItem();
    this.startedPosition_DragIcon(30);
    /* events */

    this.touchMoveEvent();
    this.touchStartEvent();
    this.touchEndEvent();
    this.resizeEvent();
  }

  _createClass(DragAndDrop, [{
    key: "startedPosition_DragableItem",
    value: function startedPosition_DragableItem() {
      this.startY = this.$closeStickyContent.scrollHeight;
      this.$dragableItem.style.top = this.startY + "px";
    }
  }, {
    key: "startedPosition_DragIcon",
    value: function startedPosition_DragIcon(number) {
      this.space = number;
      this.$dragIcon.style.top = this.space + "px";
      /* складываем числа. Если вычесть отрицательные числа, то получится сложение между ними */

      this.additionalSpaceForY = this.space + this.$dragIcon.scrollHeight;
    }
  }, {
    key: "checkCurrentPosition",
    value: function checkCurrentPosition(currentElementY) {
      /* если вытащить элемент за пределы экрана ВВЕРХ*/
      this.innerSpaceY = 100;

      if (currentElementY < this.innerSpaceY) {
        /* нужно сделать отрицательное число положительным.ы После этого прибавляем дополнительный отступ */
        this.$dragableItem.style.top = this.additionalSpaceForY * -1 + this.innerSpaceY + "px";
        /* если вытащить элемент за пределы экрана ВНИЗ*/
      } else if (currentElementY > this.startY) {
        this.startedPosition_DragableItem();
        /* если перемещать элемент ВНУТРИ экрана*/
      } else {
        this.$dragableItem.style.top = currentElementY + "px";
      }
    }
  }, {
    key: "touchStartEvent",
    value: function touchStartEvent() {
      var _this7 = this;

      this.$dragIcon.addEventListener("touchstart", function () {
        _this7.$dragableItem.classList.remove("overflowY");
      });
    }
  }, {
    key: "touchEndEvent",
    value: function touchEndEvent() {
      var _this8 = this;

      this.$dragIcon.addEventListener("touchend", function () {
        _this8.$dragableItem.classList.add("overflowY");

        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        _this8.$htmlBody.style.overflow = "auto";
      });
    }
  }, {
    key: "touchMoveEvent",
    value: function touchMoveEvent() {
      var _this9 = this;

      this.$dragIcon.addEventListener("touchmove", function () {
        _this9.elementY = event.changedTouches[0].clientY;

        _this9.checkCurrentPosition(_this9.elementY);

        swiper.allowSlidePrev = false;
        swiper.allowSlideNext = false;
        _this9.$htmlBody.style.overflow = "hidden";
      });
    }
  }, {
    key: "resizeEvent",
    value: function resizeEvent() {
      var _this10 = this;

      window.addEventListener("resize", function () {
        _this10.startedPosition_DragableItem();

        _this10.startedPosition_DragIcon(30);
      });
    }
  }]);

  return DragAndDrop;
}();

var dragAndDrop = new DragAndDrop({
  dragableItem: ".screen",
  dragIcon: ".touchIcon",
  closeStickyContent: ".swiperStuffSlider"
});
;

var CallWindows = /*#__PURE__*/function () {
  function CallWindows(props) {
    _classCallCheck(this, CallWindows);

    this.$popUp = document.querySelector(props.popUp);
    this.$button = document.querySelectorAll(props.button);
    this.$button_close = this.$popUp.querySelector(props.button_close);
    this.$parent = document.querySelector(props.parent);
    this.handleCallButtonClick();
    this.handleCloseIconClick();
  }

  _createClass(CallWindows, [{
    key: "showPopUp",
    value: function showPopUp() {
      this.$popUp.classList.add("active");
    }
  }, {
    key: "hidePopUp",
    value: function hidePopUp() {
      this.$popUp.classList.remove("active");
    }
  }, {
    key: "toggleState",
    value: function toggleState() {
      if (this.$popUp.classList.contains("acitve")) {
        this.hidePopUp();
      } else {
        this.showPopUp();
      }
    }
  }, {
    key: "handleCloseIconClick",
    value: function handleCloseIconClick() {
      var _this11 = this;

      this.$button_close.addEventListener("click", function () {
        return _this11.hidePopUp();
      });
    }
  }, {
    key: "handleCallButtonClick",
    value: function handleCallButtonClick() {
      var _this12 = this;

      this.$button.forEach(function (value) {
        value.addEventListener("click", function () {
          if (value.classList.contains("infoPopup__button")) {
            _this12.showPopUp();
          } else {
            _this12.showPopUp();

            setTimeout(function () {
              return value.offsetParent.classList.remove("active");
            }, 800);
          }
        });
      });
    }
  }]);

  return CallWindows;
}();

var popUp_details = new CallWindows({
  popUp: ".popUp_details",
  button: ".popUp__button_details-js",
  button_close: ".popUp__closePopup",
  parent: ".screen"
});
var popUp_sizes = new CallWindows({
  popUp: ".popUp_sizes",
  button: ".popUp__button_sizes-js",
  button_close: ".popUp__closePopup",
  parent: ".screen"
});
;

var slowScrolltoAnchors = function slowScrolltoAnchors() {
  var anchors = document.querySelectorAll('a[href*="#"]');

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute("href").substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  console.log("asd");
};

slowScrolltoAnchors();
;