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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildPath\", function() { return buildPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extractData\", function() { return extractData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction buildPath() {\n  return path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), \"dummy-emails.json\");\n}\nfunction extractData(filePath) {\n  const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(filePath);\n  const data = JSON.parse(fileData);\n  return data;\n}\nfunction handler(req, res) {\n  if (req.method === \"POST \") {\n    const email = req.body.email;\n    const filePath = buildPath();\n    const emailList = extractData(filePath);\n    emailList.push({\n      id: new Date(),\n      email\n    });\n    fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(filePath, JSON.stringify(emailList));\n    res.status(201).json({\n      message: \"heyyooo it worked!\",\n      email: emailList\n    });\n  } else if (req.method === \"GET\") {\n    res.json({\n      message: \"Why are you here? This is an API route\"\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZW1haWwvaW5kZXguanM/NTFkYiJdLCJuYW1lcyI6WyJidWlsZFBhdGgiLCJwYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJleHRyYWN0RGF0YSIsImZpbGVQYXRoIiwiZmlsZURhdGEiLCJmcyIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJib2R5IiwiZW1haWxMaXN0IiwicHVzaCIsImlkIiwiRGF0ZSIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULEdBQXFCO0FBQzFCLFNBQU9DLDJDQUFJLENBQUNDLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsbUJBQXpCLENBQVA7QUFDRDtBQUVNLFNBQVNDLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQ3BDLFFBQU1DLFFBQVEsR0FBR0MseUNBQUUsQ0FBQ0MsWUFBSCxDQUFnQkgsUUFBaEIsQ0FBakI7QUFDQSxRQUFNSSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxRQUFYLENBQWI7QUFDQSxTQUFPRyxJQUFQO0FBQ0Q7QUFFYyxTQUFTRyxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDeEMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsT0FBbkIsRUFBNEI7QUFDMUIsVUFBTUMsS0FBSyxHQUFHSCxHQUFHLENBQUNJLElBQUosQ0FBU0QsS0FBdkI7QUFDQSxVQUFNWCxRQUFRLEdBQUdOLFNBQVMsRUFBMUI7QUFDQSxVQUFNbUIsU0FBUyxHQUFHZCxXQUFXLENBQUNDLFFBQUQsQ0FBN0I7QUFDQWEsYUFBUyxDQUFDQyxJQUFWLENBQWU7QUFDYkMsUUFBRSxFQUFFLElBQUlDLElBQUosRUFEUztBQUViTDtBQUZhLEtBQWY7QUFLQVQsNkNBQUUsQ0FBQ2UsYUFBSCxDQUFpQmpCLFFBQWpCLEVBQTJCSyxJQUFJLENBQUNhLFNBQUwsQ0FBZUwsU0FBZixDQUEzQjtBQUVBSixPQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUUsb0JBQVg7QUFBaUNWLFdBQUssRUFBRUU7QUFBeEMsS0FBckI7QUFDRCxHQVpELE1BWU8sSUFBSUwsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDL0JELE9BQUcsQ0FBQ1csSUFBSixDQUFTO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQVQ7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2VtYWlsL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUGF0aCgpIHtcbiAgcmV0dXJuIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImR1bW15LWVtYWlscy5qc29uXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdERhdGEoZmlsZVBhdGgpIHtcbiAgY29uc3QgZmlsZURhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmaWxlRGF0YSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1QgXCIpIHtcbiAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5LmVtYWlsO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRQYXRoKCk7XG4gICAgY29uc3QgZW1haWxMaXN0ID0gZXh0cmFjdERhdGEoZmlsZVBhdGgpO1xuICAgIGVtYWlsTGlzdC5wdXNoKHtcbiAgICAgIGlkOiBuZXcgRGF0ZSgpLFxuICAgICAgZW1haWwsXG4gICAgfSk7XG5cbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShlbWFpbExpc3QpKTtcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJoZXl5b29vIGl0IHdvcmtlZCFcIiwgZW1haWw6IGVtYWlsTGlzdCB9KTtcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgcmVzLmpzb24oeyBtZXNzYWdlOiBcIldoeSBhcmUgeW91IGhlcmU/IFRoaXMgaXMgYW4gQVBJIHJvdXRlXCIgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/email/index.js\n");

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