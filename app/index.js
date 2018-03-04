/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/angular/angular.js":
/*!******************************************!*\
  !*** ../node_modules/angular/angular.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "../node_modules/angular/index.js":
/*!****************************************!*\
  !*** ../node_modules/angular/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./angular */ \"../node_modules/angular/angular.js\");\nmodule.exports = angular;\n\n//# sourceURL=webpack:///../node_modules/angular/index.js?");

/***/ }),

/***/ "./core.js":
/*!*****************!*\
  !*** ./core.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// (function(){\n\n\n//     // function config($routeProvider){\n//     //     $routeProvider\n//     //         .when('/', {\n//     //             templateUrl: 'home/home.view.html',\n//     //             controller: 'homeController',\n//     //             // controllerAs: 'vm'\n//     //         })\n//     //         .otherwise({redirectTo: '/'})\n//     // }\n\n// class homeController {\n//     constructor($scope, $http) {\n//         this.test = 'qweqweqwe'\n//         // this.trks = this.init($scope, $http);\n//     }\n\n\n//     // init($scope, $http){\n//     //     return (async function(){\n\n//     //             try {\n//     //                 $scope.tracks = await $http.get('/api/tracks')\n//     //                 console.log(tracks)\n//     //                 return tracks\n//     //             } catch(err) {\n//     //                 console.log('Error get: ', err)\n//     //             }      \n//     //         })()\n//     // }\n// }\n\n\n//     // function _isNumeric(n){\n//     //     return !isNaN(parseFloat(n)) && isFinite(n)\n//     // }\n\n//     // function timeNormalize(){\n//     //     return function(timeInSec){\n//     //         if ( timeInSec && _isNumeric(timeInSec)){\n//     //             var sec = timeInSec % 60\n//     //             console.log(sec)\n//     //             sec = sec === 0 ? sec + '0' : sec\n//     //             console.log(sec) \n//     //             var timeNormalDisplay = Math.floor(timeInSec / 60) + ':' + sec;\n//     //             return timeNormalDisplay\n//     //         }\n//     //     }\n//     // }\n\n//     // function russianCurrency(){\n//     //     return function(cost){\n//     //         return cost + '&#8381;'\n//     //     }\n//     // }\n\n\n//     angular.module('joApp', ['ngRoute'])\n//         // .filter('timeNormalize', timeNormalize)\n//         // .filter('russianCurrency', russianCurrency)\n//         .controller('homeController', homeController)\n//         // .config(['$routeProvider', config]);\n// })()\n\nconst angular = __webpack_require__(/*! angular */ \"../node_modules/angular/index.js\");\nconst ngModule = angular.module('joApp', []);\n\n__webpack_require__(/*! ./directives */ \"./directives/index.js\")(ngModule);\n\n//# sourceURL=webpack:///./core.js?");

/***/ }),

/***/ "./directives/index.js":
/*!*****************************!*\
  !*** ./directives/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function (ngModule) {\n\t__webpack_require__(/*! ./joheader/joheader.js */ \"./directives/joheader/joheader.js\")(ngModule);\n\t__webpack_require__(/*! ./sidebar/sidebar.js */ \"./directives/sidebar/sidebar.js\")(ngModule);\n};\n\n//# sourceURL=webpack:///./directives/index.js?");

/***/ }),

/***/ "./directives/joheader/joheader.js":
/*!*****************************************!*\
  !*** ./directives/joheader/joheader.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ngModule) {\n\tngModule.directive('joheader', joheaderFn);\n\n\tfunction joheaderFn() {\n\t\treturn {\n\t\t\trestrict: 'EA',\n\t\t\ttemplateUrl: 'directives/joheader/joheader.template.html'\n\t\t};\n\t}\n};\n\n//# sourceURL=webpack:///./directives/joheader/joheader.js?");

/***/ }),

/***/ "./directives/sidebar/sidebar.js":
/*!***************************************!*\
  !*** ./directives/sidebar/sidebar.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ngModule) {\n\tngModule.directive('sidebar', sidebarFn);\n\n\tfunction sidebarFn() {\n\t\treturn {\n\t\t\trestrict: 'EA',\n\t\t\ttemplateUrl: 'directives/sidebar/sidebar.template.html'\n\t\t};\n\t}\n};\n\n//# sourceURL=webpack:///./directives/sidebar/sidebar.js?");

/***/ })

/******/ });