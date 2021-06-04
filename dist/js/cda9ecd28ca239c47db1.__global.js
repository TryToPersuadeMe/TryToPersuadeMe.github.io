/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/__global/footer.js":
/*!*******************************!*\
  !*** ./js/__global/footer.js ***!
  \*******************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResponsiveBlock = /*#__PURE__*/function () {
  function ResponsiveBlock(props) {
    _classCallCheck(this, ResponsiveBlock);

    this.$block = document.querySelector(props.block);
    this.$newParent = document.querySelector(props.newParent);
    this.$oldParent = document.querySelector(props.oldParent);
    this.windowWidth = props.windowWidth;
    this.togglePosition();
    this.windowEventHandler();
    this.loaded();
  }

  _createClass(ResponsiveBlock, [{
    key: "moveBlock",
    value: function moveBlock(parent) {
      parent.appendChild(this.$block);
    }
  }, {
    key: "togglePosition",
    value: function togglePosition() {
      if (window.innerWidth < this.windowWidth) {
        this.moveBlock(this.$newParent);
      } else {
        this.moveBlock(this.$oldParent);
      }
    }
  }, {
    key: "windowEventHandler",
    value: function windowEventHandler() {
      var _this = this;

      window.addEventListener("resize", function () {
        _this.togglePosition();
      });
    }
  }, {
    key: "loaded",
    value: function loaded() {
      var _this2 = this;

      window.addEventListener("load", function () {
        _this2.togglePosition();
      });
    }
  }]);

  return ResponsiveBlock;
}();

var responsiveBlock = new ResponsiveBlock({
  block: ".footer__socialMedia",
  oldParent: ".footer__column_information",
  newParent: ".footer__logo",
  windowWidth: "600"
});

/***/ }),

/***/ "./js/__global/header.js":
/*!*******************************!*\
  !*** ./js/__global/header.js ***!
  \*******************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var responsiveHeader = /*#__PURE__*/function () {
  function responsiveHeader(props) {
    _classCallCheck(this, responsiveHeader);

    this.$navigation = document.querySelector(props.navigation);
    this.$burgerIcon = document.querySelector(props.burgerIcon);
    this.$header = document.querySelector(".header");
    this.overlay = "overlay";
    this.$htmlBody = document.querySelector("body");
    this.BurgerClick();
    this.WindowClick();
  }

  _createClass(responsiveHeader, [{
    key: "openState",
    value: function openState() {
      this.$navigation.classList.add("active");
      this.$burgerIcon.classList.add("active");
      this.$htmlBody.classList.add(this.overlay);
      this.$header.classList.add("opened");
    }
  }, {
    key: "closeState",
    value: function closeState() {
      this.$navigation.classList.remove("active");
      this.$burgerIcon.classList.remove("active");
      this.$htmlBody.classList.remove(this.overlay);
      this.$header.classList.remove("opened");
    }
  }, {
    key: "BurgerClick",
    value: function BurgerClick() {
      var _this = this;

      this.$burgerIcon.addEventListener("click", function () {
        if (!event.currentTarget.classList.contains("active")) {
          _this.openState();
        } else {
          _this.closeState();
        }
      });
    }
  }, {
    key: "WindowClick",
    value: function WindowClick() {
      var _this2 = this;

      document.addEventListener("click", function (event) {
        if (event.target.classList.contains(_this2.overlay)) {
          _this2.closeState();
        }
      });
    }
  }]);

  return responsiveHeader;
}();

var headerBurgerMenu = new responsiveHeader({
  navigation: ".navigation",
  burgerIcon: ".burgerIcon"
});

/***/ }),

/***/ "./scss/__global/__global.scss":
/*!*************************************!*\
  !*** ./scss/__global/__global.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./js/__global/__global.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_global_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/__global/__global.scss */ "./scss/__global/__global.scss");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./js/__global/header.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./js/__global/footer.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer__WEBPACK_IMPORTED_MODULE_2__);
// import "@scss/_global/_global.scss";


 // import "./parralax";
})();

/******/ })()
;
//# sourceMappingURL=cda9ecd28ca239c47db1.__global.js.map