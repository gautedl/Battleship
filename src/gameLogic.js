import Ship from './factories/Ship';
import Player from './factories/Player';
import Gameboard from './factories/Gameboard';

let playerOneTiles = '';
let playerTwoTiles = '';
let modalBoard = '';
let boatTitle = '';

let index = 0;
let orientation = false;

const container = document.querySelector('.game-container');
const modalContainer = document.createElement('div');
const overlay = document.querySelector('.overlay');

const player = new Player('You');
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
    winningScreen(player);
  }
  if (gameboardPlayer.checkIfAllShipsHaveSunk()) {
    winningScreen(computer);
  }
}

// The winning screen
function winningScreen(winner) {
  container.innerHTML = '';
  const winningDiv = document.createElement('div');
  winningDiv.className = 'winning-div';
  winningDiv.innerHTML = `
    <div class="winner-name">${
      winner.name === 'Computer' ? 'Computer wins :(' : 'You win!'
    } </div>
    <button class="rematch">Rematch</div>
  `;

  container.append(winningDiv);
  const rematchButton = document.querySelector('.rematch');
  rematch(rematchButton);
}

// Funciton for restarting the game
function rematch(btn) {
  btn.addEventListener('click', () => {
    gameboardPlayer.initBoard();
    gameboardComputer.initBoard();

    gameboardComputer.placeRandomShips();

    gameContainer();
    placeShipsModal();
    renderEmptyBoard(gameboardPlayer);
  });
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

// Start modal for placing the ships
function placeShipsModal() {
  overlay.classList.add('active');
  modalContainer.className = 'start-modal';
  modalContainer.classList.add('is-visible');
  modalContainer.innerHTML = `
      <div class="boat-title"></div>
      <button class="orient-btn">Switch Orientation</button>
      <div class="empty-board"></div>
      <button class="random-btn">Place ships randomly</button>
      `;

  container.append(modalContainer);
  modalBoard = document.querySelector('.empty-board');
  boatTitle = document.querySelector('.boat-title');
  const orientationButton = document.querySelector('.orient-btn');
  const randomButton = document.querySelector('.random-btn');
  changeOrientation(orientationButton);
  placeShipsRandomly(randomButton);
}

// Places ships randomly on the board
function placeShipsRandomly(btn) {
  btn.addEventListener('click', () => {
    gameboardPlayer.placeRandomShips();
    gameContainer();
  });
}

// Changes the orientation of the boat on placement
function changeOrientation(btn) {
  btn.addEventListener('click', () => {
    orientation = !orientation;
  });
}

// Highlights the tiles the boats will be placed on
function highlightShipPlacement(tile, curBoat) {
  tile.addEventListener('mouseover', function () {
    const curRow = tile.dataRow;
    const curCol = tile.dataCol;
    for (let i = 0; i < curBoat.ship.length; i++) {
      try {
        if (!orientation) {
          const nextTile = getPlayerTile(curRow + i, curCol);
          nextTile.classList.add('highlight-board');
        } else {
          const nextTile = getPlayerTile(curRow, curCol + i);
          nextTile.classList.add('highlight-board');
        }
      } catch (err) {}
    }
  });

  tile.addEventListener('mouseleave', function () {
    const curRow = tile.dataRow;
    const curCol = tile.dataCol;
    for (let i = 0; i < curBoat.ship.length; i++) {
      try {
        if (!orientation) {
          const nextTile = getPlayerTile(curRow + i, curCol);
          nextTile.classList.remove('highlight-board');
        } else {
          const nextTile = getPlayerTile(curRow, curCol + i);
          nextTile.classList.remove('highlight-board');
        }
      } catch (err) {}
    }
  });
}

// Function for placing boats manually
function placeBoats(tile) {
  boatTitle.textContent = `Place your ${ships[0].nameBoat}`;
  const curBoat = ships[index];

  highlightShipPlacement(tile, curBoat);

  tile.addEventListener('click', function (e) {
    if (
      gameboardPlayer.placeShip(
        curBoat.ship,
        tile.dataRow,
        tile.dataCol,
        orientation
      )
    ) {
      if (index === ships.length - 1) {
        orientation = false;
        index = 0;
        gameContainer();
      } else index++;
      modalBoard.innerHTML = '';
      renderEmptyBoard(gameboardPlayer);
      boatTitle.textContent = `Place your ${ships[index].nameBoat}`;
    } else return;
  });
}

// Creates the gameContainer
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
}
