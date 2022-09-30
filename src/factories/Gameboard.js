export default class Gameboard {
  SIZE = 10;
  TILES_WITH_SHIPS = 17;

  constructor() {
    this.board = [];
    this.missedShots = 0;
    this.hits = 0;
  }

  initBoard() {
    for (let i = 0; i < this.SIZE; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.SIZE; j++) {
        this.board[i][j] = [];
      }
    }
    return this.board;
  }

  placeShip(ship, row, column, isVertical) {
    if (!this.checkIfShipCanBePlaced(ship, row, column, isVertical))
      return false;
    const offset = Math.floor(ship.length / 2);
    let startPosition = 0;
    if (isVertical) {
      startPosition = row - offset;
      for (let i = 0; i < ship.length; i++) {
        this.board[startPosition + i][column] = 'ship';
      }
    } else {
      startPosition = column - offset;
      for (let i = 0; i < ship.length; i++) {
        this.board[row][startPosition + i] = 'ship';
      }
    }
    return this.board;
  }

  checkIfShipCanBePlaced(ship, row, column, isVertical) {
    const offset = Math.floor(ship.length / 2);
    let startPosition = 0;

    if (isVertical) {
      startPosition = row - offset;
      for (let i = 0; i < ship.length; i++) {
        if (startPosition + i < 0) return false;
        if (this.board[startPosition + i][column] === 'ship') return false;
      }
    } else {
      startPosition = column - offset;
      for (let i = 0; i < ship.length; i++) {
        if (startPosition + i < 0) return false;
        if (this.board[row][startPosition + i] === 'ship') return false;
      }
    }

    return true;
  }

  receiveAttack(row, col) {
    if (this.board[row][col] === 'miss' || this.board[row][col] === 'hit')
      return false;
    if (this.board[row][col] === 'ship') {
      this.board[row][col] = 'hit';
      this.hits++;
    } else {
      this.missedShots++;
      this.board[row][col] = 'miss';
    }
  }

  checkIfAllShipsHaveSunk() {
    return this.hits === this.TILES_WITH_SHIPS ? true : false;
  }
}
