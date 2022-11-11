/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ */\\n/* v1.0 | 20080212 */\\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  outline: 0;\\n  font-size: 100%;\\n  vertical-align: baseline;\\n  background: transparent;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\nq:before, q:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\n/* remember to define focus styles! */\\n:focus {\\n  outline: 0;\\n}\\n\\n/* remember to highlight inserts somehow! */\\nins {\\n  text-decoration: none;\\n}\\n\\ndel {\\n  text-decoration: line-through;\\n}\\n\\n/* tables still need 'cellspacing=\\\"0\\\"' in the markup */\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  text-decoration: none;\\n}\\n\\nbody {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n  font-family: \\\"Noto Sans TC\\\", sans-serif;\\n  background-color: #ecd9cd;\\n}\\n\\nbody.no-transition * {\\n  transition-duration: 0s !important;\\n}\\n\\n.btn-wrapper {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  align-items: stretch;\\n  min-height: 8rem;\\n  margin-top: 1rem;\\n  overflow: hidden;\\n  padding: 0.25rem 0.1875rem;\\n  border: 2px solid #424242;\\n  box-shadow: inset 0 0 0 1px white;\\n  background-color: #424242;\\n}\\n\\n.btn {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  align-items: flex-end;\\n  width: 100%;\\n  height: 7.263rem;\\n  border: 1px solid #424242;\\n  border-top: 0;\\n  border-bottom: 0;\\n  cursor: pointer;\\n  border-radius: 2px;\\n}\\n.btn--animation {\\n  animation: btn-lighting 300ms ease-in-out infinite alternate;\\n}\\n.btn, .btn::before {\\n  transition: all 45ms ease-in-out;\\n}\\n.btn::before {\\n  content: \\\"\\\";\\n  width: 100%;\\n  height: 1.5625rem;\\n  border: 2px solid;\\n  border-bottom-width: 1px;\\n  border-inline: 0;\\n  border-radius: 2px 2px 0 0;\\n}\\n.btn--white {\\n  background-color: #ffffff;\\n}\\n.btn--white::before {\\n  border-top-color: #cccccc;\\n  border-bottom-color: #4d4d4d;\\n  background-color: #dadada;\\n}\\n.btn--orange {\\n  background-color: #ff5943;\\n}\\n.btn--orange::before {\\n  border-top-color: #cc4736;\\n  border-bottom-color: #a63a2c;\\n  background-color: #be4332;\\n}\\n.btn:disabled::before {\\n  height: 0.625rem;\\n}\\n.btn--setting.btn--clicked::before {\\n  height: 0;\\n}\\n\\n.modal-overlay {\\n  opacity: 0;\\n  visibility: hidden;\\n  position: fixed;\\n  z-index: 10;\\n  inset: 0;\\n  width: 100%;\\n  height: 100vh;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  transition-property: opacity, visibility;\\n  transition-duration: 500ms;\\n}\\n.modal-overlay--active {\\n  opacity: 1;\\n  visibility: visible;\\n}\\n.modal-overlay--active .setting-modal {\\n  visibility: visible;\\n  opacity: 1;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.setting-modal__btn, .setting-modal__input, .setting-modal__label {\\n  font-family: \\\"VT323\\\", monospace;\\n  color: #6e7d66;\\n}\\n\\n.setting-modal {\\n  visibility: hidden;\\n  opacity: 0;\\n  position: fixed;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, 0%);\\n  font-family: \\\"VT323\\\", monospace;\\n  padding: 2rem 3rem;\\n  width: 100%;\\n  max-width: 22.1875rem;\\n  margin: 0 auto;\\n  background-color: #9bb090;\\n  transition-property: visibility, opacity;\\n  transition: 500ms ease-in-out;\\n}\\n.setting-modal__form {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  align-items: stretch;\\n}\\n.setting-modal__label {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  max-width: 50%;\\n}\\n.setting-modal__label > span {\\n  font-size: 1.5rem;\\n}\\n.setting-modal__input {\\n  max-width: 100%;\\n  text-align: center;\\n  font-size: 3.75rem;\\n  border: none;\\n  background-color: transparent;\\n  margin-top: 16px;\\n}\\n.setting-modal__btn-wrapper {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: stretch;\\n  margin-top: 1rem;\\n}\\n.setting-modal__btn {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 1.75rem;\\n  border: 0;\\n  cursor: pointer;\\n  background-color: transparent;\\n  transform-origin: center;\\n  transition: transform ease-in-out 100ms;\\n}\\n@media (hover: hover) {\\n  .setting-modal__btn:hover {\\n    transform: scale(1.5);\\n  }\\n}\\n.setting-modal__btn > i {\\n  pointer-events: none;\\n}\\n.setting-modal__ok-btn {\\n  margin-left: 3rem;\\n}\\n@keyframes flickering {\\n  80% {\\n    box-shadow: 0 -1px 0 0 black;\\n    background-color: #730000;\\n  }\\n  85% {\\n    box-shadow: 0 0 30px 10px #ff0000;\\n    background-color: #ff0000;\\n  }\\n  95% {\\n    background-color: rgb(234, 234, 234);\\n  }\\n  100% {\\n    box-shadow: 0 0 30px 10px #ff0000;\\n    background-color: #ff0000;\\n  }\\n}\\n@keyframes btn-lighting {\\n  from {\\n    background-color: rgb(255, 255, 255);\\n  }\\n  to {\\n    background-color: #fff5d6;\\n  }\\n}\\n.led {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.led__text {\\n  font-size: 1rem;\\n  letter-spacing: 0.2em;\\n  color: #f2f2f2;\\n  font-family: \\\"Saira Semi Condensed\\\", sans-serif;\\n  transform: scaleY(0.8);\\n}\\n.led__light {\\n  width: 0.75rem;\\n  height: 0.75rem;\\n  border: 1px solid black;\\n  border-top-width: 1.5px;\\n  margin-left: 0.75rem;\\n  background-color: #730000;\\n  box-shadow: 0 -1px 0 0 black;\\n}\\n.led__light--running {\\n  animation: flickering 1000ms infinite ease-in-out;\\n}\\n.led__light-animation--times-up {\\n  animation: flickering 300ms infinite linear;\\n}\\n.led__light--pause {\\n  background-color: rgb(250, 83, 0);\\n  box-shadow: 0 0px 15px 5px rgb(250, 83, 0);\\n  border: 1px solid red;\\n}\\n\\n.timer-container {\\n  padding: 0 12px;\\n  margin: 0 auto;\\n  width: 100%;\\n  max-width: 21.875rem;\\n}\\n\\n.timer {\\n  box-shadow: 0 5px 2px 1px #777;\\n  width: 100%;\\n}\\n.timer__top {\\n  position: relative;\\n  padding: 1.5rem 1rem 2.25rem;\\n  border-radius: 0.1875rem 0.1875rem 0 0;\\n  background-color: #ffffff;\\n}\\n.timer__screen-outer {\\n  border: 2px solid #424242;\\n  box-shadow: inset 0 0 0 1px white;\\n  padding: 1.875rem;\\n  background-color: #424242;\\n}\\n.timer__screen-inner {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  align-items: center;\\n  padding: 16px 28px;\\n  min-height: 120px;\\n  font-family: \\\"VT323\\\", monospace;\\n  text-align: center;\\n  font-size: 3.75rem;\\n  border: 3px solid;\\n  color: #6e7d66;\\n  background-color: #9bb090;\\n}\\n.timer__time-left {\\n  text-align: left;\\n  font-size: 1.3rem;\\n}\\n.timer__time-wrapper--times-up {\\n  font-size: 2.625rem;\\n  text-align: center;\\n}\\n.timer .hole-wrapper {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: stretch;\\n  position: absolute;\\n  left: 0;\\n  bottom: 0%;\\n  transform: translateY(50%);\\n  width: 100%;\\n}\\n.timer .hole {\\n  width: 1rem;\\n}\\n.timer .hole > div {\\n  width: 100%;\\n  height: 0.125rem;\\n  background-color: #424242;\\n}\\n.timer .hole > div:not(:first-child) {\\n  margin-top: 0.125rem;\\n}\\n.timer__middle {\\n  padding: 2rem 1rem 1.75rem;\\n  background-color: #f2f2f2;\\n}\\n.timer .btn-icons {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  align-items: stretch;\\n}\\n.timer .btn-icon {\\n  font-size: 0.875rem;\\n  color: #ff5943;\\n}\\n.timer__bottom {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-end;\\n  align-items: center;\\n  padding: 1.55rem 1.6rem 1rem;\\n  border-radius: 0.1875rem;\\n  background-color: #2d2d2d;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://simple-timer/./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://simple-timer/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://simple-timer/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/audio/beep.wav":
/*!****************************!*\
  !*** ./src/audio/beep.wav ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/beep.wav\");\n\n//# sourceURL=webpack://simple-timer/./src/audio/beep.wav?");

/***/ }),

