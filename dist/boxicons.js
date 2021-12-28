(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BoxIconElement"] = factory();
	else
		root["BoxIconElement"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 788:
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 327:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(327);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(788);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@-webkit-keyframes SkemIs4IV6TK3glQkVsD\n{\n    0%\n    {\n        -webkit-transform: rotate(0);\n                transform: rotate(0);\n    }\n    100%\n    {\n        -webkit-transform: rotate(359deg);\n                transform: rotate(359deg);\n    }\n}\n@keyframes SkemIs4IV6TK3glQkVsD\n{\n    0%\n    {\n        -webkit-transform: rotate(0);\n                transform: rotate(0);\n    }\n    100%\n    {\n        -webkit-transform: rotate(359deg);\n                transform: rotate(359deg);\n    }\n}\n@-webkit-keyframes TJZvWpPp3ToSynyckP8E\n{\n    0%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n\n        opacity: 1;\n    }\n    90%\n    {\n        -webkit-transform: scale(1.5);\n                transform: scale(1.5);\n\n        opacity: 0;\n    }\n}\n@keyframes TJZvWpPp3ToSynyckP8E\n{\n    0%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n\n        opacity: 1;\n    }\n    90%\n    {\n        -webkit-transform: scale(1.5);\n                transform: scale(1.5);\n\n        opacity: 0;\n    }\n}\n@-webkit-keyframes z5nq8JJd1oBwA7uod8gS\n{\n    0%\n    {\n        opacity: 1;\n    }\n    45%\n    {\n        opacity: 0;\n    }\n    90%\n    {\n        opacity: 1;\n    }\n}\n@keyframes z5nq8JJd1oBwA7uod8gS\n{\n    0%\n    {\n        opacity: 1;\n    }\n    45%\n    {\n        opacity: 0;\n    }\n    90%\n    {\n        opacity: 1;\n    }\n}\n@-webkit-keyframes rSvDyz6bONXX_1bAPgvu\n{\n    0%\n    {\n        -webkit-transform: translateX(0);\n                transform: translateX(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateX(-20px);\n                transform: translateX(-20px);\n\n        opacity: 0;\n    }\n}\n@keyframes rSvDyz6bONXX_1bAPgvu\n{\n    0%\n    {\n        -webkit-transform: translateX(0);\n                transform: translateX(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateX(-20px);\n                transform: translateX(-20px);\n\n        opacity: 0;\n    }\n}\n@-webkit-keyframes jAbjOH6CJbX0erFZgINk\n{\n    0%\n    {\n        -webkit-transform: translateX(0);\n                transform: translateX(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateX(20px);\n                transform: translateX(20px);\n\n        opacity: 0;\n    }\n}\n@keyframes jAbjOH6CJbX0erFZgINk\n{\n    0%\n    {\n        -webkit-transform: translateX(0);\n                transform: translateX(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateX(20px);\n                transform: translateX(20px);\n\n        opacity: 0;\n    }\n}\n@-webkit-keyframes QpmFe5v2wHZqcMv2AQBP\n{\n    0%\n    {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateY(-20px);\n                transform: translateY(-20px);\n\n        opacity: 0;\n    }\n}\n@keyframes QpmFe5v2wHZqcMv2AQBP\n{\n    0%\n    {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateY(-20px);\n                transform: translateY(-20px);\n\n        opacity: 0;\n    }\n}\n@-webkit-keyframes n5PTxOS1G5qPbszNZXSW\n{\n    0%\n    {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateY(20px);\n                transform: translateY(20px);\n\n        opacity: 0;\n    }\n}\n@keyframes n5PTxOS1G5qPbszNZXSW\n{\n    0%\n    {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateY(20px);\n                transform: translateY(20px);\n\n        opacity: 0;\n    }\n}\n@-webkit-keyframes QAfXOybhKCFNgvup3V3x\n{\n    from\n    {\n        -webkit-transform: scale3d(1, 1, 1);\n                transform: scale3d(1, 1, 1);\n    }\n\n    10%,\n    20%\n    {\n        -webkit-transform: scale3d(.95, .95, .95) rotate3d(0, 0, 1, -10deg);\n                transform: scale3d(.95, .95, .95) rotate3d(0, 0, 1, -10deg);\n    }\n\n    30%,\n    50%,\n    70%,\n    90%\n    {\n        -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg);\n                transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg);\n    }\n\n    40%,\n    60%,\n    80%\n    {\n        -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, -10deg);\n                transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, -10deg);\n    }\n\n    to\n    {\n        -webkit-transform: scale3d(1, 1, 1);\n                transform: scale3d(1, 1, 1);\n    }\n}\n\n@keyframes QAfXOybhKCFNgvup3V3x\n{\n    from\n    {\n        -webkit-transform: scale3d(1, 1, 1);\n                transform: scale3d(1, 1, 1);\n    }\n\n    10%,\n    20%\n    {\n        -webkit-transform: scale3d(.95, .95, .95) rotate3d(0, 0, 1, -10deg);\n                transform: scale3d(.95, .95, .95) rotate3d(0, 0, 1, -10deg);\n    }\n\n    30%,\n    50%,\n    70%,\n    90%\n    {\n        -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg);\n                transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg);\n    }\n\n    40%,\n    60%,\n    80%\n    {\n        -webkit-transform: rotate3d(0, 0, 1, -10deg);\n                transform: rotate3d(0, 0, 1, -10deg);\n    }\n\n    to\n    {\n        -webkit-transform: scale3d(1, 1, 1);\n                transform: scale3d(1, 1, 1);\n    }\n}\n.sXqpEA3Vy8LHPzAwBsVU\n{\n    -webkit-animation: SkemIs4IV6TK3glQkVsD 2s linear infinite;\n            animation: SkemIs4IV6TK3glQkVsD 2s linear infinite;\n}\n.g9dNE4NBsYYilb3ZDZBh:hover\n{\n    -webkit-animation: SkemIs4IV6TK3glQkVsD 2s linear infinite;\n            animation: SkemIs4IV6TK3glQkVsD 2s linear infinite;\n}\n\n.GQtbdupCB6cLvR_qRiRz\n{\n    -webkit-animation: QAfXOybhKCFNgvup3V3x 1.5s ease infinite;\n            animation: QAfXOybhKCFNgvup3V3x 1.5s ease infinite;\n}\n.t2GceONG3_fRa3A4kei0:hover\n{\n    -webkit-animation: QAfXOybhKCFNgvup3V3x 1.5s ease infinite;\n            animation: QAfXOybhKCFNgvup3V3x 1.5s ease infinite;\n}\n\n.Xypd1mn6okgT0cqpjTef\n{\n    -webkit-animation: z5nq8JJd1oBwA7uod8gS 1.5s infinite linear;\n            animation: z5nq8JJd1oBwA7uod8gS 1.5s infinite linear;\n}\n.js3SvO5ySzk5s8Tb4MOL:hover\n{\n    -webkit-animation: z5nq8JJd1oBwA7uod8gS 1.5s infinite linear;\n            animation: z5nq8JJd1oBwA7uod8gS 1.5s infinite linear;\n}\n\n.xwhAnyvPWQO7AGGJfFtH\n{\n    -webkit-animation: TJZvWpPp3ToSynyckP8E 1.5s infinite linear;\n            animation: TJZvWpPp3ToSynyckP8E 1.5s infinite linear;\n}\n.GHvELwtEvKXLGJtdyLfs:hover\n{\n    -webkit-animation: TJZvWpPp3ToSynyckP8E 1.5s infinite linear;\n            animation: TJZvWpPp3ToSynyckP8E 1.5s infinite linear;\n}\n.M3OEnCxnTccMWxJcTo_z\n{\n    -webkit-animation: QpmFe5v2wHZqcMv2AQBP 1.5s infinite linear;\n            animation: QpmFe5v2wHZqcMv2AQBP 1.5s infinite linear;\n}\n.tiFkulZ0wikeJ50ZgOQd:hover\n{\n    -webkit-animation: QpmFe5v2wHZqcMv2AQBP 1.5s infinite linear;\n            animation: QpmFe5v2wHZqcMv2AQBP 1.5s infinite linear;\n}\n.vMPzc8f8sKAEdTCnOdjT\n{\n    -webkit-animation: n5PTxOS1G5qPbszNZXSW 1.5s infinite linear;\n            animation: n5PTxOS1G5qPbszNZXSW 1.5s infinite linear;\n}\n.kt74LclAttQBYmEENcpD:hover\n{\n    -webkit-animation: n5PTxOS1G5qPbszNZXSW 1.5s infinite linear;\n            animation: n5PTxOS1G5qPbszNZXSW 1.5s infinite linear;\n}\n.CFqzhpiN1EBfaYl8wggN\n{\n    -webkit-animation: rSvDyz6bONXX_1bAPgvu 1.5s infinite linear;\n            animation: rSvDyz6bONXX_1bAPgvu 1.5s infinite linear;\n}\n.VdH20gu3KCrBRILHtDvr:hover\n{\n    -webkit-animation: rSvDyz6bONXX_1bAPgvu 1.5s infinite linear;\n            animation: rSvDyz6bONXX_1bAPgvu 1.5s infinite linear;\n}\n.UyKRhrex33GF6BddNn9d\n{\n    -webkit-animation: jAbjOH6CJbX0erFZgINk 1.5s infinite linear;\n            animation: jAbjOH6CJbX0erFZgINk 1.5s infinite linear;\n}\n.AOYpcRQGZz_tFK_HLbLH:hover\n{\n    -webkit-animation: jAbjOH6CJbX0erFZgINk 1.5s infinite linear;\n            animation: jAbjOH6CJbX0erFZgINk 1.5s infinite linear;\n}", "",{"version":3,"sources":["webpack://./css/animations.css"],"names":[],"mappings":"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","sourcesContent":["@-webkit-keyframes spin\n{\n    0%\n    {\n        -webkit-transform: rotate(0);\n                transform: rotate(0);\n    }\n    100%\n    {\n        -webkit-transform: rotate(359deg);\n                transform: rotate(359deg);\n    }\n}\n@keyframes spin\n{\n    0%\n    {\n        -webkit-transform: rotate(0);\n                transform: rotate(0);\n    }\n    100%\n    {\n        -webkit-transform: rotate(359deg);\n                transform: rotate(359deg);\n    }\n}\n@-webkit-keyframes burst\n{\n    0%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n\n        opacity: 1;\n    }\n    90%\n    {\n        -webkit-transform: scale(1.5);\n                transform: scale(1.5);\n\n        opacity: 0;\n    }\n}\n@keyframes burst\n{\n    0%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n\n        opacity: 1;\n    }\n    90%\n    {\n        -webkit-transform: scale(1.5);\n                transform: scale(1.5);\n\n        opacity: 0;\n    }\n}\n@-webkit-keyframes flashing\n{\n    0%\n    {\n        opacity: 1;\n    }\n    45%\n    {\n        opacity: 0;\n    }\n    90%\n    {\n        opacity: 1;\n    }\n}\n@keyframes flashing\n{\n    0%\n    {\n        opacity: 1;\n    }\n    45%\n    {\n        opacity: 0;\n    }\n    90%\n    {\n        opacity: 1;\n    }\n}\n@-webkit-keyframes fade-left\n{\n    0%\n    {\n        -webkit-transform: translateX(0);\n                transform: translateX(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateX(-20px);\n                transform: translateX(-20px);\n\n        opacity: 0;\n    }\n}\n@keyframes fade-left\n{\n    0%\n    {\n        -webkit-transform: translateX(0);\n                transform: translateX(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateX(-20px);\n                transform: translateX(-20px);\n\n        opacity: 0;\n    }\n}\n@-webkit-keyframes fade-right\n{\n    0%\n    {\n        -webkit-transform: translateX(0);\n                transform: translateX(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateX(20px);\n                transform: translateX(20px);\n\n        opacity: 0;\n    }\n}\n@keyframes fade-right\n{\n    0%\n    {\n        -webkit-transform: translateX(0);\n                transform: translateX(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateX(20px);\n                transform: translateX(20px);\n\n        opacity: 0;\n    }\n}\n@-webkit-keyframes fade-up\n{\n    0%\n    {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateY(-20px);\n                transform: translateY(-20px);\n\n        opacity: 0;\n    }\n}\n@keyframes fade-up\n{\n    0%\n    {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateY(-20px);\n                transform: translateY(-20px);\n\n        opacity: 0;\n    }\n}\n@-webkit-keyframes fade-down\n{\n    0%\n    {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateY(20px);\n                transform: translateY(20px);\n\n        opacity: 0;\n    }\n}\n@keyframes fade-down\n{\n    0%\n    {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n\n        opacity: 1;\n    }\n    75%\n    {\n        -webkit-transform: translateY(20px);\n                transform: translateY(20px);\n\n        opacity: 0;\n    }\n}\n@-webkit-keyframes tada\n{\n    from\n    {\n        -webkit-transform: scale3d(1, 1, 1);\n                transform: scale3d(1, 1, 1);\n    }\n\n    10%,\n    20%\n    {\n        -webkit-transform: scale3d(.95, .95, .95) rotate3d(0, 0, 1, -10deg);\n                transform: scale3d(.95, .95, .95) rotate3d(0, 0, 1, -10deg);\n    }\n\n    30%,\n    50%,\n    70%,\n    90%\n    {\n        -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg);\n                transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg);\n    }\n\n    40%,\n    60%,\n    80%\n    {\n        -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, -10deg);\n                transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, -10deg);\n    }\n\n    to\n    {\n        -webkit-transform: scale3d(1, 1, 1);\n                transform: scale3d(1, 1, 1);\n    }\n}\n\n@keyframes tada\n{\n    from\n    {\n        -webkit-transform: scale3d(1, 1, 1);\n                transform: scale3d(1, 1, 1);\n    }\n\n    10%,\n    20%\n    {\n        -webkit-transform: scale3d(.95, .95, .95) rotate3d(0, 0, 1, -10deg);\n                transform: scale3d(.95, .95, .95) rotate3d(0, 0, 1, -10deg);\n    }\n\n    30%,\n    50%,\n    70%,\n    90%\n    {\n        -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg);\n                transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg);\n    }\n\n    40%,\n    60%,\n    80%\n    {\n        -webkit-transform: rotate3d(0, 0, 1, -10deg);\n                transform: rotate3d(0, 0, 1, -10deg);\n    }\n\n    to\n    {\n        -webkit-transform: scale3d(1, 1, 1);\n                transform: scale3d(1, 1, 1);\n    }\n}\n.bx-spin\n{\n    -webkit-animation: spin 2s linear infinite;\n            animation: spin 2s linear infinite;\n}\n.bx-spin-hover:hover\n{\n    -webkit-animation: spin 2s linear infinite;\n            animation: spin 2s linear infinite;\n}\n\n.bx-tada\n{\n    -webkit-animation: tada 1.5s ease infinite;\n            animation: tada 1.5s ease infinite;\n}\n.bx-tada-hover:hover\n{\n    -webkit-animation: tada 1.5s ease infinite;\n            animation: tada 1.5s ease infinite;\n}\n\n.bx-flashing\n{\n    -webkit-animation: flashing 1.5s infinite linear;\n            animation: flashing 1.5s infinite linear;\n}\n.bx-flashing-hover:hover\n{\n    -webkit-animation: flashing 1.5s infinite linear;\n            animation: flashing 1.5s infinite linear;\n}\n\n.bx-burst\n{\n    -webkit-animation: burst 1.5s infinite linear;\n            animation: burst 1.5s infinite linear;\n}\n.bx-burst-hover:hover\n{\n    -webkit-animation: burst 1.5s infinite linear;\n            animation: burst 1.5s infinite linear;\n}\n.bx-fade-up\n{\n    -webkit-animation: fade-up 1.5s infinite linear;\n            animation: fade-up 1.5s infinite linear;\n}\n.bx-fade-up-hover:hover\n{\n    -webkit-animation: fade-up 1.5s infinite linear;\n            animation: fade-up 1.5s infinite linear;\n}\n.bx-fade-down\n{\n    -webkit-animation: fade-down 1.5s infinite linear;\n            animation: fade-down 1.5s infinite linear;\n}\n.bx-fade-down-hover:hover\n{\n    -webkit-animation: fade-down 1.5s infinite linear;\n            animation: fade-down 1.5s infinite linear;\n}\n.bx-fade-left\n{\n    -webkit-animation: fade-left 1.5s infinite linear;\n            animation: fade-left 1.5s infinite linear;\n}\n.bx-fade-left-hover:hover\n{\n    -webkit-animation: fade-left 1.5s infinite linear;\n            animation: fade-left 1.5s infinite linear;\n}\n.bx-fade-right\n{\n    -webkit-animation: fade-right 1.5s infinite linear;\n            animation: fade-right 1.5s infinite linear;\n}\n.bx-fade-right-hover:hover\n{\n    -webkit-animation: fade-right 1.5s infinite linear;\n            animation: fade-right 1.5s infinite linear;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"bx-spin": "sXqpEA3Vy8LHPzAwBsVU",
	"bxSpin": "sXqpEA3Vy8LHPzAwBsVU",
	"spin": "SkemIs4IV6TK3glQkVsD",
	"bx-spin-hover": "g9dNE4NBsYYilb3ZDZBh",
	"bxSpinHover": "g9dNE4NBsYYilb3ZDZBh",
	"bx-tada": "GQtbdupCB6cLvR_qRiRz",
	"bxTada": "GQtbdupCB6cLvR_qRiRz",
	"tada": "QAfXOybhKCFNgvup3V3x",
	"bx-tada-hover": "t2GceONG3_fRa3A4kei0",
	"bxTadaHover": "t2GceONG3_fRa3A4kei0",
	"bx-flashing": "Xypd1mn6okgT0cqpjTef",
	"bxFlashing": "Xypd1mn6okgT0cqpjTef",
	"flashing": "z5nq8JJd1oBwA7uod8gS",
	"bx-flashing-hover": "js3SvO5ySzk5s8Tb4MOL",
	"bxFlashingHover": "js3SvO5ySzk5s8Tb4MOL",
	"bx-burst": "xwhAnyvPWQO7AGGJfFtH",
	"bxBurst": "xwhAnyvPWQO7AGGJfFtH",
	"burst": "TJZvWpPp3ToSynyckP8E",
	"bx-burst-hover": "GHvELwtEvKXLGJtdyLfs",
	"bxBurstHover": "GHvELwtEvKXLGJtdyLfs",
	"bx-fade-up": "M3OEnCxnTccMWxJcTo_z",
	"bxFadeUp": "M3OEnCxnTccMWxJcTo_z",
	"fade-up": "QpmFe5v2wHZqcMv2AQBP",
	"fadeUp": "QpmFe5v2wHZqcMv2AQBP",
	"bx-fade-up-hover": "tiFkulZ0wikeJ50ZgOQd",
	"bxFadeUpHover": "tiFkulZ0wikeJ50ZgOQd",
	"bx-fade-down": "vMPzc8f8sKAEdTCnOdjT",
	"bxFadeDown": "vMPzc8f8sKAEdTCnOdjT",
	"fade-down": "n5PTxOS1G5qPbszNZXSW",
	"fadeDown": "n5PTxOS1G5qPbszNZXSW",
	"bx-fade-down-hover": "kt74LclAttQBYmEENcpD",
	"bxFadeDownHover": "kt74LclAttQBYmEENcpD",
	"bx-fade-left": "CFqzhpiN1EBfaYl8wggN",
	"bxFadeLeft": "CFqzhpiN1EBfaYl8wggN",
	"fade-left": "rSvDyz6bONXX_1bAPgvu",
	"fadeLeft": "rSvDyz6bONXX_1bAPgvu",
	"bx-fade-left-hover": "VdH20gu3KCrBRILHtDvr",
	"bxFadeLeftHover": "VdH20gu3KCrBRILHtDvr",
	"bx-fade-right": "UyKRhrex33GF6BddNn9d",
	"bxFadeRight": "UyKRhrex33GF6BddNn9d",
	"fade-right": "jAbjOH6CJbX0erFZgINk",
	"fadeRight": "jAbjOH6CJbX0erFZgINk",
	"bx-fade-right-hover": "AOYpcRQGZz_tFK_HLbLH",
	"bxFadeRightHover": "AOYpcRQGZz_tFK_HLbLH"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(327);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(788);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._CgfhVVsL7wQMy2_w0KA\n{\n    transform: rotate(90deg);\n\n    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)';\n}\n.ZKW68BFPC6CSxBAZO_2S\n{\n    transform: rotate(180deg);\n\n    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2)';\n}\n.b6mQAtaV8cdtqMNNRGbC\n{\n    transform: rotate(270deg);\n\n    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)';\n}\n.CjCmcfu1Vj32w3TdDPVx\n{\n    transform: scaleX(-1);\n\n    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)';\n}\n.jir1UgDob98Hf2uqEZDt\n{\n    transform: scaleY(-1);\n\n    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)';\n}\n", "",{"version":3,"sources":["webpack://./css/transformations.css"],"names":[],"mappings":"AAAA;;IAEI,wBAAwB;;IAExB,sEAAsE;AAC1E;AACA;;IAEI,yBAAyB;;IAEzB,sEAAsE;AAC1E;AACA;;IAEI,yBAAyB;;IAEzB,sEAAsE;AAC1E;AACA;;IAEI,qBAAqB;;IAErB,gFAAgF;AACpF;AACA;;IAEI,qBAAqB;;IAErB,gFAAgF;AACpF","sourcesContent":[".bx-rotate-90\n{\n    transform: rotate(90deg);\n\n    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)';\n}\n.bx-rotate-180\n{\n    transform: rotate(180deg);\n\n    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2)';\n}\n.bx-rotate-270\n{\n    transform: rotate(270deg);\n\n    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)';\n}\n.bx-flip-horizontal\n{\n    transform: scaleX(-1);\n\n    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)';\n}\n.bx-flip-vertical\n{\n    transform: scaleY(-1);\n\n    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)';\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"bx-rotate-90": "_CgfhVVsL7wQMy2_w0KA",
	"bxRotate90": "_CgfhVVsL7wQMy2_w0KA",
	"bx-rotate-180": "ZKW68BFPC6CSxBAZO_2S",
	"bxRotate180": "ZKW68BFPC6CSxBAZO_2S",
	"bx-rotate-270": "b6mQAtaV8cdtqMNNRGbC",
	"bxRotate270": "b6mQAtaV8cdtqMNNRGbC",
	"bx-flip-horizontal": "CjCmcfu1Vj32w3TdDPVx",
	"bxFlipHorizontal": "CjCmcfu1Vj32w3TdDPVx",
	"bx-flip-vertical": "jir1UgDob98Hf2uqEZDt",
	"bxFlipVertical": "jir1UgDob98Hf2uqEZDt"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BoxIconElement": () => (/* reexport */ BoxIconElement),
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: ./css/animations.css
var animations = __webpack_require__(950);
// EXTERNAL MODULE: ./css/transformations.css
var transformations = __webpack_require__(341);
;// CONCATENATED MODULE: ./src/box-icon-element.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _fixBabelExtend = function (O) {
  var gPO = O.getPrototypeOf || function (o) {
    return o.__proto__;
  },
      sPO = O.setPrototypeOf || function (o, p) {
    o.__proto__ = p;
    return o;
  },
      construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
    var Constructor,
        a = [null];
    a.push.apply(a, args);
    Constructor = Parent.bind.apply(Parent, a);
    return sPO(new Constructor(), Class.prototype);
  };

  return function fixBabelExtend(Class) {
    var Parent = gPO(Class);
    return sPO(Class, sPO(function Super() {
      return construct(Parent, arguments, gPO(this).constructor);
    }, Parent));
  };
}(Object);

