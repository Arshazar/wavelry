webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/harmony-picker.js":
/*!******************************************!*\
  !*** ./src/components/harmony-picker.js ***!
  \******************************************/
/*! exports provided: HarmonyPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HarmonyPicker\", function() { return HarmonyPicker; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _toolbar_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar/select */ \"./src/components/toolbar/select.js\");\n/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recoil/atoms */ \"./src/recoil/atoms.js\");\n\n\n\nvar _jsxFileName = \"/home/arsha/Desktop/isvg/src/components/harmony-picker.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar HarmonyPicker = function HarmonyPicker() {\n  _s();\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_5__[\"wave\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState, 2),\n      waveEl = _useRecoilState2[0],\n      setWaveEl = _useRecoilState2[1];\n\n  var _useRecoilState3 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_5__[\"harmonyColours\"]),\n      _useRecoilState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState3, 2),\n      colours = _useRecoilState4[0],\n      setColours = _useRecoilState4[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('simple'),\n      colourType = _useState[0],\n      setColourType = _useState[1];\n\n  var coloursData = {\n    elements: [{\n      text: 'Simple',\n      name: 'simple',\n      onClick: function onClick() {\n        return setColourType('simple');\n      }\n    }, {\n      text: 'Harmony',\n      name: 'harmony',\n      onClick: function onClick() {\n        return setColourType('harmony');\n      }\n    }],\n    dataType: colourType\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"m-auto w-4/6\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_toolbar_select__WEBPACK_IMPORTED_MODULE_4__[\"Select\"], {\n      data: coloursData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, _this), colourType === 'harmony' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"flex justify-center my-3 w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"harmonyType\",\n        className: \"text-sm text-left m-auto\",\n        children: \"Harmony Type\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        className: \"w-3/4 h-full overflow-hidden text-center rounded-lg appearance-none border-2 range-input\",\n        value: colours,\n        onChange: function (_onChange) {\n          function onChange(_x) {\n            return _onChange.apply(this, arguments);\n          }\n\n          onChange.toString = function () {\n            return _onChange.toString();\n          };\n\n          return onChange;\n        }(function (e) {\n          return onChange('layer', e.target.value);\n        }),\n        type: \"range\",\n        id: \"layer\",\n        name: \"layer\",\n        min: 2,\n        step: 1,\n        max: 10\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 21\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(HarmonyPicker, \"v21Z7kOwUb6S6g6chEY66IxALd8=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"]];\n});\n\n_c = HarmonyPicker;\n\nvar _c;\n\n$RefreshReg$(_c, \"HarmonyPicker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGFybW9ueS1waWNrZXIuanM/ZmExNCJdLCJuYW1lcyI6WyJIYXJtb255UGlja2VyIiwidXNlUmVjb2lsU3RhdGUiLCJ3YXZlIiwid2F2ZUVsIiwic2V0V2F2ZUVsIiwiaGFybW9ueUNvbG91cnMiLCJjb2xvdXJzIiwic2V0Q29sb3VycyIsInVzZVN0YXRlIiwiY29sb3VyVHlwZSIsInNldENvbG91clR5cGUiLCJjb2xvdXJzRGF0YSIsImVsZW1lbnRzIiwidGV4dCIsIm5hbWUiLCJvbkNsaWNrIiwiZGF0YVR5cGUiLCJlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLHdCQUNIQyw2REFBYyxDQUFDQyxrREFBRCxDQURYO0FBQUE7QUFBQSxNQUN4QkMsTUFEd0I7QUFBQSxNQUNoQkMsU0FEZ0I7O0FBQUEseUJBRURILDZEQUFjLENBQUNJLDREQUFELENBRmI7QUFBQTtBQUFBLE1BRXhCQyxPQUZ3QjtBQUFBLE1BRWZDLFVBRmU7O0FBQUEsa0JBR0tDLHNEQUFRLENBQUMsUUFBRCxDQUhiO0FBQUEsTUFHeEJDLFVBSHdCO0FBQUEsTUFHWkMsYUFIWTs7QUFLL0IsTUFBTUMsV0FBVyxHQUFHO0FBQ2hCQyxZQUFRLEVBQUUsQ0FDTjtBQUNJQyxVQUFJLEVBQUUsUUFEVjtBQUVJQyxVQUFJLEVBQUUsUUFGVjtBQUdJQyxhQUFPLEVBQUU7QUFBQSxlQUFNTCxhQUFhLENBQUMsUUFBRCxDQUFuQjtBQUFBO0FBSGIsS0FETSxFQU1OO0FBQ0lHLFVBQUksRUFBRSxTQURWO0FBRUlDLFVBQUksRUFBRSxTQUZWO0FBR0lDLGFBQU8sRUFBRTtBQUFBLGVBQU1MLGFBQWEsQ0FBQyxTQUFELENBQW5CO0FBQUE7QUFIYixLQU5NLENBRE07QUFhaEJNLFlBQVEsRUFBRVA7QUFiTSxHQUFwQjtBQWdCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsNEJBQ0kscUVBQUMsc0RBQUQ7QUFBUSxVQUFJLEVBQUVFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUtGLFVBQVUsS0FBSyxTQUFmLGdCQUNHO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsOEJBQ0k7QUFBTyxlQUFPLEVBQUMsYUFBZjtBQUE2QixpQkFBUyxFQUFDLDBCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUk7QUFDSSxpQkFBUyxFQUFDLDBGQURkO0FBRUksYUFBSyxFQUFFSCxPQUZYO0FBR0ksZ0JBQVE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsVUFBRSxVQUFDVyxDQUFEO0FBQUEsaUJBQU9DLFFBQVEsQ0FBQyxPQUFELEVBQVVELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFuQixDQUFmO0FBQUEsU0FBRixDQUhaO0FBSUksWUFBSSxFQUFDLE9BSlQ7QUFLSSxVQUFFLEVBQUMsT0FMUDtBQU1JLFlBQUksRUFBQyxPQU5UO0FBT0ksV0FBRyxFQUFFLENBUFQ7QUFRSSxZQUFJLEVBQUUsQ0FSVjtBQVNJLFdBQUcsRUFBRTtBQVRUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESCxHQWlCRyxJQW5CUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCSCxDQTVDTTs7R0FBTXBCLGE7VUFDbUJDLHFELEVBQ0VBLHFEOzs7S0FGckJELGEiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oYXJtb255LXBpY2tlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuL3Rvb2xiYXIvc2VsZWN0J1xuaW1wb3J0IHsgd2F2ZSwgaGFybW9ueUNvbG91cnMgfSBmcm9tICcuLi9yZWNvaWwvYXRvbXMnXG5cbmV4cG9ydCBjb25zdCBIYXJtb255UGlja2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IFt3YXZlRWwsIHNldFdhdmVFbF0gPSB1c2VSZWNvaWxTdGF0ZSh3YXZlKVxuICAgIGNvbnN0IFtjb2xvdXJzLCBzZXRDb2xvdXJzXSA9IHVzZVJlY29pbFN0YXRlKGhhcm1vbnlDb2xvdXJzKVxuICAgIGNvbnN0IFtjb2xvdXJUeXBlLCBzZXRDb2xvdXJUeXBlXSA9IHVzZVN0YXRlKCdzaW1wbGUnKVxuXG4gICAgY29uc3QgY29sb3Vyc0RhdGEgPSB7XG4gICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1NpbXBsZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NpbXBsZScsXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gc2V0Q29sb3VyVHlwZSgnc2ltcGxlJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ0hhcm1vbnknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdoYXJtb255JyxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRDb2xvdXJUeXBlKCdoYXJtb255JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZGF0YVR5cGU6IGNvbG91clR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byB3LTQvNlwiPlxuICAgICAgICAgICAgPFNlbGVjdCBkYXRhPXtjb2xvdXJzRGF0YX0gLz5cbiAgICAgICAgICAgIHtjb2xvdXJUeXBlID09PSAnaGFybW9ueScgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG15LTMgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaGFybW9ueVR5cGVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbGVmdCBtLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhhcm1vbnkgVHlwZVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMy80IGgtZnVsbCBvdmVyZmxvdy1oaWRkZW4gdGV4dC1jZW50ZXIgcm91bmRlZC1sZyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgcmFuZ2UtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbG91cnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKCdsYXllcicsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxheWVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXllclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/harmony-picker.js\n");

