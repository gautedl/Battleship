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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/factories/Ship.js\");\n\r\n\r\nclass Gameboard {\r\n  SIZE = 10; // The size of cols and rows of the gameboard\r\n  TILES_WITH_SHIPS = 17; //Number of tiles populated by ships\r\n\r\n  constructor() {\r\n    this.board = [];\r\n    this.missedShots = 0;\r\n    this.hits = 0;\r\n  }\r\n\r\n  // Creates the board\r\n  initBoard() {\r\n    this.hits = 0;\r\n    for (let i = 0; i < this.SIZE; i++) {\r\n      this.board[i] = [];\r\n      for (let j = 0; j < this.SIZE; j++) {\r\n        this.board[i][j] = [];\r\n      }\r\n    }\r\n    return this.board;\r\n  }\r\n\r\n  // Places a ship on the board\r\n  placeShip(ship, row, column, isVertical) {\r\n    if (!this.checkIfShipCanBePlaced(ship, row, column, isVertical))\r\n      return false;\r\n    const offset = Math.floor(ship.length / 2); //Offset for finding start pos of ship\r\n    let startPosition = 0;\r\n    if (!isVertical) {\r\n      startPosition = row - offset;\r\n      for (let i = 0; i < ship.length; i++) {\r\n        this.board[row + i][column] = 'ship';\r\n      }\r\n    } else {\r\n      startPosition = column - offset;\r\n      for (let i = 0; i < ship.length; i++) {\r\n        this.board[row][column + i] = 'ship';\r\n      }\r\n    }\r\n    return this.board;\r\n  }\r\n\r\n  // Checks if location of placed ship is valid\r\n  checkIfShipCanBePlaced(ship, row, column, isVertical) {\r\n    const offset = Math.floor(ship.length / 2);\r\n    let startPosition = 0;\r\n\r\n    if (!isVertical) {\r\n      startPosition = row - offset;\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (\r\n          row + i < 0 || //Makes sure the ship can't be placed outside of the board\r\n          row + i > 9 || //Makes sure the ship won't overflow to the nex row\r\n          this.board[row + i][column] === 'ship'\r\n        )\r\n          return false;\r\n      }\r\n    } else {\r\n      startPosition = column - offset;\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (\r\n          column + i < 0 ||\r\n          column + i > 9 ||\r\n          this.board[row][column + i] === 'ship'\r\n        )\r\n          return false;\r\n      }\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  //Function for receiving an attack\r\n  receiveAttack(row, col) {\r\n    //Checks if selected tile already have been attacked\r\n    if (this.board[row][col] === 'miss' || this.board[row][col] === 'hit')\r\n      return false;\r\n    if (this.board[row][col] === 'ship') {\r\n      this.board[row][col] = 'hit';\r\n      this.hits++;\r\n      return 'hit';\r\n    } else {\r\n      this.missedShots++;\r\n      this.board[row][col] = 'miss';\r\n      return 'miss';\r\n    }\r\n  }\r\n\r\n  // Checks if all ships have sunken by comparing number of hits with tiles with ships\r\n  checkIfAllShipsHaveSunk() {\r\n    return this.hits === this.TILES_WITH_SHIPS ? true : false;\r\n  }\r\n\r\n  // Function for placing all the ships randomly\r\n  placeRandomShips() {\r\n    const carrier = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\r\n    const battleship = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\r\n    const cruiser = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\r\n    const submarine = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\r\n    const destroyer = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\r\n\r\n    const arrOfShips = [carrier, battleship, cruiser, submarine, destroyer];\r\n\r\n    while (arrOfShips.length > 0) {\r\n      const row = Math.floor(Math.random() * 10);\r\n      const col = Math.floor(Math.random() * 10);\r\n      const isVertical = Math.random() > 0.5 ? true : false;\r\n\r\n      if (this.checkIfShipCanBePlaced(arrOfShips[0], row, col, isVertical)) {\r\n        this.placeShip(arrOfShips[0], row, col, isVertical);\r\n        arrOfShips.shift();\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/factories/Gameboard.js?");

/***/ }),

