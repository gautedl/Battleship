import Ship from './factories/Ship';
import Player from './factories/Player';
import Gameboard from './factories/Gameboard';

let playerOneTiles = '';
let playerTwoTiles = '';
let modalBoard = '';
let boatTitle = '';

let i = 0;
let orientation = false;

const playerOneName = document.querySelector('.player-name.player1');
const playerTwoName = document.querySelector('.player-name.player2');
const container = document.querySelector('.game-container');
const modalContainer = document.createElement('div');
const overlay = document.querySelector('.overlay');

const player = new Player('Human');
const computer = new Player();

const carrier = new Ship(5);
const battleship = new Ship(4);
const destroyer = new Ship(3);
const submarine = new Ship(3);
const patrolBoat = new Ship(2);

const ships = [
  { nameBoat: 'Carrier', ship: carrier },
  { nameBoat: 'Battleship', ship: battleship },
  { nameBoat: 'Destroyer', ship: destroyer },
  { nameBoat: 'Submarine', ship: submarine },
  { nameBoat: 'Patrol Boat', ship: patrolBoat },
];

const gameboardPlayer = new Gameboard();
const gameboardComputer = new Gameboard();

gameboardPlayer.initBoard();
gameboardComputer.initBoard();
// gameboardPlayer.placeRandomShips();
gameboardComputer.placeRandomShips();

function renderEmptyBoard(gameboard) {
  for (let i = 0; i < gameboard.board.length; i++) {
    for (let j = 0; j < gameboard.board[i].length; j++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.classList.add('place-boat-hover');
      tile.id = 'tile-player';
      if (gameboard.board[i][j] === 'ship') tile.classList.add('tile-ship');
      tile.dataRow = i;
      tile.dataCol = j;
      placeBoats(tile);
      modalBoard.appendChild(tile);
    }
  }
}

// Renders the computers board
function renderCompGameboard(gameboard, tiles) {
  for (let i = 0; i < gameboard.board.length; i++) {
    for (let j = 0; j < gameboard.board[i].length; j++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.classList.add('tile-comp');
      tile.dataAttr = +i + '' + j;
      getTile(tile);
      tiles.appendChild(tile);
    }
  }
}

// Renders the Players board
function renderPlayerGameboard(gameboard, tiles) {
  for (let i = 0; i < gameboard.board.length; i++) {
    for (let j = 0; j < gameboard.board[i].length; j++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.id = 'tile-player';
      if (gameboard.board[i][j] === 'ship') tile.classList.add('tile-ship');
      tile.dataRow = i;
      tile.dataCol = j;
      tiles.appendChild(tile);
    }
  }
}

// Gets the tile the player clicks on an it's coordinates
function getTile(tile) {
  tile.addEventListener('click', function (e) {
    const [row, col] = e.target.dataAttr.split('');
    attackRound(tile, row, col);
  });
}

// A function for a round of attacks
function attackRound(tile, row, col) {
  attackBoard(gameboardComputer, row, col, tile);

  const [compRow, compCol] = computer.randomPlay(); // Random play from the computer
  const compTile = getPlayerTile(compRow, compCol);

  attackBoard(gameboardPlayer, compRow, compCol, compTile);

  // Winning conditions
  if (gameboardComputer.checkIfAllShipsHaveSunk()) {
    // Render winning screen with player as winner.
    // New game button
  }
  if (gameboardPlayer.checkIfAllShipsHaveSunk()) {
    //Render winning screen with computer as winner.
    // New game button
  }
}

// Takes the row and col coords and returnes the correct tile
function getPlayerTile(row, col) {
  const tilesPlayer = document.querySelectorAll('#tile-player');
  let tile = '';
  tilesPlayer.forEach(function (el) {
    if (el.dataRow === row && el.dataCol === col) {
      tile = el;
    }
  });
  return tile;
}

// Function for a single attack
function attackBoard(board, row, col, tile) {
  const attack = board.receiveAttack(row, col);

  if (attack === 'miss') {
    tile.classList.add('missed');
    tile.classList.remove('tile-comp');
    return;
  } else if (attack === 'hit') {
    tile.classList.add('hit');
    tile.classList.remove('tile-comp');
    return;
  }
}

function placeShipsModal() {
  overlay.classList.add('active');
  modalContainer.className = 'start-modal';
  modalContainer.classList.add('is-visible');
  modalContainer.innerHTML = `
      <div class="boat-title"></div>
      <div class="empty-board"></div>
      <button class="orient-btn">Switch Orientation</button>`;

  container.append(modalContainer);
  modalBoard = document.querySelector('.empty-board');
  boatTitle = document.querySelector('.boat-title');
  const orientationButton = document.querySelector('.orient-btn');
  changeOrientation(orientationButton);
}

function changeOrientation(btn) {
  btn.addEventListener('click', () => {
    orientation = !orientation;
  });
}

function placeBoats(tile) {
  boatTitle.textContent = ships[0].nameBoat;
  tile.addEventListener('click', function (e) {
    const curBoat = ships[i];
    boatTitle.textContent = ships[i].nameBoat;

    if (
      gameboardPlayer.placeShip(
        curBoat.ship,
        tile.dataRow,
        tile.dataCol,
        orientation
      )
    ) {
      console.log(gameboardPlayer.board);
      if (i === ships.length - 1) {
        gameContainer();
      } else i++;
      modalBoard.innerHTML = '';
      renderEmptyBoard(gameboardPlayer);
      boatTitle.textContent = ships[i].nameBoat;
    } else return;
  });
}

function gameContainer() {
  overlay.classList.remove('active');
  modalContainer.classList.remove('is-visible');
  container.innerHTML = '';
  const containerDiv = document.createElement('div');
  containerDiv.className = 'container-div';
  containerDiv.innerHTML = `
      <div class="player-container player1">
        <div class="fallen-ships player1"></div>
        <div class="tiles-player1"></div>
        <div class="player-name player1">You</div>
      </div>
      <div class="vertical-line">
        <div class="line"></div>
      </div>
      <div class="player-container player2">
        <div class="fallen-ships player2"></div>
        <div class="tiles-player2"></div>
        <div class="player-name player2">Computer</div>
      </div>`;
  container.append(containerDiv);
  playerOneTiles = document.querySelector('.tiles-player1');
  playerTwoTiles = document.querySelector('.tiles-player2');
  renderPlayerGameboard(gameboardPlayer, playerOneTiles);
  renderCompGameboard(gameboardComputer, playerTwoTiles);
}

// Functions for starting the game
export function renderTiles() {
  gameContainer();
  placeShipsModal();
  renderEmptyBoard(gameboardPlayer);
  // renderPlayerGameboard(gameboardPlayer, playerOneTiles);
  // renderCompGameboard(gameboardComputer, playerTwoTiles);
}
