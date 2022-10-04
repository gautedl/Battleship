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
  gameboard.placeShip(ship, 1, 4, true);
  expect(
    gameboard.board[1][4] && gameboard.board[1][3] && gameboard.board[1][5]
  ).toEqual('ship');
});

test('Checks if a ship is placed on the game board, vertically', () => {
  gameboard.placeShip(ship, 1, 4, false);
  expect(
    gameboard.board[0][4] && gameboard.board[1][4] && gameboard.board[2][4]
  ).toEqual('ship');
});

test('Checks if neighbor tiles is populates, should not be', () => {
  gameboard.placeShip(ship, 1, 4, false);
  expect(
    gameboard.board[1][1] && gameboard.board[0][3] && gameboard.board[1][5]
  ).not.toEqual('ship');
});

test('Checks that two ships can not overlap', () => {
  gameboard.placeShip(ship, 1, 4, false);
  expect(gameboard.checkIfShipCanBePlaced(ship, 1, 3, true)).toEqual(false);
});

test('Checks that two ships not overlap', () => {
  gameboard.placeShip(ship, 1, 4, true);
  expect(gameboard.checkIfShipCanBePlaced(ship, 5, 8, false)).toEqual(true);
});

test('Checks that two ships can not overlap, with placeShup funciton', () => {
  gameboard.placeShip(ship, 1, 4, false);
  expect(gameboard.placeShip(ship, 1, 3, true)).toEqual(false);
});

test('Checks if ship is hit when attacking', () => {
  gameboard.placeShip(ship, 1, 4, true);
  gameboard.receiveAttack(1, 4);
  expect(gameboard.board[1][4]).toEqual('hit');
});

test('Checks if number of hits is stores', () => {
  gameboard.placeShip(ship, 1, 4, true);
  gameboard.receiveAttack(1, 4);
  expect(gameboard.hits).toEqual(1);
});

test('Checks if is miss hit when attacking empty', () => {
  gameboard.placeShip(ship, 1, 4, true);
  gameboard.receiveAttack(5, 5);
  expect(gameboard.board[5][5]).toEqual('miss');
});

test('Checks that same spot can not be attacked twice', () => {
  gameboard.placeShip(ship, 1, 4, true);
  gameboard.receiveAttack(5, 5);
  expect(gameboard.receiveAttack(5, 5)).toEqual(false);
});

test('Checks that number of missed shots is stored', () => {
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(5, 4);
  gameboard.receiveAttack(5, 3);
  gameboard.receiveAttack(5, 2);
  gameboard.receiveAttack(5, 1);
  expect(gameboard.missedShots).toEqual(5);
});

test('Checks that the tile is marked as miss', () => {
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(5, 4);
  gameboard.receiveAttack(5, 3);
  gameboard.receiveAttack(5, 2);
  gameboard.receiveAttack(5, 1);
  expect(gameboard.board[5][5] && gameboard.board[5][4]).toEqual('miss');
});

test('Checks if all ships are hit, should produce false', () => {
  gameboard.placeShip(ship, 1, 4, true);
  gameboard.receiveAttack(1, 4);
  expect(gameboard.checkIfAllShipsHaveSunk()).toEqual(false);
});

test('Check if all ships are sunken, should produce true. MOCK', () => {
  gameboard.hits = 17;
  expect(gameboard.checkIfAllShipsHaveSunk()).toEqual(true);
});

test('Fill up board randomly with ships', () => {
  gameboard.placeRandomShips();
  let ships = 0;
  for (let i = 0; i < gameboard.board.length; i++) {
    for (let j = 0; j < gameboard.board[i].length; j++) {
      if (gameboard.board[i][j] === 'ship') {
        ships++;
      }
    }
  }

  expect(ships).toEqual(gameboard.TILES_WITH_SHIPS);
});
