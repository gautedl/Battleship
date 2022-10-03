/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/Gameboard.js":
/*!************************************!*\
  !*** ./src/factories/Gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/factories/Ship.js\");\n\n\nclass Gameboard {\n  SIZE = 10;\n  TILES_WITH_SHIPS = 17;\n\n  constructor() {\n    this.board = [];\n    this.missedShots = 0;\n    this.hits = 0;\n  }\n\n  initBoard() {\n    for (let i = 0; i < this.SIZE; i++) {\n      this.board[i] = [];\n      for (let j = 0; j < this.SIZE; j++) {\n        this.board[i][j] = [];\n      }\n    }\n    return this.board;\n  }\n\n  placeShip(ship, row, column, isVertical) {\n    if (!this.checkIfShipCanBePlaced(ship, row, column, isVertical))\n      return false;\n    const offset = Math.floor(ship.length / 2);\n    let startPosition = 0;\n    if (isVertical) {\n      startPosition = row - offset;\n      for (let i = 0; i < ship.length; i++) {\n        this.board[startPosition + i][column] = 'ship';\n      }\n    } else {\n      startPosition = column - offset;\n      for (let i = 0; i < ship.length; i++) {\n        this.board[row][startPosition + i] = 'ship';\n      }\n    }\n    return this.board;\n  }\n\n  checkIfShipCanBePlaced(ship, row, column, isVertical) {\n    const offset = Math.floor(ship.length / 2);\n    let startPosition = 0;\n\n    if (isVertical) {\n      startPosition = row - offset;\n      for (let i = 0; i < ship.length; i++) {\n        if (\n          startPosition + i < 0 ||\n          startPosition + i > 9 ||\n          this.board[startPosition + i][column] === 'ship'\n        )\n          return false;\n      }\n    } else {\n      startPosition = column - offset;\n      for (let i = 0; i < ship.length; i++) {\n        if (\n          startPosition + i < 0 ||\n          startPosition + i > 9 ||\n          this.board[row][startPosition + i] === 'ship'\n        )\n          return false;\n      }\n    }\n\n    return true;\n  }\n\n  receiveAttack(row, col) {\n    if (this.board[row][col] === 'miss' || this.board[row][col] === 'hit')\n      return false;\n    if (this.board[row][col] === 'ship') {\n      this.board[row][col] = 'hit';\n      this.hits++;\n      return 'hit';\n    } else {\n      this.missedShots++;\n      this.board[row][col] = 'miss';\n      return 'miss';\n    }\n  }\n\n  checkIfAllShipsHaveSunk() {\n    return this.hits === this.TILES_WITH_SHIPS ? true : false;\n  }\n\n  placeRandomShips() {\n    const carrier = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\n    const battleship = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n    const cruiser = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    const submarine = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    const destroyer = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n\n    const arrOfShips = [carrier, battleship, cruiser, submarine, destroyer];\n\n    while (arrOfShips.length > 0) {\n      const row = Math.floor(Math.random() * 10);\n      const col = Math.floor(Math.random() * 10);\n      const isVertical = Math.random() > 0.5 ? true : false;\n\n      if (this.checkIfShipCanBePlaced(arrOfShips[0], row, col, isVertical)) {\n        this.placeShip(arrOfShips[0], row, col, isVertical);\n        arrOfShips.shift();\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/factories/Gameboard.js?");

/***/ }),

/***/ "./src/factories/Player.js":
/*!*********************************!*\
  !*** ./src/factories/Player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n  constructor(name = 'Computer', isComputer = true) {\n    this.name = name;\n    this.isComputer = isComputer;\n    this.turn = true;\n    this.coords = [];\n    // this.coordCol = [];\n  }\n\n  switchTurn() {\n    this.turn = !this.turn;\n  }\n\n  randomPlay() {\n    let row = Math.floor(Math.random() * 10);\n    let col = Math.floor(Math.random() * 10);\n    let coordination = row + '' + col;\n\n    while (this.coords.includes(coordination)) {\n      row = Math.floor(Math.random() * 10);\n      col = Math.floor(Math.random() * 10);\n      coordination = row + '' + col;\n    }\n\n    this.coords.push(row + '' + col);\n\n    return [row, col];\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/factories/Player.js?");

/***/ }),