/***/ "./src/audio/mousedown.wav":
/*!*********************************!*\
  !*** ./src/audio/mousedown.wav ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/mousedown.wav\");\n\n//# sourceURL=webpack://simple-timer/./src/audio/mousedown.wav?");

/***/ }),

/***/ "./src/audio/setting-mousedown.wav":
/*!*****************************************!*\
  !*** ./src/audio/setting-mousedown.wav ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/setting-mousedown.wav\");\n\n//# sourceURL=webpack://simple-timer/./src/audio/setting-mousedown.wav?");

/***/ }),

/***/ "./src/audio/setting-mouseup.wav":
/*!***************************************!*\
  !*** ./src/audio/setting-mouseup.wav ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/setting-mouseup.wav\");\n\n//# sourceURL=webpack://simple-timer/./src/audio/setting-mouseup.wav?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://simple-timer/./src/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://simple-timer/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://simple-timer/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://simple-timer/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://simple-timer/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://simple-timer/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://simple-timer/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/appearance.js":
/*!***************************!*\
  !*** ./src/appearance.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnPause\": () => (/* binding */ btnPause),\n/* harmony export */   \"btnStop\": () => (/* binding */ btnStop)\n/* harmony export */ });\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\n/* harmony import */ var _audio_mousedown_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio/mousedown.wav */ \"./src/audio/mousedown.wav\");\n/* harmony import */ var _audio_setting_mousedown_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio/setting-mousedown.wav */ \"./src/audio/setting-mousedown.wav\");\n/* harmony import */ var _audio_setting_mouseup_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio/setting-mouseup.wav */ \"./src/audio/setting-mouseup.wav\");\n\r\n\r\n\r\n\r\n\r\n\r\n// * buttons\r\nconst btns = document.querySelectorAll(\".btn\");\r\nconst btnStop = document.querySelector(\"#btn-stop\");\r\nconst btnStart = document.querySelector(\"#btn-start\");\r\nconst btnPause = document.querySelector(\"#btn-pause\");\r\nconst btnSetting = document.querySelector(\"#btn-setting\");\r\nconst btnCancel = document.querySelector(\"#btn-cancel\");\r\nconst btnOk = document.querySelector(\"#btn-ok\");\r\n\r\n// * time setting input\r\nconst inputMinute = document.querySelector(\"#setting-minute\");\r\nconst inputSecond = document.querySelector(\"#setting-second\");\r\n\r\n// * led\r\nconst led = document.getElementById(\"led\");\r\n\r\n// * buttons audio\r\nconst mousedown = new Audio(_audio_mousedown_wav__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nconst settingMousedown = new Audio(_audio_setting_mousedown_wav__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\nconst settingMouseup = new Audio(_audio_setting_mouseup_wav__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n\r\n// * 為 4 個按鈕新增事件\r\nbtns.forEach((btn) => {\r\n  // btn.addEventListener(\"click\", handleBtnClick);\r\n  btn.addEventListener(\"mousedown\", handleBtnMousedown);\r\n  btn.addEventListener(\"mouseup\", handleBtnMouseup);\r\n});\r\n\r\n// * 滑鼠按下並移開，就跳起 btnSetting 按鈕\r\nbtnSetting.addEventListener(\"mouseleave\", () =>\r\n  btnSetting.classList.remove(\"btn--clicked\")\r\n);\r\n\r\n[btnCancel, btnOk].forEach((btn) =>\r\n  btn.addEventListener(\"click\", (e) => {\r\n    closeModalOverlay();\r\n\r\n    if (e.target.id === \"btn-cancel\") {\r\n    }\r\n\r\n    if (e.target.id === \"btn-ok\") {\r\n      (0,_timer__WEBPACK_IMPORTED_MODULE_0__.settingTime)();\r\n      (0,_timer__WEBPACK_IMPORTED_MODULE_0__.showScreenTime)();\r\n      localStorage.setItem(\"totalSecond\", JSON.stringify(_timer__WEBPACK_IMPORTED_MODULE_0__.totalSecond));\r\n    }\r\n  })\r\n);\r\n\r\n[inputMinute, inputSecond].forEach((i) =>\r\n  i.addEventListener(\"focus\", (e) => e.target.select())\r\n);\r\n\r\n// /**\r\n//  * * 處理 4 個 btn click 事件\r\n//  * @param {*} e\r\n//  */\r\n// function handleBtnClick(e) {\r\n//   if (e.target.id === \"btn-stop\") {\r\n//   }\r\n\r\n//   if (e.target.id === \"btn-start\") {\r\n//     // timerStart();\r\n//   }\r\n\r\n//   if (e.target.id === \"btn-pause\") {\r\n//   }\r\n\r\n//   if (e.target.id === \"btn-setting\") {\r\n//   }\r\n// }\r\n\r\n/**\r\n * * 處理 4 個 btn mousedown 事件\r\n * @param {*} e\r\n */\r\nfunction handleBtnMousedown(e) {\r\n  \r\n\r\n  if (e.target.id !== \"btn-setting\") {\r\n    e.target.setAttribute(\"disabled\", \"\");\r\n    mousedown.currentTime = 0;\r\n    mousedown.play();\r\n  }\r\n\r\n  if (e.target.id === \"btn-stop\") {\r\n    led.classList.remove(\"led__light--running\");\r\n    led.classList.remove(\"led__light--pause\");\r\n    timerStopUI();\r\n    (0,_timer__WEBPACK_IMPORTED_MODULE_0__.timerStop)();\r\n    (0,_timer__WEBPACK_IMPORTED_MODULE_0__.showScreenTime)();\r\n    led.classList.remove(\"led__light-animation\");\r\n    btnStop.classList.remove(\"btn--animation\");\r\n  }\r\n\r\n  if (e.target.id === \"btn-start\") {\r\n    (0,_timer__WEBPACK_IMPORTED_MODULE_0__.timerStart)();\r\n    led.classList.add(\"led__light--running\");\r\n    led.classList.remove(\"led__light--pause\");\r\n    // led.classList.add('led__light-animation--times-up');\r\n    [btnStop, btnPause].forEach((btn) => {\r\n      btn.removeAttribute(\"disabled\", \"\");\r\n    });\r\n  }\r\n\r\n  if (e.target.id === \"btn-pause\") {\r\n    timerPauseUI();\r\n    (0,_timer__WEBPACK_IMPORTED_MODULE_0__.timerPause)();\r\n    led.classList.remove(\"led__light--running\");\r\n    led.classList.add(\"led__light--pause\");\r\n  }\r\n\r\n  if (e.target.id === \"btn-setting\") {\r\n    btnSetting.classList.add(\"btn--clicked\");\r\n    settingMousedown.play();\r\n  }\r\n}\r\n\r\n/**\r\n * * 處理 4 個 btn mouseup 事件\r\n * @param {*} e\r\n */\r\nfunction handleBtnMouseup(e) {\r\n  if (e.target.id === \"btn-stop\") {\r\n    (0,_timer__WEBPACK_IMPORTED_MODULE_0__.timerStop)();\r\n  }\r\n\r\n  if (e.target.id === \"btn-start\") {\r\n  }\r\n\r\n  if (e.target.id === \"btn-pause\") {\r\n  }\r\n\r\n  if (e.target.id === \"btn-setting\") {\r\n    btnSetting.classList.remove(\"btn--clicked\");\r\n    timerSetting();\r\n    settingMouseup.play();\r\n  }\r\n}\r\n\r\n/**\r\n * * 處理停止鈕的 UI 相關\r\n */\r\nfunction timerStopUI() {\r\n  // 彈起 start 按鈕\r\n  btnStart.removeAttribute(\"disabled\", \"\");\r\n  btnPause.setAttribute(\"disabled\", \"\");\r\n}\r\n\r\n/**\r\n * * 處理暫停鈕的 UI 相關\r\n */\r\nfunction timerPauseUI() {\r\n  btnStart.removeAttribute(\"disabled\", \"\");\r\n}\r\n\r\n/**\r\n * * 計時設定介面與其設定\r\n */\r\nfunction timerSetting() {\r\n  openModalOverlay();\r\n  let minute = Math.floor(_timer__WEBPACK_IMPORTED_MODULE_0__.totalSecond / 60);\r\n  let second = _timer__WEBPACK_IMPORTED_MODULE_0__.totalSecond % 60;\r\n  minute < 0 ? (minute = 0) : minute;\r\n  second < 0 ? (second = 0) : second;\r\n  minute = minute < 10 ? \"0\" + minute : minute;\r\n  second = second < 10 ? \"0\" + second : second;\r\n  inputSecond.value = second;\r\n  inputMinute.value = minute;\r\n}\r\n\r\n/**\r\n * * 開啟 modal-overlay\r\n * 開啟位於 modal 後面的暗色遮蓋層\r\n */\r\nfunction openModalOverlay() {\r\n  const modalOverlay = document.querySelector(\".modal-overlay\");\r\n  modalOverlay.classList.add(\"modal-overlay--active\");\r\n}\r\n\r\n/**\r\n * * 關閉 modal-overlay\r\n * 關閉位於 modal 後面的暗色遮蓋層\r\n */\r\nfunction closeModalOverlay() {\r\n  const modalOverlay = document.querySelector(\".modal-overlay\");\r\n  modalOverlay.classList.remove(\"modal-overlay--active\");\r\n}\r\n\r\n\n\n//# sourceURL=webpack://simple-timer/./src/appearance.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n/* harmony import */ var _appearance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appearance.js */ \"./src/appearance.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', ()=> {\r\n  setTimeout(()=> {\r\n    document.body.classList.remove('no-transition')\r\n  }, 300)\r\n})\n\n//# sourceURL=webpack://simple-timer/./src/index.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"settingTime\": () => (/* binding */ settingTime),\n/* harmony export */   \"showScreenTime\": () => (/* binding */ showScreenTime),\n/* harmony export */   \"storageTotalSecond\": () => (/* binding */ storageTotalSecond),\n/* harmony export */   \"timeIsUp\": () => (/* binding */ timeIsUp),\n/* harmony export */   \"timer\": () => (/* binding */ timer),\n/* harmony export */   \"timerPause\": () => (/* binding */ timerPause),\n/* harmony export */   \"timerStart\": () => (/* binding */ timerStart),\n/* harmony export */   \"timerStop\": () => (/* binding */ timerStop),\n/* harmony export */   \"timesUp\": () => (/* binding */ timesUp),\n/* harmony export */   \"timesUpInterval\": () => (/* binding */ timesUpInterval),\n/* harmony export */   \"totalSecond\": () => (/* binding */ totalSecond)\n/* harmony export */ });\n/* harmony import */ var _appearance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appearance */ \"./src/appearance.js\");\n/* harmony import */ var _audio_beep_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio/beep.wav */ \"./src/audio/beep.wav\");\n\r\n\r\nconst beep = new Audio(_audio_beep_wav__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nconst timeWrapper = document.querySelector(\"#time-wrapper\");\r\nconst storageTotalSecond =\r\n  JSON.parse(localStorage.getItem(\"totalSecond\")) || 0;\r\nlet totalSecond = storageTotalSecond;\r\nlet timer,\r\n  timesUpInterval,\r\n  timeIsUp = false;\r\n\r\n// 畫面載入時，先調用 showTime() 來顯示目前設定的時間\r\nshowScreenTime();\r\n\r\n\r\n\r\n/**\r\n * * 將 totalSecond 的秒數轉換成分與秒，顯示到畫面中\r\n */\r\nfunction showScreenTime() {\r\n  let minute = Math.floor(totalSecond / 60);\r\n  let second = totalSecond % 60;\r\n  minute < 0 ? (minute = 0) : minute;\r\n  second < 0 ? (second = 0) : second;\r\n  minute = minute < 10 ? \"0\" + minute : minute;\r\n  second = second < 10 ? \"0\" + second : second;\r\n  timeWrapper.innerHTML = `${minute} : ${second}`;\r\n}\r\n\r\n/**\r\n * * 取得使用者設定的時間，並更新 totalSecond\r\n */\r\nfunction settingTime() {\r\n  // 取得使用者在 #setting-modal 中設定的 DOM，並計算出總秒數\r\n  const settingMin = document.querySelector(\"#setting-minute\");\r\n  const settingSec = document.querySelector(\"#setting-second\");\r\n  totalSecond = Number(settingMin.value) * 60 + Number(settingSec.value);\r\n}\r\n\r\n/**\r\n * * 計時開始\r\n */\r\nfunction timerStart() {\r\n  const countdown = () => {\r\n    totalSecond--;\r\n    showScreenTime();\r\n    // 如果 totalSecond <= 0 代表時間到\r\n    if (totalSecond <= 0) {\r\n      // 清除計時器\r\n      clearInterval(timer);\r\n      // 調用時間到的函數\r\n      timesUp();\r\n    }\r\n  };\r\n  timer = setInterval(countdown, 1000);\r\n}\r\n\r\n/**\r\n * * 時間停止\r\n */\r\nfunction timerStop() {\r\n  clearInterval(timer);\r\n  totalSecond = storageTotalSecond;\r\n  if (timeIsUp) {\r\n    clearInterval(timesUpInterval);\r\n    timeIsUp = false;\r\n  }\r\n}\r\n\r\n/**\r\n * * 時間暫停\r\n */\r\nfunction timerPause() {\r\n  clearInterval(timer);\r\n}\r\n\r\n/**\r\n * * 時間到\r\n */\r\nfunction timesUp() {\r\n  timeIsUp = true;\r\n  timesUpInterval = setInterval(() => beep.play(), 1000);\r\n  _appearance__WEBPACK_IMPORTED_MODULE_0__.btnStop.classList.add(\"btn--animation\");\r\n  // 時間到之後，就不再准許使用者按下暫停\r\n  _appearance__WEBPACK_IMPORTED_MODULE_0__.btnPause.setAttribute(\"disabled\", \"\");\r\n}\r\n\n\n//# sourceURL=webpack://simple-timer/./src/timer.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;