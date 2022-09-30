export default class Gameboard {
  SIZE = 10;

  constructor() {
    this.board = [];
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
        if (this.board[startPosition + i][column] === 'ship') return false;
        if (startPosition + i < 0) return false;
      }
    } else {
      startPosition = column - offset;
      for (let i = 0; i < ship.length; i++) {
        if (this.board[row][startPosition + i] === 'ship') return false;
        if (startPosition + i < 0) return false;
      }
    }

    return true;
  }
}
