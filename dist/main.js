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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/factories/Ship.js\");\n\n\nclass Gameboard {\n  SIZE = 10; // The size of cols and rows of the gameboard\n  TILES_WITH_SHIPS = 17; //Number of tiles populated by ships\n\n  constructor() {\n    this.board = [];\n    this.missedShots = 0;\n    this.hits = 0;\n  }\n\n  // Creates the board\n  initBoard() {\n    this.hits = 0;\n    for (let i = 0; i < this.SIZE; i++) {\n      this.board[i] = [];\n      for (let j = 0; j < this.SIZE; j++) {\n        this.board[i][j] = [];\n      }\n    }\n    return this.board;\n  }\n\n  // Places a ship on the board\n  placeShip(ship, row, column, isVertical) {\n    if (!this.checkIfShipCanBePlaced(ship, row, column, isVertical))\n      return false;\n    const offset = Math.floor(ship.length / 2); //Offset for finding start pos of ship\n    let startPosition = 0;\n    if (!isVertical) {\n      startPosition = row - offset;\n      for (let i = 0; i < ship.length; i++) {\n        this.board[row + i][column] = 'ship';\n      }\n    } else {\n      startPosition = column - offset;\n      for (let i = 0; i < ship.length; i++) {\n        this.board[row][column + i] = 'ship';\n      }\n    }\n    return this.board;\n  }\n\n  // Checks if location of placed ship is valid\n  checkIfShipCanBePlaced(ship, row, column, isVertical) {\n    const offset = Math.floor(ship.length / 2);\n    let startPosition = 0;\n\n    if (!isVertical) {\n      startPosition = row - offset;\n      for (let i = 0; i < ship.length; i++) {\n        if (\n          row + i < 0 || //Makes sure the ship can't be placed outside of the board\n          row + i > 9 || //Makes sure the ship won't overflow to the nex row\n          this.board[row + i][column] === 'ship'\n        )\n          return false;\n      }\n    } else {\n      startPosition = column - offset;\n      for (let i = 0; i < ship.length; i++) {\n        if (\n          column + i < 0 ||\n          column + i > 9 ||\n          this.board[row][column + i] === 'ship'\n        )\n          return false;\n      }\n    }\n\n    return true;\n  }\n\n  //Function for receiving an attack\n  receiveAttack(row, col) {\n    //Checks if selected tile already have been attacked\n    if (this.board[row][col] === 'miss' || this.board[row][col] === 'hit')\n      return false;\n    if (this.board[row][col] === 'ship') {\n      this.board[row][col] = 'hit';\n      this.hits++;\n      return 'hit';\n    } else {\n      this.missedShots++;\n      this.board[row][col] = 'miss';\n      return 'miss';\n    }\n  }\n\n  // Checks if all ships have sunken by comparing number of hits with tiles with ships\n  checkIfAllShipsHaveSunk() {\n    return this.hits === this.TILES_WITH_SHIPS ? true : false;\n  }\n\n  // Function for placing all the ships randomly\n  placeRandomShips() {\n    const carrier = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\n    const battleship = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n    const cruiser = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    const submarine = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    const destroyer = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n\n    const arrOfShips = [carrier, battleship, cruiser, submarine, destroyer];\n\n    while (arrOfShips.length > 0) {\n      const row = Math.floor(Math.random() * 10);\n      const col = Math.floor(Math.random() * 10);\n      const isVertical = Math.random() > 0.5 ? true : false;\n\n      if (this.checkIfShipCanBePlaced(arrOfShips[0], row, col, isVertical)) {\n        this.placeShip(arrOfShips[0], row, col, isVertical);\n        arrOfShips.shift();\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/factories/Gameboard.js?");

/***/ }),