/***/ "./src/factories/Player.js":
/*!*********************************!*\
  !*** ./src/factories/Player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\r\n  constructor(name = 'Computer') {\r\n    this.name = name;\r\n    this.coords = [];\r\n  }\r\n\r\n  // Function for a random play\r\n  randomPlay() {\r\n    let row = Math.floor(Math.random() * 10);\r\n    let col = Math.floor(Math.random() * 10);\r\n    let coordination = row + '' + col;\r\n\r\n    while (this.coords.includes(coordination)) {\r\n      row = Math.floor(Math.random() * 10);\r\n      col = Math.floor(Math.random() * 10);\r\n      coordination = row + '' + col;\r\n    }\r\n\r\n    this.coords.push(row + '' + col);\r\n\r\n    return [row, col];\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/factories/Player.js?");

/***/ }),

/***/ "./src/factories/Ship.js":
/*!*******************************!*\
  !*** ./src/factories/Ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.hits = Array(this.length).fill('ship');\r\n  }\r\n\r\n  hit(index) {\r\n    if (this.hits[index] === 'hit') return;\r\n    this.hits[index] = 'hit';\r\n    return this.hits;\r\n  }\r\n\r\n  isSunk() {\r\n    return this.hits.includes('ship') ? false : true;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/factories/Ship.js?");

/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTiles\": () => (/* binding */ renderTiles)\n/* harmony export */ });\n/* harmony import */ var _factories_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/Ship */ \"./src/factories/Ship.js\");\n/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/Player */ \"./src/factories/Player.js\");\n/* harmony import */ var _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/Gameboard */ \"./src/factories/Gameboard.js\");\n\r\n\r\n\r\n\r\nlet playerOneTiles = '';\r\nlet playerTwoTiles = '';\r\nlet modalBoard = '';\r\nlet boatTitle = '';\r\n\r\nlet index = 0;\r\nlet orientation = false;\r\n\r\nconst container = document.querySelector('.game-container');\r\nconst modalContainer = document.createElement('div');\r\nconst overlay = document.querySelector('.overlay');\r\nconst wrapper = document.querySelector('.wrapper')\r\nconst titleContainer = document.querySelector('.title-container')\r\n\r\nconst player = new _factories_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('You');\r\nconst computer = new _factories_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nconst carrier = new _factories_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\r\nconst battleship = new _factories_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\r\nconst destroyer = new _factories_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\r\nconst submarine = new _factories_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\r\nconst patrolBoat = new _factories_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\r\n\r\nconst ships = [\r\n  { nameBoat: 'Carrier', ship: carrier },\r\n  { nameBoat: 'Battleship', ship: battleship },\r\n  { nameBoat: 'Destroyer', ship: destroyer },\r\n  { nameBoat: 'Submarine', ship: submarine },\r\n  { nameBoat: 'Patrol Boat', ship: patrolBoat },\r\n];\r\n\r\nconst gameboardPlayer = new _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst gameboardComputer = new _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\ngameboardPlayer.initBoard();\r\ngameboardComputer.initBoard();\r\n\r\ngameboardComputer.placeRandomShips();\r\n\r\nfunction renderEmptyBoard(gameboard) {\r\n  for (let i = 0; i < gameboard.board.length; i++) {\r\n    for (let j = 0; j < gameboard.board[i].length; j++) {\r\n      const tile = document.createElement('div');\r\n      tile.className = 'tile';\r\n      tile.classList.add('place-boat-hover');\r\n      tile.id = 'tile-player-empty';\r\n      if (gameboard.board[i][j] === 'ship') tile.classList.add('tile-ship');\r\n      tile.dataRow = i;\r\n      tile.dataCol = j;\r\n      placeBoats(tile);\r\n      modalBoard.appendChild(tile);\r\n    }\r\n  }\r\n}\r\n\r\n// Renders the computers board\r\nfunction renderCompGameboard(gameboard, tiles) {\r\n  for (let i = 0; i < gameboard.board.length; i++) {\r\n    for (let j = 0; j < gameboard.board[i].length; j++) {\r\n      const tile = document.createElement('div');\r\n      tile.className = 'tile';\r\n      tile.classList.add('tile-comp');\r\n      tile.dataAttr = +i + '' + j;\r\n      getTile(tile);\r\n      tiles.appendChild(tile);\r\n    }\r\n  }\r\n}\r\n\r\n// Renders the Players board\r\nfunction renderPlayerGameboard(gameboard, tiles) {\r\n  \r\n  for (let i = 0; i < gameboard.board.length; i++) {\r\n    for (let j = 0; j < gameboard.board[i].length; j++) {\r\n      const tile = document.createElement('div');\r\n      tile.className = 'tile';\r\n      tile.id = 'tile-player';\r\n      if (gameboard.board[i][j] === 'ship') tile.classList.add('tile-ship');\r\n      tile.dataRow = i;\r\n      tile.dataCol = j;\r\n      tiles.appendChild(tile);\r\n    }\r\n  }\r\n}\r\n\r\n// Gets the tile the player clicks on an it's coordinates\r\nfunction getTile(tile) {\r\n  tile.addEventListener('click', function (e) {\r\n    const [row, col] = e.target.dataAttr.split('');\r\n    attackRound(tile, row, col);\r\n  });\r\n}\r\n\r\n// A function for a round of attacks\r\nfunction attackRound(tile, row, col) {\r\n  attackBoard(gameboardComputer, row, col, tile);\r\n\r\n  const [compRow, compCol] = computer.randomPlay(); // Random play from the computer\r\n  const compTile = getPlayerTile(compRow, compCol);\r\n\r\n  attackBoard(gameboardPlayer, compRow, compCol, compTile);\r\n\r\n  // Winning conditions\r\n  if (gameboardComputer.checkIfAllShipsHaveSunk()) {\r\n    winningScreen(player);\r\n  }\r\n  if (gameboardPlayer.checkIfAllShipsHaveSunk()) {\r\n    winningScreen(computer);\r\n  }\r\n}\r\n\r\n// The winning screen\r\nfunction winningScreen(winner) {\r\n  container.innerHTML = '';\r\n  const winningDiv = document.createElement('div');\r\n  winningDiv.className = 'winning-div';\r\n  winningDiv.innerHTML = `\r\n    <div class=\"winner-name\">${\r\n      winner.name === 'Computer' ? 'Computer wins :(' : 'You win!'\r\n    } </div>\r\n    <button class=\"rematch\">Rematch</div>\r\n  `;\r\n\r\n  container.append(winningDiv);\r\n  const rematchButton = document.querySelector('.rematch');\r\n  rematch(rematchButton);\r\n}\r\n\r\n// Funciton for restarting the game\r\nfunction rematch(btn) {\r\n  btn.addEventListener('click', () => {\r\n    gameboardPlayer.initBoard();\r\n    gameboardComputer.initBoard();\r\n\r\n    gameboardComputer.placeRandomShips();\r\n\r\n    gameContainer();\r\n    placeShipsModal();\r\n    renderEmptyBoard(gameboardPlayer);\r\n  });\r\n}\r\n\r\n// Takes the row and col coords and returnes the correct tile\r\nfunction getPlayerTile(row, col, id = \"\") {\r\n  const tilesPlayer = document.querySelectorAll('#tile-player'+id);\r\n  let tile = '';\r\n  tilesPlayer.forEach(function (el) {\r\n    if (el.dataRow === row && el.dataCol === col) {\r\n      tile = el;\r\n    }\r\n  });\r\n  return tile;\r\n}\r\n\r\n// Function for a single attack\r\nfunction attackBoard(board, row, col, tile) {\r\n  const attack = board.receiveAttack(row, col);\r\n\r\n  if (attack === 'miss') {\r\n    tile.classList.add('missed');\r\n    tile.classList.remove('tile-comp');\r\n    return;\r\n  } else if (attack === 'hit') {\r\n    tile.classList.add('hit');\r\n    tile.classList.remove('tile-comp');\r\n    return;\r\n  }\r\n}\r\n\r\n// Start modal for placing the ships\r\nfunction placeShipsModal() {\r\n  overlay.classList.add('active');\r\n  container.classList.add('in-bg')\r\n  titleContainer.classList.add('in-bg')\r\n  modalContainer.className = 'start-modal';\r\n  modalContainer.classList.add('is-visible');\r\n  modalContainer.innerHTML = `\r\n      <div class=\"boat-title\"></div>\r\n      <button class=\"orient-btn\">Switch Orientation</button>\r\n      <div class=\"empty-board\"></div>\r\n      <button class=\"random-btn\">Place ships randomly</button>\r\n      `;\r\n\r\n  wrapper.append(modalContainer);\r\n  modalBoard = document.querySelector('.empty-board');\r\n  boatTitle = document.querySelector('.boat-title');\r\n  const orientationButton = document.querySelector('.orient-btn');\r\n  const randomButton = document.querySelector('.random-btn');\r\n  changeOrientation(orientationButton);\r\n  placeShipsRandomly(randomButton);\r\n}\r\n\r\n// Places ships randomly on the board\r\nfunction placeShipsRandomly(btn) {\r\n  btn.addEventListener('click', () => {\r\n    gameboardPlayer.placeRandomShips();\r\n    gameContainer();\r\n  });\r\n}\r\n\r\n// Changes the orientation of the boat on placement\r\nfunction changeOrientation(btn) {\r\n  btn.addEventListener('click', () => {\r\n    orientation = !orientation;\r\n  });\r\n}\r\n\r\n// Highlights the tiles the boats will be placed on\r\nfunction highlightShipPlacement(tile, curBoat) {\r\n  tile.addEventListener('mouseover', function () {\r\n    const curRow = tile.dataRow;\r\n    const curCol = tile.dataCol;\r\n    for (let i = 0; i < curBoat.ship.length; i++) {\r\n      try {\r\n        if (!orientation) {\r\n          const nextTile = getPlayerTile(curRow + i, curCol, \"-empty\");\r\n          nextTile.classList.add('highlight-board');\r\n        } else {\r\n          const nextTile = getPlayerTile(curRow, curCol + i, \"-empty\");\r\n          nextTile.classList.add('highlight-board');\r\n        }\r\n      } catch (err) {}\r\n    }\r\n  });\r\n\r\n  tile.addEventListener('mouseleave', function () {\r\n    const curRow = tile.dataRow;\r\n    const curCol = tile.dataCol;\r\n    for (let i = 0; i < curBoat.ship.length; i++) {\r\n      try {\r\n        if (!orientation) {\r\n          const nextTile = getPlayerTile(curRow + i, curCol, \"-empty\");\r\n          nextTile.classList.remove('highlight-board');\r\n        } else {\r\n          const nextTile = getPlayerTile(curRow, curCol + i, \"-empty\");\r\n          nextTile.classList.remove('highlight-board');\r\n        }\r\n      } catch (err) {}\r\n    }\r\n  });\r\n}\r\n\r\n// Function for placing boats manually\r\nfunction placeBoats(tile) {\r\n  boatTitle.innerHTML = `Place your <u>${ships[0].nameBoat}</u>`;\r\n  const curBoat = ships[index];\r\n\r\n  highlightShipPlacement(tile, curBoat);\r\n\r\n  tile.addEventListener('click', function (e) {\r\n    if (\r\n      gameboardPlayer.placeShip(\r\n        curBoat.ship,\r\n        tile.dataRow,\r\n        tile.dataCol,\r\n        orientation\r\n      )\r\n    ) {\r\n      if (index === ships.length - 1) {\r\n        orientation = false;\r\n        index = 0;\r\n        gameContainer();\r\n      } else index++;\r\n      modalBoard.innerHTML = '';\r\n      renderEmptyBoard(gameboardPlayer);\r\n      boatTitle.innerHTML = `Place your <u>${ships[0].nameBoat}</u>`;\r\n    } else return;\r\n  });\r\n}\r\n\r\n// Creates the gameContainer\r\nfunction gameContainer() {\r\n  overlay.classList.remove('active');\r\n  container.classList.remove('in-bg')\r\n  titleContainer.classList.remove('in-bg')\r\n  modalContainer.classList.remove('is-visible');\r\n  container.innerHTML = '';\r\n  const containerDiv = document.createElement('div');\r\n  containerDiv.className = 'container-div';\r\n  containerDiv.innerHTML = `\r\n  <div class=\"player-container player1\">\r\n  <div class=\"fallen-ships player1\"></div>\r\n  <div class=\"tiles-player1\"></div>\r\n  <div class=\"player-name player1\">You</div>\r\n  </div>\r\n  <div class=\"vertical-line\">\r\n  <div class=\"line\"></div>\r\n  </div>\r\n  <div class=\"player-container player2\">\r\n  <div class=\"fallen-ships player2\"></div>\r\n  <div class=\"tiles-player2\"></div>\r\n  <div class=\"player-name player2\">Computer</div>\r\n  </div>`;\r\n  container.append(containerDiv);\r\n  playerOneTiles = document.querySelector('.tiles-player1');\r\n  playerTwoTiles = document.querySelector('.tiles-player2');\r\n  renderPlayerGameboard(gameboardPlayer, playerOneTiles);\r\n  renderCompGameboard(gameboardComputer, playerTwoTiles);\r\n}\r\n\r\n// Functions for starting the game\r\nfunction renderTiles() {\r\n  gameContainer();\r\n  placeShipsModal();\r\n  renderEmptyBoard(gameboardPlayer);\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/gameLogic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n\r\n\r\n(0,_gameLogic__WEBPACK_IMPORTED_MODULE_0__.renderTiles)();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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