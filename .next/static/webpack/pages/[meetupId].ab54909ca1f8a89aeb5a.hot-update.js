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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setLoading(false);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      style: {
        textAlign: "center"
      },
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: image,
      title: title,
      address: address,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 8
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qc3giXSwibmFtZXMiOlsiaW5kZXgiLCJtZWV0dXBEYXRhIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBNEQ7QUFBQTs7QUFBQSw2QkFBekRDLFVBQXlEO0FBQUEsTUFBM0NDLEtBQTJDLG1CQUEzQ0EsS0FBMkM7QUFBQSxNQUFwQ0MsS0FBb0MsbUJBQXBDQSxLQUFvQztBQUFBLE1BQTdCQyxPQUE2QixtQkFBN0JBLE9BQTZCO0FBQUEsTUFBcEJDLFdBQW9CLG1CQUFwQkEsV0FBb0I7O0FBQUEsa0JBQzFDQyxzREFBUSxDQUFDLElBQUQsQ0FEa0M7QUFBQSxNQUNqRUMsT0FEaUU7QUFBQSxNQUN4REMsVUFEd0Q7O0FBRXhFQyx5REFBUyxDQUFDLFlBQUk7QUFDWkQsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBRlEsRUFFUCxFQUZPLENBQVQ7QUFHQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBUUw7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBRUU7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBS0dFLE9BQU8saUJBQUk7QUFBSSxXQUFLLEVBQUU7QUFBRUcsaUJBQVMsRUFBRTtBQUFiLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMZCxlQU1HLHFFQUFDLHlFQUFEO0FBQ0MsV0FBSyxFQUFFUixLQURSO0FBRUMsV0FBSyxFQUFFQyxLQUZSO0FBR0MsYUFBTyxFQUFFQyxPQUhWO0FBSUMsaUJBQVcsRUFBRUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkg7QUFBQSxrQkFERjtBQWVELENBcEJEOztHQUFNTCxLOzs7QUFzQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1ttZWV0dXBJZF0uYWI1NDkwOWNhMWY4YTg5YWViNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lZXR1cERldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxzXCI7XHJcbmNvbnN0IGluZGV4ID0gKHsgbWVldHVwRGF0YTogeyBpbWFnZSwgdGl0bGUsIGFkZHJlc3MsIGRlc2NyaXB0aW9uIH0gfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAge2xvYWRpbmcgJiYgPGgzIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5Mb2FkaW5nLi4uPC9oMz59XHJcbiAgICAgIHs8TWVldHVwRGV0YWlsc1xyXG4gICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgYWRkcmVzcz17YWRkcmVzc31cclxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgIC8+fVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwpO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICBjb25zdCBtZWV0dXBzRGF0YSA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcclxuICBjb25zdCBzaW5nbGVNZWV0dXBEYXRhID0gbWVldHVwc0RhdGEubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHNpbmdsZU1lZXR1cERhdGEsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IG1lZXR1cElkIH0gPSBjb250ZXh0LnBhcmFtcztcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcbiAgY29uc3QgbWVldHVwRGF0YSA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe1xyXG4gICAgX2lkOiBuZXcgT2JqZWN0SWQobWVldHVwSWQpLFxyXG4gIH0pO1xyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwRGF0YToge1xyXG4gICAgICAgIGlkOiBtZWV0dXBEYXRhLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOiBtZWV0dXBEYXRhLnRpdGxlLFxyXG4gICAgICAgIGltYWdlOiBtZWV0dXBEYXRhLmltYWdlLFxyXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cERhdGEuYWRkcmVzcyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogbWVldHVwRGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==