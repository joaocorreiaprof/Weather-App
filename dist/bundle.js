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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  overflow-x: hidden;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n}\n\n/*Content*/\n.content {\n  display: flex;\n  flex-wrap: wrap; /* Allow wrapping for smaller screens */\n  height: 100%;\n  background: linear-gradient(to top, #a19797 0%, #274046 100%);\n  color: white;\n}\n\n/*Left Content*/\n.left-content {\n  display: grid;\n  gap: 4px;\n  grid-template-rows: repeat(3, 1fr);\n  grid-template-columns: repeat(3, 1fr);\n  flex-grow: 1;\n  padding: 7px;\n  box-sizing: border-box; /* Ensure padding is included in width */\n}\n\n.title-input {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n}\n\nh1 {\n  color: white;\n}\n\n.input-form {\n  margin-top: 50px;\n}\n\n#search {\n  padding: 3px;\n  border-radius: 10px;\n}\n\n#searchButton {\n  padding: 3px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.current-day {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.second-day {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.third-day {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.daily-info {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.weather-info {\n  grid-column: 3 / 4;\n  grid-row: 1 / 4;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.current-city-country,\n.second-date,\n.third-date {\n  font-size: 20px;\n  margin-bottom: 10px;\n  border-bottom: 2px solid #00a0c6;\n}\n\n.current-condition,\n.second-condition,\n.third-condition {\n  font-weight: bold;\n  font-size: 21px;\n}\n\n.currentTemperature,\n.currentHumidity,\n.second-temperature,\n.third-temperature {\n  margin-bottom: 7px;\n}\n\n#timeWidget {\n  font-size: 2em;\n  padding: 20px;\n  border: 2px solid #00a0c6;\n  border-radius: 10px;\n  background-color: #477480;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  color: white;\n}\n\nh3 {\n  color: white;\n}\n\n.hourly-style,\n.current-day,\n.second-day,\n.third-day {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n@media (max-width: 1200px) {\n  .left-content {\n    width: 75%;\n  }\n}\n\n@media (max-width: 992px) {\n  .left-content {\n    width: 70%;\n  }\n}\n\n@media (max-width: 768px) {\n  .left-content {\n    width: 100%;\n    height: auto;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(6, 1fr);\n  }\n\n  .title-input,\n  .current-day,\n  .second-day,\n  .third-day,\n  .weather-info,\n  .daily-info {\n    grid-column: auto / span 2;\n    grid-row: auto / span 1;\n  }\n\n  .title-input {\n    grid-column: 1 / 3;\n  }\n  .weather-info {\n    grid-column: 1 / 3;\n    grid-row: 3 / 6;\n  }\n  .daily-info {\n    grid-column: 1 / 3;\n    grid-row: 1 / 3;\n  }\n}\n\n.hourly-style {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 3px solid white;\n  padding: 10px;\n  color: white;\n  border-radius: 10px;\n}\n\n/*Right Content*/\n.right-content {\n  display: flex;\n  flex-direction: column;\n  width: 15%;\n  padding: 7px;\n  border-left: 2px solid #00a0c6;\n  box-sizing: border-box;\n  overflow-y: auto;\n}\n\n@media (max-width: 1200px) {\n  .right-content {\n    width: 25%;\n  }\n}\n\n@media (max-width: 992px) {\n  .right-content {\n    width: 30%;\n  }\n}\n\n@media (max-width: 768px) {\n  .right-content {\n    width: 100%;\n    border-left: none;\n    border-top: 1px solid #00a0c6;\n  }\n}\n\n.news-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n\n.occurence {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\n.style-news-image {\n  width: 100%;\n  height: 130px;\n}\n\na {\n  color: #00a0c6;\n  text-decoration: none;\n  border-bottom: 1px solid #00a0c6;\n  font-weight: bold;\n}\n\na:hover {\n  color: #025c72;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.read {\n  display: flex;\n  justify-content: end;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_fetchWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fetchWeather */ \"./src/modules/fetchWeather.js\");\n/* harmony import */ var _modules_newsImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/newsImages */ \"./src/modules/newsImages.js\");\n/* harmony import */ var _modules_clockWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/clockWidget */ \"./src/modules/clockWidget.js\");\n\n\n\n\n\n(0,_modules_newsImages__WEBPACK_IMPORTED_MODULE_2__.displayImages)();\n(0,_modules_fetchWeather__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)();\nsetInterval(_modules_clockWidget__WEBPACK_IMPORTED_MODULE_3__.updateTime, 1000);\n(0,_modules_clockWidget__WEBPACK_IMPORTED_MODULE_3__.updateTime)();\n\nconst searchButton = document.getElementById(\"searchButton\");\nsearchButton.addEventListener(\"click\", () => {\n  const userInput = document.getElementById(\"search\").value;\n  (0,_modules_fetchWeather__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(userInput);\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/clockWidget.js":
/*!************************************!*\
  !*** ./src/modules/clockWidget.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateTime: () => (/* binding */ updateTime)\n/* harmony export */ });\nfunction updateTime() {\n  const timeWidget = document.getElementById(\"timeWidget\");\n  const currentHourTemperature = document.querySelector(\n    \".current-hour-temperature\"\n  );\n\n  const now = new Date();\n  const hours = String(now.getHours()).padStart(2, \"0\");\n  const minutes = String(now.getMinutes()).padStart(2, \"0\");\n  const seconds = String(now.getSeconds()).padStart(2, \"0\");\n  timeWidget.textContent = `${hours}:${minutes}:${seconds}`;\n\n  currentHourTemperature;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/clockWidget.js?");

/***/ }),

