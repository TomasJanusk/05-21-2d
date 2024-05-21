/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_renderForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderForm */ "./src/modules/renderForm.js");
/* harmony import */ var _modules_searchCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/searchCode */ "./src/modules/searchCode.js");


(0,_modules_renderForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_searchCode__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/modules/ajaxService.js":
/*!************************************!*\
  !*** ./src/modules/ajaxService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ajaxSevice = function ajaxSevice(term) {
  var url = 'http://www.omdbapi.com/?t=';
  var key = 'fb31e168';
  return fetch("".concat(url).concat(term, "&apikey=").concat(key)).then(function (response) {
    return response.json();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajaxSevice);

/***/ }),

/***/ "./src/modules/createMovieCard.js":
/*!****************************************!*\
  !*** ./src/modules/createMovieCard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createMovieCard = function createMovieCard(movie) {
  var comments = JSON.parse(localStorage.getItem(movie.imdbID)) || [];
  var commentsHTML = comments.map(function (comment) {
    return "<p>".concat(comment, "</p>");
  }).join('');
  return "\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">\n                <h2>".concat(movie.Title, "</h2>\n            </div>\n            <div class=\"card-body\">\n                <img src=\"").concat(movie.Poster, "\" alt=\"").concat(movie.Title, " Poster\" class=\"img-fluid mb-3\"/>\n                <p><strong>Writer:</strong> ").concat(movie.Writer, "</p>\n                <p><strong>Awards:</strong> ").concat(movie.Awards, "</p>\n                <p><strong>Runtime:</strong> ").concat(movie.Runtime, "</p>\n                <p><strong>imdbRating:</strong> ").concat(movie.imdbRating, "</p>\n                <p><strong>Release Date:</strong> ").concat(movie.Released, "</p>\n                <p><strong>Actors:</strong> ").concat(movie.Actors, "</p>\n                <p><strong>Genre:</strong> ").concat(movie.Genre, "</p>\n                <p><strong>Director:</strong> ").concat(movie.Director, "</p>\n                <p><strong>Plot:</strong> ").concat(movie.Plot, "</p>\n                <div class=\"comments-section\">\n                    <h3>Comments</h3>\n                    <div class=\"comments\">").concat(commentsHTML, "</div>\n                    <textarea class=\"form-control mb-2 comment-input\" placeholder=\"Add a comment\"></textarea>\n                    <button class=\"btn btn-secondary add-comment-btn\" data-imdbid=\"").concat(movie.imdbID, "\">Add Comment</button>\n                </div>\n            </div>\n        </div>\n    ");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMovieCard);

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var form = function form() {
  return "<div class=\"form-group mb-2\">\n                <div class=\"error-message\" style=\"color: red; display: none;\">Neteisingai ivestas pavadinimas</div>\n                <input type=\"text\" class=\"form-control term\" placeholder=\"Filmo pavadinimas:\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary mb-2\">Ieskoti filmo</button>\n            <div class=\"result\"></div>\n            ";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/modules/renderForm.js":
/*!***********************************!*\
  !*** ./src/modules/renderForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/modules/form.js");

var renderForm = function renderForm() {
  var formElement = document.createElement('form');
  formElement.className = 'form-inline';
  formElement.innerHTML = (0,_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
  document.querySelector('.card-body').appendChild(formElement);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderForm);

/***/ }),

/***/ "./src/modules/searchCode.js":
/*!***********************************!*\
  !*** ./src/modules/searchCode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ajaxService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxService */ "./src/modules/ajaxService.js");
/* harmony import */ var _createMovieCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMovieCard */ "./src/modules/createMovieCard.js");


var searchCode = function searchCode() {
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var searchTerm = document.querySelector('.term').value;
    var searchResponse;
    (0,_ajaxService__WEBPACK_IMPORTED_MODULE_0__["default"])(searchTerm).then(function (result) {
      searchResponse = result;
      if (searchResponse.Response === "False") {
        document.querySelector('.error-message').style.display = 'block';
      } else {
        document.querySelector('.error-message').style.display = 'none';
        var movieCardHTML = (0,_createMovieCard__WEBPACK_IMPORTED_MODULE_1__["default"])(searchResponse);
        document.querySelector('.result').innerHTML = movieCardHTML;
        document.querySelector('.add-comment-btn').addEventListener('click', function (event) {
          var imdbID = event.target.dataset.imdbid;
          var commentInput = document.querySelector('.comment-input').value;
          if (commentInput) {
            var comments = JSON.parse(localStorage.getItem(imdbID)) || [];
            comments.push(commentInput);
            localStorage.setItem(imdbID, JSON.stringify(comments));
            document.querySelector('.comment-input').value = '';
            var commentsHTML = comments.map(function (comment) {
              return "<p>".concat(comment, "</p>");
            }).join('');
            document.querySelector('.comments').innerHTML = commentsHTML;
          }
        });
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchCode);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkstudentsdatabase"] = self["webpackChunkstudentsdatabase"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;