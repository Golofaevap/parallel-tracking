"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/buildContent";
exports.ids = ["pages/api/buildContent"];
exports.modules = {

/***/ "./pages/api/buildContent.js":
/*!***********************************!*\
  !*** ./pages/api/buildContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst content = __webpack_require__(/*! ../../siteContent.json */ \"./siteContent.json\");\nconsole.log(content);\nfunction handler(req, res) {\n    const { clickId , curl  } = req.query;\n    res.status(200).json({\n        ok: true,\n        siteContent: content.example\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYnVpbGRDb250ZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxrREFBd0I7QUFFaERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPO0FBRUosUUFBUSxDQUFDSSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDdkMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxHQUFFQyxJQUFJLEVBQUMsQ0FBQyxHQUFHSCxHQUFHLENBQUNJLEtBQUs7SUFFbkNILEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFBQ0MsRUFBRSxFQUFFLElBQUk7UUFBRUMsV0FBVyxFQUFFYixPQUFPLENBQUNjLE9BQU87SUFBQyxDQUFDO0FBQ25FLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXdlYnNvY2tldC8uL3BhZ2VzL2FwaS9idWlsZENvbnRlbnQuanM/OWY3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50ID0gcmVxdWlyZShcIi4uLy4uL3NpdGVDb250ZW50Lmpzb25cIik7XG5cbmNvbnNvbGUubG9nKGNvbnRlbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyBjbGlja0lkLCBjdXJsIH0gPSByZXEucXVlcnk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG9rOiB0cnVlLCBzaXRlQ29udGVudDogY29udGVudC5leGFtcGxlIH0pO1xufVxuIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGlja0lkIiwiY3VybCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsIm9rIiwic2l0ZUNvbnRlbnQiLCJleGFtcGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/buildContent.js\n");

/***/ }),

/***/ "./siteContent.json":
/*!**************************!*\
  !*** ./siteContent.json ***!
  \**************************/
/***/ ((module) => {

module.exports = JSON.parse('{"example":[{"blockType":"header1","title":"Here is example of safe page content","subtitle":"Here you can add any idea you want","button":{"isEnabled":true,"text":"123","url":""},"imgUrl":"https://a.d-cd.net/lTeQ3NmRYqLAahrVXAitIwPrv60-1920.jpg","wrOpts":{"main":3,"header":2}},{"blockType":"header1","title":"Here is example of safe page content","subtitle":"Here you can add any idea you want","button":{"isEnabled":true,"text":"123","url":""},"imgUrl":"","wrOpts":{"main":3,"header":2}},{"blockType":"header2","title":"Here is example of safe page content","subtitle":"Here you can add any idea you want","button":{"isEnabled":true,"text":"Click this button","url":""},"imgUrl":"https://a.d-cd.net/lTeQ3NmRYqLAahrVXAitIwPrv60-1920.jpg","wrOpts":{"main":3,"header":2}}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/buildContent.js"));
module.exports = __webpack_exports__;

})();