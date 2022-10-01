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
    isComputer: false,
    turn: true,
    coordRow: [],
    coordCol: [],
  });
});

test('Check if computer is created', () => {
  expect(computer).toEqual({
    name: 'Computer',
    isComputer: true,
    turn: true,
    coordRow: [],
    coordCol: [],
  });
});

test('Check if change turn function works', () => {
  player.switchTurn();
  expect(player.turn).toEqual(false);
});

test('Check if random attack works', () => {
  computer.randomPlay();
  expect(computer.coordRow.length && computer.coordCol.length).toEqual(1);
});
