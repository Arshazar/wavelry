webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/harmony-picker.js":
/*!******************************************!*\
  !*** ./src/components/harmony-picker.js ***!
  \******************************************/
/*! exports provided: HarmonyPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HarmonyPicker\", function() { return HarmonyPicker; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _toolbar_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar/select */ \"./src/components/toolbar/select.js\");\n/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recoil/atoms */ \"./src/recoil/atoms.js\");\n\n\n\nvar _jsxFileName = \"/home/arsha/Desktop/isvg/src/components/harmony-picker.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar HarmonyPicker = function HarmonyPicker() {\n  _s();\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_5__[\"wave\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState, 2),\n      waveEl = _useRecoilState2[0],\n      setWaveEl = _useRecoilState2[1];\n\n  var _useRecoilState3 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_5__[\"harmonyColours\"]),\n      _useRecoilState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState3, 2),\n      harmonyTypeEl = _useRecoilState4[0],\n      setHarmonyType = _useRecoilState4[1];\n\n  var _useRecoilState5 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_5__[\"maxLayers\"]),\n      _useRecoilState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState5, 2),\n      maxLayersEl = _useRecoilState6[0],\n      setMaxLayersEl = _useRecoilState6[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('simple'),\n      colourType = _useState[0],\n      setColourType = _useState[1];\n\n  var coloursData = {\n    elements: [{\n      text: 'Simple',\n      name: 'simple',\n      onClick: function onClick() {\n        setColourType('simple');\n        setMaxLayersEl(10);\n      }\n    }, {\n      text: 'Harmony',\n      name: 'harmony',\n      onClick: function onClick() {\n        return setColourType('harmony');\n      }\n    }],\n    dataType: colourType\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"m-auto w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"m-auto w-4/6\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_toolbar_select__WEBPACK_IMPORTED_MODULE_4__[\"Select\"], {\n        data: coloursData\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, _this), colourType === 'harmony' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"flex justify-center my-3 w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"harmonyType\",\n        className: \"text-sm text-left m-auto\",\n        children: \"Type\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        className: \"w-3/4 h-full overflow-hidden text-center rounded-lg appearance-none border-2 range-input\",\n        value: harmonyTypeEl,\n        onChange: function onChange(e) {\n          return setHarmonyType(e.target.value);\n        },\n        type: \"range\",\n        id: \"harmonyType\",\n        name: \"harmonyType\",\n        min: 0,\n        step: 1,\n        max: 17\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 21\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(HarmonyPicker, \"f4JAgyp97WOg4Qz5XG8IKzMSOio=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"]];\n});\n\n_c = HarmonyPicker;\n\nvar _c;\n\n$RefreshReg$(_c, \"HarmonyPicker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGFybW9ueS1waWNrZXIuanM/ZmExNCJdLCJuYW1lcyI6WyJIYXJtb255UGlja2VyIiwidXNlUmVjb2lsU3RhdGUiLCJ3YXZlIiwid2F2ZUVsIiwic2V0V2F2ZUVsIiwiaGFybW9ueUNvbG91cnMiLCJoYXJtb255VHlwZUVsIiwic2V0SGFybW9ueVR5cGUiLCJtYXhMYXllcnMiLCJtYXhMYXllcnNFbCIsInNldE1heExheWVyc0VsIiwidXNlU3RhdGUiLCJjb2xvdXJUeXBlIiwic2V0Q29sb3VyVHlwZSIsImNvbG91cnNEYXRhIiwiZWxlbWVudHMiLCJ0ZXh0IiwibmFtZSIsIm9uQ2xpY2siLCJkYXRhVHlwZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLHdCQUNIQyw2REFBYyxDQUFDQyxrREFBRCxDQURYO0FBQUE7QUFBQSxNQUN4QkMsTUFEd0I7QUFBQSxNQUNoQkMsU0FEZ0I7O0FBQUEseUJBRVNILDZEQUFjLENBQUNJLDREQUFELENBRnZCO0FBQUE7QUFBQSxNQUV4QkMsYUFGd0I7QUFBQSxNQUVUQyxjQUZTOztBQUFBLHlCQUdPTiw2REFBYyxDQUFDTyx1REFBRCxDQUhyQjtBQUFBO0FBQUEsTUFHeEJDLFdBSHdCO0FBQUEsTUFHWEMsY0FIVzs7QUFBQSxrQkFJS0Msc0RBQVEsQ0FBQyxRQUFELENBSmI7QUFBQSxNQUl4QkMsVUFKd0I7QUFBQSxNQUlaQyxhQUpZOztBQU0vQixNQUFNQyxXQUFXLEdBQUc7QUFDaEJDLFlBQVEsRUFBRSxDQUNOO0FBQ0lDLFVBQUksRUFBRSxRQURWO0FBRUlDLFVBQUksRUFBRSxRQUZWO0FBR0lDLGFBQU8sRUFBRSxtQkFBTTtBQUNYTCxxQkFBYSxDQUFDLFFBQUQsQ0FBYjtBQUNBSCxzQkFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNIO0FBTkwsS0FETSxFQVNOO0FBQ0lNLFVBQUksRUFBRSxTQURWO0FBRUlDLFVBQUksRUFBRSxTQUZWO0FBR0lDLGFBQU8sRUFBRTtBQUFBLGVBQU1MLGFBQWEsQ0FBQyxTQUFELENBQW5CO0FBQUE7QUFIYixLQVRNLENBRE07QUFnQmhCTSxZQUFRLEVBQUVQO0FBaEJNLEdBQXBCO0FBbUJBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsNkJBQ0kscUVBQUMsc0RBQUQ7QUFBUSxZQUFJLEVBQUVFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUlLRixVQUFVLEtBQUssU0FBZixnQkFDRztBQUFLLGVBQVMsRUFBQyxpQ0FBZjtBQUFBLDhCQUNJO0FBQU8sZUFBTyxFQUFDLGFBQWY7QUFBNkIsaUJBQVMsRUFBQywwQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQ0ksaUJBQVMsRUFBQywwRkFEZDtBQUVJLGFBQUssRUFBRU4sYUFGWDtBQUdJLGdCQUFRLEVBQUUsa0JBQUNjLENBQUQ7QUFBQSxpQkFBT2IsY0FBYyxDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFyQjtBQUFBLFNBSGQ7QUFJSSxZQUFJLEVBQUMsT0FKVDtBQUtJLFVBQUUsRUFBQyxhQUxQO0FBTUksWUFBSSxFQUFDLGFBTlQ7QUFPSSxXQUFHLEVBQUUsQ0FQVDtBQVFJLFlBQUksRUFBRSxDQVJWO0FBU0ksV0FBRyxFQUFFO0FBVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILEdBaUJHLElBckJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUJILENBbERNOztHQUFNdEIsYTtVQUNtQkMscUQsRUFDWUEscUQsRUFDRkEscUQ7OztLQUg3QkQsYSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hhcm1vbnktcGlja2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCdcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4vdG9vbGJhci9zZWxlY3QnXG5pbXBvcnQgeyB3YXZlLCBoYXJtb255Q29sb3VycywgbWF4TGF5ZXJzIH0gZnJvbSAnLi4vcmVjb2lsL2F0b21zJ1xuXG5leHBvcnQgY29uc3QgSGFybW9ueVBpY2tlciA9ICgpID0+IHtcbiAgICBjb25zdCBbd2F2ZUVsLCBzZXRXYXZlRWxdID0gdXNlUmVjb2lsU3RhdGUod2F2ZSlcbiAgICBjb25zdCBbaGFybW9ueVR5cGVFbCwgc2V0SGFybW9ueVR5cGVdID0gdXNlUmVjb2lsU3RhdGUoaGFybW9ueUNvbG91cnMpXG4gICAgY29uc3QgW21heExheWVyc0VsLCBzZXRNYXhMYXllcnNFbF0gPSB1c2VSZWNvaWxTdGF0ZShtYXhMYXllcnMpXG4gICAgY29uc3QgW2NvbG91clR5cGUsIHNldENvbG91clR5cGVdID0gdXNlU3RhdGUoJ3NpbXBsZScpXG5cbiAgICBjb25zdCBjb2xvdXJzRGF0YSA9IHtcbiAgICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnU2ltcGxlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2ltcGxlJyxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbG91clR5cGUoJ3NpbXBsZScpXG4gICAgICAgICAgICAgICAgICAgIHNldE1heExheWVyc0VsKDEwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ0hhcm1vbnknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdoYXJtb255JyxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRDb2xvdXJUeXBlKCdoYXJtb255JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZGF0YVR5cGU6IGNvbG91clR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIHctNC82XCI+XG4gICAgICAgICAgICAgICAgPFNlbGVjdCBkYXRhPXtjb2xvdXJzRGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2NvbG91clR5cGUgPT09ICdoYXJtb255JyA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXktMyB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJoYXJtb255VHlwZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1sZWZ0IG0tYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgVHlwZVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMy80IGgtZnVsbCBvdmVyZmxvdy1oaWRkZW4gdGV4dC1jZW50ZXIgcm91bmRlZC1sZyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgcmFuZ2UtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2hhcm1vbnlUeXBlRWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEhhcm1vbnlUeXBlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImhhcm1vbnlUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoYXJtb255VHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxN31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/harmony-picker.js\n");

/***/ })

})