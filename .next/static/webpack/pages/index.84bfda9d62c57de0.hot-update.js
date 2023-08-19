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

/***/ "./components/tasklist/TaskList.tsx":
/*!******************************************!*\
  !*** ./components/tasklist/TaskList.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ \"./components/tasklist/Item.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar TaskList = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), tasks = ref[0], setTasks = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var intervalId = setInterval(function() {\n            setTasks(tasks.map(function(t) {\n                return {\n                    id: t.id,\n                    progress: t.progress < 100 ? t.progress + 1 : t.progress\n                };\n            }));\n        }, 100);\n        return function() {\n            return clearInterval(intervalId);\n        };\n    });\n    var addTask = function() {\n        setTasks((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(tasks).concat([\n            {\n                id: tasks.length + 1,\n                progress: 0\n            }\n        ]));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-96 m-4 p-2 border-solid border-2 border-primary rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-primary\",\n                onClick: addTask,\n                children: \"Add Task\"\n            }, void 0, false, {\n                fileName: \"/home/vicenzo/Documents/Projects/daisyui-nextjs/components/tasklist/TaskList.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: tasks.map(function(task) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: task.id\n                            }, void 0, false, {\n                                fileName: \"/home/vicenzo/Documents/Projects/daisyui-nextjs/components/tasklist/TaskList.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                task: task\n                            }, void 0, false, {\n                                fileName: \"/home/vicenzo/Documents/Projects/daisyui-nextjs/components/tasklist/TaskList.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    task.progress,\n                                    \"%\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/vicenzo/Documents/Projects/daisyui-nextjs/components/tasklist/TaskList.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, task.id, true, {\n                        fileName: \"/home/vicenzo/Documents/Projects/daisyui-nextjs/components/tasklist/TaskList.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/vicenzo/Documents/Projects/daisyui-nextjs/components/tasklist/TaskList.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vicenzo/Documents/Projects/daisyui-nextjs/components/tasklist/TaskList.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, _this);\n};\n_s(TaskList, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = TaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskList);\nvar _c;\n$RefreshReg$(_c, \"TaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rhc2tsaXN0L1Rhc2tMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFBNEM7QUFDbEI7QUFPMUIsSUFBTUcsUUFBUSxHQUFHLFdBQU07O0lBQ25CLElBQTBCRixHQUFvQixHQUFwQkEsK0NBQVEsQ0FBUyxFQUFFLENBQUMsRUFBdkNHLEtBQUssR0FBY0gsR0FBb0IsR0FBbEMsRUFBRUksUUFBUSxHQUFJSixHQUFvQixHQUF4QjtJQUV0QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osSUFBTU0sVUFBVSxHQUFHQyxXQUFXLENBQUMsV0FBTTtZQUNqQ0YsUUFBUSxDQUFDRCxLQUFLLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxDQUFPLEVBQUs7Z0JBQzVCLE9BQU87b0JBQUNDLEVBQUUsRUFBRUQsQ0FBQyxDQUFDQyxFQUFFO29CQUFFQyxRQUFRLEVBQUUsQ0FBRSxDQUFDQSxRQUFRLEdBQUcsR0FBRyxHQUFJRixDQUFDLENBQUNFLFFBQVEsR0FBRyxDQUFDLEdBQUdGLENBQUMsQ0FBQ0UsUUFBUTtpQkFBQztZQUNqRixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNQLE9BQU87bUJBQU1DLGFBQWEsQ0FBQ04sVUFBVSxDQUFDO1NBQUEsQ0FBQztJQUMzQyxDQUFDLENBQUM7SUFFRixJQUFNTyxPQUFPLEdBQUcsV0FBTTtRQUNsQlIsUUFBUSxDQUFDLHFGQUFJRCxLQUFLLENBQUxBLFFBQUo7WUFBVztnQkFBQ00sRUFBRSxFQUFFTixLQUFLLENBQUNVLE1BQU0sR0FBRyxDQUFDO2dCQUFFSCxRQUFRLEVBQUUsQ0FBQzthQUFDO1NBQUMsRUFBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxxQkFDSSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUMsOERBQThEOzswQkFDekUsOERBQUNDLFFBQU07Z0JBQUNELFNBQVMsRUFBQyxpQkFBaUI7Z0JBQUNFLE9BQU8sRUFBRUwsT0FBTzswQkFBRSxVQUFROzs7OztxQkFBUzswQkFDdkUsOERBQUNNLElBQUU7MEJBQ0VmLEtBQUssQ0FBQ0ksR0FBRyxDQUFDLFNBQUNZLElBQVU7eUNBQ2xCLDhEQUFDQyxJQUFFOzswQ0FDQyw4REFBQ0MsTUFBSTswQ0FBRUYsSUFBSSxDQUFDVixFQUFFOzs7OztxQ0FBUTswQ0FDdEIsOERBQUNSLDZDQUFJO2dDQUFDa0IsSUFBSSxFQUFFQSxJQUFJOzs7OztxQ0FBSTswQ0FDcEIsOERBQUNFLE1BQUk7O29DQUFFRixJQUFJLENBQUNULFFBQVE7b0NBQUMsR0FBQzs7Ozs7O3FDQUFPOzt1QkFIeEJTLElBQUksQ0FBQ1YsRUFBRTs7Ozs2QkFJWDtpQkFDUixDQUFDOzs7OztxQkFDRDs7Ozs7O2FBQ0gsQ0FDVDtBQUNMLENBQUM7R0E5QktQLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWdDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFza2xpc3QvVGFza0xpc3QudHN4PzllNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5cbmV4cG9ydCB0eXBlIFRhc2sgPSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBwcm9ncmVzczogbnVtYmVyO1xufVxuXG5jb25zdCBUYXNrTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlPFRhc2tbXT4oW10pO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRUYXNrcyh0YXNrcy5tYXAoKHQ6IFRhc2spID0+IHsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtpZDogdC5pZCwgcHJvZ3Jlc3M6ICh0LnByb2dyZXNzIDwgMTAwKSA/IHQucHJvZ3Jlc3MgKyAxIDogdC5wcm9ncmVzc31cbiAgICAgICAgICAgIH0pKTsgICAgICAgIFxuICAgICAgICB9LCAxMDApO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICB9KVxuXG4gICAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICAgICAgc2V0VGFza3MoWy4uLnRhc2tzLCB7aWQ6IHRhc2tzLmxlbmd0aCArIDEsIHByb2dyZXNzOiAwfV0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05NiBtLTQgcC0yIGJvcmRlci1zb2xpZCBib3JkZXItMiBib3JkZXItcHJpbWFyeSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2FkZFRhc2t9PkFkZCBUYXNrPC9idXR0b24+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFzazogVGFzaykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt0YXNrLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0YXNrLmlkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtIHRhc2s9e3Rhc2t9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGFzay5wcm9ncmVzc30lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrTGlzdDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkl0ZW0iLCJUYXNrTGlzdCIsInRhc2tzIiwic2V0VGFza3MiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJtYXAiLCJ0IiwiaWQiLCJwcm9ncmVzcyIsImNsZWFySW50ZXJ2YWwiLCJhZGRUYXNrIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwidGFzayIsImxpIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tasklist/TaskList.tsx\n"));

/***/ })

});