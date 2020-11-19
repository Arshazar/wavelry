webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/svg/index.js":
/*!*************************************!*\
  !*** ./src/components/svg/index.js ***!
  \*************************************/
/*! exports provided: Svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Svg\", function() { return Svg; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../recoil/atoms */ \"./src/recoil/atoms.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ \"./src/constants.js\");\n\n\n\nvar _jsxFileName = \"/home/arsha/Desktop/isvg/src/components/svg/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Harmoniser = __webpack_require__(/*! color-harmony */ \"./node_modules/color-harmony/lib/color-harmony.js\").Harmonizer;\n\nvar Svg = function Svg(_ref) {\n  _s();\n\n  var path = _ref.path;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('scale(1)'),\n      transform = _useState[0],\n      setTransform = _useState[1];\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"wave\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState, 2),\n      waveEl = _useRecoilState2[0],\n      setWaveEl = _useRecoilState2[1];\n\n  var _useRecoilState3 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"colourMode\"]),\n      _useRecoilState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState3, 2),\n      colourModeEl = _useRecoilState4[0],\n      setColourModeEl = _useRecoilState4[1];\n\n  var _useRecoilState5 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"gradientColours\"]),\n      _useRecoilState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState5, 2),\n      gradientColoursEl = _useRecoilState6[0],\n      setGradientColoursEl = _useRecoilState6[1];\n\n  var _useRecoilState7 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"gradientType\"]),\n      _useRecoilState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState7, 2),\n      gradientTypeEl = _useRecoilState8[0],\n      setGradientTypeEl = _useRecoilState8[1];\n\n  var _useRecoilState9 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"gradientAngle\"]),\n      _useRecoilState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState9, 2),\n      gradientAngleEl = _useRecoilState10[0],\n      setGradientAngleEl = _useRecoilState10[1];\n\n  var _useRecoilState11 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"gradientRadius\"]),\n      _useRecoilState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState11, 2),\n      gradientRadiusEl = _useRecoilState12[0],\n      setGradientRadiusEl = _useRecoilState12[1];\n\n  var _useRecoilState13 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"flipX\"]),\n      _useRecoilState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState13, 2),\n      flipXEl = _useRecoilState14[0],\n      setFlipXEl = _useRecoilState14[1];\n\n  var _useRecoilState15 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"flipY\"]),\n      _useRecoilState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState15, 2),\n      flipYEl = _useRecoilState16[0],\n      setFlipYEl = _useRecoilState16[1];\n\n  var waves_num = path.length;\n  var opac = _constants__WEBPACK_IMPORTED_MODULE_5__[\"OPACITY_NUMS\"].slice(10 - waves_num);\n  var harmoniser = new Harmoniser();\n  var harmonies = harmoniser.harmonizeAll(waveEl.fillColour);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setTransform(\"scale(\".concat(flipXEl, \", \").concat(flipYEl, \")\"));\n  }, [flipXEl, flipYEl]);\n\n  var svg = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"svg\", {\n    style: {\n      objectFit: 'cover'\n    },\n    id: \"my-svg\",\n    version: \"1\",\n    baseProfile: \"full\",\n    width: \"100%\",\n    height: \"100%\",\n    viewBox: \"0 0 1440 \".concat(waveEl.height),\n    xmlns: \"http://www.w3.org/2000/svg\",\n    children: path.map(function (p, i) {\n      return colourModeEl === 'gradient' ? gradientTypeEl === 'linear' ? [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"defs\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"linearGradient\", {\n          id: \"linear-gradient\",\n          x1: _constants__WEBPACK_IMPORTED_MODULE_5__[\"linearPoints\"][Number(gradientAngleEl)].x1,\n          x2: _constants__WEBPACK_IMPORTED_MODULE_5__[\"linearPoints\"][Number(gradientAngleEl)].x2,\n          y1: _constants__WEBPACK_IMPORTED_MODULE_5__[\"linearPoints\"][Number(gradientAngleEl)].y1,\n          y2: _constants__WEBPACK_IMPORTED_MODULE_5__[\"linearPoints\"][Number(gradientAngleEl)].y2,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"stop\", {\n            offset: \"0%\",\n            stopColor: \"\".concat(gradientColoursEl.colour1).concat(opac[i])\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 37\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"stop\", {\n            offset: \"100%\",\n            stopColor: \"\".concat(gradientColoursEl.colour2).concat(opac[i])\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 37\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 33\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 29\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n        transform: transform,\n        style: {\n          transformOrigin: 'center'\n        },\n        d: p.d,\n        stroke: p.strokeColour,\n        strokeWidth: p.strokeWidth,\n        fill: \"url(#linear-gradient)\",\n        className: \"transition-all duration-300 ease-in-out delay-150\"\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 29\n      }, _this)] : [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"defs\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"radialGradient\", {\n          id: \"radial-gradient\",\n          cx: \"0.5\",\n          cy: \"0.75\",\n          r: gradientRadiusEl,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"stop\", {\n            offset: \"0%\",\n            stopColor: \"\".concat(gradientColoursEl.colour1).concat(opac[i])\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 37\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"stop\", {\n            offset: \"100%\",\n            stopColor: \"\".concat(gradientColoursEl.colour2).concat(opac[i])\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 37\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 33\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 29\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n        transform: transform,\n        style: {\n          transformOrigin: 'center'\n        },\n        d: p.d,\n        stroke: p.strokeColour,\n        strokeWidth: p.strokeWidth,\n        fill: \"url(#radial-gradient)\",\n        className: \"transition-all duration-300 ease-in-out delay-150\"\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 29\n      }, _this)] : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n        transform: transform,\n        style: {\n          transformOrigin: 'center'\n        },\n        d: p.d,\n        stroke: p.strokeColour,\n        strokeWidth: p.strokeWidth // fill={`${waveEl.fillColour}${opac[i]}`}\n        ,\n        fill: harmonies.analogous[0],\n        className: \"transition-all duration-300 ease-in-out delay-150\"\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 21\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 9\n  }, _this);\n\n  return svg;\n};\n\n_s(Svg, \"5w9NL8swuR8ZyV8C7oUTpiyyzgI=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"]];\n});\n\n_c = Svg;\n\nvar _c;\n\n$RefreshReg$(_c, \"Svg\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3ZnL2luZGV4LmpzPzlmOWQiXSwibmFtZXMiOlsiSGFybW9uaXNlciIsInJlcXVpcmUiLCJIYXJtb25pemVyIiwiU3ZnIiwicGF0aCIsInVzZVN0YXRlIiwidHJhbnNmb3JtIiwic2V0VHJhbnNmb3JtIiwidXNlUmVjb2lsU3RhdGUiLCJ3YXZlIiwid2F2ZUVsIiwic2V0V2F2ZUVsIiwiY29sb3VyTW9kZSIsImNvbG91ck1vZGVFbCIsInNldENvbG91ck1vZGVFbCIsImdyYWRpZW50Q29sb3VycyIsImdyYWRpZW50Q29sb3Vyc0VsIiwic2V0R3JhZGllbnRDb2xvdXJzRWwiLCJncmFkaWVudFR5cGUiLCJncmFkaWVudFR5cGVFbCIsInNldEdyYWRpZW50VHlwZUVsIiwiZ3JhZGllbnRBbmdsZSIsImdyYWRpZW50QW5nbGVFbCIsInNldEdyYWRpZW50QW5nbGVFbCIsImdyYWRpZW50UmFkaXVzIiwiZ3JhZGllbnRSYWRpdXNFbCIsInNldEdyYWRpZW50UmFkaXVzRWwiLCJmbGlwWCIsImZsaXBYRWwiLCJzZXRGbGlwWEVsIiwiZmxpcFkiLCJmbGlwWUVsIiwic2V0RmxpcFlFbCIsIndhdmVzX251bSIsImxlbmd0aCIsIm9wYWMiLCJPUEFDSVRZX05VTVMiLCJzbGljZSIsImhhcm1vbmlzZXIiLCJoYXJtb25pZXMiLCJoYXJtb25pemVBbGwiLCJmaWxsQ29sb3VyIiwidXNlRWZmZWN0Iiwic3ZnIiwib2JqZWN0Rml0IiwiaGVpZ2h0IiwibWFwIiwicCIsImkiLCJsaW5lYXJQb2ludHMiLCJOdW1iZXIiLCJ4MSIsIngyIiwieTEiLCJ5MiIsImNvbG91cjEiLCJjb2xvdXIyIiwidHJhbnNmb3JtT3JpZ2luIiwiZCIsInN0cm9rZUNvbG91ciIsInN0cm9rZVdpZHRoIiwiYW5hbG9nb3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVVBOztBQUNBLElBQU1BLFVB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QUFBLG1CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQWlCSTtBQUNJLGlCQUFTLEVBQUUxQyxTQURmO0FBRUksYUFBSyxFQUFFO0FBQUVtRCx5QkFBZSxFQUFFO0FBQW5CLFNBRlg7QUFJSSxTQUFDLEVBQUVWLENBQUMsQ0FBQ1csQ0FKVDtBQUtJLGNBQU0sRUFBRVgsQ0FBQyxDQUFDWSxZQUxkO0FBTUksbUJBQVcsRUFBRVosQ0FBQyxDQUFDYSxXQU5uQjtBQU9JLFlBQUkseUJBUFI7QUFRSSxpQkFBUyxFQUFDO0FBUmQsU0FHU1osQ0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJKLENBL0JELGdCQTRESDtBQUNJLGlCQUFTLEVBQUUxQyxTQURmO0FBRUksYUFBSyxFQUFFO0FBQUVtRCx5QkFBZSxFQUFFO0FBQW5CLFNBRlg7QUFJSSxTQUFDLEVBQUVWLENBQUMsQ0FBQ1csQ0FKVDtBQUtJLGNBQU0sRUFBRVgsQ0FBQyxDQUFDWSxZQUxkO0FBTUksbUJBQVcsRUFBRVosQ0FBQyxDQUFDYSxXQU5uQixDQU9JO0FBUEo7QUFRSSxZQUFJLEVBQUVyQixTQUFTLENBQUNzQixTQUFWLENBQW9CLENBQXBCLENBUlY7QUFTSSxpQkFBUyxFQUFDO0FBVGQsU0FHU2IsQ0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNURKO0FBdUVILEtBeEVBO0FBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKOztBQXNGQSxTQUFPTCxHQUFQO0FBQ0gsQ0E1R007O0dBQU14QyxHO1VBRW1CSyxxRCxFQUNZQSxxRCxFQUNVQSxxRCxFQUNOQSxxRCxFQUNFQSxxRCxFQUNFQSxxRCxFQUNsQkEscUQsRUFDQUEscUQ7OztLQVRyQkwsRyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3N2Zy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCdcbmltcG9ydCB7XG4gICAgd2F2ZSxcbiAgICBncmFkaWVudENvbG91cnMsXG4gICAgY29sb3VyTW9kZSxcbiAgICBncmFkaWVudFR5cGUsXG4gICAgZ3JhZGllbnRBbmdsZSxcbiAgICBncmFkaWVudFJhZGl1cyxcbiAgICBmbGlwWCxcbiAgICBmbGlwWVxufSBmcm9tICcuLi8uLi9yZWNvaWwvYXRvbXMnXG5pbXBvcnQgeyBsaW5lYXJQb2ludHMsIE9QQUNJVFlfTlVNUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmNvbnN0IEhhcm1vbmlzZXIgPSByZXF1aXJlKCdjb2xvci1oYXJtb255JykuSGFybW9uaXplclxuXG5leHBvcnQgY29uc3QgU3ZnID0gKHsgcGF0aCB9KSA9PiB7XG4gICAgY29uc3QgW3RyYW5zZm9ybSwgc2V0VHJhbnNmb3JtXSA9IHVzZVN0YXRlKCdzY2FsZSgxKScpXG4gICAgY29uc3QgW3dhdmVFbCwgc2V0V2F2ZUVsXSA9IHVzZVJlY29pbFN0YXRlKHdhdmUpXG4gICAgY29uc3QgW2NvbG91ck1vZGVFbCwgc2V0Q29sb3VyTW9kZUVsXSA9IHVzZVJlY29pbFN0YXRlKGNvbG91ck1vZGUpXG4gICAgY29uc3QgW2dyYWRpZW50Q29sb3Vyc0VsLCBzZXRHcmFkaWVudENvbG91cnNFbF0gPSB1c2VSZWNvaWxTdGF0ZShncmFkaWVudENvbG91cnMpXG4gICAgY29uc3QgW2dyYWRpZW50VHlwZUVsLCBzZXRHcmFkaWVudFR5cGVFbF0gPSB1c2VSZWNvaWxTdGF0ZShncmFkaWVudFR5cGUpXG4gICAgY29uc3QgW2dyYWRpZW50QW5nbGVFbCwgc2V0R3JhZGllbnRBbmdsZUVsXSA9IHVzZVJlY29pbFN0YXRlKGdyYWRpZW50QW5nbGUpXG4gICAgY29uc3QgW2dyYWRpZW50UmFkaXVzRWwsIHNldEdyYWRpZW50UmFkaXVzRWxdID0gdXNlUmVjb2lsU3RhdGUoZ3JhZGllbnRSYWRpdXMpXG4gICAgY29uc3QgW2ZsaXBYRWwsIHNldEZsaXBYRWxdID0gdXNlUmVjb2lsU3RhdGUoZmxpcFgpXG4gICAgY29uc3QgW2ZsaXBZRWwsIHNldEZsaXBZRWxdID0gdXNlUmVjb2lsU3RhdGUoZmxpcFkpXG5cbiAgICBjb25zdCB3YXZlc19udW0gPSBwYXRoLmxlbmd0aFxuICAgIGNvbnN0IG9wYWMgPSBPUEFDSVRZX05VTVMuc2xpY2UoMTAgLSB3YXZlc19udW0pXG5cbiAgICBjb25zdCBoYXJtb25pc2VyID0gbmV3IEhhcm1vbmlzZXIoKVxuICAgIGNvbnN0IGhhcm1vbmllcyA9IGhhcm1vbmlzZXIuaGFybW9uaXplQWxsKHdhdmVFbC5maWxsQ29sb3VyKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VHJhbnNmb3JtKGBzY2FsZSgke2ZsaXBYRWx9LCAke2ZsaXBZRWx9KWApXG4gICAgfSwgW2ZsaXBYRWwsIGZsaXBZRWxdKVxuXG4gICAgY29uc3Qgc3ZnID0gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6ICdjb3ZlcicgfX1cbiAgICAgICAgICAgIGlkPVwibXktc3ZnXCJcbiAgICAgICAgICAgIHZlcnNpb249XCIxXCJcbiAgICAgICAgICAgIGJhc2VQcm9maWxlPVwiZnVsbFwiXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICB2aWV3Qm94PXtgMCAwIDE0NDAgJHt3YXZlRWwuaGVpZ2h0fWB9XG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICB7cGF0aC5tYXAoKHAsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3VyTW9kZUVsID09PSAnZ3JhZGllbnQnID8gKFxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFR5cGVFbCA9PT0gJ2xpbmVhcicgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDE9e2xpbmVhclBvaW50c1tOdW1iZXIoZ3JhZGllbnRBbmdsZUVsKV0ueDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Mj17bGluZWFyUG9pbnRzW051bWJlcihncmFkaWVudEFuZ2xlRWwpXS54Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkxPXtsaW5lYXJQb2ludHNbTnVtYmVyKGdyYWRpZW50QW5nbGVFbCldLnkxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTI9e2xpbmVhclBvaW50c1tOdW1iZXIoZ3JhZGllbnRBbmdsZUVsKV0ueTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcENvbG9yPXtgJHtncmFkaWVudENvbG91cnNFbC5jb2xvdXIxfSR7b3BhY1tpXX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcENvbG9yPXtgJHtncmFkaWVudENvbG91cnNFbC5jb2xvdXIyfSR7b3BhY1tpXX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17dHJhbnNmb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD17cC5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9e3Auc3Ryb2tlQ29sb3VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17cC5zdHJva2VXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17YHVybCgjbGluZWFyLWdyYWRpZW50KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBkZWxheS0xNTBcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyYWRpYWxHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyYWRpYWwtZ3JhZGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3g9XCIwLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3k9XCIwLjc1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI9e2dyYWRpZW50UmFkaXVzRWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcENvbG9yPXtgJHtncmFkaWVudENvbG91cnNFbC5jb2xvdXIxfSR7b3BhY1tpXX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcENvbG9yPXtgJHtncmFkaWVudENvbG91cnNFbC5jb2xvdXIyfSR7b3BhY1tpXX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17dHJhbnNmb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD17cC5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9e3Auc3Ryb2tlQ29sb3VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17cC5zdHJva2VXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17YHVybCgjcmFkaWFsLWdyYWRpZW50KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBkZWxheS0xNTBcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPXt0cmFuc2Zvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBkPXtwLmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9e3Auc3Ryb2tlQ29sb3VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e3Auc3Ryb2tlV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaWxsPXtgJHt3YXZlRWwuZmlsbENvbG91cn0ke29wYWNbaV19YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e2hhcm1vbmllcy5hbmFsb2dvdXNbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZGVsYXktMTUwXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3N2Zz5cbiAgICApXG5cbiAgICByZXR1cm4gc3ZnXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/svg/index.js\n");

/***/ })

})