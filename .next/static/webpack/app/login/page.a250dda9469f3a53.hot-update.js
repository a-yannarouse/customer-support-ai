"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/login/page.js":
/*!***************************!*\
  !*** ./app/login/page.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers */ \"(app-pages-browser)/./app/providers.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction LoginContent() {\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (status === \"authenticated\") {\n            router.push(\"/\");\n        }\n    }, [\n        status,\n        router\n    ]);\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/Yanni/customer-support-ai/app/login/page.js\",\n            lineNumber: 19,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        sx: {\n            background: \"linear-gradient(135deg, #E75A7C 0%, #2C363F 100%)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h4\",\n                sx: {\n                    mb: 4,\n                    color: \"white\"\n                },\n                children: \"Welcome to AfriReligions AI\"\n            }, void 0, false, {\n                fileName: \"/Users/Yanni/customer-support-ai/app/login/page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"contained\",\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                sx: {\n                    backgroundColor: \"#4285F4\",\n                    \"&:hover\": {\n                        backgroundColor: \"#357ae8\"\n                    }\n                },\n                children: \"Sign in with Google\"\n            }, void 0, false, {\n                fileName: \"/Users/Yanni/customer-support-ai/app/login/page.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Yanni/customer-support-ai/app/login/page.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginContent, \"IsB+X4/uCtap/BkD4g9WA4/8vZ8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LoginContent;\nfunction Login() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers__WEBPACK_IMPORTED_MODULE_4__.Providers, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginContent, {}, void 0, false, {\n            fileName: \"/Users/Yanni/customer-support-ai/app/login/page.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Yanni/customer-support-ai/app/login/page.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Login;\nvar _c, _c1;\n$RefreshReg$(_c, \"LoginContent\");\n$RefreshReg$(_c1, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDb0Q7QUFDVDtBQUNWO0FBQ3NCO0FBQ2Y7QUFFeEMsU0FBU1E7O0lBQ1AsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUVDLE1BQU0sRUFBRSxHQUFHWCwyREFBVUE7SUFDNUMsTUFBTVksU0FBU1YsMERBQVNBO0lBRXhCQyxnREFBU0EsQ0FBQztRQUNSLElBQUlRLFdBQVcsaUJBQWlCO1lBQzlCQyxPQUFPQyxJQUFJLENBQUM7UUFDZDtJQUNGLEdBQUc7UUFBQ0Y7UUFBUUM7S0FBTztJQUVuQixJQUFJRCxXQUFXLFdBQVc7UUFDeEIscUJBQU8sOERBQUNHO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLHFCQUNFLDhEQUFDVixpR0FBR0E7UUFDRlcsU0FBUTtRQUNSQyxlQUFjO1FBQ2RDLFlBQVc7UUFDWEMsZ0JBQWU7UUFDZkMsUUFBTztRQUNQQyxJQUFJO1lBQ0ZDLFlBQVk7UUFDZDs7MEJBRUEsOERBQUNmLGlHQUFVQTtnQkFBQ2dCLFNBQVE7Z0JBQUtGLElBQUk7b0JBQUVHLElBQUk7b0JBQUdDLE9BQU87Z0JBQVE7MEJBQUc7Ozs7OzswQkFHeEQsOERBQUNuQixpR0FBTUE7Z0JBQ0xpQixTQUFRO2dCQUNSRyxTQUFTLElBQU14Qix1REFBTUEsQ0FBQztnQkFDdEJtQixJQUFJO29CQUNGTSxpQkFBaUI7b0JBQ2pCLFdBQVc7d0JBQ1RBLGlCQUFpQjtvQkFDbkI7Z0JBQ0Y7MEJBQ0Q7Ozs7Ozs7Ozs7OztBQUtQO0dBMUNTbEI7O1FBQzJCUix1REFBVUE7UUFDN0JFLHNEQUFTQTs7O0tBRmpCTTtBQTRDTSxTQUFTbUI7SUFDdEIscUJBQ0UsOERBQUNwQixpREFBU0E7a0JBQ1IsNEVBQUNDOzs7Ozs7Ozs7O0FBR1A7TUFOd0JtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9naW4vcGFnZS5qcz82YWZkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxuaW1wb3J0IHsgUHJvdmlkZXJzIH0gZnJvbSAnLi4vcHJvdmlkZXJzJ1xuXG5mdW5jdGlvbiBMb2dpbkNvbnRlbnQoKSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09ICdhdXRoZW50aWNhdGVkJykge1xuICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgIH1cbiAgfSwgW3N0YXR1cywgcm91dGVyXSlcblxuICBpZiAoc3RhdHVzID09PSAnbG9hZGluZycpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggXG4gICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIFxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIFxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgIGhlaWdodD1cIjEwMHZoXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRTc1QTdDIDAlLCAjMkMzNjNGIDEwMCUpJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgc3g9e3sgbWI6IDQsIGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICBXZWxjb21lIHRvIEFmcmlSZWxpZ2lvbnMgQUlcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxCdXR0b24gXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKCdnb29nbGUnKX1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI4NUY0JyxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzNTdhZTgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFNpZ24gaW4gd2l0aCBHb29nbGVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlcnM+XG4gICAgICA8TG9naW5Db250ZW50IC8+XG4gICAgPC9Qcm92aWRlcnM+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25JbiIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkJveCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJQcm92aWRlcnMiLCJMb2dpbkNvbnRlbnQiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInJvdXRlciIsInB1c2giLCJkaXYiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInN4IiwiYmFja2dyb3VuZCIsInZhcmlhbnQiLCJtYiIsImNvbG9yIiwib25DbGljayIsImJhY2tncm91bmRDb2xvciIsIkxvZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.js\n"));

/***/ })

});