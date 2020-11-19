webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/randomiser/index.js":
/*!********************************************!*\
  !*** ./src/components/randomiser/index.js ***!
  \********************************************/
/*! exports provided: Randomiser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Randomiser\", function() { return Randomiser; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../recoil/atoms */ \"./src/recoil/atoms.js\");\n/* harmony import */ var _svg_wave_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../svg/wave/wave */ \"./src/components/svg/wave/wave.js\");\n\n\n\n\nvar _jsxFileName = \"/home/arsha/Desktop/isvg/src/components/randomiser/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Randomiser = function Randomiser() {\n  _s();\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_4__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_5__[\"theme\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useRecoilState, 2),\n      themeEl = _useRecoilState2[0],\n      setThemeEl = _useRecoilState2[1];\n\n  var _useRecoilState3 = Object(recoil__WEBPACK_IMPORTED_MODULE_4__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_5__[\"wave\"]),\n      _useRecoilState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useRecoilState3, 2),\n      waveEl = _useRecoilState4[0],\n      setWaveEl = _useRecoilState4[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      animate = _useState[0],\n      setAnimate = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (document) {\n      document.addEventListener('keydown', function (e) {\n        if (e.code === 'Space') {\n          setAnimate(true);\n        }\n      });\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (animate) {\n      setWaveEl(_objectSpread({}, waveEl));\n      setAnimate(false);\n    }\n  }, [animate]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"flex absolute z-0 w-full mt-20\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex relative flex-col m-auto z-10 sm:w-5/6 md:w-full text-center p-2\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"font-extralight text-xl mb-3 cursor-default randomiser-text\",\n        style: {\n          color: themeEl === 'light' ? '#000' : '#fff',\n          filter: 'brightness(0.7)',\n          mixBlendMode: 'difference'\n        },\n        children: \"Press space bar to randomise a wave\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Randomiser, \"ha1xCwtFA+58uBwXQbJ0kWGiZvU=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_4__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_4__[\"useRecoilState\"]];\n});\n\n_c = Randomiser;\n\nvar _c;\n\n$RefreshReg$(_c, \"Randomiser\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcmFuZG9taXNlci9pbmRleC5qcz9mZmEwIl0sIm5hbWVzIjpbIlJhbmRvbWlzZXIiLCJ1c2VSZWNvaWxTdGF0ZSIsInRoZW1lIiwidGhlbWVFbCIsInNldFRoZW1lRWwiLCJ3YXZlIiwid2F2ZUVsIiwic2V0V2F2ZUVsIiwidXNlU3RhdGUiLCJhbmltYXRlIiwic2V0QW5pbWF0ZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwiY29sb3IiLCJmaWx0ZXIiLCJtaXhCbGVuZE1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsd0JBQ0VDLDZEQUFjLENBQUNDLG1EQUFELENBRGhCO0FBQUE7QUFBQSxNQUNyQkMsT0FEcUI7QUFBQSxNQUNaQyxVQURZOztBQUFBLHlCQUVBSCw2REFBYyxDQUFDSSxrREFBRCxDQUZkO0FBQUE7QUFBQSxNQUVyQkMsTUFGcUI7QUFBQSxNQUViQyxTQUZhOztBQUFBLGtCQUdFQyxzREFBUSxDQUFDLEtBQUQsQ0FIVjtBQUFBLE1BR3JCQyxPQUhxQjtBQUFBLE1BR1pDLFVBSFk7O0FBSzVCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxRQUFKLEVBQWM7QUFDVkEsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDQyxDQUFELEVBQU87QUFDeEMsWUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEtBQVcsT0FBZixFQUF3QjtBQUNwQkwsb0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDSDtBQUNKLE9BSkQ7QUFLSDtBQUNKLEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUYsT0FBSixFQUFhO0FBQ1RGLGVBQVMsbUJBQU1ELE1BQU4sRUFBVDtBQUNBSSxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNIO0FBQ0osR0FMUSxFQUtOLENBQUNELE9BQUQsQ0FMTSxDQUFUO0FBT0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyx1RUFBZjtBQUFBLDZCQUNJO0FBQ0ksaUJBQVMsRUFBQyw2REFEZDtBQUVJLGFBQUssRUFBRTtBQUNITyxlQUFLLEVBQUViLE9BQU8sS0FBSyxPQUFaLEdBQXNCLE1BQXRCLEdBQStCLE1BRG5DO0FBRUhjLGdCQUFNLEVBQUUsaUJBRkw7QUFHSEMsc0JBQVksRUFBRTtBQUhYLFNBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0FyQ007O0dBQU1sQixVO1VBQ3FCQyxxRCxFQUNGQSxxRDs7O0tBRm5CRCxVIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvcmFuZG9taXNlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCdcbmltcG9ydCB7IHRoZW1lLCB3YXZlIH0gZnJvbSAnLi4vLi4vcmVjb2lsL2F0b21zJ1xuaW1wb3J0IHsgV2F2ZXJ5IH0gZnJvbSAnLi4vc3ZnL3dhdmUvd2F2ZSdcblxuZXhwb3J0IGNvbnN0IFJhbmRvbWlzZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3RoZW1lRWwsIHNldFRoZW1lRWxdID0gdXNlUmVjb2lsU3RhdGUodGhlbWUpXG4gICAgY29uc3QgW3dhdmVFbCwgc2V0V2F2ZUVsXSA9IHVzZVJlY29pbFN0YXRlKHdhdmUpXG4gICAgY29uc3QgW2FuaW1hdGUsIHNldEFuaW1hdGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QW5pbWF0ZSh0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgICBzZXRXYXZlRWwoeyAuLi53YXZlRWwgfSlcbiAgICAgICAgICAgIHNldEFuaW1hdGUoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9LCBbYW5pbWF0ZV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgei0wIHctZnVsbCBtdC0yMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJlbGF0aXZlIGZsZXgtY29sIG0tYXV0byB6LTEwIHNtOnctNS82IG1kOnctZnVsbCB0ZXh0LWNlbnRlciBwLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFsaWdodCB0ZXh0LXhsIG1iLTMgY3Vyc29yLWRlZmF1bHQgcmFuZG9taXNlci10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZUVsID09PSAnbGlnaHQnID8gJyMwMDAnIDogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiAnYnJpZ2h0bmVzcygwLjcpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogJ2RpZmZlcmVuY2UnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBQcmVzcyBzcGFjZSBiYXIgdG8gcmFuZG9taXNlIGEgd2F2ZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/randomiser/index.js\n");

/***/ })

})