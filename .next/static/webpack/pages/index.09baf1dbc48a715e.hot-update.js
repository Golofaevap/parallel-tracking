"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    var getClickId = function getClickId() {\n        return clickId;\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // const { clickId } = router.query;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), messages = ref[0], setMessages = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), clickId = ref1[0], setClickId = ref1[1];\n    var allMessages = [];\n    if (clickId) setClickId(router.query.clickId);\n    console.log(messages, router.query, getClickId());\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        (pusher_js__WEBPACK_IMPORTED_MODULE_4___default().logToConsole) = true;\n        var pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_4___default())(\"ff28efbd675796f2529b\", {\n            cluster: \"eu\"\n        });\n        var channel = pusher.subscribe(\"my-channel-1\");\n        channel.bind(\"my-event\", function(data) {\n            // const d = JSON.stringify(data);\n            // console.log(\"typeof data\", typeof data, data);\n            console.log(\"clickId == data.clickId\", router.query, data.clickId);\n            if (router.query.clickId === data.clickId) {\n                allMessages.push(data);\n                setMessages(allMessages);\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n            lineNumber: 41,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: [\n                            \"messages \",\n                            clickId,\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: messages && messages.map(function(m) {\n                                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 40\n                                        },\n                                        __self: _this,\n                                        children: m.text\n                                    }, Math.random()));\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: function() {\n                                allMessages.push({\n                                    text: Math.random()\n                                });\n                                setMessages(allMessages);\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: \"AddNewMessage\"\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                },\n                                __self: this\n                            })\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Home, \"MDt+CPTl6UwGqvQuxwF6gXdbE2w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBd0c7b0JBQzdHQyxNQUFNLEVBQUMsQ0FBUTtvQkFDZkMsR0FBRyxFQUFDLENBQXFCOzs7Ozs7Ozt3QkFDNUIsQ0FDYTt3QkFBQyxDQUFHOzZGQUNiQyxDQUFJOzRCQUFDZixTQUFTLEVBQUVyQixxRUFBVzs7Ozs7OzsyR0FDdkJMLG1EQUFLO2dDQUFDMkMsR0FBRyxFQUFDLENBQWE7Z0NBQUNDLEdBQUcsRUFBQyxDQUFhO2dDQUFDQyxLQUFLLEVBQUUsRUFBRTtnQ0FBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0FBTXhGLENBQUM7R0F4RXVCeEMsSUFBSTs7UUFDVEYsa0RBQVM7OztLQURKRSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFB1c2hlciBmcm9tIFwicHVzaGVyLWpzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICAvLyBjb25zdCB7IGNsaWNrSWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY2xpY2tJZCwgc2V0Q2xpY2tJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBhbGxNZXNzYWdlcyA9IFtdO1xuICAgIGZ1bmN0aW9uIGdldENsaWNrSWQoKSB7XG4gICAgICAgIHJldHVybiBjbGlja0lkO1xuICAgIH1cbiAgICBpZiAoY2xpY2tJZCkgc2V0Q2xpY2tJZChyb3V0ZXIucXVlcnkuY2xpY2tJZCk7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZXMsIHJvdXRlci5xdWVyeSwgZ2V0Q2xpY2tJZCgpKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFB1c2hlci5sb2dUb0NvbnNvbGUgPSB0cnVlO1xuXG4gICAgICAgIHZhciBwdXNoZXIgPSBuZXcgUHVzaGVyKFwiZmYyOGVmYmQ2NzU3OTZmMjUyOWJcIiwge1xuICAgICAgICAgICAgY2x1c3RlcjogXCJldVwiLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgY2hhbm5lbCA9IHB1c2hlci5zdWJzY3JpYmUoXCJteS1jaGFubmVsLTFcIik7XG4gICAgICAgIGNoYW5uZWwuYmluZChcIm15LWV2ZW50XCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBkID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInR5cGVvZiBkYXRhXCIsIHR5cGVvZiBkYXRhLCBkYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tJZCA9PSBkYXRhLmNsaWNrSWRcIiwgcm91dGVyLnF1ZXJ5LCBkYXRhLmNsaWNrSWQpO1xuXG4gICAgICAgICAgICBpZiAocm91dGVyLnF1ZXJ5LmNsaWNrSWQgPT09IGRhdGEuY2xpY2tJZCkge1xuICAgICAgICAgICAgICAgIGFsbE1lc3NhZ2VzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMoYWxsTWVzc2FnZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8SGVhZD48L0hlYWQ+XG5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzIHtjbGlja0lkfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKChtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17TWF0aC5yYW5kb20oKX0+e20udGV4dH08L2Rpdj47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxNZXNzYWdlcy5wdXNoKHsgdGV4dDogTWF0aC5yYW5kb20oKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhhbGxNZXNzYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGROZXdNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIHdpZHRoPXs3Mn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHVzaGVyIiwidXNlUm91dGVyIiwic3R5bGVzIiwiSG9tZSIsImdldENsaWNrSWQiLCJjbGlja0lkIiwicm91dGVyIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInNldENsaWNrSWQiLCJhbGxNZXNzYWdlcyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImxvZ1RvQ29uc29sZSIsInB1c2hlciIsImNsdXN0ZXIiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsImRhdGEiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFpbiIsIm1hcCIsIm0iLCJ0ZXh0IiwiTWF0aCIsInJhbmRvbSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb290ZXIiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInNwYW4iLCJsb2dvIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});