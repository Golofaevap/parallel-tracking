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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"safe\"), content = ref[0], setContent = ref[1];\n    var allMessages = [];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (router.query.clickId) {\n            localStorage.setItem(\"clickId\", router.query.clickId);\n        }\n        console.log(\"clickId =\", router.query);\n    }, [\n        router.query.clickId\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        (pusher_js__WEBPACK_IMPORTED_MODULE_4___default().logToConsole) = true;\n        var pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_4___default())(\"ff28efbd675796f2529b\", {\n            cluster: \"eu\"\n        });\n        var channel = pusher.subscribe(\"my-channel-1\");\n        channel.bind(\"my-event\", function(data) {\n            var clickId = localStorage.getItem(\"clickId\");\n            console.log(\"clickId == data.clickId\", clickId, data.clickId);\n            if (clickId === data.clickId) {\n                // allMessages.push(data);\n                setContent(data.content);\n            }\n        });\n    }, []);\n    if (content == \"safe\") return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            \"messages\",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                },\n                                __self: this,\n                                children: messages && messages.map(function(m) {\n                                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 44\n                                        },\n                                        __self: _this,\n                                        children: m.text\n                                    }, Math.random()));\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: function() {\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            },\n                            __self: this,\n                            children: \"AddNewMessage\"\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    },\n                    __self: this,\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 29\n                                },\n                                __self: this\n                            })\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n    else {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                lineNumber: 73,\n                columnNumber: 16\n            },\n            __self: this,\n            children: \"BLACK content\"\n        }));\n    }\n};\n_s(Home, \"ZLR6u+TvFC4rLdli/E1UVlxg000=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBSztnQ0FBQzRDLEdBQUcsRUFBQyxDQUFhO2dDQUFDQyxHQUFHLEVBQUMsQ0FBYTtnQ0FBQ0MsS0FBSyxFQUFFLEVBQUU7Z0NBQUVDLE1BQU0sRUFBRSxFQUFFOzs7Ozs7Ozs7Ozs7OztTQU1uRixDQUFDO1FBQ0YsTUFBTSxzRUFBRXRCLENBQUc7Ozs7Ozs7c0JBQUMsQ0FBYTs7SUFDN0IsQ0FBQztBQUNMLENBQUM7R0FuRXVCbkIsSUFBSTs7UUFDVEYsa0RBQVM7OztLQURKRSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFB1c2hlciBmcm9tIFwicHVzaGVyLWpzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShcInNhZmVcIik7XG4gICAgY29uc3QgYWxsTWVzc2FnZXMgPSBbXTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocm91dGVyLnF1ZXJ5LmNsaWNrSWQpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2xpY2tJZFwiLCByb3V0ZXIucXVlcnkuY2xpY2tJZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja0lkID1cIiwgcm91dGVyLnF1ZXJ5KTtcbiAgICB9LCBbcm91dGVyLnF1ZXJ5LmNsaWNrSWRdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFB1c2hlci5sb2dUb0NvbnNvbGUgPSB0cnVlO1xuXG4gICAgICAgIHZhciBwdXNoZXIgPSBuZXcgUHVzaGVyKFwiZmYyOGVmYmQ2NzU3OTZmMjUyOWJcIiwge1xuICAgICAgICAgICAgY2x1c3RlcjogXCJldVwiLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgY2hhbm5lbCA9IHB1c2hlci5zdWJzY3JpYmUoXCJteS1jaGFubmVsLTFcIik7XG4gICAgICAgIGNoYW5uZWwuYmluZChcIm15LWV2ZW50XCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBjbGlja0lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbGlja0lkXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGlja0lkID09IGRhdGEuY2xpY2tJZFwiLCBjbGlja0lkLCBkYXRhLmNsaWNrSWQpO1xuXG4gICAgICAgICAgICBpZiAoY2xpY2tJZCA9PT0gZGF0YS5jbGlja0lkKSB7XG4gICAgICAgICAgICAgICAgLy8gYWxsTWVzc2FnZXMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50KGRhdGEuY29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGlmIChjb250ZW50ID09IFwic2FmZVwiKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxIZWFkPjwvSGVhZD5cblxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLm1hcCgobSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtNYXRoLnJhbmRvbSgpfT57bS50ZXh0fTwvZGl2PjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHt9fT5BZGROZXdNZXNzYWdlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cblxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gPGRpdj5CTEFDSyBjb250ZW50PC9kaXY+O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlB1c2hlciIsInVzZVJvdXRlciIsInN0eWxlcyIsIkhvbWUiLCJyb3V0ZXIiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImFsbE1lc3NhZ2VzIiwicXVlcnkiLCJjbGlja0lkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJsb2dUb0NvbnNvbGUiLCJwdXNoZXIiLCJjbHVzdGVyIiwiY2hhbm5lbCIsInN1YnNjcmliZSIsImJpbmQiLCJkYXRhIiwiZ2V0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJtZXNzYWdlcyIsIm1hcCIsIm0iLCJ0ZXh0IiwiTWF0aCIsInJhbmRvbSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb290ZXIiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInNwYW4iLCJsb2dvIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});