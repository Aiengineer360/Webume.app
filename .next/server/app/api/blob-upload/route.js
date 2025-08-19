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
exports.id = "app/api/blob-upload/route";
exports.ids = ["app/api/blob-upload/route"];
exports.modules = {

/***/ "(rsc)/./app/api/blob-upload/route.ts":
/*!**************************************!*\
  !*** ./app/api/blob-upload/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.3.2_@opentelemetry+_5752726a3393a6c63f0755c0edb901c9/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _vercel_blob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vercel/blob */ \"(rsc)/./node_modules/.pnpm/@vercel+blob@0.23.4/node_modules/@vercel/blob/dist/index.js\");\n\n\nasync function POST(request) {\n    try {\n        const formData = await request.formData();\n        const file = formData.get('file');\n        if (!(file instanceof File)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'No file provided'\n            }, {\n                status: 400\n            });\n        }\n        const fileName = `${crypto.randomUUID()}-${file.name}`;\n        const token = process.env.BLOB_READ_WRITE_TOKEN;\n        const blob = await (0,_vercel_blob__WEBPACK_IMPORTED_MODULE_1__.put)(fileName, file, {\n            access: 'public',\n            // token is required locally; in Vercel it can be omitted\n            ...token ? {\n                token\n            } : {}\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            url: blob.url,\n            size: file.size,\n            key: blob.pathname,\n            bucket: 'vercel-blob'\n        });\n    } catch (error) {\n        console.error('Blob upload error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Upload failed'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Jsb2ItdXBsb2FkL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNSO0FBRTVCLGVBQWVFLEtBQUtDLE9BQWdCO0lBQzFDLElBQUk7UUFDSCxNQUFNQyxXQUFXLE1BQU1ELFFBQVFDLFFBQVE7UUFDdkMsTUFBTUMsT0FBT0QsU0FBU0UsR0FBRyxDQUFDO1FBRTFCLElBQUksQ0FBRUQsQ0FBQUEsZ0JBQWdCRSxJQUFHLEdBQUk7WUFDNUIsT0FBT1AscURBQVlBLENBQUNRLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFtQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDdkU7UUFFQSxNQUFNQyxXQUFXLEdBQUdDLE9BQU9DLFVBQVUsR0FBRyxDQUFDLEVBQUVSLEtBQUtTLElBQUksRUFBRTtRQUN0RCxNQUFNQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLHFCQUFxQjtRQUUvQyxNQUFNQyxPQUFPLE1BQU1sQixpREFBR0EsQ0FBQ1UsVUFBVU4sTUFBTTtZQUN0Q2UsUUFBUTtZQUNSLHlEQUF5RDtZQUN6RCxHQUFJTCxRQUFRO2dCQUFFQTtZQUFNLElBQUksQ0FBQyxDQUFDO1FBQzNCO1FBRUEsT0FBT2YscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUN4QmEsS0FBS0YsS0FBS0UsR0FBRztZQUNiQyxNQUFNakIsS0FBS2lCLElBQUk7WUFDZkMsS0FBS0osS0FBS0ssUUFBUTtZQUNsQkMsUUFBUTtRQUNUO0lBQ0QsRUFBRSxPQUFPaEIsT0FBTztRQUNmaUIsUUFBUWpCLEtBQUssQ0FBQyxzQkFBc0JBO1FBQ3BDLE9BQU9ULHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFnQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNwRTtBQUNEIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFyb29qXFxEb3dubG9hZHNcXHNlbGYuc29cXGFwcFxcYXBpXFxibG9iLXVwbG9hZFxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBwdXQgfSBmcm9tICdAdmVyY2VsL2Jsb2InO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuXHRcdGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKTtcclxuXHJcblx0XHRpZiAoIShmaWxlIGluc3RhbmNlb2YgRmlsZSkpIHtcclxuXHRcdFx0cmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdObyBmaWxlIHByb3ZpZGVkJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGZpbGVOYW1lID0gYCR7Y3J5cHRvLnJhbmRvbVVVSUQoKX0tJHtmaWxlLm5hbWV9YDtcclxuXHRcdGNvbnN0IHRva2VuID0gcHJvY2Vzcy5lbnYuQkxPQl9SRUFEX1dSSVRFX1RPS0VOO1xyXG5cclxuXHRcdGNvbnN0IGJsb2IgPSBhd2FpdCBwdXQoZmlsZU5hbWUsIGZpbGUsIHtcclxuXHRcdFx0YWNjZXNzOiAncHVibGljJyxcclxuXHRcdFx0Ly8gdG9rZW4gaXMgcmVxdWlyZWQgbG9jYWxseTsgaW4gVmVyY2VsIGl0IGNhbiBiZSBvbWl0dGVkXHJcblx0XHRcdC4uLih0b2tlbiA/IHsgdG9rZW4gfSA6IHt9KSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcblx0XHRcdHVybDogYmxvYi51cmwsXHJcblx0XHRcdHNpemU6IGZpbGUuc2l6ZSxcclxuXHRcdFx0a2V5OiBibG9iLnBhdGhuYW1lLFxyXG5cdFx0XHRidWNrZXQ6ICd2ZXJjZWwtYmxvYicsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignQmxvYiB1cGxvYWQgZXJyb3I6JywgZXJyb3IpO1xyXG5cdFx0cmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVcGxvYWQgZmFpbGVkJyB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG5cdH1cclxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHV0IiwiUE9TVCIsInJlcXVlc3QiLCJmb3JtRGF0YSIsImZpbGUiLCJnZXQiLCJGaWxlIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiZmlsZU5hbWUiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwibmFtZSIsInRva2VuIiwicHJvY2VzcyIsImVudiIsIkJMT0JfUkVBRF9XUklURV9UT0tFTiIsImJsb2IiLCJhY2Nlc3MiLCJ1cmwiLCJzaXplIiwia2V5IiwicGF0aG5hbWUiLCJidWNrZXQiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/blob-upload/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.3.2_@opentelemetry+_5752726a3393a6c63f0755c0edb901c9/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblob-upload%2Froute&page=%2Fapi%2Fblob-upload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblob-upload%2Froute.ts&appDir=C%3A%5CUsers%5CArooj%5CDownloads%5Cself.so%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CArooj%5CDownloads%5Cself.so&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.2_@opentelemetry+_5752726a3393a6c63f0755c0edb901c9/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblob-upload%2Froute&page=%2Fapi%2Fblob-upload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblob-upload%2Froute.ts&appDir=C%3A%5CUsers%5CArooj%5CDownloads%5Cself.so%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CArooj%5CDownloads%5Cself.so&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.3.2_@opentelemetry+_5752726a3393a6c63f0755c0edb901c9/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.3.2_@opentelemetry+_5752726a3393a6c63f0755c0edb901c9/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.3.2_@opentelemetry+_5752726a3393a6c63f0755c0edb901c9/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Arooj_Downloads_self_so_app_api_blob_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/blob-upload/route.ts */ \"(rsc)/./app/api/blob-upload/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/blob-upload/route\",\n        pathname: \"/api/blob-upload\",\n        filename: \"route\",\n        bundlePath: \"app/api/blob-upload/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Arooj\\\\Downloads\\\\self.so\\\\app\\\\api\\\\blob-upload\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Arooj_Downloads_self_so_app_api_blob_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4zLjJfQG9wZW50ZWxlbWV0cnkrXzU3NTI3MjZhMzM5M2E2YzYzZjA3NTVjMGVkYjkwMWM5L25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtYXBwLWxvYWRlci9pbmRleC5qcz9uYW1lPWFwcCUyRmFwaSUyRmJsb2ItdXBsb2FkJTJGcm91dGUmcGFnZT0lMkZhcGklMkZibG9iLXVwbG9hZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmJsb2ItdXBsb2FkJTJGcm91dGUudHMmYXBwRGlyPUMlM0ElNUNVc2VycyU1Q0Fyb29qJTVDRG93bmxvYWRzJTVDc2VsZi5zbyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQXJvb2olNUNEb3dubG9hZHMlNUNzZWxmLnNvJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNxQjtBQUNsRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQXJvb2pcXFxcRG93bmxvYWRzXFxcXHNlbGYuc29cXFxcYXBwXFxcXGFwaVxcXFxibG9iLXVwbG9hZFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYmxvYi11cGxvYWQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9ibG9iLXVwbG9hZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYmxvYi11cGxvYWQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBcm9valxcXFxEb3dubG9hZHNcXFxcc2VsZi5zb1xcXFxhcHBcXFxcYXBpXFxcXGJsb2ItdXBsb2FkXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.3.2_@opentelemetry+_5752726a3393a6c63f0755c0edb901c9/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblob-upload%2Froute&page=%2Fapi%2Fblob-upload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblob-upload%2Froute.ts&appDir=C%3A%5CUsers%5CArooj%5CDownloads%5Cself.so%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CArooj%5CDownloads%5Cself.so&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.3.2_@opentelemetry+_5752726a3393a6c63f0755c0edb901c9/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.2_@opentelemetry+_5752726a3393a6c63f0755c0edb901c9/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \**************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.3.2_@opentelemetry+_5752726a3393a6c63f0755c0edb901c9/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.2_@opentelemetry+_5752726a3393a6c63f0755c0edb901c9/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \**************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "console":
/*!**************************!*\
  !*** external "console" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("console");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "diagnostics_channel":
/*!**************************************!*\
  !*** external "diagnostics_channel" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("diagnostics_channel");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("http2");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("perf_hooks");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "stream/web":
/*!*****************************!*\
  !*** external "stream/web" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream/web");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "util/types":
/*!*****************************!*\
  !*** external "util/types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("util/types");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.3.2_@opentelemetry+_5752726a3393a6c63f0755c0edb901c9","vendor-chunks/@opentelemetry+api@1.9.0","vendor-chunks/undici@5.29.0","vendor-chunks/@fastify+busboy@2.1.1","vendor-chunks/retry@0.13.1","vendor-chunks/@vercel+blob@0.23.4","vendor-chunks/is-plain-object@5.0.0","vendor-chunks/is-buffer@2.0.5","vendor-chunks/bytes@3.1.2","vendor-chunks/async-retry@1.3.3"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.3.2_@opentelemetry+_5752726a3393a6c63f0755c0edb901c9/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblob-upload%2Froute&page=%2Fapi%2Fblob-upload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblob-upload%2Froute.ts&appDir=C%3A%5CUsers%5CArooj%5CDownloads%5Cself.so%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CArooj%5CDownloads%5Cself.so&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();