!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.dateFlywen=t():e.dateFlywen=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e){return[[e.getFullYear(),e.getMonth()+1,e.getDate()].join("-"),[e.getHours(),e.getMinutes(),e.getSeconds()].join(":")].join(" ")}function n(e){return"[object Date]"===Object.prototype.toString.call(e)?o(e):"[object Number]"===Object.prototype.toString.call(e)?o(new Date(e)):void 0}return e.r(t),e.d(t,{formatDate:()=>n}),t})()}));