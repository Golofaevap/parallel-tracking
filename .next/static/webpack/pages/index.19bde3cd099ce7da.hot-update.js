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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    var getClickId = function getClickId() {\n        return clickId;\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // const { clickId } = router.query;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), messages = ref[0], setMessages = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), clickId = ref1[0], setClickId = ref1[1];\n    var allMessages = [];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setClickId(router.query.clickId);\n        console.log(messages, router.query, clickId);\n        (pusher_js__WEBPACK_IMPORTED_MODULE_4___default().logToConsole) = true;\n        var pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_4___default())(\"ff28efbd675796f2529b\", {\n            cluster: \"eu\"\n        });\n        var channel = pusher.subscribe(\"my-channel-1\");\n        channel.bind(\"my-event\", function(data) {\n            // const d = JSON.stringify(data);\n            // console.log(\"typeof data\", typeof data, data);\n            console.log(\"clickId == data.clickId\", getClickId(), data.clickId);\n            if (clickId === data.clickId) {\n                allMessages.push(data);\n                setMessages(allMessages);\n            }\n        });\n    }, [\n        router.query.clickId\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n            lineNumber: 41,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: [\n                            \"messages\",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: messages && messages.map(function(m) {\n                                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 40\n                                        },\n                                        __self: _this,\n                                        children: m.text\n                                    }, Math.random()));\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: function() {\n                                allMessages.push({\n                                    text: Math.random()\n                                });\n                                setMessages(allMessages);\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: \"AddNewMessage\"\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                },\n                                __self: this\n                            })\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Home, \"MDt+CPTl6UwGqvQuxwF6gXdbE2w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTtvQkFDZkMsR0FBRyxFQUFDLENBQXFCOzs7Ozs7Ozt3QkFDNUIsQ0FDYTt3QkFBQyxDQUFHOzZGQUNiQyxDQUFJOzRCQUFDZixTQUFTLEVBQUVyQixxRUFBVzs7Ozs7OzsyR0FDdkJMLG1EQUFLO2dDQUFDMkMsR0FBRyxFQUFDLENBQWE7Z0NBQUNDLEdBQUcsRUFBQyxDQUFhO2dDQUFDQyxLQUFLLEVBQUUsRUFBRTtnQ0FBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0FBTXhGLENBQUM7R0F4RXVCeEMsSUFBSTs7UUFDVEYsa0RBQVM7OztLQURKRSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFB1c2hlciBmcm9tIFwicHVzaGVyLWpzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICAvLyBjb25zdCB7IGNsaWNrSWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY2xpY2tJZCwgc2V0Q2xpY2tJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBhbGxNZXNzYWdlcyA9IFtdO1xuICAgIGZ1bmN0aW9uIGdldENsaWNrSWQoKXtcbiAgICAgIHJldHVybiBjbGlja0lkO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENsaWNrSWQocm91dGVyLnF1ZXJ5LmNsaWNrSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlcywgcm91dGVyLnF1ZXJ5LCBjbGlja0lkKTtcbiAgICAgICAgUHVzaGVyLmxvZ1RvQ29uc29sZSA9IHRydWU7XG5cbiAgICAgICAgdmFyIHB1c2hlciA9IG5ldyBQdXNoZXIoXCJmZjI4ZWZiZDY3NTc5NmYyNTI5YlwiLCB7XG4gICAgICAgICAgICBjbHVzdGVyOiBcImV1XCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjaGFubmVsID0gcHVzaGVyLnN1YnNjcmliZShcIm15LWNoYW5uZWwtMVwiKTtcbiAgICAgICAgY2hhbm5lbC5iaW5kKFwibXktZXZlbnRcIiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGQgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidHlwZW9mIGRhdGFcIiwgdHlwZW9mIGRhdGEsIGRhdGEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGlja0lkID09IGRhdGEuY2xpY2tJZFwiLCBnZXRDbGlja0lkKCksIGRhdGEuY2xpY2tJZCk7XG5cbiAgICAgICAgICAgIGlmIChjbGlja0lkID09PSBkYXRhLmNsaWNrSWQpIHtcbiAgICAgICAgICAgICAgICBhbGxNZXNzYWdlcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKGFsbE1lc3NhZ2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW3JvdXRlci5xdWVyeS5jbGlja0lkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8SGVhZD48L0hlYWQ+XG5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5tYXAoKG0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtNYXRoLnJhbmRvbSgpfT57bS50ZXh0fTwvZGl2PjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbE1lc3NhZ2VzLnB1c2goeyB0ZXh0OiBNYXRoLnJhbmRvbSgpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKGFsbE1lc3NhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZE5ld01lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQdXNoZXIiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJIb21lIiwiZ2V0Q2xpY2tJZCIsImNsaWNrSWQiLCJyb3V0ZXIiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwic2V0Q2xpY2tJZCIsImFsbE1lc3NhZ2VzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwibG9nVG9Db25zb2xlIiwicHVzaGVyIiwiY2x1c3RlciIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJiaW5kIiwiZGF0YSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYWluIiwibWFwIiwibSIsInRleHQiLCJNYXRoIiwicmFuZG9tIiwiYnV0dG9uIiwib25DbGljayIsImZvb3RlciIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3BhbiIsImxvZ28iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});