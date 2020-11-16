"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop2 = function _loop2() {
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
    _loop2();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  }
});
/* tabs */

window.addEventListener("DOMContentLoaded", function () {
  var tabs = new Tabs({
    button: ".tabsPanel__li",
    button_active: "tabsPanel__li_active",
    contentWrapper: ".tabsSlide__item",
    acontentWrapper_animation: "tabsSlide__item_animation",
    contentWrapper_activate: "tabsSlide__item_activate"
  });
});
var animDuration = 200;

var Tabs = /*#__PURE__*/function () {
  function Tabs(props) {
    _classCallCheck(this, Tabs);

    this.button = document.querySelectorAll(props.button);
    this.button_active = props.button_active;
    this.contentWrapper = document.querySelectorAll(props.contentWrapper);
    this.acontentWrapper_animation = props.acontentWrapper_animation;
    this.contentWrapper_activate = props.contentWrapper_activate;
    this.arrOfTabsValues = [];
    this.handleClick();
  }

  _createClass(Tabs, [{
    key: "handleClick",
    value: function handleClick() {
      var _this = this;

      var key;

      for (var index = 0; index < this.button.length; index++) {
        /* get value of wrappers tabs*/
        this.arrOfTabsValues.push(this.contentWrapper[index]);
        this.button[index].addEventListener("click", function () {
          /* get current key from li button attribute */
          key = event.target.getAttribute("data-key");
          /* compate key and value */

          _this.compareKeyAndValue.bind(_this, key)();
          /* give active class current li button */


          event.target.classList.add(_this.button_active);
        });
      }
    }
    /* compate key and value */

  }, {
    key: "compareKeyAndValue",
    value: function compareKeyAndValue(key) {
      var _this2 = this;

      var _loop = function _loop(index) {
        _this2.button[index].classList.remove(_this2.button_active);

        if (key == _this2.arrOfTabsValues[index].dataset.value) {
          _this2.arrOfTabsValues[index].classList.add(_this2.contentWrapper_activate);

          setTimeout(function () {
            _this2.arrOfTabsValues[index].classList.add(_this2.acontentWrapper_animation);
          }, animDuration);
        } else {
          _this2.arrOfTabsValues[index].classList.remove(_this2.contentWrapper_activate);

          setTimeout(function () {
            _this2.arrOfTabsValues[index].classList.remove(_this2.acontentWrapper_animation);
          }, animDuration);
        }
      };

      for (var index = 0; index < this.arrOfTabsValues.length; index++) {
        _loop(index);
      }
    }
  }]);

  return Tabs;
}();

;
/* popUp */

var PopUp = /*#__PURE__*/function () {
  function PopUp(props) {
    _classCallCheck(this, PopUp);

    this.buttons = document.querySelectorAll(props.buttons);
    this.popUp = document.querySelector(props.popUp);
    this.popUp_closeIcon = document.querySelector(props.popUp_closeIcon);
    this.popUp_active = props.popUp_active;
    this.globalWrapper = document.querySelector(props.globalWrapper);
    this.globalWrapper_shadow = props.globalWrapper_shadow;
    this.body = document.querySelector("body");
    this.header = document.querySelector(props.header);
    this.header_active = props.header_active; // this.openPopUp.bind(this)();
    // this.clickCloseIcon.bind(this)();
    // this.windowClick();
  }

  _createClass(PopUp, [{
    key: "openPopUp",
    value: function openPopUp() {
      var _this3 = this;

      for (var index = 0; index < this.buttons.length; index++) {
        this.buttons[index].addEventListener("click", function () {
          _this3.popUp.classList.add(_this3.popUp_active);

          _this3.body.classList.add("body-lock");

          _this3.globalWrapper.classList.add("wrapper_shadow");

          _this3.header.classList.remove(_this3.header_active);
        });
      }
    }
  }, {
    key: "closePopUp",
    value: function closePopUp() {
      this.popUp.classList.remove(this.popUp_active);
      this.body.classList.remove("body-lock");
      this.globalWrapper.classList.remove("wrapper_shadow");
    }
  }, {
    key: "clickCloseIcon",
    value: function clickCloseIcon() {
      var _this4 = this;

      if (this.popUp_closeIcon) {
        this.popUp_closeIcon.addEventListener("click", function (event) {
          event.target == _this4.popUp_closeIcon ? _this4.closePopUp() : false;
        });
      }
    }
  }, {
    key: "windowClick",
    value: function windowClick() {
      var _this5 = this;

      window.addEventListener("click", function () {
        if (event.target == _this5.globalWrapper) {
          _this5.closePopUp();
        }
      });
    }
  }]);

  return PopUp;
}();

var popUp = new PopUp({
  buttons: ".popUp-callButton-js",
  popUp: ".feedbackForm",
  popUp_active: "feedbackForm_active",
  popUp_closeIcon: ".feedbackForm__closeIcon",
  body: "body",
  body_lock: "body-lock",
  header: ".header__navigation",
  header_active: "header__navigation_active",
  globalWrapper: ".wrapper",
  globalWrapper_shadow: "wrapper_shadow"
});
;
/* typer for text */

