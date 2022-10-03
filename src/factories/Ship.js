export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = Array(this.length).fill('ship');
  }

  hit(index) {
    if (this.hits[index] === 'hit') return;
    this.hits[index] = 'hit';
    return this.hits;
  }

  isSunk() {
    return this.hits.includes('ship') ? false : true;
  }
}
