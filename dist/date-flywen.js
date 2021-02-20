(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dateFlywen"] = factory();
	else
		root["dateFlywen"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/format.js":
/*!****************************!*\
  !*** ./src/core/format.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "format": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dateGetUtil */ "./src/utils/dateGetUtil.js");

const DEFAULT_PATTERN = "yyyy-MM-dd hh:mm:ss";
function format(pattern, date) {
  if(typeof pattern == "object") {
    date = pattern;
    pattern = DEFAULT_PATTERN;
  }
  if(typeof pattern == "undefined") {
    date = new Date();
    pattern = DEFAULT_PATTERN;
  }
  if(date == null) {
    date = new Date();
  }
  return pattern
    .replace(/yyyy/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getYear)(date))
    .replace(/yy/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getYear)(date, 2))
    .replace(/MM/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getMonth)(date, 2))
    .replace(/M/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getMonth)(date))
    .replace(/dd/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getDate)(date, 2))
    .replace(/d/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getDate)(date))
    .replace(/hh/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getHours)(date, 2))
    .replace(/h/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getHours)(date))
    .replace(/mm/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getMinutes)(date, 2))
    .replace(/m/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getMinutes)(date))
    .replace(/ss/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getSeconds)(date, 2))
    .replace(/s/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getSeconds)(date))
    .replace(/SS/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getMilliSeconds)(date,4))
    .replace(/S/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getMilliSeconds)(date))
    .replace(/O/, (0,_utils_dateGetUtil__WEBPACK_IMPORTED_MODULE_0__.getTimeZone)(date));
}



/***/ }),

/***/ "./src/core/parse.js":
/*!***************************!*\
  !*** ./src/core/parse.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parse": () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var _utils_dateSetUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dateSetUtil */ "./src/utils/dateSetUtil.js");

const now = new Date();
function parse(pattern, str) {
  if(!pattern) {
    throw new Error("pattern is undefined");
  }
  if(!str) {
    throw new Error("str is undefined");
  }
  let local = pattern.indexOf("O") > -1;
  let [regex, matches] = (0,_utils_dateSetUtil__WEBPACK_IMPORTED_MODULE_0__.buildRegexp)(pattern),
    parts = str.match(new RegExp(regex.pattern));
  matches.forEach((match,index) => {
    match.fn(now, parts[index + 1]);
  })
  return now;
}




/***/ }),

/***/ "./src/utils/dateGetUtil.js":
/*!**********************************!*\
  !*** ./src/utils/dateGetUtil.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getYear": () => (/* binding */ getYear),
/* harmony export */   "getMonth": () => (/* binding */ getMonth),
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "getHours": () => (/* binding */ getHours),
/* harmony export */   "getMinutes": () => (/* binding */ getMinutes),
/* harmony export */   "getSeconds": () => (/* binding */ getSeconds),
/* harmony export */   "getMilliSeconds": () => (/* binding */ getMilliSeconds),
/* harmony export */   "getTimeZone": () => (/* binding */ getTimeZone)
/* harmony export */ });
const getYear = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero(date.getFullYear().toString(), w);
}

const getMonth = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero((date.getMonth() + 1).toString(), w);
}

const getDate = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero(date.getDate().toString(), w);
}

const getHours = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero(date.getHours().toString(), w);
}

const getMinutes = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero(date.getMinutes().toString(), w);
}

const getSeconds = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero(date.getSeconds().toString(), w);
}

const getMilliSeconds = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero(date.getMilliseconds().toString(), w);

}

const getTimeZone = (date) => {
  date = date || new Date();
  let timeZone = date.getTimezoneOffset(),
    zone = Math.abs(timeZone / 60),
    offset = timeZone % 60;
  zone = helperPadZero(zone.toString(), 2);
  offset = helperPadZero(offset.toString(), 2);
  return timeZone < 0 ? "+" + zone + offset : "-" + zone + offset;
}

const helperOverload = (date, w) => {
  if(typeof date === "number") {
    w = date;
    date = new Date();
  };
  return [ date, w ];
}

