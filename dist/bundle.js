/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttonEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _buttonEvent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_buttonEvent__WEBPACK_IMPORTED_MODULE_0__);

const keysArray = [
  { 0: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { 1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"] },
  { 2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"] },
  {
    3: ["CAPSKEY", "Z", "X", "C", "V", "B", "N", "M", "ERASEBYONE"]
  },
  { 4: ["SPACE"] }
];

const createKeyboardKeys = () => {
  let parentRowOne = document.getElementById("grid_row_1");
  let parentRowTwo = document.getElementById("grid_row_2");
  let parentRowThree = document.getElementById("grid_row_3");
  let parentRowFour = document.getElementById("grid_row_4");
  let parentRowFive = document.getElementById("grid_row_5");

  console.log("keysArray[0]", keysArray[0], parentRowOne);
  let columnArray = [];
  keysArray.forEach((key, index) => {
    columnArray[index] = keysArray[index][index].map(key => {
      let button = document.createElement("button");

      if (key === "CAPSKEY") {
        let img = document.createElement("img");
        // img.setAttribute("src", "./icons/caps-lock-on-64.png");
        img.addEventListener("click", _buttonEvent__WEBPACK_IMPORTED_MODULE_0__.onButtonClick);
        img.setAttribute("value", key);
        button.appendChild(img);
      } else if (key === "ERASEBYONE") {
        let img = document.createElement("img");
        img.addEventListener("click", _buttonEvent__WEBPACK_IMPORTED_MODULE_0__.onButtonClick);
        // img.setAttribute("src", "./icons/left-arrow-100.png");
        img.setAttribute("value", key);
        button.appendChild(img);
      } else if (key === "SPACE") {
        let img = document.createElement("img");
        img.addEventListener("click", _buttonEvent__WEBPACK_IMPORTED_MODULE_0__.onButtonClick);
        img.setAttribute("value", key);
        // img.setAttribute("src", "./icons/space-key-48.png");
        button.appendChild(img);
      } else {
        button.innerText = key;
        button.addEventListener("click", _buttonEvent__WEBPACK_IMPORTED_MODULE_0__.onButtonClick);
        button.setAttribute("value", key);
      }
      return button;
    });
  });

  console.log("columnArray", columnArray);
  columnArray.forEach((column, index) => {
    console.log("index======>", columnArray[index]);

    columnArray[index].forEach(button => {
      if (index === 0) {
        parentRowOne.appendChild(button);
      }
      if (index === 1) {
        parentRowTwo.appendChild(button);
      }
      if (index === 2) {
        parentRowThree.appendChild(button);
      }
      if (index === 3) {
        parentRowFour.appendChild(button);
      }
      if (index === 4) {
        parentRowFive.appendChild(button);
      }
    });
  });
};
createKeyboardKeys();


/***/ }),
/* 1 */
/***/ ((module) => {

const onButtonClick = e => {
  console.log("onButtonCLick===>", e.target.getAttribute("value"));
  let type = e.target.getAttribute("value");
  let textElement = document.getElementById("textArea");
  let textValue = textElement.value;

  switch (type) {
    case "ERASEBYONE":
      let text = textValue.substring(0, textValue.length - 1);
      console.log("text----->", text, textValue);
      textElement.value = text;
      break;
    case "SPACE":
      textElement.value = textValue + " ";
      break;
    default:
      textElement.value = textValue + type;
  }
};

module.exports = { onButtonCLick };


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;