/***/ "./src/modules/currentDay.js":
/*!***********************************!*\
  !*** ./src/modules/currentDay.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentDay: () => (/* binding */ currentDay)\n/* harmony export */ });\nfunction currentDay(data) {\n  const currentCityCountry = document.querySelector(\".current-city-country\");\n  const currentCondition = document.querySelector(\".current-condition\");\n  const currentTemperature = document.querySelector(\".currentTemperature\");\n  const currentIcon = document.querySelector(\".ApiIcon\");\n  const currentHumidity = document.querySelector(\".currentHumidity\");\n  const currentWindKph = document.querySelector(\".currentWindKph\");\n\n  currentCityCountry.innerHTML =\n    data.location.region + \", \" + data.location.country;\n\n  currentCondition.innerHTML = data.current.condition.text;\n\n  const iconUrl = data.current.condition.icon;\n  currentIcon.src = `https:${iconUrl}`;\n\n  currentTemperature.innerHTML = data.current.temp_c + \" °C\";\n\n  currentHumidity.innerHTML = \"Humidity: \" + data.current.humidity + \"%\";\n\n  currentWindKph.innerHTML = \"Wind Speed: \" + data.current.wind_kph + \" kph\";\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/currentDay.js?");

/***/ }),

/***/ "./src/modules/fetchWeather.js":
/*!*************************************!*\
  !*** ./src/modules/fetchWeather.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather)\n/* harmony export */ });\n/* harmony import */ var _currentDay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentDay */ \"./src/modules/currentDay.js\");\n/* harmony import */ var _secondDay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secondDay */ \"./src/modules/secondDay.js\");\n/* harmony import */ var _thirdDay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thirdDay */ \"./src/modules/thirdDay.js\");\n/* harmony import */ var _weatherInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherInfo */ \"./src/modules/weatherInfo.js\");\n\n\n\n\n\nasync function fetchWeather(searchTerm = \"aveiro\") {\n  let link = `https://api.weatherapi.com/v1/forecast.json?key=6faa5075dd9445cfb4c215331240207&q=${searchTerm}&days=3`;\n\n  try {\n    let response = await fetch(link, { mode: \"cors\" });\n    let data = await response.json();\n    console.log(\"Current day weather:\", data);\n\n    (0,_currentDay__WEBPACK_IMPORTED_MODULE_0__.currentDay)(data);\n    (0,_weatherInfo__WEBPACK_IMPORTED_MODULE_3__.weatherPerHour)(data);\n\n    // Log information about the next day\n    if (\n      data.forecast &&\n      data.forecast.forecastday &&\n      data.forecast.forecastday.length > 1\n    ) {\n      let nextDayInfo = data.forecast.forecastday[1];\n      console.log(\"Next day's weather:\", nextDayInfo);\n      (0,_secondDay__WEBPACK_IMPORTED_MODULE_1__.secondDay)(nextDayInfo);\n    } else {\n      console.log(\"No forecast data available for the next day.\");\n    }\n\n    // Log information about the third day\n    if (\n      data.forecast &&\n      data.forecast.forecastday &&\n      data.forecast.forecastday.length > 2\n    ) {\n      let thirdDayInfo = data.forecast.forecastday[2];\n      console.log(\"Third day's weather:\", thirdDayInfo);\n      (0,_thirdDay__WEBPACK_IMPORTED_MODULE_2__.thirdDay)(thirdDayInfo);\n    } else {\n      console.log(\"No forecast data available for the third day.\");\n    }\n  } catch (error) {\n    console.error(\"Error fetching the weather:\", error);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/fetchWeather.js?");

