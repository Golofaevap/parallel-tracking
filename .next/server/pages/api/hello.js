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
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "pusher":
/*!*************************!*\
  !*** external "pusher" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("pusher");

/***/ }),

/***/ "./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst Pusher = __webpack_require__(/*! pusher */ \"pusher\");\nconst pusher = new Pusher({\n    appId: \"1293290\",\n    key: \"ff28efbd675796f2529b\",\n    secret: \"a20becc1a87a9f48feb3\",\n    cluster: \"eu\",\n    useTLS: true\n});\n// import { WebSocketServer } from 'ws';\n// const wss = new WebSocketServer({ port: 3000 });\n// wss.on('connection', function connection(ws) {\n//   console.log('New user has been connected...');\n//   ws.send('Welcome new user');\n//   ws.on('message', function incoming(message) {\n//     console.log('received: %s', message);\n//     ws.send('We got your message....');\n//   });\n// });\nfunction handler(req, res) {\n    const { clickId  } = req.query;\n    pusher.trigger(\"my-channel-1\", \"my-event\", {\n        text: \"hello world\",\n        content: \"money\",\n        clickId: clickId\n    });\n    res.status(200).json({\n        name: \"John Doe\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEVBQTZFO0FBQzdFLEtBQUssQ0FBQ0EsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFRO0FBRS9CLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDLENBQUM7SUFDdkJHLEtBQUssRUFBRSxDQUFTO0lBQ2hCQyxHQUFHLEVBQUUsQ0FBc0I7SUFDM0JDLE1BQU0sRUFBRSxDQUFzQjtJQUM5QkMsT0FBTyxFQUFFLENBQUk7SUFDYkMsTUFBTSxFQUFFLElBQUk7QUFDaEIsQ0FBQztBQUNELEVBQXdDO0FBRXhDLEVBQW1EO0FBRW5ELEVBQWlEO0FBQ2pELEVBQW1EO0FBQ25ELEVBQWlDO0FBQ2pDLEVBQWtEO0FBQ2xELEVBQTRDO0FBQzVDLEVBQTBDO0FBQzFDLEVBQVE7QUFFUixFQUFNO0FBRVMsUUFBUSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDdkMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxFQUFDLENBQUMsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBQzdCVixNQUFNLENBQUNXLE9BQU8sQ0FBQyxDQUFjLGVBQUUsQ0FBVSxXQUFFLENBQUM7UUFDeENDLElBQUksRUFBRSxDQUFhO1FBQ25CQyxPQUFPLEVBQUUsQ0FBTztRQUNoQkosT0FBTyxFQUFFQSxPQUFPO0lBQ3BCLENBQUM7SUFDREQsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztRQUFDQyxJQUFJLEVBQUUsQ0FBVTtJQUFDLENBQUM7QUFDN0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtd2Vic29ja2V0Ly4vcGFnZXMvYXBpL2hlbGxvLmpzPzFmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmNvbnN0IFB1c2hlciA9IHJlcXVpcmUoXCJwdXNoZXJcIik7XG5cbmNvbnN0IHB1c2hlciA9IG5ldyBQdXNoZXIoe1xuICAgIGFwcElkOiBcIjEyOTMyOTBcIixcbiAgICBrZXk6IFwiZmYyOGVmYmQ2NzU3OTZmMjUyOWJcIixcbiAgICBzZWNyZXQ6IFwiYTIwYmVjYzFhODdhOWY0OGZlYjNcIixcbiAgICBjbHVzdGVyOiBcImV1XCIsXG4gICAgdXNlVExTOiB0cnVlLFxufSk7XG4vLyBpbXBvcnQgeyBXZWJTb2NrZXRTZXJ2ZXIgfSBmcm9tICd3cyc7XG5cbi8vIGNvbnN0IHdzcyA9IG5ldyBXZWJTb2NrZXRTZXJ2ZXIoeyBwb3J0OiAzMDAwIH0pO1xuXG4vLyB3c3Mub24oJ2Nvbm5lY3Rpb24nLCBmdW5jdGlvbiBjb25uZWN0aW9uKHdzKSB7XG4vLyAgIGNvbnNvbGUubG9nKCdOZXcgdXNlciBoYXMgYmVlbiBjb25uZWN0ZWQuLi4nKTtcbi8vICAgd3Muc2VuZCgnV2VsY29tZSBuZXcgdXNlcicpO1xuLy8gICB3cy5vbignbWVzc2FnZScsIGZ1bmN0aW9uIGluY29taW5nKG1lc3NhZ2UpIHtcbi8vICAgICBjb25zb2xlLmxvZygncmVjZWl2ZWQ6ICVzJywgbWVzc2FnZSk7XG4vLyAgICAgd3Muc2VuZCgnV2UgZ290IHlvdXIgbWVzc2FnZS4uLi4nKTtcbi8vICAgfSk7XG5cbi8vIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyBjbGlja0lkIH0gPSByZXEucXVlcnk7XG4gICAgcHVzaGVyLnRyaWdnZXIoXCJteS1jaGFubmVsLTFcIiwgXCJteS1ldmVudFwiLCB7XG4gICAgICAgIHRleHQ6IFwiaGVsbG8gd29ybGRcIixcbiAgICAgICAgY29udGVudDogXCJtb25leVwiLFxuICAgICAgICBjbGlja0lkOiBjbGlja0lkLFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmFtZTogXCJKb2huIERvZVwiIH0pO1xufVxuIl0sIm5hbWVzIjpbIlB1c2hlciIsInJlcXVpcmUiLCJwdXNoZXIiLCJhcHBJZCIsImtleSIsInNlY3JldCIsImNsdXN0ZXIiLCJ1c2VUTFMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpY2tJZCIsInF1ZXJ5IiwidHJpZ2dlciIsInRleHQiLCJjb250ZW50Iiwic3RhdHVzIiwianNvbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/hello.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/hello.js"));
module.exports = __webpack_exports__;

})();