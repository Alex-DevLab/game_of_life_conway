// ================ Game of Life Rules ==========================
//      For a space that is populated:
// Each cell with 1 or 0 neighbors dies, as if by solitude.
// Each cell with >= 4 neighbors dies, as if by overpopulation.
// Each cell with 2 or 3 neighbors survives.
//
//      For a space that is empty or unpopulated:
// Each cell with three neighbors becomes populated.
// ==============================================================

const WIDTH = 400;
const HEIGHT = 400;
const resolution = 40;
const COLS = WIDTH / resolution;
const ROWS = HEIGHT / resolution;

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = WIDTH;
canvas.height = HEIGHT;

function buildGrid(){
   return new Array(COLS).fill(null).map(()=>new Array(ROWS).fill(0));
}

const grid = buildGrid();
console.log(grid);