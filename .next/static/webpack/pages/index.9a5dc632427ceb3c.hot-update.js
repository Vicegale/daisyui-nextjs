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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar TaskList = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), tasks = ref[0], setTasks = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var intervalId = setInterval(function() {\n            setTasks(tasks.map(function(t) {\n                return {\n                    id: t.id,\n                    progress: t.progress < 100 ? t.progress + 1 : t.progress\n                };\n            }));\n        }, 100);\n        return function() {\n            return clearInterval(intervalId);\n        };\n    });\n    var addTask = function() {\n        setTasks((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(tasks).concat([\n            {\n                id: tasks.length + 1,\n                progress: 0\n            }\n        ]));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: addTask,\n                children: \"Add Task\"\n            }, void 0, false, {\n                fileName: \"/home/vicenzo/Documents/Projects/daisyui-nextjs/components/tasklist/TaskList.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: tasks.map(function(task) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"progress\", {\n                            className: \"progress w-56 progress-primary\",\n                            value: task.progress,\n                            max: \"100\"\n                        }, void 0, false, {\n                            fileName: \"/home/vicenzo/Documents/Projects/daisyui-nextjs/components/tasklist/TaskList.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, _this)\n                    }, task.id, false, {\n                        fileName: \"/home/vicenzo/Documents/Projects/daisyui-nextjs/components/tasklist/TaskList.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/vicenzo/Documents/Projects/daisyui-nextjs/components/tasklist/TaskList.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vicenzo/Documents/Projects/daisyui-nextjs/components/tasklist/TaskList.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, _this);\n};\n_s(TaskList, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = TaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskList);\nvar _c;\n$RefreshReg$(_c, \"TaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rhc2tsaXN0L1Rhc2tMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUE0QztBQVE1QyxJQUFNRSxRQUFRLEdBQUcsV0FBTTs7SUFDbkIsSUFBMEJELEdBQW9CLEdBQXBCQSwrQ0FBUSxDQUFTLEVBQUUsQ0FBQyxFQUF2Q0UsS0FBSyxHQUFjRixHQUFvQixHQUFsQyxFQUFFRyxRQUFRLEdBQUlILEdBQW9CLEdBQXhCO0lBRXRCRCxnREFBUyxDQUFDLFdBQU07UUFDWixJQUFNSyxVQUFVLEdBQUdDLFdBQVcsQ0FBQyxXQUFNO1lBQ2pDRixRQUFRLENBQUNELEtBQUssQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLENBQU8sRUFBSztnQkFDNUIsT0FBTztvQkFBQ0MsRUFBRSxFQUFFRCxDQUFDLENBQUNDLEVBQUU7b0JBQUVDLFFBQVEsRUFBRSxDQUFFLENBQUNBLFFBQVEsR0FBRyxHQUFHLEdBQUlGLENBQUMsQ0FBQ0UsUUFBUSxHQUFHLENBQUMsR0FBR0YsQ0FBQyxDQUFDRSxRQUFRO2lCQUFDO1lBQ2pGLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDUixDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ1AsT0FBTzttQkFBTUMsYUFBYSxDQUFDTixVQUFVLENBQUM7U0FBQSxDQUFDO0lBQzNDLENBQUMsQ0FBQztJQUVGLElBQU1PLE9BQU8sR0FBRyxXQUFNO1FBQ2xCUixRQUFRLENBQUMscUZBQUlELEtBQUssQ0FBTEEsUUFBSjtZQUFXO2dCQUFDTSxFQUFFLEVBQUVOLEtBQUssQ0FBQ1UsTUFBTSxHQUFHLENBQUM7Z0JBQUVILFFBQVEsRUFBRSxDQUFDO2FBQUM7U0FBQyxFQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELHFCQUNJLDhEQUFDSSxLQUFHOzswQkFDQSw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFSixPQUFPOzBCQUFFLFVBQVE7Ozs7O3FCQUFTOzBCQUMzQyw4REFBQ0ssSUFBRTswQkFDRWQsS0FBSyxDQUFDSSxHQUFHLENBQUNXLFNBQUFBLElBQUk7eUNBQ1gsOERBQUNDLElBQUU7a0NBQ0MsNEVBQUNULFVBQVE7NEJBQUNVLFNBQVMsRUFBRSxnQ0FBZ0M7NEJBQUVDLEtBQUssRUFBRUgsSUFBSSxDQUFDUixRQUFROzRCQUFFWSxHQUFHLEVBQUMsS0FBSzs7Ozs7aUNBQVk7dUJBRDdGSixJQUFJLENBQUNULEVBQUU7Ozs7NkJBRVg7aUJBQ1IsQ0FBQzs7Ozs7cUJBQ0Q7Ozs7OzthQUNILENBQ1Q7QUFDTCxDQUFDO0dBNUJLUCxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUE4QmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Rhc2tsaXN0L1Rhc2tMaXN0LnRzeD85ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5leHBvcnQgdHlwZSBUYXNrID0ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgcHJvZ3Jlc3M6IG51bWJlcjtcbn1cblxuY29uc3QgVGFza0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZTxUYXNrW10+KFtdKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGFza3ModGFza3MubWFwKCh0OiBUYXNrKSA9PiB7IFxuICAgICAgICAgICAgICAgIHJldHVybiB7aWQ6IHQuaWQsIHByb2dyZXNzOiAodC5wcm9ncmVzcyA8IDEwMCkgPyB0LnByb2dyZXNzICsgMSA6IHQucHJvZ3Jlc3N9XG4gICAgICAgICAgICB9KSk7ICAgICAgICBcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFRhc2tzKFsuLi50YXNrcywge2lkOiB0YXNrcy5sZW5ndGggKyAxLCBwcm9ncmVzczogMH1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUYXNrfT5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0YXNrcy5tYXAodGFzayA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Rhc2suaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHByb2dyZXNzIGNsYXNzTmFtZT17XCJwcm9ncmVzcyB3LTU2IHByb2dyZXNzLXByaW1hcnlcIn0gdmFsdWU9e3Rhc2sucHJvZ3Jlc3N9IG1heD1cIjEwMFwiPjwvcHJvZ3Jlc3M+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tMaXN0O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFza0xpc3QiLCJ0YXNrcyIsInNldFRhc2tzIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwibWFwIiwidCIsImlkIiwicHJvZ3Jlc3MiLCJjbGVhckludGVydmFsIiwiYWRkVGFzayIsImxlbmd0aCIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsInRhc2siLCJsaSIsImNsYXNzTmFtZSIsInZhbHVlIiwibWF4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tasklist/TaskList.tsx\n"));

/***/ })

});