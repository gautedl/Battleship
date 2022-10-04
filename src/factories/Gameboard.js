import Ship from './Ship';

export default class Gameboard {
  SIZE = 10; // The size of cols and rows of the gameboard
  TILES_WITH_SHIPS = 17; //Number of tiles populated by ships

  constructor() {
    this.board = [];
    this.missedShots = 0;
    this.hits = 0;
  }

  // Creates the board
  initBoard() {
    for (let i = 0; i < this.SIZE; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.SIZE; j++) {
        this.board[i][j] = [];
      }
    }
    return this.board;
  }

  // Places a ship on the board
  placeShip(ship, row, column, isVertical) {
    if (!this.checkIfShipCanBePlaced(ship, row, column, isVertical))
      return false;
    const offset = Math.floor(ship.length / 2); //Offset for finding start pos of ship
    let startPosition = 0;
    if (!isVertical) {
      startPosition = row - offset;
      for (let i = 0; i < ship.length; i++) {
        this.board[row + i][column] = 'ship';
      }
    } else {
      startPosition = column - offset;
      for (let i = 0; i < ship.length; i++) {
        this.board[row][column + i] = 'ship';
      }
    }
    return this.board;
  }

  // Checks if location of placed ship is valid
  checkIfShipCanBePlaced(ship, row, column, isVertical) {
    const offset = Math.floor(ship.length / 2);
    let startPosition = 0;

    if (!isVertical) {
      startPosition = row - offset;
      for (let i = 0; i < ship.length; i++) {
        if (
          row + i < 0 || //Makes sure the ship can't be placed outside of the board
          row + i > 9 || //Makes sure the ship won't overflow to the nex row
          this.board[row + i][column] === 'ship'
        )
          return false;
      }
    } else {
      startPosition = column - offset;
      for (let i = 0; i < ship.length; i++) {
        if (
          column + i < 0 ||
          column + i > 9 ||
          this.board[row][column + i] === 'ship'
        )
          return false;
      }
    }

    return true;
  }

  //Function for receiving an attack
  receiveAttack(row, col) {
    //Checks if selected tile already have been attacked
    if (this.board[row][col] === 'miss' || this.board[row][col] === 'hit')
      return false;
    if (this.board[row][col] === 'ship') {
      this.board[row][col] = 'hit';
      this.hits++;
      return 'hit';
    } else {
      this.missedShots++;
      this.board[row][col] = 'miss';
      return 'miss';
    }
  }

  // Checks if all ships have sunken by comparing number of hits with tiles with ships
  checkIfAllShipsHaveSunk() {
    return this.hits === this.TILES_WITH_SHIPS ? true : false;
  }

  // Function for placing all the ships randomly
  placeRandomShips() {
    const carrier = new Ship(5);
    const battleship = new Ship(4);
    const cruiser = new Ship(3);
    const submarine = new Ship(3);
    const destroyer = new Ship(2);

    const arrOfShips = [carrier, battleship, cruiser, submarine, destroyer];

    while (arrOfShips.length > 0) {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
      const isVertical = Math.random() > 0.5 ? true : false;

      if (this.checkIfShipCanBePlaced(arrOfShips[0], row, col, isVertical)) {
        this.placeShip(arrOfShips[0], row, col, isVertical);
        arrOfShips.shift();
      }
    }
  }
}