/* global BUILD */

 //= ======================================================

var GLOBAL = window;
var CACHE = {}; // iconName: Promise()

var CSS_CLASS_PREFIX = 'bx-';
var CSS_CLASS_PREFIX_ROTATE = "".concat(CSS_CLASS_PREFIX, "rotate-");
var CSS_CLASS_PREFIX_FLIP = "".concat(CSS_CLASS_PREFIX, "flip-");
var TEMPLATE = document.createElement('template');

var usingShadyCss = function usingShadyCss() {
  return !!GLOBAL.ShadyCSS;
};

TEMPLATE.innerHTML = "\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=\"\"]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n}\n".concat(animations/* default */.Z, "\n").concat(transformations/* default */.Z, "\n</style>\n<div id=\"icon\"></div>");
/**
 * A Custom Element for displaying icon
 */

var BoxIconElement = _fixBabelExtend( /*#__PURE__*/function (_HTMLElement) {
  _inherits(BoxIconElement, _HTMLElement);

  var _super = _createSuper(BoxIconElement);

  function BoxIconElement() {
    var _this;

    _classCallCheck(this, BoxIconElement);

    _this = _super.call(this);
    _this.$ui = _this.attachShadow({
      mode: 'open'
    });

    _this.$ui.appendChild(_this.ownerDocument.importNode(TEMPLATE.content, true));

    if (usingShadyCss()) {
      GLOBAL.ShadyCSS.styleElement(_assertThisInitialized(_this));
    }

    _this._state = {
      $iconHolder: _this.$ui.getElementById('icon'),
      type: _this.getAttribute('type')
    };
    return _this;
  }

  _createClass(BoxIconElement, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attr, oldVal, newVal) {
      var $iconHolder = this._state.$iconHolder;

      switch (attr) {
        case 'type':
          handleTypeChange(this, oldVal, newVal);
          break;

        case 'name':
          handleNameChange(this, oldVal, newVal);
          break;

        case 'color':
          $iconHolder.style.fill = newVal || '';
          break;

        case 'size':
          handleSizeChange(this, oldVal, newVal);
          break;

        case 'rotate':
          if (oldVal) {
            $iconHolder.classList.remove("".concat(CSS_CLASS_PREFIX_ROTATE).concat(oldVal));
          }

          if (newVal) {
            $iconHolder.classList.add("".concat(CSS_CLASS_PREFIX_ROTATE).concat(newVal));
          }

          break;

        case 'flip':
          if (oldVal) {
            $iconHolder.classList.remove("".concat(CSS_CLASS_PREFIX_FLIP).concat(oldVal));
          }

          if (newVal) {
            $iconHolder.classList.add("".concat(CSS_CLASS_PREFIX_FLIP).concat(newVal));
          }

          break;

        case 'animation':
          if (oldVal) {
            $iconHolder.classList.remove("".concat(CSS_CLASS_PREFIX).concat(oldVal));
          }

          if (newVal) {
            $iconHolder.classList.add("".concat(CSS_CLASS_PREFIX).concat(newVal));
          }

          break;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      if (usingShadyCss()) {
        GLOBAL.ShadyCSS.styleElement(this);
      }
    }
  }], [{
    key: "cdnUrl",
    get: function get() {
      // BUILD.DATA.VERSION is injected by webpack during a build.
      // Value is same as package.json#version property.
      return "https://cdn.jsdelivr.net/npm/boxicons@".concat("2.1.1", "/svg");
    }
    /**
     * The html tag name to be use
     * @type {String}
     */

  }, {
    key: "tagName",
    get: function get() {
      return 'box-icon';
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      return ['type', 'name', 'color', 'size', 'rotate', 'flip', 'animation', 'border', 'pull'];
    }
    /**
     * Returns a promise that should resolve with a string - the svg source.
     *
     * @param {String} iconName
     *  The icon name (file name) to the icon that should be loaded.
     *
     * @return {Promise<String, Error>}
     */

  }, {
    key: "getIconSvg",
    value: function getIconSvg(iconName, type) {
      var iconUrl = "".concat(this.cdnUrl, "/regular/bx-").concat(iconName, ".svg");

      if (type === 'solid') {
        iconUrl = "".concat(this.cdnUrl, "/solid/bxs-").concat(iconName, ".svg");
      } else if (type === 'logo') {
        iconUrl = "".concat(this.cdnUrl, "/logos/bxl-").concat(iconName, ".svg");
      }

      if (iconUrl && CACHE[iconUrl]) {
        return CACHE[iconUrl];
      }

      CACHE[iconUrl] = new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.addEventListener('load', function () {
          if (this.status < 200 || this.status >= 300) {
            reject(new Error("".concat(this.status, " ").concat(this.responseText)));
            return;
          }

          resolve(this.responseText);
        });
        request.onerror = reject;
        request.onabort = reject;
        request.open('GET', iconUrl);
        request.send();
      });
      return CACHE[iconUrl];
    }
    /**
     * Define (register) the custom element
     *
     * @param {String} [tagName=this.tagName]
     */

  }, {
    key: "define",
    value: function define(tagName) {
      tagName = tagName || this.tagName;

      if (usingShadyCss()) {
        GLOBAL.ShadyCSS.prepareTemplate(TEMPLATE, tagName);
      }

      customElements.define(tagName, this);
    }
  }]);

  return BoxIconElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

