import Gameboard from '../Gameboard';
import Ship from '../Ship';

let gameboard;
let ship;
beforeEach(() => {
  gameboard = new Gameboard();
  gameboard.initBoard();
  ship = new Ship(3);
});

test('Creates a 10x10 game board, check if the length of column is 10', () => {
  expect(gameboard.board.length).toEqual(10);
});

test('Creates a 10x10 game board, check if the length of row is 10', () => {
  expect(gameboard.board[0].length).toEqual(10);
});

test('Checks if a ship is placed on the game board, horisontally', () => {
  gameboard.placeShip(ship, 1, 4, false);
  expect(
    gameboard.board[1][4] && gameboard.board[1][3] && gameboard.board[1][5]
  ).toEqual('ship');
});

test('Checks if a ship is placed on the game board, vertically', () => {
  gameboard.placeShip(ship, 1, 4, true);
  expect(
    gameboard.board[0][4] && gameboard.board[1][4] && gameboard.board[2][4]
  ).toEqual('ship');
});

test('Checks if neighbor tiles is populates, should not be', () => {
  gameboard.placeShip(ship, 1, 4, true);
  expect(
    gameboard.board[1][1] && gameboard.board[0][3] && gameboard.board[1][5]
  ).not.toEqual('ship');
});

test('Checks if a ship is placed on the game board, vertically', () => {
  gameboard.placeShip(ship, 1, 4, true);
  expect(
    gameboard.board[0][4] && gameboard.board[1][4] && gameboard.board[2][4]
  ).toEqual('ship');
});

test('Checks that two ships can not overlap', () => {
  gameboard.placeShip(ship, 1, 4, true);
  expect(gameboard.checkIfShipCanBePlaced(ship, 1, 3, false)).toEqual(false);
});

test('Checks that two ships not overlap', () => {
  gameboard.placeShip(ship, 1, 4, true);
  expect(gameboard.checkIfShipCanBePlaced(ship, 5, 8, false)).toEqual(true);
});

test('Checks that two ships can not overlap, with placeShup funciton', () => {
  gameboard.placeShip(ship, 1, 4, true);
  expect(gameboard.placeShip(ship, 1, 3, false)).toEqual(false);
});
