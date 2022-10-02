import Ship from './factories/Ship';
import Player from './factories/Player';
import Gameboard from './factories/Gameboard';
import { renderFromGameboard } from './UI';

const playerOneTiles = document.querySelector('.tiles-player1');
const playerTwoTiles = document.querySelector('.tiles-player2');

const player = new Player('Human', false);
const computer = new Player();

const gameboardPlayer = new Gameboard();
const gameboardComputer = new Gameboard();

gameboardPlayer.initBoard();
gameboardComputer.initBoard();
gameboardPlayer.placeRandomShips();
gameboardComputer.placeRandomShips();

export function renderTiles() {
  console.log(gameboardPlayer.board);
  renderFromGameboard(gameboardPlayer, playerOneTiles);
  renderFromGameboard(gameboardComputer, playerTwoTiles);
}
