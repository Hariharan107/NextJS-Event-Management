webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.jsx":
/*!************************************!*\
  !*** ./pages/[meetupId]/index.jsx ***!
  \************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ "./components/meetups/MeetupDetails.jsx");



var _jsxFileName = "D:\\Next_Js\\06-onwards-to-a-bigger-project-starting-project\\pages\\[meetupId]\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var index = function index(_ref) {
  _s();

  var _ref$meetupData = _ref.meetupData,
      image = _ref$meetupData.image,
      title = _ref$meetupData.title,
      address = _ref$meetupData.address,
      description = _ref$meetupData.description;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {}, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: image,
      title: title,
      address: address,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(index, "J7PPXooW06IQ11rfabbvgk72KFw=");

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (index);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qc3giXSwibmFtZXMiOlsiaW5kZXgiLCJtZWV0dXBEYXRhIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBNEQ7QUFBQTs7QUFBQSw2QkFBekRDLFVBQXlEO0FBQUEsTUFBM0NDLEtBQTJDLG1CQUEzQ0EsS0FBMkM7QUFBQSxNQUFwQ0MsS0FBb0MsbUJBQXBDQSxLQUFvQztBQUFBLE1BQTdCQyxPQUE2QixtQkFBN0JBLE9BQTZCO0FBQUEsTUFBcEJDLFdBQW9CLG1CQUFwQkEsV0FBb0I7O0FBQUEsa0JBQzFDQyxzREFBUSxDQUFDLElBQUQsQ0FEa0M7QUFBQSxNQUNqRUMsT0FEaUU7QUFBQSxNQUN4REMsVUFEd0Q7O0FBRXhFQyx5REFBUyxDQUFDLFlBQUksQ0FBRSxDQUFQLEVBQVEsRUFBUixDQUFUO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFOO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFLHFFQUFDLHlFQUFEO0FBQ0UsV0FBSyxFQUFFSCxLQURUO0FBRUUsV0FBSyxFQUFFQyxLQUZUO0FBR0UsYUFBTyxFQUFFQyxPQUhYO0FBSUUsaUJBQVcsRUFBRUM7QUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQSxrQkFERjtBQWNELENBakJEOztHQUFNTCxLOzs7QUFtQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1ttZWV0dXBJZF0uMWIxYzRlYWFmZWZmMzEyMzNiOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lZXR1cERldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxzXCI7XHJcbmNvbnN0IGluZGV4ID0gKHsgbWVldHVwRGF0YTogeyBpbWFnZSwgdGl0bGUsIGFkZHJlc3MsIGRlc2NyaXB0aW9uIH0gfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIHVzZUVmZmVjdCgoKT0+e30sW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVldHVwRGV0YWlsc1xyXG4gICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgYWRkcmVzcz17YWRkcmVzc31cclxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG4gIGNvbnN0IG1lZXR1cHNEYXRhID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xyXG4gIGNvbnN0IHNpbmdsZU1lZXR1cERhdGEgPSBtZWV0dXBzRGF0YS5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogc2luZ2xlTWVldHVwRGF0YSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgbWVldHVwSWQgfSA9IGNvbnRleHQucGFyYW1zO1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwpO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICBjb25zdCBtZWV0dXBEYXRhID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICBfaWQ6IG5ldyBPYmplY3RJZChtZWV0dXBJZCksXHJcbiAgfSk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgaWQ6IG1lZXR1cERhdGEuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cERhdGEudGl0bGUsXHJcbiAgICAgICAgaW1hZ2U6IG1lZXR1cERhdGEuaW1hZ2UsXHJcbiAgICAgICAgYWRkcmVzczogbWVldHVwRGF0YS5hZGRyZXNzLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBtZWV0dXBEYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9