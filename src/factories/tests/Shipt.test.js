import Ship from '../Ship';
let ship;
beforeEach(() => {
  ship = new Ship(3);
  // ship.populateShip();
});

test('Creates a ship', () => {
  expect(ship).toEqual({ length: 3, hits: ['ship', 'ship', 'ship'] });
});

test('Hits a ship at index = 0', () => {
  expect(ship.hit(0)).toEqual(['hit', 'ship', 'ship']);
});

test('Check if a ship that is not hit is not sunken', () => {
  expect(ship.isSunk()).toEqual(false);
});

test('Check if a ship that is hit once is not sunken', () => {
  ship.hit(0);
  expect(ship.isSunk()).toEqual(false);
});

test('Check if a ship that is hit three times is sunken', () => {
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  expect(ship.isSunk()).toEqual(true);
});

test('Check if a ship can not be hit multiple times in same spot', () => {
  ship.hit(0);
  ship.hit(0);
  expect(ship.hits).toEqual(['hit', 'ship', 'ship']);
});