/***/ "./src/factories/Ship.js":
/*!*******************************!*\
  !*** ./src/factories/Ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hits = Array(this.length).fill('ship');\n  }\n\n  // populateShip() {\n  //   for (let i = 0; i < this.length; i++) {\n  //     this.hits[i] = 'ship';\n  //   }\n  //   return this.hits;\n  // }\n\n  hit(index) {\n    if (this.hits[index] === 'hit') return;\n    this.hits[index] = 'hit';\n    return this.hits;\n  }\n\n  isSunk() {\n    return this.hits.includes('ship') ? false : true;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/factories/Ship.js?");

/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTiles\": () => (/* binding */ renderTiles)\n/* harmony export */ });\n/* harmony import */ var _factories_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/Ship */ \"./src/factories/Ship.js\");\n/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/Player */ \"./src/factories/Player.js\");\n/* harmony import */ var _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/Gameboard */ \"./src/factories/Gameboard.js\");\n\n\n\n\nconst playerOneTiles = document.querySelector('.tiles-player1');\nconst playerTwoTiles = document.querySelector('.tiles-player2');\nconst playerOneName = document.querySelector('.player-name.player1');\nconst playerTwoName = document.querySelector('.player-name.player2');\n\nconst player = new _factories_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Human', false);\nconst computer = new _factories_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconst gameboardPlayer = new _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst gameboardComputer = new _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\ngameboardPlayer.initBoard();\ngameboardComputer.initBoard();\ngameboardPlayer.placeRandomShips();\ngameboardComputer.placeRandomShips();\n\nfunction renderCompGameboard(gameboard, tiles) {\n  for (let i = 0; i < gameboard.board.length; i++) {\n    for (let j = 0; j < gameboard.board[i].length; j++) {\n      const tile = document.createElement('div');\n      tile.className = 'tile';\n      tile.classList.add('tile-comp');\n      tile.dataAttr = +i + '' + j;\n      getTile(tile);\n      tiles.appendChild(tile);\n    }\n  }\n}\n\nfunction renderPlayerGameboard(gameboard, tiles) {\n  for (let i = 0; i < gameboard.board.length; i++) {\n    for (let j = 0; j < gameboard.board[i].length; j++) {\n      const tile = document.createElement('div');\n      tile.className = 'tile';\n      tile.id = 'tile-player';\n      if (gameboard.board[i][j] === 'ship') tile.classList.add('tile-ship');\n      tile.dataRow = i;\n      tile.dataCol = j;\n      // getTileComp(tile);\n      tiles.appendChild(tile);\n    }\n  }\n}\n\n// function nexTurn() {\n//   console.log(computer.turn, player.turn);\n\n//   if (player.turn) {\n//     playerOneName.classList.remove('not-turn');\n//     playerTwoName.classList.add('not-turn');\n//   } else if (computer.turn) {\n//     playerTwoName.classList.remove('not-turn');\n//     playerOneName.classList.add('not-turn');\n//   }\n\n//   computer.switchTurn();\n//   player.switchTurn();\n// }\n\nfunction getTile(tile) {\n  tile.addEventListener('click', function (e) {\n    const [row, col] = e.target.dataAttr.split('');\n\n    attackBoard(gameboardComputer, row, col, tile);\n\n    const [compRow, compCol] = computer.randomPlay();\n    const compTile = getPlayerTile(compRow, compCol);\n\n    attackBoard(gameboardPlayer, compRow, compCol, compTile);\n  });\n}\n\nfunction getPlayerTile(row, col) {\n  const tilesPlayer = document.querySelectorAll('#tile-player');\n  let tile = '';\n  tilesPlayer.forEach(function (el) {\n    if (el.dataRow === row && el.dataCol === col) {\n      tile = el;\n    }\n  });\n  return tile;\n}\n\nfunction attackBoard(board, row, col, tile) {\n  const attack = board.receiveAttack(row, col);\n\n  if (attack === 'miss') {\n    tile.classList.add('missed');\n    tile.classList.remove('tile-comp');\n    return;\n  } else if (attack === 'hit') {\n    tile.classList.add('hit');\n    tile.classList.remove('tile-comp');\n    return;\n  }\n}\n\nfunction getTileFromRandom(gameboard, row, col) {\n  const tile = gameboard.board[row][col];\n}\n\nfunction renderTiles() {\n  renderPlayerGameboard(gameboardPlayer, playerOneTiles);\n  renderCompGameboard(gameboardComputer, playerTwoTiles);\n}\n\n\n//# sourceURL=webpack://battleship/./src/gameLogic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n\n\n(0,_gameLogic__WEBPACK_IMPORTED_MODULE_0__.renderTiles)();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;