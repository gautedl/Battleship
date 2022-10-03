export default class Player {
  constructor(name = 'Computer', isComputer = true) {
    this.name = name;
    this.isComputer = isComputer;
    this.turn = true;
    this.coords = [];
    // this.coordCol = [];
  }

  switchTurn() {
    this.turn = !this.turn;
  }

  randomPlay() {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    let coordination = row + '' + col;

    while (this.coords.includes(coordination)) {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
      coordination = row + '' + col;
    }

    this.coords.push(row + '' + col);

    return [row, col];
  }
}
