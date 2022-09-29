export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = Array.apply(null, Array(length)).map(function () {});
  }

  hit(index) {
    if (this.hits[index] === 'hit') return;
    this.hits[index] = 'hit';
    return this.hits;
  }

  isSunk() {
    return this.hits.includes(undefined) ? false : true;
  }
}