/***/ }),

/***/ "./src/recoil/atoms.js":
/*!*****************************!*\
  !*** ./src/recoil/atoms.js ***!
  \*****************************/
/*! exports provided: wave, colourMode, gradientColours, expanderOpen, theme, themeColours, gradientType, gradientAngle, gradientRadius, flipX, flipY, maxLayers, harmonyColours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wave\", function() { return wave; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colourMode\", function() { return colourMode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gradientColours\", function() { return gradientColours; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expanderOpen\", function() { return expanderOpen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"themeColours\", function() { return themeColours; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gradientType\", function() { return gradientType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gradientAngle\", function() { return gradientAngle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gradientRadius\", function() { return gradientRadius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flipX\", function() { return flipX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flipY\", function() { return flipY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maxLayers\", function() { return maxLayers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"harmonyColours\", function() { return harmonyColours; });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n\nvar wave = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'waveDataKey',\n  \"default\": {\n    type: 'smooth',\n    height: 500,\n    width: 1440,\n    segmentCount: 4,\n    layerCount: 2,\n    variance: 0.75,\n    strokeWidth: 0,\n    fillColour: '#32127a',\n    strokeColour: 'none'\n  }\n});\nvar colourMode = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'colourModeKey',\n  \"default\": 'colour'\n});\nvar gradientColours = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'gradientColoursKey',\n  \"default\": {\n    colour1: '#c81d11',\n    colour2: '#1c39bb'\n  }\n});\nvar gradientType = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'gradientTypeKey',\n  \"default\": 'linear'\n});\nvar gradientAngle = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'gradientAngleKey',\n  \"default\": 0\n});\nvar gradientRadius = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'gradientRadius',\n  \"default\": 0\n});\nvar expanderOpen = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'expanderStatusKey',\n  \"default\": false\n});\nvar theme = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'themeKey',\n  \"default\": 'light'\n});\nvar flipX = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'flipXKey',\n  \"default\": 1\n});\nvar flipY = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'flipYKey',\n  \"default\": 1\n});\nvar themeColours = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'themeColourKey',\n  \"default\": {\n    light: '#fff',\n    dark: '#000'\n  }\n});\nvar maxLayers = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'maxLayersKey',\n  \"default\": 10\n});\nvar harmonyColours = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'harmonyColoursKey',\n  \"default\": 0\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlY29pbC9hdG9tcy5qcz8yMzViIl0sIm5hbWVzIjpbIndhdmUiLCJhdG9tIiwia2V5IiwidHlwZSIsImhlaWdodCIsIndpZHRoIiwic2VnbWVudENvdW50IiwibGF5ZXJDb3VudCIsInZhcmlhbmNlIiwic3Ryb2tlV2lkdGgiLCJmaWxsQ29sb3VyIiwic3Ryb2tlQ29sb3VyIiwiY29sb3VyTW9kZSIsImdyYWRpZW50Q29sb3VycyIsImNvbG91cjEiLCJjb2xvdXIyIiwiZ3JhZGllbnRUeXBlIiwiZ3JhZGllbnRBbmdsZSIsImdyYWRpZW50UmFkaXVzIiwiZXhwYW5kZXJPcGVuIiwidGhlbWUiLCJmbGlwWCIsImZsaXBZIiwidGhlbWVDb2xvdXJzIiwibGlnaHQiLCJkYXJrIiwibWF4TGF5ZXJzIiwiaGFybW9ueUNvbG91cnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxtREFBSSxDQUFDO0FBQ2RDLEtBQUcsRUFBRSxhQURTO0FBRWQsYUFBUztBQUNMQyxRQUFJLEVBQUUsUUFERDtBQUVMQyxVQUFNLEVBQUUsR0FGSDtBQUdMQyxTQUFLLEVBQUUsSUFIRjtBQUlMQyxnQkFBWSxFQUFFLENBSlQ7QUFLTEMsY0FBVSxFQUFFLENBTFA7QUFNTEMsWUFBUSxFQUFFLElBTkw7QUFPTEMsZUFBVyxFQUFFLENBUFI7QUFRTEMsY0FBVSxFQUFFLFNBUlA7QUFTTEMsZ0JBQVksRUFBRTtBQVRUO0FBRkssQ0FBRCxDQUFqQjtBQWVBLElBQU1DLFVBQVUsR0FBR1gsbURBQUksQ0FBQztBQUNwQkMsS0FBRyxFQUFFLGVBRGU7QUFFcEIsYUFBUztBQUZXLENBQUQsQ0FBdkI7QUFLQSxJQUFNVyxlQUFlLEdBQUdaLG1EQUFJLENBQUM7QUFDekJDLEtBQUcsRUFBRSxvQkFEb0I7QUFFekIsYUFBUztBQUNMWSxXQUFPLEVBQUUsU0FESjtBQUVMQyxXQUFPLEVBQUU7QUFGSjtBQUZnQixDQUFELENBQTVCO0FBUUEsSUFBTUMsWUFBWSxHQUFHZixtREFBSSxDQUFDO0FBQ3RCQyxLQUFHLEVBQUUsaUJBRGlCO0FBRXRCLGFBQVM7QUFGYSxDQUFELENBQXpCO0FBS0EsSUFBTWUsYUFBYSxHQUFHaEIsbURBQUksQ0FBQztBQUN2QkMsS0FBRyxFQUFFLGtCQURrQjtBQUV2QixhQUFTO0FBRmMsQ0FBRCxDQUExQjtBQUtBLElBQU1nQixjQUFjLEdBQUdqQixtREFBSSxDQUFDO0FBQ3hCQyxLQUFHLEVBQUUsZ0JBRG1CO0FBRXhCLGFBQVM7QUFGZSxDQUFELENBQTNCO0FBS0EsSUFBTWlCLFlBQVksR0FBR2xCLG1EQUFJLENBQUM7QUFDdEJDLEtBQUcsRUFBRSxtQkFEaUI7QUFFdEIsYUFBUztBQUZhLENBQUQsQ0FBekI7QUFLQSxJQUFNa0IsS0FBSyxHQUFHbkIsbURBQUksQ0FBQztBQUNmQyxLQUFHLEVBQUUsVUFEVTtBQUVmLGFBQVM7QUFGTSxDQUFELENBQWxCO0FBS0EsSUFBTW1CLEtBQUssR0FBR3BCLG1EQUFJLENBQUM7QUFDZkMsS0FBRyxFQUFFLFVBRFU7QUFFZixhQUFTO0FBRk0sQ0FBRCxDQUFsQjtBQUtBLElBQU1vQixLQUFLLEdBQUdyQixtREFBSSxDQUFDO0FBQ2ZDLEtBQUcsRUFBRSxVQURVO0FBRWYsYUFBUztBQUZNLENBQUQsQ0FBbEI7QUFLQSxJQUFNcUIsWUFBWSxHQUFHdEIsbURBQUksQ0FBQztBQUN0QkMsS0FBRyxFQUFFLGdCQURpQjtBQUV0QixhQUFTO0FBQ0xzQixTQUFLLEVBQUUsTUFERjtBQUVMQyxRQUFJLEVBQUU7QUFGRDtBQUZhLENBQUQsQ0FBekI7QUFRQSxJQUFNQyxTQUFTLEdBQUd6QixtREFBSSxDQUFDO0FBQ25CQyxLQUFHLEVBQUUsY0FEYztBQUVuQixhQUFTO0FBRlUsQ0FBRCxDQUF0QjtBQUtBLElBQU15QixjQUFjLEdBQUcxQixtREFBSSxDQUFDO0FBQ3hCQyxLQUFHLEVBQUUsbUJBRG1CO0FBRXhCLGFBQVM7QUFGZSxDQUFELENBQTNCO0FBS0EiLCJmaWxlIjoiLi9zcmMvcmVjb2lsL2F0b21zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gJ3JlY29pbCdcblxuY29uc3Qgd2F2ZSA9IGF0b20oe1xuICAgIGtleTogJ3dhdmVEYXRhS2V5JyxcbiAgICBkZWZhdWx0OiB7XG4gICAgICAgIHR5cGU6ICdzbW9vdGgnLFxuICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgd2lkdGg6IDE0NDAsXG4gICAgICAgIHNlZ21lbnRDb3VudDogNCxcbiAgICAgICAgbGF5ZXJDb3VudDogMixcbiAgICAgICAgdmFyaWFuY2U6IDAuNzUsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgICAgICBmaWxsQ29sb3VyOiAnIzMyMTI3YScsXG4gICAgICAgIHN0cm9rZUNvbG91cjogJ25vbmUnXG4gICAgfVxufSlcblxuY29uc3QgY29sb3VyTW9kZSA9IGF0b20oe1xuICAgIGtleTogJ2NvbG91ck1vZGVLZXknLFxuICAgIGRlZmF1bHQ6ICdjb2xvdXInXG59KVxuXG5jb25zdCBncmFkaWVudENvbG91cnMgPSBhdG9tKHtcbiAgICBrZXk6ICdncmFkaWVudENvbG91cnNLZXknLFxuICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29sb3VyMTogJyNjODFkMTEnLFxuICAgICAgICBjb2xvdXIyOiAnIzFjMzliYidcbiAgICB9XG59KVxuXG5jb25zdCBncmFkaWVudFR5cGUgPSBhdG9tKHtcbiAgICBrZXk6ICdncmFkaWVudFR5cGVLZXknLFxuICAgIGRlZmF1bHQ6ICdsaW5lYXInXG59KVxuXG5jb25zdCBncmFkaWVudEFuZ2xlID0gYXRvbSh7XG4gICAga2V5OiAnZ3JhZGllbnRBbmdsZUtleScsXG4gICAgZGVmYXVsdDogMFxufSlcblxuY29uc3QgZ3JhZGllbnRSYWRpdXMgPSBhdG9tKHtcbiAgICBrZXk6ICdncmFkaWVudFJhZGl1cycsXG4gICAgZGVmYXVsdDogMFxufSlcblxuY29uc3QgZXhwYW5kZXJPcGVuID0gYXRvbSh7XG4gICAga2V5OiAnZXhwYW5kZXJTdGF0dXNLZXknLFxuICAgIGRlZmF1bHQ6IGZhbHNlXG59KVxuXG5jb25zdCB0aGVtZSA9IGF0b20oe1xuICAgIGtleTogJ3RoZW1lS2V5JyxcbiAgICBkZWZhdWx0OiAnbGlnaHQnXG59KVxuXG5jb25zdCBmbGlwWCA9IGF0b20oe1xuICAgIGtleTogJ2ZsaXBYS2V5JyxcbiAgICBkZWZhdWx0OiAxXG59KVxuXG5jb25zdCBmbGlwWSA9IGF0b20oe1xuICAgIGtleTogJ2ZsaXBZS2V5JyxcbiAgICBkZWZhdWx0OiAxXG59KVxuXG5jb25zdCB0aGVtZUNvbG91cnMgPSBhdG9tKHtcbiAgICBrZXk6ICd0aGVtZUNvbG91cktleScsXG4gICAgZGVmYXVsdDoge1xuICAgICAgICBsaWdodDogJyNmZmYnLFxuICAgICAgICBkYXJrOiAnIzAwMCdcbiAgICB9XG59KVxuXG5jb25zdCBtYXhMYXllcnMgPSBhdG9tKHtcbiAgICBrZXk6ICdtYXhMYXllcnNLZXknLFxuICAgIGRlZmF1bHQ6IDEwXG59KVxuXG5jb25zdCBoYXJtb255Q29sb3VycyA9IGF0b20oe1xuICAgIGtleTogJ2hhcm1vbnlDb2xvdXJzS2V5JyxcbiAgICBkZWZhdWx0OiAwXG59KVxuXG5leHBvcnQge1xuICAgIHdhdmUsXG4gICAgY29sb3VyTW9kZSxcbiAgICBncmFkaWVudENvbG91cnMsXG4gICAgZXhwYW5kZXJPcGVuLFxuICAgIHRoZW1lLFxuICAgIHRoZW1lQ29sb3VycyxcbiAgICBncmFkaWVudFR5cGUsXG4gICAgZ3JhZGllbnRBbmdsZSxcbiAgICBncmFkaWVudFJhZGl1cyxcbiAgICBmbGlwWCxcbiAgICBmbGlwWSxcbiAgICBtYXhMYXllcnMsXG4gICAgaGFybW9ueUNvbG91cnNcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/recoil/atoms.js\n");

/***/ })

})