/***/ }),

/***/ "./src/modules/newsImages.js":
/*!***********************************!*\
  !*** ./src/modules/newsImages.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayImages: () => (/* binding */ displayImages)\n/* harmony export */ });\n/* harmony import */ var _images_news1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/news1.jpg */ \"./src/images/news1.jpg\");\n/* harmony import */ var _images_news2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/news2.jpg */ \"./src/images/news2.jpg\");\n/* harmony import */ var _images_news3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/news3.jpg */ \"./src/images/news3.jpg\");\n\n\n\n\nfunction displayImages() {\n  const containerOne = document.getElementById(\"news1\");\n  const myImage1 = new Image();\n  myImage1.src = _images_news1_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  myImage1.classList.add(\"style-news-image\");\n  containerOne.appendChild(myImage1);\n\n  const containerTwo = document.getElementById(\"news2\");\n  const myImage2 = new Image();\n  myImage2.src = _images_news2_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  myImage2.classList.add(\"style-news-image\");\n  containerTwo.appendChild(myImage2);\n\n  const containerThree = document.getElementById(\"news3\");\n  const myImage3 = new Image();\n  myImage3.src = _images_news3_jpg__WEBPACK_IMPORTED_MODULE_2__;\n  myImage3.classList.add(\"style-news-image\");\n  containerThree.appendChild(myImage3);\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/newsImages.js?");

/***/ }),

/***/ "./src/modules/secondDay.js":
/*!**********************************!*\
  !*** ./src/modules/secondDay.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   secondDay: () => (/* binding */ secondDay)\n/* harmony export */ });\nfunction secondDay(nextDayInfo) {\n  const secondDate = document.querySelector(\".second-date\");\n  const secondCondition = document.querySelector(\".second-condition\");\n  const secondIcon = document.querySelector(\".secondApiIcon\");\n  const secondTemperature = document.querySelector(\".second-temperature\");\n  const secondChanceRain = document.querySelector(\".second-chance-rain\");\n\n  secondDate.innerHTML = nextDayInfo.date;\n\n  secondCondition.innerHTML = nextDayInfo.day.condition.text;\n\n  const secondIconUrl = nextDayInfo.day.condition.icon;\n  secondIcon.src = `https:${secondIconUrl}`;\n\n  secondTemperature.innerHTML = nextDayInfo.day.avgtemp_c + \" °C\";\n\n  secondChanceRain.innerHTML =\n    \"Chance of rain: \" + nextDayInfo.day.daily_chance_of_rain + \"%\";\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/secondDay.js?");

/***/ }),

