export default class Player {
  constructor(name = 'Computer', isComputer = true) {
    this.name = name;
    this.isComputer = isComputer;
    this.turn = true;
    this.coordRow = [];
    this.coordCol = [];
  }

  switchTurn() {
    this.turn = !this.turn;
  }

  randomPlay() {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);

    if (this.coordRow.includes(row) && this.coordCol.includes(col))
      return false;

    this.coordRow.push(row);
    this.coordCol.push(col);

    return row, col;
  }
}
