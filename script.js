// ================ Game of Life Rules ==========================
//      For a space that is populated:
// Each cell with 1 or 0 neighbors dies, as if by solitude.
// Each cell with >= 4 neighbors dies, as if by overpopulation.
// Each cell with 2 or 3 neighbors survives.
//
//      For a space that is empty or unpopulated:
// Each cell with three neighbors becomes populated.
// ==============================================================

const WIDTH = 800;
const HEIGHT = 800;
const resolution = 10;
const COLS = WIDTH / resolution;
const ROWS = HEIGHT / resolution;

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = WIDTH;
canvas.height = HEIGHT;

function buildGrid() {
    return new Array(COLS).fill(null)
        .map(() => new Array(ROWS).fill(null)
            .map(() => Math.floor(Math.random() * 2)));
}

let grid = buildGrid();

setInterval(update, 200);

function update() {
    grid = nextGen(grid);
    render(grid);
}

function nextGen(grid) {
    const nextGen = grid.map(arr => [...arr]);

    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {

            const cell = grid[col][row];
            let numNeighbors = 0;

            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i === 0 && j === 0) {
                        continue;
                    }

                    const x_cell = col + i;
                    const y_cell = row + j;

                    if (x_cell >= 0 && y_cell >= 0 && x_cell < COLS && y_cell < ROWS) {

                        const currentNeighbor = grid[col + i][row + j];
                        numNeighbors += currentNeighbor;
                    }
                }
            }

            //rules
            if (cell === 1 && numNeighbors < 2) {
                nextGen[col][row] = 0;
            } else if (cell === 1 && numNeighbors > 3) {
                nextGen[col][row] = 0;
            } else if (cell === 0 && numNeighbors === 3) {
                nextGen[col][row] = 1;
            }
        }
    }
    return nextGen;
}

function render(grid) {
    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
            const cell = grid[col][row];
            context.beginPath();
            context.rect(col * resolution, row * resolution, resolution, resolution);
            context.fillStyle = cell ? 'red' : 'white';
            context.fill();
            context.stroke();
        }
    }
}