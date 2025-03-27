"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/upload/page",{

/***/ "(app-pages-browser)/./app/upload/page.js":
/*!****************************!*\
  !*** ./app/upload/page.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UploadPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction UploadPage() {\n    _s();\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleFileChange = (e)=>{\n        setMessage(\"\");\n        const selectedFiles = Array.from(e.target.files);\n        console.log(\"Type: \" + selectedFile.type);\n        if (selectedFiles.length === 0) {\n            setError(\"Vui lòng chọn file\");\n            return;\n        }\n        const allowedTypes = [\n            \"image/\",\n            \"video/\"\n        ];\n        if (!allowedTypes.some((type)=>selectedFile.type.startsWith(type))) {\n            setError(\"Chỉ hỗ trợ upload ảnh hoặc video\");\n            setFiles([]);\n            return;\n        }\n        setFiles(selectedFiles);\n        setError(\"\");\n        setProgress({});\n    };\n    const handleUpload = async ()=>{\n        setMessage(\"\");\n        if (files.length == 0) {\n            setMessage(\"Vui lòng chọn file\");\n            return;\n        }\n        const uploadedFiles = [];\n        const formData = new FormData();\n        formData.append(\"file\", file);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3000/api/files/upload\", formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                },\n                onUploadProgress: (progressEvent)=>{\n                    const percent = Math.round(progressEvent.loaded * 100 / progressEvent.total);\n                    setProgress(percent);\n                }\n            });\n            setMessage(response.data.message);\n            setFile(null);\n            setProgress(0);\n            setError(\"\");\n            if (fileInputRef.current) {\n                fileInputRef.current.value = \"\";\n            }\n        } catch (err) {\n            console.error(\"Lỗi upload:\", err);\n            // Lấy lỗi chi tiết từ response của server\n            if (err.response) {\n                setError(\"Lỗi từ server: \".concat(err.response.data.error || \"Không rõ nguyên nhân\"));\n            } else if (err.request) {\n                setError(\"Không kết nối được đến server. Kiểm tra lại kết nối mạng.\");\n            } else {\n                setError(\"Lỗi không xác định: \" + err.message);\n            }\n            setProgress(0);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-bold\",\n                children: \"Upload File\"\n            }, void 0, false, {\n                fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleFileChange,\n                ref: fileInputRef,\n                className: \"border p-2\"\n            }, void 0, false, {\n                fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleUpload,\n                className: \"bg-blue-500 text-white px-4 py-2 rounded ml-2\",\n                children: \"Upload\"\n            }, void 0, false, {\n                fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            progress > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2 text-blue-500\",\n                children: [\n                    \"Đang upload: \",\n                    progress,\n                    \"%\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, this),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2 text-green-500\",\n                children: message\n            }, void 0, false, {\n                fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n                lineNumber: 105,\n                columnNumber: 19\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2 text-red-500\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n                lineNumber: 106,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_s(UploadPage, \"95nkdnJpiPON8Gd5u2nsOE5rnu0=\");\n_c = UploadPage;\nvar _c;\n$RefreshReg$(_c, \"UploadPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBQXVCNUM7Ozs7OztZQUMvQ0UsdUJBQVMsOERBQUNpRDtnQkFBRVAsV0FBVTswQkFBcUIxQzs7Ozs7Ozs7Ozs7O0FBR2xEO0dBeEd3Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIi9ob21lL2JhY2tlbmQtMDEvdXBsb2FkLWZpbGUtcHJvamVjdC91cGxvYWQtZmlsZS1mcm9udGVuZC9hcHAvdXBsb2FkL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZFBhZ2UoKSB7XG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TWVzc2FnZShcIlwiKTtcbiAgICBjb25zdCBzZWxlY3RlZEZpbGVzID0gQXJyYXkuZnJvbShlLnRhcmdldC5maWxlcyk7XG4gICAgY29uc29sZS5sb2coXCJUeXBlOiBcIiArIHNlbGVjdGVkRmlsZS50eXBlKTtcbiAgICBcbiAgICBpZiAoc2VsZWN0ZWRGaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEVycm9yKFwiVnVpIGzDsm5nIGNo4buNbiBmaWxlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFsbG93ZWRUeXBlcyA9IFtcImltYWdlL1wiLCBcInZpZGVvL1wiXTtcbiAgICBpZiAoIWFsbG93ZWRUeXBlcy5zb21lKCh0eXBlKSA9PiBzZWxlY3RlZEZpbGUudHlwZS5zdGFydHNXaXRoKHR5cGUpKSkge1xuICAgICAgc2V0RXJyb3IoXCJDaOG7iSBo4buXIHRy4bujIHVwbG9hZCDhuqNuaCBob+G6t2MgdmlkZW9cIik7XG4gICAgICBzZXRGaWxlcyhbXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0RmlsZXMoc2VsZWN0ZWRGaWxlcyk7XG4gICAgc2V0RXJyb3IoXCJcIik7XG4gICAgc2V0UHJvZ3Jlc3Moe30pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPT0gMCkge1xuICAgICAgc2V0TWVzc2FnZShcIlZ1aSBsw7JuZyBjaOG7jW4gZmlsZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cGxvYWRlZEZpbGVzID0gW107XG4gICAgXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2ZpbGVzL3VwbG9hZFwiLFxuICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfSxcbiAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAocHJvZ3Jlc3NFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQoXG4gICAgICAgICAgICAgIChwcm9ncmVzc0V2ZW50LmxvYWRlZCAqIDEwMCkgLyBwcm9ncmVzc0V2ZW50LnRvdGFsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0UHJvZ3Jlc3MocGVyY2VudCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgc2V0TWVzc2FnZShyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgc2V0RmlsZShudWxsKTtcbiAgICAgIHNldFByb2dyZXNzKDApO1xuICAgICAgc2V0RXJyb3IoXCJcIik7XG5cbiAgICAgIGlmIChmaWxlSW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICBmaWxlSW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTOG7l2kgdXBsb2FkOlwiLCBlcnIpO1xuXG4gICAgICAvLyBM4bqleSBs4buXaSBjaGkgdGnhur90IHThu6sgcmVzcG9uc2UgY+G7p2Egc2VydmVyXG4gICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgIHNldEVycm9yKFxuICAgICAgICAgIGBM4buXaSB04burIHNlcnZlcjogJHtlcnIucmVzcG9uc2UuZGF0YS5lcnJvciB8fCBcIktow7RuZyByw7Ugbmd1ecOqbiBuaMOiblwifWBcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyLnJlcXVlc3QpIHtcbiAgICAgICAgc2V0RXJyb3IoXCJLaMO0bmcga+G6v3QgbuG7kWkgxJHGsOG7o2MgxJHhur9uIHNlcnZlci4gS2nhu4NtIHRyYSBs4bqhaSBr4bq/dCBu4buRaSBt4bqhbmcuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IoXCJM4buXaSBraMO0bmcgeMOhYyDEkeG7i25oOiBcIiArIGVyci5tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgc2V0UHJvZ3Jlc3MoMCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPlVwbG9hZCBGaWxlPC9oMT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICByZWY9e2ZpbGVJbnB1dFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMlwiXG4gICAgICAvPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9XG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgbWwtMlwiXG4gICAgICA+XG4gICAgICAgIFVwbG9hZFxuICAgICAgPC9idXR0b24+XG4gICAgICB7cHJvZ3Jlc3MgPiAwICYmIChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWJsdWUtNTAwXCI+xJBhbmcgdXBsb2FkOiB7cHJvZ3Jlc3N9JTwvcD5cbiAgICAgICl9XG4gICAgICB7bWVzc2FnZSAmJiA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtZ3JlZW4tNTAwXCI+e21lc3NhZ2V9PC9wPn1cbiAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtcmVkLTUwMFwiPntlcnJvcn08L3A+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwiYXhpb3MiLCJVcGxvYWRQYWdlIiwiZmlsZXMiLCJzZXRGaWxlcyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiZXJyb3IiLCJzZXRFcnJvciIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJmaWxlSW5wdXRSZWYiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsInNlbGVjdGVkRmlsZXMiLCJBcnJheSIsImZyb20iLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0ZWRGaWxlIiwidHlwZSIsImxlbmd0aCIsImFsbG93ZWRUeXBlcyIsInNvbWUiLCJzdGFydHNXaXRoIiwiaGFuZGxlVXBsb2FkIiwidXBsb2FkZWRGaWxlcyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50IiwicGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsImxvYWRlZCIsInRvdGFsIiwiZGF0YSIsInNldEZpbGUiLCJjdXJyZW50IiwidmFsdWUiLCJlcnIiLCJyZXF1ZXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsIm9uQ2hhbmdlIiwicmVmIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/upload/page.js\n"));

/***/ })

});