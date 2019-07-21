const container_div = document.getElementById('container');

function createGrid(size, side) {
  const grid = document.createElement('div');
  grid.classList.add('grid');
  container_div.appendChild(grid);
  grid.style.setProperty('--sideSize', side);

  for (let i = 0; i < size; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    grid.appendChild(block);
  }
}

let sideSize = 16;
let size = sideSize ** 2;

createGrid(size, sideSize);
