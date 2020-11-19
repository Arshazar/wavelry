webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/colour-picker.js":
/*!*****************************************!*\
  !*** ./src/components/colour-picker.js ***!
  \*****************************************/
/*! exports provided: ColourPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColourPicker\", function() { return ColourPicker; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recoil/atoms */ \"./src/recoil/atoms.js\");\n/* harmony import */ var _harmony_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./harmony-picker */ \"./src/components/harmony-picker.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/arsha/Desktop/isvg/src/components/colour-picker.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar ColourPicker = function ColourPicker(_ref) {\n  _s();\n\n  var colourType = _ref.colourType;\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_4__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_5__[\"wave\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useRecoilState, 2),\n      waveEl = _useRecoilState2[0],\n      setWaveEl = _useRecoilState2[1];\n\n  var _useRecoilState3 = Object(recoil__WEBPACK_IMPORTED_MODULE_4__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_5__[\"gradientColours\"]),\n      _useRecoilState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useRecoilState3, 2),\n      colours = _useRecoilState4[0],\n      setColours = _useRecoilState4[1];\n\n  var handleColour = function handleColour(target, value) {\n    switch (target) {\n      case 1:\n        setColours(_objectSpread(_objectSpread({}, colours), {}, {\n          colour1: value\n        }));\n        break;\n\n      case 2:\n        setColours(_objectSpread(_objectSpread({}, colours), {}, {\n          colour2: value\n        }));\n        break;\n\n      default:\n        setWaveEl(_objectSpread(_objectSpread({}, waveEl), {}, {\n          fillColour: value\n        }));\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"flex justify-center my-3 mt-2\",\n    children: colourType === 'gradient' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"color\",\n        name: \"colour1\",\n        className: \"w-50\",\n        value: colours.colour1,\n        onChange: function onChange(e) {\n          return handleColour(1, e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"color\",\n        name: \"colour2\",\n        className: \"w-50\",\n        value: colours.colour2,\n        onChange: function onChange(e) {\n          return handleColour(2, e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 21\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col justify-center items-center w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"color\",\n        name: \"colour\",\n        className: \"my-3\",\n        value: waveEl.fillColour,\n        onChange: function onChange(e) {\n          return handleColour(0, e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_harmony_picker__WEBPACK_IMPORTED_MODULE_6__[\"HarmonyPicker\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 21\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ColourPicker, \"YQeFztO3wdrgfv+v+Zz3KOOkzcw=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_4__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_4__[\"useRecoilState\"]];\n});\n\n_c = ColourPicker;\n\nvar _c;\n\n$RefreshReg$(_c, \"ColourPicker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29sb3VyLXBpY2tlci5qcz80YzdiIl0sIm5hbWVzIjpbIkNvbG91clBpY2tlciIsImNvbG91clR5cGUiLCJ1c2VSZWNvaWxTdGF0ZSIsIndhdmUiLCJ3YXZlRWwiLCJzZXRXYXZlRWwiLCJncmFkaWVudENvbG91cnMiLCJjb2xvdXJzIiwic2V0Q29sb3VycyIsImhhbmRsZUNvbG91ciIsInRhcmdldCIsInZhbHVlIiwiY29sb3VyMSIsImNvbG91cjIiLCJmaWxsQ29sb3VyIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsd0JBQ2hCQyw2REFBYyxDQUFDQyxrREFBRCxDQURFO0FBQUE7QUFBQSxNQUNyQ0MsTUFEcUM7QUFBQSxNQUM3QkMsU0FENkI7O0FBQUEseUJBRWRILDZEQUFjLENBQUNJLDZEQUFELENBRkE7QUFBQTtBQUFBLE1BRXJDQyxPQUZxQztBQUFBLE1BRTVCQyxVQUY0Qjs7QUFJNUMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQ3BDLFlBQVFELE1BQVI7QUFDSSxXQUFLLENBQUw7QUFDSUYsa0JBQVUsaUNBQU1ELE9BQU47QUFBZUssaUJBQU8sRUFBRUQ7QUFBeEIsV0FBVjtBQUNBOztBQUNKLFdBQUssQ0FBTDtBQUNJSCxrQkFBVSxpQ0FBTUQsT0FBTjtBQUFlTSxpQkFBTyxFQUFFRjtBQUF4QixXQUFWO0FBQ0E7O0FBQ0o7QUFDSU4saUJBQVMsaUNBQU1ELE1BQU47QUFBY1Usb0JBQVUsRUFBRUg7QUFBMUIsV0FBVDtBQVJSO0FBVUgsR0FYRDs7QUFhQSxzQkFDSTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBLGNBQ0tWLFVBQVUsS0FBSyxVQUFmLGdCQUNHO0FBQUEsOEJBQ0k7QUFDSSxZQUFJLEVBQUMsT0FEVDtBQUVJLFlBQUksRUFBQyxTQUZUO0FBR0ksaUJBQVMsRUFBQyxNQUhkO0FBSUksYUFBSyxFQUFFTSxPQUFPLENBQUNLLE9BSm5CO0FBS0ksZ0JBQVEsRUFBRSxrQkFBQ0csQ0FBRDtBQUFBLGlCQUFPTixZQUFZLENBQUMsQ0FBRCxFQUFJTSxDQUFDLENBQUNMLE1BQUYsQ0FBU0MsS0FBYixDQUFuQjtBQUFBO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBUUk7QUFDSSxZQUFJLEVBQUMsT0FEVDtBQUVJLFlBQUksRUFBQyxTQUZUO0FBR0ksaUJBQVMsRUFBQyxNQUhkO0FBSUksYUFBSyxFQUFFSixPQUFPLENBQUNNLE9BSm5CO0FBS0ksZ0JBQVEsRUFBRSxrQkFBQ0UsQ0FBRDtBQUFBLGlCQUFPTixZQUFZLENBQUMsQ0FBRCxFQUFJTSxDQUFDLENBQUNMLE1BQUYsQ0FBU0MsS0FBYixDQUFuQjtBQUFBO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKO0FBQUEsb0JBREgsZ0JBa0JHO0FBQUssZUFBUyxFQUFDLGtEQUFmO0FBQUEsOEJBQ0k7QUFDSSxZQUFJLEVBQUMsT0FEVDtBQUVJLFlBQUksRUFBQyxRQUZUO0FBR0ksaUJBQVMsRUFBQyxNQUhkO0FBSUksYUFBSyxFQUFFUCxNQUFNLENBQUNVLFVBSmxCO0FBS0ksZ0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGlCQUFPTixZQUFZLENBQUMsQ0FBRCxFQUFJTSxDQUFDLENBQUNMLE1BQUYsQ0FBU0MsS0FBYixDQUFuQjtBQUFBO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBUUkscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQ0gsQ0FsRE07O0dBQU1YLFk7VUFDbUJFLHFELEVBQ0VBLHFEOzs7S0FGckJGLFkiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb2xvdXItcGlja2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgeyB3YXZlLCBncmFkaWVudENvbG91cnMgfSBmcm9tICcuLi9yZWNvaWwvYXRvbXMnXG5pbXBvcnQgeyBIYXJtb255UGlja2VyIH0gZnJvbSAnLi9oYXJtb255LXBpY2tlcidcblxuZXhwb3J0IGNvbnN0IENvbG91clBpY2tlciA9ICh7IGNvbG91clR5cGUgfSkgPT4ge1xuICAgIGNvbnN0IFt3YXZlRWwsIHNldFdhdmVFbF0gPSB1c2VSZWNvaWxTdGF0ZSh3YXZlKVxuICAgIGNvbnN0IFtjb2xvdXJzLCBzZXRDb2xvdXJzXSA9IHVzZVJlY29pbFN0YXRlKGdyYWRpZW50Q29sb3VycylcblxuICAgIGNvbnN0IGhhbmRsZUNvbG91ciA9ICh0YXJnZXQsIHZhbHVlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGFyZ2V0KSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgc2V0Q29sb3Vycyh7IC4uLmNvbG91cnMsIGNvbG91cjE6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBzZXRDb2xvdXJzKHsgLi4uY29sb3VycywgY29sb3VyMjogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzZXRXYXZlRWwoeyAuLi53YXZlRWwsIGZpbGxDb2xvdXI6IHZhbHVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXktMyBtdC0yXCI+XG4gICAgICAgICAgICB7Y29sb3VyVHlwZSA9PT0gJ2dyYWRpZW50JyA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29sb3VyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb2xvdXJzLmNvbG91cjF9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNvbG91cigxLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb2xvdXIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbG91cnMuY29sb3VyMn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ29sb3VyKDIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbG91clwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3YXZlRWwuZmlsbENvbG91cn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ29sb3VyKDAsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEhhcm1vbnlQaWNrZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/colour-picker.js\n");

/***/ })

})