/***/ "./src/modules/thirdDay.js":
/*!*********************************!*\
  !*** ./src/modules/thirdDay.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   thirdDay: () => (/* binding */ thirdDay)\n/* harmony export */ });\nfunction thirdDay(thirdDayInfo) {\n  const thirdDate = document.querySelector(\".third-date\");\n  const thirdCondition = document.querySelector(\".third-condition\");\n  const thirdIcon = document.querySelector(\".thirdApiIcon\");\n  const thirdTemperature = document.querySelector(\".third-temperature\");\n  const thirdChanceRain = document.querySelector(\".third-chance-rain\");\n\n  thirdDate.innerHTML = thirdDayInfo.date;\n\n  thirdCondition.innerHTML = thirdDayInfo.day.condition.text;\n\n  const thirdIconUrl = thirdDayInfo.day.condition.icon;\n  thirdIcon.src = `https:${thirdIconUrl}`;\n\n  thirdTemperature.innerHTML = thirdDayInfo.day.avgtemp_c + \" °C\";\n\n  thirdChanceRain.innerHTML =\n    \"Chance of rain: \" + thirdDayInfo.day.daily_chance_of_rain + \"%\";\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/thirdDay.js?");

/***/ }),

/***/ "./src/modules/weatherInfo.js":
/*!************************************!*\
  !*** ./src/modules/weatherInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   weatherPerHour: () => (/* binding */ weatherPerHour)\n/* harmony export */ });\nfunction weatherPerHour(data) {\n  const hourOneImage = document.querySelector(\".weather-one\");\n  const temperatureOne = document.querySelector(\".temperature-one\");\n\n  const hourTwoImage = document.querySelector(\".weather-two\");\n  const temperatureTwo = document.querySelector(\".temperature-two\");\n\n  const hourThreeImage = document.querySelector(\".weather-three\");\n  const temperatureThree = document.querySelector(\".temperature-three\");\n\n  const hourFourImage = document.querySelector(\".weather-four\");\n  const temperatureFour = document.querySelector(\".temperature-four\");\n\n  const hourFiveImage = document.querySelector(\".weather-five\");\n  const temperatureFive = document.querySelector(\".temperature-five\");\n\n  const oneUrl = data.forecast.forecastday[0].hour[7].condition.icon;\n  hourOneImage.src = `https:${oneUrl}`;\n  temperatureOne.innerHTML =\n    data.forecast.forecastday[0].hour[7].temp_c + \" °C\";\n\n  const twoUrl = data.forecast.forecastday[0].hour[10].condition.icon;\n  hourTwoImage.src = `https:${twoUrl}`;\n  temperatureTwo.innerHTML =\n    data.forecast.forecastday[0].hour[10].temp_c + \" °C\";\n\n  const threeUrl = data.forecast.forecastday[0].hour[12].condition.icon;\n  hourThreeImage.src = `https:${threeUrl}`;\n  temperatureThree.innerHTML =\n    data.forecast.forecastday[0].hour[12].temp_c + \" °C\";\n\n  const fourUrl = data.forecast.forecastday[0].hour[16].condition.icon;\n  hourFourImage.src = `https:${fourUrl}`;\n  temperatureFour.innerHTML =\n    data.forecast.forecastday[0].hour[16].temp_c + \" °C\";\n\n  const fiveUrl = data.forecast.forecastday[0].hour[21].condition.icon;\n  hourFiveImage.src = `https:${fiveUrl}`;\n  temperatureFive.innerHTML =\n    data.forecast.forecastday[0].hour[21].temp_c + \" °C\";\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weatherInfo.js?");

/***/ }),

/***/ "./src/images/news1.jpg":
/*!******************************!*\
  !*** ./src/images/news1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"de460c872ff4d7bcb776.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/images/news1.jpg?");

/***/ }),

/***/ "./src/images/news2.jpg":
/*!******************************!*\
  !*** ./src/images/news2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6b0cefcc814fef01232.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/images/news2.jpg?");

/***/ }),

/***/ "./src/images/news3.jpg":
/*!******************************!*\
  !*** ./src/images/news3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b0489472355b0c38c6c.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/images/news3.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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