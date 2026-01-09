# Conway’s Game of Life

Conway’s Game of Life is a cellular automaton devised by mathematician John Conway. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input from the user.
The game takes place on a two-dimensional grid of cells, where each cell can be in one of two states: 'Alive' or 'Dead'.


		
## Rules

At each step (generation), the state of every cell is updated based on the following rules:
- Any live cell with fewer than two live neighbors dies (underpopulation). 
- Any live cell with two or three live neighbors survives. 
- Any live cell with more than three live neighbors dies (overpopulation). 
- Any dead cell with exactly three live neighbors becomes alive (reproduction).

All updates happen simultaneously, creating complex and often unexpected patterns from simple rules.
