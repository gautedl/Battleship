import Ship from './factories/Ship';
import Player from './factories/Player';
import Gameboard from './factories/Gameboard';

const playerOneTiles = document.querySelector('.tiles-player1');
const playerTwoTiles = document.querySelector('.tiles-player2');
const playerOneName = document.querySelector('.player-name.player1');
const playerTwoName = document.querySelector('.player-name.player2');

const player = new Player('Human', false);
const computer = new Player();

const gameboardPlayer = new Gameboard();
const gameboardComputer = new Gameboard();

gameboardPlayer.initBoard();
gameboardComputer.initBoard();
gameboardPlayer.placeRandomShips();
gameboardComputer.placeRandomShips();

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

function renderPlayerGameboard(gameboard, tiles) {
  for (let i = 0; i < gameboard.board.length; i++) {
    for (let j = 0; j < gameboard.board[i].length; j++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.id = 'tile-player';
      if (gameboard.board[i][j] === 'ship') tile.classList.add('tile-ship');
      tile.dataRow = i;
      tile.dataCol = j;
      // getTileComp(tile);
      tiles.appendChild(tile);
    }
  }
}

// function nexTurn() {
//   console.log(computer.turn, player.turn);

//   if (player.turn) {
//     playerOneName.classList.remove('not-turn');
//     playerTwoName.classList.add('not-turn');
//   } else if (computer.turn) {
//     playerTwoName.classList.remove('not-turn');
//     playerOneName.classList.add('not-turn');
//   }

//   computer.switchTurn();
//   player.switchTurn();
// }

function getTile(tile) {
  tile.addEventListener('click', function (e) {
    const [row, col] = e.target.dataAttr.split('');

    attackBoard(gameboardComputer, row, col, tile);

    const [compRow, compCol] = computer.randomPlay();
    const compTile = getPlayerTile(compRow, compCol);

    attackBoard(gameboardPlayer, compRow, compCol, compTile);
  });
}

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

function getTileFromRandom(gameboard, row, col) {
  const tile = gameboard.board[row][col];
}

export function renderTiles() {
  renderPlayerGameboard(gameboardPlayer, playerOneTiles);
  renderCompGameboard(gameboardComputer, playerTwoTiles);
}