/***/ "./src/factories/Player.js":
/*!*********************************!*\
  !*** ./src/factories/Player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n  constructor(name = 'Computer') {\n    this.name = name;\n    this.coords = [];\n  }\n\n  // Function for a random play\n  randomPlay() {\n    let row = Math.floor(Math.random() * 10);\n    let col = Math.floor(Math.random() * 10);\n    let coordination = row + '' + col;\n\n    while (this.coords.includes(coordination)) {\n      row = Math.floor(Math.random() * 10);\n      col = Math.floor(Math.random() * 10);\n      coordination = row + '' + col;\n    }\n\n    this.coords.push(row + '' + col);\n\n    return [row, col];\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/factories/Player.js?");

/***/ }),

/***/ "./src/factories/Ship.js":
/*!*******************************!*\
  !*** ./src/factories/Ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hits = Array(this.length).fill('ship');\n  }\n\n  hit(index) {\n    if (this.hits[index] === 'hit') return;\n    this.hits[index] = 'hit';\n    return this.hits;\n  }\n\n  isSunk() {\n    return this.hits.includes('ship') ? false : true;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/factories/Ship.js?");

/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTiles\": () => (/* binding */ renderTiles)\n/* harmony export */ });\n/* harmony import */ var _factories_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/Ship */ \"./src/factories/Ship.js\");\n/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/Player */ \"./src/factories/Player.js\");\n/* harmony import */ var _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/Gameboard */ \"./src/factories/Gameboard.js\");\n\n\n\n\nlet playerOneTiles = '';\nlet playerTwoTiles = '';\nlet modalBoard = '';\nlet boatTitle = '';\n\nlet index = 0;\nlet orientation = false;\n\nconst container = document.querySelector('.game-container');\nconst modalContainer = document.createElement('div');\nconst overlay = document.querySelector('.overlay');\nconst wrapper = document.querySelector('.wrapper')\nconst titleContainer = document.querySelector('.title-container')\n\nconst player = new _factories_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('You');\nconst computer = new _factories_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconst carrier = new _factories_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\nconst battleship = new _factories_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\nconst destroyer = new _factories_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\nconst submarine = new _factories_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\nconst patrolBoat = new _factories_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n\nconst ships = [\n  { nameBoat: 'Carrier', ship: carrier },\n  { nameBoat: 'Battleship', ship: battleship },\n  { nameBoat: 'Destroyer', ship: destroyer },\n  { nameBoat: 'Submarine', ship: submarine },\n  { nameBoat: 'Patrol Boat', ship: patrolBoat },\n];\n\nconst gameboardPlayer = new _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst gameboardComputer = new _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\ngameboardPlayer.initBoard();\ngameboardComputer.initBoard();\n\ngameboardComputer.placeRandomShips();\n\nfunction renderEmptyBoard(gameboard) {\n  for (let i = 0; i < gameboard.board.length; i++) {\n    for (let j = 0; j < gameboard.board[i].length; j++) {\n      const tile = document.createElement('div');\n      tile.className = 'tile';\n      tile.classList.add('place-boat-hover');\n      tile.id = 'tile-player-empty';\n      if (gameboard.board[i][j] === 'ship') tile.classList.add('tile-ship');\n      tile.dataRow = i;\n      tile.dataCol = j;\n      placeBoats(tile);\n      modalBoard.appendChild(tile);\n    }\n  }\n}\n\n// Renders the computers board\nfunction renderCompGameboard(gameboard, tiles) {\n  for (let i = 0; i < gameboard.board.length; i++) {\n    for (let j = 0; j < gameboard.board[i].length; j++) {\n      const tile = document.createElement('div');\n      tile.className = 'tile';\n      tile.classList.add('tile-comp');\n      tile.dataAttr = +i + '' + j;\n      getTile(tile);\n      tiles.appendChild(tile);\n    }\n  }\n}\n\n// Renders the Players board\nfunction renderPlayerGameboard(gameboard, tiles) {\n  \n  for (let i = 0; i < gameboard.board.length; i++) {\n    for (let j = 0; j < gameboard.board[i].length; j++) {\n      const tile = document.createElement('div');\n      tile.className = 'tile';\n      tile.id = 'tile-player';\n      if (gameboard.board[i][j] === 'ship') tile.classList.add('tile-ship');\n      tile.dataRow = i;\n      tile.dataCol = j;\n      tiles.appendChild(tile);\n    }\n  }\n}\n\n// Gets the tile the player clicks on an it's coordinates\nfunction getTile(tile) {\n  tile.addEventListener('click', function (e) {\n    const [row, col] = e.target.dataAttr.split('');\n    attackRound(tile, row, col);\n  });\n}\n\n// A function for a round of attacks\nfunction attackRound(tile, row, col) {\n  attackBoard(gameboardComputer, row, col, tile);\n\n  const [compRow, compCol] = computer.randomPlay(); // Random play from the computer\n  const compTile = getPlayerTile(compRow, compCol);\n\n  attackBoard(gameboardPlayer, compRow, compCol, compTile);\n\n  // Winning conditions\n  if (gameboardComputer.checkIfAllShipsHaveSunk()) {\n    winningScreen(player);\n  }\n  if (gameboardPlayer.checkIfAllShipsHaveSunk()) {\n    winningScreen(computer);\n  }\n}\n\n// The winning screen\nfunction winningScreen(winner) {\n  container.innerHTML = '';\n  const winningDiv = document.createElement('div');\n  winningDiv.className = 'winning-div';\n  winningDiv.innerHTML = `\n    <div class=\"winner-name\">${\n      winner.name === 'Computer' ? 'Computer wins :(' : 'You win!'\n    } </div>\n    <button class=\"rematch\">Rematch</div>\n  `;\n\n  container.append(winningDiv);\n  const rematchButton = document.querySelector('.rematch');\n  rematch(rematchButton);\n}\n\n// Funciton for restarting the game\nfunction rematch(btn) {\n  btn.addEventListener('click', () => {\n    gameboardPlayer.initBoard();\n    gameboardComputer.initBoard();\n\n    gameboardComputer.placeRandomShips();\n\n    gameContainer();\n    placeShipsModal();\n    renderEmptyBoard(gameboardPlayer);\n  });\n}\n\n// Takes the row and col coords and returnes the correct tile\nfunction getPlayerTile(row, col, id = \"\") {\n  const tilesPlayer = document.querySelectorAll('#tile-player'+id);\n  let tile = '';\n  tilesPlayer.forEach(function (el) {\n    if (el.dataRow === row && el.dataCol === col) {\n      tile = el;\n    }\n  });\n  return tile;\n}\n\n// Function for a single attack\nfunction attackBoard(board, row, col, tile) {\n  const attack = board.receiveAttack(row, col);\n\n  if (attack === 'miss') {\n    tile.classList.add('missed');\n    tile.classList.remove('tile-comp');\n    return;\n  } else if (attack === 'hit') {\n    tile.classList.add('hit');\n    tile.classList.remove('tile-comp');\n    return;\n  }\n}\n\n// Start modal for placing the ships\nfunction placeShipsModal() {\n  overlay.classList.add('active');\n  container.classList.add('in-bg')\n  titleContainer.classList.add('in-bg')\n  modalContainer.className = 'start-modal';\n  modalContainer.classList.add('is-visible');\n  modalContainer.innerHTML = `\n      <div class=\"boat-title\"></div>\n      <button class=\"orient-btn\">Switch Orientation</button>\n      <div class=\"empty-board\"></div>\n      <button class=\"random-btn\">Place ships randomly</button>\n      `;\n\n  wrapper.append(modalContainer);\n  modalBoard = document.querySelector('.empty-board');\n  boatTitle = document.querySelector('.boat-title');\n  const orientationButton = document.querySelector('.orient-btn');\n  const randomButton = document.querySelector('.random-btn');\n  changeOrientation(orientationButton);\n  placeShipsRandomly(randomButton);\n}\n\n// Places ships randomly on the board\nfunction placeShipsRandomly(btn) {\n  btn.addEventListener('click', () => {\n    gameboardPlayer.placeRandomShips();\n    gameContainer();\n  });\n}\n\n// Changes the orientation of the boat on placement\nfunction changeOrientation(btn) {\n  btn.addEventListener('click', () => {\n    orientation = !orientation;\n  });\n}\n\n// Highlights the tiles the boats will be placed on\nfunction highlightShipPlacement(tile, curBoat) {\n  tile.addEventListener('mouseover', function () {\n    const curRow = tile.dataRow;\n    const curCol = tile.dataCol;\n    for (let i = 0; i < curBoat.ship.length; i++) {\n      try {\n        if (!orientation) {\n          const nextTile = getPlayerTile(curRow + i, curCol, \"-empty\");\n          nextTile.classList.add('highlight-board');\n        } else {\n          const nextTile = getPlayerTile(curRow, curCol + i, \"-empty\");\n          nextTile.classList.add('highlight-board');\n        }\n      } catch (err) {}\n    }\n  });\n\n  tile.addEventListener('mouseleave', function () {\n    const curRow = tile.dataRow;\n    const curCol = tile.dataCol;\n    for (let i = 0; i < curBoat.ship.length; i++) {\n      try {\n        if (!orientation) {\n          const nextTile = getPlayerTile(curRow + i, curCol, \"-empty\");\n          nextTile.classList.remove('highlight-board');\n        } else {\n          const nextTile = getPlayerTile(curRow, curCol + i, \"-empty\");\n          nextTile.classList.remove('highlight-board');\n        }\n      } catch (err) {}\n    }\n  });\n}\n\n// Function for placing boats manually\nfunction placeBoats(tile) {\n  boatTitle.innerHTML = `Place your <u>${ships[0].nameBoat}</u>`;\n  const curBoat = ships[index];\n\n  highlightShipPlacement(tile, curBoat);\n\n  tile.addEventListener('click', function (e) {\n    if (\n      gameboardPlayer.placeShip(\n        curBoat.ship,\n        tile.dataRow,\n        tile.dataCol,\n        orientation\n      )\n    ) {\n      if (index === ships.length - 1) {\n        orientation = false;\n        index = 0;\n        gameContainer();\n      } else index++;\n      modalBoard.innerHTML = '';\n      renderEmptyBoard(gameboardPlayer);\n      boatTitle.innerHTML = `Place your <u>${ships[0].nameBoat}</u>`;\n    } else return;\n  });\n}\n\n// Creates the gameContainer\nfunction gameContainer() {\n  overlay.classList.remove('active');\n  container.classList.remove('in-bg')\n  titleContainer.classList.remove('in-bg')\n  modalContainer.classList.remove('is-visible');\n  container.innerHTML = '';\n  const containerDiv = document.createElement('div');\n  containerDiv.className = 'container-div';\n  containerDiv.innerHTML = `\n  <div class=\"player-container player1\">\n  <div class=\"fallen-ships player1\"></div>\n  <div class=\"tiles-player1\"></div>\n  <div class=\"player-name player1\">You</div>\n  </div>\n  <div class=\"vertical-line\">\n  <div class=\"line\"></div>\n  </div>\n  <div class=\"player-container player2\">\n  <div class=\"fallen-ships player2\"></div>\n  <div class=\"tiles-player2\"></div>\n  <div class=\"player-name player2\">Computer</div>\n  </div>`;\n  container.append(containerDiv);\n  playerOneTiles = document.querySelector('.tiles-player1');\n  playerTwoTiles = document.querySelector('.tiles-player2');\n  renderPlayerGameboard(gameboardPlayer, playerOneTiles);\n  renderCompGameboard(gameboardComputer, playerTwoTiles);\n}\n\n// Functions for starting the game\nfunction renderTiles() {\n  gameContainer();\n  placeShipsModal();\n  renderEmptyBoard(gameboardPlayer);\n}\n\n\n//# sourceURL=webpack://battleship/./src/gameLogic.js?");

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