webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "D:\\Next_Js\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var HomePage = function HomePage(_ref) {
  _s();

  var meetups = _ref.meetups;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(false);
  }, []);
  return;

  /*#__PURE__*/
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a huge list of highly active React meetups!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_s(HomePage, "J7PPXooW06IQ11rfabbvgk72KFw=");

_c = HomePage;

var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
    loading = _useState2[0],
    setLoading = _useState2[1];

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwibWVldHVwcyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUNGQyxzREFBUSxDQUFDLElBQUQsQ0FETjtBQUFBLE1BQ3pCQyxPQUR5QjtBQUFBLE1BQ2hCQyxVQURnQjs7QUFFaENDLHlEQUFTLENBQUMsWUFBSTtBQUNaRCxjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUdBOztBQUVBO0FBQUE7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBUUdELE9BQU8saUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJkLGVBU0UscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVGO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBV0QsQ0FsQkQ7O0dBQU1ELFE7O0tBQUFBLFE7O2lCQW1Cd0JFLHNEQUFRLENBQUMsSUFBRCxDO0lBQS9CQyxPO0lBQVNDLFU7OztBQUVESix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZTI0ZjhhMDNlMjQ0YjQ0YThjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmNvbnN0IEhvbWVQYWdlID0gKHsgbWVldHVwcyB9KSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH0sW10pXHJcbiAgcmV0dXJuO1xyXG5cclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5SZWFjdCBNZWV0dXBzPC90aXRsZT5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9XCJCcm93c2UgYSBodWdlIGxpc3Qgb2YgaGlnaGx5IGFjdGl2ZSBSZWFjdCBtZWV0dXBzIVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICB7bG9hZGluZyAmJiA8cD48L3A+fVxyXG4gICAgPE1lZXR1cExpc3QgbWVldHVwcz17bWVldHVwc30gLz5cclxuICA8Lz47XHJcbn07XHJcbmNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG4gIGNvbnN0IG1lZXR1cHNEYXRhID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuICBjb25zdCBtZWV0dXBzID0gbWVldHVwc0RhdGEucmV2ZXJzZSgpO1xyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG4gIGNvbnN0IHNpbmdsZU1lZXR1cERhdGEgPSBtZWV0dXBzLm1hcCgoZXZlbnQpID0+ICh7XHJcbiAgICBpZDogZXZlbnQuX2lkLnRvU3RyaW5nKCksXHJcbiAgICB0aXRsZTogZXZlbnQudGl0bGUsXHJcbiAgICBpbWFnZTogZXZlbnQuaW1hZ2UsXHJcbiAgICBhZGRyZXNzOiBldmVudC5hZGRyZXNzLFxyXG4gIH0pKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogc2luZ2xlTWVldHVwRGF0YSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=