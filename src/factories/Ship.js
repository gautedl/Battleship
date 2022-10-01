export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = Array(this.length).fill('ship');
  }

  // populateShip() {
  //   for (let i = 0; i < this.length; i++) {
  //     this.hits[i] = 'ship';
  //   }
  //   return this.hits;
  // }

  hit(index) {
    if (this.hits[index] === 'hit') return;
    this.hits[index] = 'hit';
    return this.hits;
  }

  isSunk() {
    return this.hits.includes('ship') ? false : true;
  }
}
