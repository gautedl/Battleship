import Player from '../Player';

let player;
let computer;

beforeEach(() => {
  player = new Player('Trym', false);
  computer = new Player();
});

test('Check if player is created', () => {
  expect(player).toEqual({
    name: 'Trym',
    coords: [],
  });
});

test('Check if computer is created', () => {
  expect(computer).toEqual({
    name: 'Computer',
    coords: [],
  });
});

test('Check if random attack works', () => {
  computer.randomPlay();
  expect(computer.coords.length).toEqual(1);
});