function handleTypeChange(inst, oldVal, newVal) {
  var state = inst._state;
  state.$iconHolder.textContent = '';

  if (state.type) {
    state.type = null;
  }

  if (newVal && (newVal === 'solid' || newVal === 'logo')) {
    state.type = newVal;
  } else {
    state.type = 'regular';
  }

  if (state.currentName !== undefined) {
    inst.constructor.getIconSvg(state.currentName, state.type).then(function (iconData) {
      if (state.type === newVal) {
        state.$iconHolder.innerHTML = iconData;
      }
    })["catch"](function (error) {
      console.error("Failed to load icon: ".concat(state.currentName + "\n").concat(error)); //eslint-disable-line
    });
  }
}

function handleNameChange(inst, oldVal, newVal) {
  var state = inst._state;
  state.currentName = newVal;
  state.$iconHolder.textContent = '';

  if (newVal) {
    if (state.type !== undefined) {
      inst.constructor.getIconSvg(newVal, state.type).then(function (iconData) {
        if (state.currentName === newVal) {
          state.$iconHolder.innerHTML = iconData;
        }
      })["catch"](function (error) {
        console.error("Failed to load icon: ".concat(newVal + "\n").concat(error)); //eslint-disable-line
      });
    }
  }
}

function handleSizeChange(inst, oldVal, newVal) {
  var state = inst._state;

  if (state.size) {
    state.$iconHolder.style.width = state.$iconHolder.style.height = '';
    state.size = state.sizeType = null;
  } // If the size is not one of the short-hand ones, then it must be a
  // css size unit - add it directly to the icon holder.


  if (newVal && !/^(xs|sm|md|lg)$/.test(state.size)) {
    state.size = newVal.trim();
    state.$iconHolder.style.width = state.$iconHolder.style.height = state.size;
  }
}

/* harmony default export */ const box_icon_element = ((/* unused pure expression or super */ null && (BoxIconElement)));
;// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ const src = (BoxIconElement);
BoxIconElement.define();
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=boxicons.js.map