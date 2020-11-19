webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/harmony-picker.js":
/*!******************************************!*\
  !*** ./src/components/harmony-picker.js ***!
  \******************************************/
/*! exports provided: HarmonyPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HarmonyPicker\", function() { return HarmonyPicker; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _toolbar_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar/select */ \"./src/components/toolbar/select.js\");\n/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recoil/atoms */ \"./src/recoil/atoms.js\");\n\n\n\nvar _jsxFileName = \"/home/arsha/Desktop/isvg/src/components/harmony-picker.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar HarmonyPicker = function HarmonyPicker() {\n  _s();\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_5__[\"wave\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState, 2),\n      waveEl = _useRecoilState2[0],\n      setWaveEl = _useRecoilState2[1];\n\n  var _useRecoilState3 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_5__[\"harmonyColours\"]),\n      _useRecoilState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState3, 2),\n      harmonyTypeEl = _useRecoilState4[0],\n      setHarmonyType = _useRecoilState4[1];\n\n  var _useRecoilState5 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_5__[\"maxLayers\"]),\n      _useRecoilState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState5, 2),\n      maxLayersEl = _useRecoilState6[0],\n      setMaxLayersEl = _useRecoilState6[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('simple'),\n      colourType = _useState[0],\n      setColourType = _useState[1];\n\n  var coloursData = {\n    elements: [{\n      text: 'Simple',\n      name: 'simple',\n      onClick: function onClick() {\n        setColourType('simple');\n        setMaxLayersEl(10);\n      }\n    }, {\n      text: 'Harmony',\n      name: 'harmony',\n      onClick: function onClick() {\n        return setColourType('harmony');\n      }\n    }],\n    dataType: colourType\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"m-auto w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_toolbar_select__WEBPACK_IMPORTED_MODULE_4__[\"Select\"], {\n      data: coloursData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, _this), colourType === 'harmony' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"flex justify-center my-3 w-4/6\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"harmonyType\",\n        className: \"text-sm text-left m-auto\",\n        children: \"Harmony Type\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        className: \"w-3/4 h-full overflow-hidden text-center rounded-lg appearance-none border-2 range-input\",\n        value: harmonyTypeEl,\n        onChange: function onChange(e) {\n          return setHarmonyType(e.target.value);\n        },\n        type: \"range\",\n        id: \"harmonyType\",\n        name: \"harmonyType\",\n        min: 0,\n        step: 1,\n        max: 18\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 21\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(HarmonyPicker, \"f4JAgyp97WOg4Qz5XG8IKzMSOio=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"]];\n});\n\n_c = HarmonyPicker;\n\nvar _c;\n\n$RefreshReg$(_c, \"HarmonyPicker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGFybW9ueS1waWNrZXIuanM/ZmExNCJdLCJuYW1lcyI6WyJIYXJtb255UGlja2VyIiwidXNlUmVjb2lsU3RhdGUiLCJ3YXZlIiwid2F2ZUVsIiwic2V0V2F2ZUVsIiwiaGFybW9ueUNvbG91cnMiLCJoYXJtb255VHlwZUVsIiwic2V0SGFybW9ueVR5cGUiLCJtYXhMYXllcnMiLCJtYXhMYXllcnNFbCIsInNldE1heExheWVyc0VsIiwidXNlU3RhdGUiLCJjb2xvdXJUeXBlIiwic2V0Q29sb3VyVHlwZSIsImNvbG91cnNEYXRhIiwiZWxlbWVudHMiLCJ0ZXh0IiwibmFtZSIsIm9uQ2xpY2siLCJkYXRhVHlwZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLHdCQUNIQyw2REFBYyxDQUFDQyxrREFBRCxDQURYO0FBQUE7QUFBQSxNQUN4QkMsTUFEd0I7QUFBQSxNQUNoQkMsU0FEZ0I7O0FBQUEseUJBRVNILDZEQUFjLENBQUNJLDREQUFELENBRnZCO0FBQUE7QUFBQSxNQUV4QkMsYUFGd0I7QUFBQSxNQUVUQyxjQUZTOztBQUFBLHlCQUdPTiw2REFBYyxDQUFDTyx1REFBRCxDQUhyQjtBQUFBO0FBQUEsTUFHeEJDLFdBSHdCO0FBQUEsTUFHWEMsY0FIVzs7QUFBQSxrQkFJS0Msc0RBQVEsQ0FBQyxRQUFELENBSmI7QUFBQSxNQUl4QkMsVUFKd0I7QUFBQSxNQUlaQyxhQUpZOztBQU0vQixNQUFNQyxXQUFXLEdBQUc7QUFDaEJDLFlBQVEsRUFBRSxDQUNOO0FBQ0lDLFVBQUksRUFBRSxRQURWO0FBRUlDLFVBQUksRUFBRSxRQUZWO0FBR0lDLGFBQU8sRUFBRSxtQkFBTTtBQUNYTCxxQkFBYSxDQUFDLFFBQUQsQ0FBYjtBQUNBSCxzQkFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNIO0FBTkwsS0FETSxFQVNOO0FBQ0lNLFVBQUksRUFBRSxTQURWO0FBRUlDLFVBQUksRUFBRSxTQUZWO0FBR0lDLGFBQU8sRUFBRTtBQUFBLGVBQU1MLGFBQWEsQ0FBQyxTQUFELENBQW5CO0FBQUE7QUFIYixLQVRNLENBRE07QUFnQmhCTSxZQUFRLEVBQUVQO0FBaEJNLEdBQXBCO0FBbUJBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSw0QkFDSSxxRUFBQyxzREFBRDtBQUFRLFVBQUksRUFBRUU7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFS0YsVUFBVSxLQUFLLFNBQWYsZ0JBQ0c7QUFBSyxlQUFTLEVBQUMsZ0NBQWY7QUFBQSw4QkFDSTtBQUFPLGVBQU8sRUFBQyxhQUFmO0FBQTZCLGlCQUFTLEVBQUMsMEJBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUNJLGlCQUFTLEVBQUMsMEZBRGQ7QUFFSSxhQUFLLEVBQUVOLGFBRlg7QUFHSSxnQkFBUSxFQUFFLGtCQUFDYyxDQUFEO0FBQUEsaUJBQU9iLGNBQWMsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBckI7QUFBQSxTQUhkO0FBSUksWUFBSSxFQUFDLE9BSlQ7QUFLSSxVQUFFLEVBQUMsYUFMUDtBQU1JLFlBQUksRUFBQyxhQU5UO0FBT0ksV0FBRyxFQUFFLENBUFQ7QUFRSSxZQUFJLEVBQUUsQ0FSVjtBQVNJLFdBQUcsRUFBRTtBQVRUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESCxHQWlCRyxJQW5CUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCSCxDQWhETTs7R0FBTXRCLGE7VUFDbUJDLHFELEVBQ1lBLHFELEVBQ0ZBLHFEOzs7S0FIN0JELGEiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oYXJtb255LXBpY2tlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuL3Rvb2xiYXIvc2VsZWN0J1xuaW1wb3J0IHsgd2F2ZSwgaGFybW9ueUNvbG91cnMsIG1heExheWVycyB9IGZyb20gJy4uL3JlY29pbC9hdG9tcydcblxuZXhwb3J0IGNvbnN0IEhhcm1vbnlQaWNrZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3dhdmVFbCwgc2V0V2F2ZUVsXSA9IHVzZVJlY29pbFN0YXRlKHdhdmUpXG4gICAgY29uc3QgW2hhcm1vbnlUeXBlRWwsIHNldEhhcm1vbnlUeXBlXSA9IHVzZVJlY29pbFN0YXRlKGhhcm1vbnlDb2xvdXJzKVxuICAgIGNvbnN0IFttYXhMYXllcnNFbCwgc2V0TWF4TGF5ZXJzRWxdID0gdXNlUmVjb2lsU3RhdGUobWF4TGF5ZXJzKVxuICAgIGNvbnN0IFtjb2xvdXJUeXBlLCBzZXRDb2xvdXJUeXBlXSA9IHVzZVN0YXRlKCdzaW1wbGUnKVxuXG4gICAgY29uc3QgY29sb3Vyc0RhdGEgPSB7XG4gICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1NpbXBsZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NpbXBsZScsXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRDb2xvdXJUeXBlKCdzaW1wbGUnKVxuICAgICAgICAgICAgICAgICAgICBzZXRNYXhMYXllcnNFbCgxMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdIYXJtb255JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaGFybW9ueScsXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gc2V0Q29sb3VyVHlwZSgnaGFybW9ueScpXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGRhdGFUeXBlOiBjb2xvdXJUeXBlXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gdy1mdWxsXCI+XG4gICAgICAgICAgICA8U2VsZWN0IGRhdGE9e2NvbG91cnNEYXRhfSAvPlxuICAgICAgICAgICAge2NvbG91clR5cGUgPT09ICdoYXJtb255JyA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXktMyB3LTQvNlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhhcm1vbnlUeXBlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWxlZnQgbS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBIYXJtb255IFR5cGVcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTMvNCBoLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHRleHQtY2VudGVyIHJvdW5kZWQtbGcgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIHJhbmdlLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtoYXJtb255VHlwZUVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRIYXJtb255VHlwZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJoYXJtb255VHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaGFybW9ueVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTh9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/harmony-picker.js\n");

/***/ })

})