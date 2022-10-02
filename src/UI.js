export function renderFromGameboard(gameboard, tiles) {
  for (let i = 0; i < gameboard.board.length; i++) {
    for (let j = 0; j < gameboard.board[i].length; j++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      gameboard.board[i][j] == ''
        ? (tile.textContent = i + ',' + j)
        : (tile.textContent = gameboard.board[i][j]);
      tile.onclick = getTile;
      tiles.appendChild(tile);
    }
  }
}

function getTile(e) {
  console.log(e);
}