var TypeIt = /*#__PURE__*/function (_PopUp) {
  _inherits(TypeIt, _PopUp);

  var _super = _createSuper(TypeIt);

  function TypeIt(props) {
    var _this6;

    _classCallCheck(this, TypeIt);

    _this6 = _super.call(this, props);
    _this6.typeText = document.querySelectorAll(props.typeText);
    _this6.textArea = document.querySelector(props.textArea);
    _this6.popUp_closeIcon = popUp.popUp_closeIcon;
    _this6.popUp = popUp.popUp;
    _this6.popUp_active = popUp.popUp_active;
    _this6.text;

    _this6.buttonClick();

    _this6.clickCloseIcon();

    return _this6;
  }
  /* click on button with text in data attribute */


  _createClass(TypeIt, [{
    key: "buttonClick",
    value: function buttonClick() {
      var _this7 = this;

      document.addEventListener("click", function () {
        var index = Array.from(_this7.buttons).indexOf(event.target);
        var currentItem = popUp.buttons[index + 1];
        _this7.text = " ";
        _this7.text = currentItem.dataset.typingtext;

        _this7.typeContent();
      });
    }
    /* typing text */

  }, {
    key: "typeContent",
    value: function typeContent() {
      var _this8 = this;

      this.ch = 0;
      console.log(this.text);

      this.typeContent = function () {
        if (_this8.ch > _this8.text.length) {
          return _this8.ch = 0;
        }

        console.log(_this8.ch);

        _this8.textArea.setAttribute("placeholder", _this8.text.substring(0, _this8.ch++));

        setTimeout(_this8.typeContent, ~~(Math.random() * (300 - 60 + 1) + 60));
      };

      this.typeContent();
    }
  }]);

  return TypeIt;
}(PopUp);

var typeIt = new TypeIt({
  typeText: ".typer",
  textArea: ".feedbackForm__input_textarea",
  buttons: ".buttonAdd__customIcon"
});
;
/* responsive navigation */

var Header = /*#__PURE__*/function () {
  function Header(props) {
    _classCallCheck(this, Header);

    this.burgerIcon = document.querySelector(props.burgerIcon);
    this.burgerIcon_active = props.burgerIcon_active;
    console.log(this.burgerIcon_active);
    this.header = document.querySelector(props.header);
    this.header_active = props.header_active;
    this.popUp = popUp.popUp;
    this.popUp_active = popUp.popUp_active;
    this.body = document.getElementsByTagName(props.body)[0];
    this.globalWrapper = document.querySelector(props.globalWrapper);
    this.firstScreen = document.querySelector(props.firstScreen);
    /* click on burger icon */

    this.windowClick();
    /* click != burger icon or header. its close menu*/

    this.handleClickOnIcon();
    this.closeMenu();
  }

  _createClass(Header, [{
    key: "openMenu",
    value: function openMenu() {
      this.burgerIcon.classList.add(this.burgerIcon_active);
      this.header.classList.add(this.header_active);
      this.body.classList.add("body-lock");
      this.globalWrapper.classList.add("wrapper_shadow");
      this.popUp.classList.remove(this.popUp_active);
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.burgerIcon.classList.remove(this.burgerIcon_active);
      this.header.classList.remove(this.header_active);
      console.log("clooooose");
      this.body.classList.remove("body-lock");
      this.globalWrapper.classList.remove("wrapper_shadow");
    }
  }, {
    key: "checkState",
    value: function checkState() {
      this.header.classList.contains(this.header_active) ? this.closeMenu.bind(this)() : this.openMenu.bind(this)();
    }
  }, {
    key: "handleClickOnIcon",
    value: function handleClickOnIcon() {
      var _this9 = this;

      this.burgerIcon.addEventListener("click", function () {
        _this9.checkState();
      });
    }
  }, {
    key: "checkPopUpStatus",
    value: function checkPopUpStatus() {
      var _this10 = this;

      this.burgerIcon.addEventListener("click", function () {
        if (_this10.popUp) {}
      });
    }
  }, {
    key: "windowClick",
    value: function windowClick() {
      var _this11 = this;

      window.addEventListener("click", function () {
        event.target == _this11.globalWrapper ? _this11.closeMenu() : false;
      });
    }
  }]);

  return Header;
}();

var responsive = new Header({
  burgerIcon: ".header__burgerMenu",
  burgerIcon_active: "header__burgerMenu_active",
  header: ".header__navigation",
  header_active: "header__navigation_active",
  body: "body",
  globalWrapper: ".wrapper",
  globalWrapper_shadow: "wrapper_shadow"
});
;
/* slider */

$(document).ready(function () {
  /* feed back section slider */
  $(".slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    centerMode: false,
    dots: false,
    variableWidth: false,
    responsive: [{
      breakpoint: 1001,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }]
  });
});
;
/* opacity scrolling */

var opacity = {
  wrapper: "opacityScrolling-js",
  column: "block__column",
  image: "block__image"
};
var block = document.querySelectorAll("." + opacity.wrapper); // let column = document.querySelectorAll("." + opacity.column);

var scrollCoef = 0.0015;
document.addEventListener("scroll", function () {
  for (var index = 0; index < block.length; index++) {
    /* get position of image */
    var fromTop = block[index].getBoundingClientRect().top;
    var position = 1 - fromTop * scrollCoef;
    /* hide or show  */

    if (fromTop >= 0) {
      /* scroll DOWN */
      block[index].style.opacity = position + 1.5;
      /* scroll UP */
    } else {
      block[index].style.opacity = 2.5 - position;
    }
  }
});
;