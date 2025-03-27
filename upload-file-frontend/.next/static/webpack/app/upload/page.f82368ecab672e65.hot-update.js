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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UploadPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction UploadPage() {\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleFileChange = (e)=>{\n        setMessage(\"\");\n        const selectedFiles = Array.from(e.target.files);\n        console.log(\"Type: \" + selectedFile.type);\n        if (!selectedFile) {\n            setError(\"Vui lòng chọn file\");\n            return;\n        }\n        const allowedTypes = [\n            \"image/\",\n            \"video/\"\n        ];\n        if (!allowedTypes.some((type)=>selectedFile.type.startsWith(type))) {\n            setError(\"Chỉ hỗ trợ upload ảnh hoặc video\");\n            setFile(null);\n            return;\n        }\n        setFile(selectedFile);\n        setError(\"\");\n        setProgress(0);\n    };\n    const handleUpload = async ()=>{\n        setMessage(\"\");\n        if (!file) {\n            setMessage(\"Vui lòng chọn file\");\n            return;\n        }\n        const formData = new FormData();\n        formData.append(\"file\", file);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3000/api/files/upload\", formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                },\n                onUploadProgress: (progressEvent)=>{\n                    const percent = Math.round(progressEvent.loaded * 100 / progressEvent.total);\n                    setProgress(percent);\n                }\n            });\n            setMessage(response.data.message);\n            setFile(null);\n            setProgress(0);\n            setError(\"\");\n            if (fileInputRef.current) {\n                fileInputRef.current.value = \"\";\n            }\n        } catch (err) {\n            console.error(\"Lỗi upload:\", err);\n            // Lấy lỗi chi tiết từ response của server\n            if (err.response) {\n                setError(\"Lỗi từ server: \".concat(err.response.data.error || \"Không rõ nguyên nhân\"));\n            } else if (err.request) {\n                setError(\"Không kết nối được đến server. Kiểm tra lại kết nối mạng.\");\n            } else {\n                setError(\"Lỗi không xác định: \" + err.message);\n            }\n            setProgress(0);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-bold\",\n                children: \"Upload File\"\n            }, void 0, false, {\n                fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleFileChange,\n                ref: fileInputRef,\n                className: \"border p-2\"\n            }, void 0, false, {\n                fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleUpload,\n                className: \"bg-blue-500 text-white px-4 py-2 rounded ml-2\",\n                children: \"Upload\"\n            }, void 0, false, {\n                fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            progress > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2 text-blue-500\",\n                children: [\n                    \"Đang upload: \",\n                    progress,\n                    \"%\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, this),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2 text-green-500\",\n                children: message\n            }, void 0, false, {\n                fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n                lineNumber: 102,\n                columnNumber: 19\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2 text-red-500\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n                lineNumber: 103,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/backend-01/upload-file-project/upload-file-frontend/app/upload/page.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(UploadPage, \"cMKuzetscnvNaRhX/RHdzrK3A0w=\");\n_c = UploadPage;\nvar _c;\n$RefreshReg$(_c, \"UploadPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91cGxvYWQvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3lDO0FBQ2Y7QUFFWCxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1ZLGVBQWVYLDZDQUFNQSxDQUFDO0lBRTVCLE1BQU1ZLG1CQUFtQixDQUFDQztRQUN4QlAsV0FBVztRQUNYLE1BQU1RLGdCQUFnQkMsTUFBTUMsSUFBSSxDQUFDSCxFQUFFSSxNQUFNLENBQUNDLEtBQUs7UUFDL0NDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXQyxhQUFhQyxJQUFJO1FBQ3hDLElBQUksQ0FBQ0QsY0FBYztZQUNqQmIsU0FBUztZQUNUO1FBQ0Y7UUFFQSxNQUFNZSxlQUFlO1lBQUM7WUFBVTtTQUFTO1FBQ3pDLElBQUksQ0FBQ0EsYUFBYUMsSUFBSSxDQUFDLENBQUNGLE9BQVNELGFBQWFDLElBQUksQ0FBQ0csVUFBVSxDQUFDSCxRQUFRO1lBQ3BFZCxTQUFTO1lBQ1RKLFFBQVE7WUFDUjtRQUNGO1FBRUFBLFFBQVFpQjtRQUNSYixTQUFTO1FBQ1RFLFlBQVk7SUFDZDtJQUVBLE1BQU1nQixlQUFlO1FBQ25CcEIsV0FBVztRQUNYLElBQUksQ0FBQ0gsTUFBTTtZQUNURyxXQUFXO1lBQ1g7UUFDRjtRQUVBLE1BQU1xQixXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsUUFBUTFCO1FBRXhCLElBQUk7WUFDRixNQUFNMkIsV0FBVyxNQUFNN0IsNkNBQUtBLENBQUM4QixJQUFJLENBQy9CLDBDQUNBSixVQUNBO2dCQUNFSyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBc0I7Z0JBQ2pEQyxrQkFBa0IsQ0FBQ0M7b0JBQ2pCLE1BQU1DLFVBQVVDLEtBQUtDLEtBQUssQ0FDeEIsY0FBZUMsTUFBTSxHQUFHLE1BQU9KLGNBQWNLLEtBQUs7b0JBRXBEN0IsWUFBWXlCO2dCQUNkO1lBQ0Y7WUFHRjdCLFdBQVd3QixTQUFTVSxJQUFJLENBQUNuQyxPQUFPO1lBQ2hDRCxRQUFRO1lBQ1JNLFlBQVk7WUFDWkYsU0FBUztZQUVULElBQUlHLGFBQWE4QixPQUFPLEVBQUU7Z0JBQ3hCOUIsYUFBYThCLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHO1lBQy9CO1FBQ0YsRUFBRSxPQUFPQyxLQUFLO1lBQ1p4QixRQUFRWixLQUFLLENBQUMsZUFBZW9DO1lBRTdCLDBDQUEwQztZQUMxQyxJQUFJQSxJQUFJYixRQUFRLEVBQUU7Z0JBQ2hCdEIsU0FDRSxrQkFBb0UsT0FBbERtQyxJQUFJYixRQUFRLENBQUNVLElBQUksQ0FBQ2pDLEtBQUssSUFBSTtZQUVqRCxPQUFPLElBQUlvQyxJQUFJQyxPQUFPLEVBQUU7Z0JBQ3RCcEMsU0FBUztZQUNYLE9BQU87Z0JBQ0xBLFNBQVMseUJBQXlCbUMsSUFBSXRDLE9BQU87WUFDL0M7WUFFQUssWUFBWTtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ21DO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBb0I7Ozs7OzswQkFDbEMsOERBQUNFO2dCQUNDMUIsTUFBSztnQkFDTDJCLFVBQVVyQztnQkFDVnNDLEtBQUt2QztnQkFDTG1DLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0s7Z0JBQ0NDLFNBQVMxQjtnQkFDVG9CLFdBQVU7MEJBQ1g7Ozs7OztZQUdBckMsV0FBVyxtQkFDViw4REFBQzRDO2dCQUFFUCxXQUFVOztvQkFBcUI7b0JBQWNyQztvQkFBUzs7Ozs7OztZQUUxREoseUJBQVcsOERBQUNnRDtnQkFBRVAsV0FBVTswQkFBdUJ6Qzs7Ozs7O1lBQy9DRSx1QkFBUyw4REFBQzhDO2dCQUFFUCxXQUFVOzBCQUFxQnZDOzs7Ozs7Ozs7Ozs7QUFHbEQ7R0FyR3dCTDtLQUFBQSIsInNvdXJjZXMiOlsiL2hvbWUvYmFja2VuZC0wMS91cGxvYWQtZmlsZS1wcm9qZWN0L3VwbG9hZC1maWxlLWZyb250ZW5kL2FwcC91cGxvYWQvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBsb2FkUGFnZSgpIHtcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TWVzc2FnZShcIlwiKTtcbiAgICBjb25zdCBzZWxlY3RlZEZpbGVzID0gQXJyYXkuZnJvbShlLnRhcmdldC5maWxlcyk7XG4gICAgY29uc29sZS5sb2coXCJUeXBlOiBcIiArIHNlbGVjdGVkRmlsZS50eXBlKTtcbiAgICBpZiAoIXNlbGVjdGVkRmlsZSkge1xuICAgICAgc2V0RXJyb3IoXCJWdWkgbMOybmcgY2jhu41uIGZpbGVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWxsb3dlZFR5cGVzID0gW1wiaW1hZ2UvXCIsIFwidmlkZW8vXCJdO1xuICAgIGlmICghYWxsb3dlZFR5cGVzLnNvbWUoKHR5cGUpID0+IHNlbGVjdGVkRmlsZS50eXBlLnN0YXJ0c1dpdGgodHlwZSkpKSB7XG4gICAgICBzZXRFcnJvcihcIkNo4buJIGjhu5cgdHLhu6MgdXBsb2FkIOG6o25oIGhv4bq3YyB2aWRlb1wiKTtcbiAgICAgIHNldEZpbGUobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0RmlsZShzZWxlY3RlZEZpbGUpO1xuICAgIHNldEVycm9yKFwiXCIpO1xuICAgIHNldFByb2dyZXNzKDApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICAgIGlmICghZmlsZSkge1xuICAgICAgc2V0TWVzc2FnZShcIlZ1aSBsw7JuZyBjaOG7jW4gZmlsZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZmlsZXMvdXBsb2FkXCIsXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiB9LFxuICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IChwcm9ncmVzc0V2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgKHByb2dyZXNzRXZlbnQubG9hZGVkICogMTAwKSAvIHByb2dyZXNzRXZlbnQudG90YWxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRQcm9ncmVzcyhwZXJjZW50KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBzZXRNZXNzYWdlKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICBzZXRGaWxlKG51bGwpO1xuICAgICAgc2V0UHJvZ3Jlc3MoMCk7XG4gICAgICBzZXRFcnJvcihcIlwiKTtcblxuICAgICAgaWYgKGZpbGVJbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJM4buXaSB1cGxvYWQ6XCIsIGVycik7XG5cbiAgICAgIC8vIEzhuqV5IGzhu5dpIGNoaSB0aeG6v3QgdOG7qyByZXNwb25zZSBj4bunYSBzZXJ2ZXJcbiAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgc2V0RXJyb3IoXG4gICAgICAgICAgYEzhu5dpIHThu6sgc2VydmVyOiAke2Vyci5yZXNwb25zZS5kYXRhLmVycm9yIHx8IFwiS2jDtG5nIHLDtSBuZ3V5w6puIG5ow6JuXCJ9YFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChlcnIucmVxdWVzdCkge1xuICAgICAgICBzZXRFcnJvcihcIktow7RuZyBr4bq/dCBu4buRaSDEkcaw4bujYyDEkeG6v24gc2VydmVyLiBLaeG7g20gdHJhIGzhuqFpIGvhur90IG7hu5FpIG3huqFuZy5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcihcIkzhu5dpIGtow7RuZyB4w6FjIMSR4buLbmg6IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgICBzZXRQcm9ncmVzcygwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+VXBsb2FkIEZpbGU8L2gxPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0yXCJcbiAgICAgIC8+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZCBtbC0yXCJcbiAgICAgID5cbiAgICAgICAgVXBsb2FkXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtwcm9ncmVzcyA+IDAgJiYgKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtYmx1ZS01MDBcIj7EkGFuZyB1cGxvYWQ6IHtwcm9ncmVzc30lPC9wPlxuICAgICAgKX1cbiAgICAgIHttZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1ncmVlbi01MDBcIj57bWVzc2FnZX08L3A+fVxuICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1yZWQtNTAwXCI+e2Vycm9yfTwvcD59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJheGlvcyIsIlVwbG9hZFBhZ2UiLCJmaWxlIiwic2V0RmlsZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiZXJyb3IiLCJzZXRFcnJvciIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJmaWxlSW5wdXRSZWYiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsInNlbGVjdGVkRmlsZXMiLCJBcnJheSIsImZyb20iLCJ0YXJnZXQiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZEZpbGUiLCJ0eXBlIiwiYWxsb3dlZFR5cGVzIiwic29tZSIsInN0YXJ0c1dpdGgiLCJoYW5kbGVVcGxvYWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50IiwicGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsImxvYWRlZCIsInRvdGFsIiwiZGF0YSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVyciIsInJlcXVlc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0Iiwib25DaGFuZ2UiLCJyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/upload/page.js\n"));

/***/ })

});