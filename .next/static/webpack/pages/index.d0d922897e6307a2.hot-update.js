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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"safe\"), content = ref[0], setContent = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (router.query.clickId) {\n            localStorage.setItem(\"clickId\", router.query.clickId);\n        }\n        console.log(\"clickId =\", router.query);\n    }, [\n        router.query.clickId\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        (pusher_js__WEBPACK_IMPORTED_MODULE_4___default().logToConsole) = true;\n        var pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_4___default())(\"ff28efbd675796f2529b\", {\n            cluster: \"eu\"\n        });\n        var channel = pusher.subscribe(\"my-channel-1\");\n        channel.bind(\"my-event\", function(data) {\n            var clickId = localStorage.getItem(\"clickId\");\n            console.log(\"clickId == data.clickId\", clickId, data.clickId);\n            if (clickId === data.clickId) {\n                setContent(data.content);\n            }\n        });\n    }, []);\n    if (content == \"safe\") return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: \"\\\"Safe content\\\"\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    },\n                    __self: this,\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                },\n                                __self: this\n                            })\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n    else {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            __source: {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: \"\\\"Safe content\\\"\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            },\n                            __self: this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                        href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            \"Powered by\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/vercel.svg\",\n                                    alt: \"Vercel Logo\",\n                                    width: 72,\n                                    height: 16,\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\code\\\\next-websocket\\\\pages\\\\index.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 29\n                                    },\n                                    __self: this\n                                })\n                            })\n                        ]\n                    })\n                })\n            ]\n        }));\n    }\n};\n_s(Home, \"ZLR6u+TvFC4rLdli/E1UVlxg000=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTtvQkFBQ0gsU0FBUyxFQUFFcEIsdUVBQWE7Ozs7Ozs7b0dBQzNCd0IsQ0FBQzt3QkFDRUMsSUFBSSxFQUFDLENBQXdHO3dCQUM3R0MsTUFBTSxFQUFDLENBQVE7d0JBQ2ZDLEdBQUcsRUFBQyxDQUFxQjs7Ozs7Ozs7NEJBQzVCLENBQ2E7NEJBQUMsQ0FBRztpR0FDYkMsQ0FBSTtnQ0FBQ1IsU0FBUyxFQUFFcEIscUVBQVc7Ozs7Ozs7K0dBQ3ZCTCxtREFBSztvQ0FBQ21DLEdBQUcsRUFBQyxDQUFhO29DQUFDQyxHQUFHLEVBQUMsQ0FBYTtvQ0FBQ0MsS0FBSyxFQUFFLEVBQUU7b0NBQUVDLE1BQU0sRUFBRSxFQUFFOzs7Ozs7Ozs7Ozs7OztJQU14RixDQUFDO0FBQ0wsQ0FBQztHQTdFdUJoQyxJQUFJOztRQUNURixrREFBUzs7O0tBREpFLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHVzaGVyIGZyb20gXCJwdXNoZXItanNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKFwic2FmZVwiKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocm91dGVyLnF1ZXJ5LmNsaWNrSWQpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2xpY2tJZFwiLCByb3V0ZXIucXVlcnkuY2xpY2tJZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja0lkID1cIiwgcm91dGVyLnF1ZXJ5KTtcbiAgICB9LCBbcm91dGVyLnF1ZXJ5LmNsaWNrSWRdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFB1c2hlci5sb2dUb0NvbnNvbGUgPSB0cnVlO1xuXG4gICAgICAgIHZhciBwdXNoZXIgPSBuZXcgUHVzaGVyKFwiZmYyOGVmYmQ2NzU3OTZmMjUyOWJcIiwge1xuICAgICAgICAgICAgY2x1c3RlcjogXCJldVwiLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgY2hhbm5lbCA9IHB1c2hlci5zdWJzY3JpYmUoXCJteS1jaGFubmVsLTFcIik7XG4gICAgICAgIGNoYW5uZWwuYmluZChcIm15LWV2ZW50XCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBjbGlja0lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbGlja0lkXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGlja0lkID09IGRhdGEuY2xpY2tJZFwiLCBjbGlja0lkLCBkYXRhLmNsaWNrSWQpO1xuXG4gICAgICAgICAgICBpZiAoY2xpY2tJZCA9PT0gZGF0YS5jbGlja0lkKSB7XG4gICAgICAgICAgICAgICAgc2V0Q29udGVudChkYXRhLmNvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBpZiAoY29udGVudCA9PSBcInNhZmVcIilcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8SGVhZD48L0hlYWQ+XG5cbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cIlNhZmUgY29udGVudFwiPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+ey8qIDxidXR0b24gb25DbGljaz17KCkgPT4ge319PkFkZE5ld01lc3NhZ2U8L2J1dHRvbj4gKi99PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIHdpZHRoPXs3Mn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPEhlYWQ+PC9IZWFkPlxuXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5cIlNhZmUgY29udGVudFwiPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57LyogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7fX0+QWRkTmV3TWVzc2FnZTwvYnV0dG9uPiAqL308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQdXNoZXIiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJIb21lIiwicm91dGVyIiwiY29udGVudCIsInNldENvbnRlbnQiLCJxdWVyeSIsImNsaWNrSWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImxvZ1RvQ29uc29sZSIsInB1c2hlciIsImNsdXN0ZXIiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsImRhdGEiLCJnZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFpbiIsImZvb3RlciIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3BhbiIsImxvZ28iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});