const helperPadZero = (str, w) => {
  w = w || str.length;
  for(let i = 0; i < w; i++) {
    str = "0" + str;
  }
  let reg = new RegExp(`(.{${w}})$`);
  return reg.exec(str)[1];
}



/***/ }),

/***/ "./src/utils/dateSetUtil.js":
/*!**********************************!*\
  !*** ./src/utils/dateSetUtil.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildRegexp": () => (/* binding */ buildRegexp),
/* harmony export */   "setDatePart": () => (/* binding */ setDatePart)
/* harmony export */ });
function setDatePart(date, parts, value, local) {
  date[`set${parts}`](value);
}
function buildRegexp(pattern) {
  let local = pattern.indexOf("O") > -1;
  let matches = [
    {
      pattern: /y{1,4}/,
      regexp: "\\d{1,4}",
      fn: (date, value) => {
        setDatePart(date, "FullYear", value, local);
      }
    },
    {
      pattern: /M{1,2}/,
      regexp: "\\d{1,2}",
      fn: (date, value) => {
        setDatePart(date, "Month", value - 1, local);
      }
    },
    {
      pattern: /(?<!\\)(d{1,2})/,
      regexp: "\\d{1,2}",
      fn: (date, value) => {
        setDatePart(date, "Date", value, local);
      }
    },
    {
      pattern: /h{1,2}/,
      regexp: "\\d{1,2}",
      fn: (date, value) => {
        setDatePart(date, "Hours", value, local);
      }
    },
    {
      pattern: /m{1,2}/,
      regexp: "\\d{1,2}",
      fn: (date, value) => {
        setDatePart(date, "Minutes", value, local);
      }
    },
    {
      pattern: /s{1,2}/,
      regexp: "\\d{1,2}",
      fn: (date, value) => {
        setDatePart(date, "Seconds", value, local);
      }
    },
    {
      pattern: /S{1,2}/,
      regexp: "\\d{1,4}",
      fn: (date, value) => {
        setDatePart(date, "Milliseconds", value, local);
      }
    },
    {
      pattern: /O/,
      regexp: "[+-]\\d{4}",
      fn: (date, value) => {
        setDatePart(date, "Month", value, local);
      }
    }
  ];
  let regexp = matches.reduce((prev, next) => {
    if(next.pattern.test(prev.pattern)) {
      next.index = prev.pattern.match(next.pattern).index;
      prev.pattern = prev.pattern.replace(next.pattern, "(" + next.regexp + ")");
    } else {
      next.index = -1;
    }
    return prev;
  }, {pattern, index: []});
  matches = matches.filter(m => m.index > -1);
  return [regexp, matches];
}




/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatFromNumber": () => (/* binding */ formatFromNumber),
/* harmony export */   "formatFromObj": () => (/* binding */ formatFromObj)
/* harmony export */ });
function formatFromNumber(number) {
  let date = new Date(number);
  return formatFromObj(date);
}

function formatFromObj(obj) {
  let date = [obj.getFullYear(), obj.getMonth() + 1, obj.getDate()].join("-"),
    time = [obj.getHours(), obj.getMinutes(), obj.getSeconds()].join(":"),
    datetime = [date, time].join(" ");
  return datetime;
}



/***/ })

/******/ 	});
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "format": () => (/* reexport safe */ _core_format__WEBPACK_IMPORTED_MODULE_1__.format),
/* harmony export */   "parse": () => (/* reexport safe */ _core_parse__WEBPACK_IMPORTED_MODULE_2__.parse)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
/* harmony import */ var _core_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/format */ "./src/core/format.js");
/* harmony import */ var _core_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/parse */ "./src/core/parse.js");




function formatDate(obj) {
  if (Object.prototype.toString.call(obj) === "[object Date]") {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatFromObj)(obj);
  }
  if (Object.prototype.toString.call(obj) === "[object Number]") {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatFromNumber)(obj);
  }
}



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=date-flywen.js.map