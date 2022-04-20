module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/email/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/email/index.js":
/*!**********************************!*\
  !*** ./pages/api/email/index.js ***!
  \**********************************/
/*! exports provided: buildPath, extractData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildPath\", function() { return buildPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extractData\", function() { return extractData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction buildPath() {\n  return path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), \"dummy-emails.json\");\n}\nfunction extractData(filePath) {\n  const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(filePath);\n  const data = JSON.parse(fileData);\n  return data;\n}\nfunction handler(req, res) {\n  console.log(\"running handler\");\n  const email = req.body.email;\n  const filePath = buildPath();\n  const emailList = extractData(filePath);\n  emailList.push({\n    id: new Date(),\n    email\n  });\n  fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(filePath, JSON.stringify(emailList));\n  res.status(201).json({\n    message: \"heyyooo it worked!\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZW1haWwvaW5kZXguanM/NTFkYiJdLCJuYW1lcyI6WyJidWlsZFBhdGgiLCJwYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJleHRyYWN0RGF0YSIsImZpbGVQYXRoIiwiZmlsZURhdGEiLCJmcyIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwiYm9keSIsImVtYWlsTGlzdCIsInB1c2giLCJpZCIsIkRhdGUiLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR08sU0FBU0EsU0FBVCxHQUFxQjtBQUMxQixTQUFPQywyQ0FBSSxDQUFDQyxJQUFMLENBQVVDLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLG1CQUF6QixDQUFQO0FBQ0Q7QUFFTSxTQUFTQyxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUNwQyxRQUFNQyxRQUFRLEdBQUdDLHlDQUFFLENBQUNDLFlBQUgsQ0FBZ0JILFFBQWhCLENBQWpCO0FBQ0EsUUFBTUksSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsUUFBWCxDQUFiO0FBQ0EsU0FBT0csSUFBUDtBQUNEO0FBRWMsU0FBU0csT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBLFFBQU1DLEtBQUssR0FBR0osR0FBRyxDQUFDSyxJQUFKLENBQVNELEtBQXZCO0FBQ0EsUUFBTVosUUFBUSxHQUFHTixTQUFTLEVBQTFCO0FBQ0EsUUFBTW9CLFNBQVMsR0FBR2YsV0FBVyxDQUFDQyxRQUFELENBQTdCO0FBQ0FjLFdBQVMsQ0FBQ0MsSUFBVixDQUFlO0FBQ2JDLE1BQUUsRUFBRSxJQUFJQyxJQUFKLEVBRFM7QUFFYkw7QUFGYSxHQUFmO0FBS0NWLDJDQUFFLENBQUNnQixhQUFILENBQWlCbEIsUUFBakIsRUFBMkJLLElBQUksQ0FBQ2MsU0FBTCxDQUFlTCxTQUFmLENBQTNCO0FBRURMLEtBQUcsQ0FDRVcsTUFETCxDQUNZLEdBRFosRUFFS0MsSUFGTCxDQUVVO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBRlY7QUFHRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9lbWFpbC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRQYXRoKCkge1xuICByZXR1cm4gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiZHVtbXktZW1haWxzLmpzb25cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RGF0YShmaWxlUGF0aCkge1xuICBjb25zdCBmaWxlRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCk7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZpbGVEYXRhKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2coXCJydW5uaW5nIGhhbmRsZXJcIik7XG4gIGNvbnN0IGVtYWlsID0gcmVxLmJvZHkuZW1haWw7XG4gIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRQYXRoKCk7XG4gIGNvbnN0IGVtYWlsTGlzdCA9IGV4dHJhY3REYXRhKGZpbGVQYXRoKTtcbiAgZW1haWxMaXN0LnB1c2goe1xuICAgIGlkOiBuZXcgRGF0ZSgpLFxuICAgIGVtYWlsLFxuICB9KTtcblxuICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZW1haWxMaXN0KSk7XG5cbiAgcmVzXG4gICAgICAuc3RhdHVzKDIwMSlcbiAgICAgIC5qc29uKHsgbWVzc2FnZTogXCJoZXl5b29vIGl0IHdvcmtlZCFcIn0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/email/index.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });