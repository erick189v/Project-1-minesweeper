
## Minesweeper Game

This is a simple Minesweeper game built with HTML, CSS, and JavaScript.


Game Setup: Minesweeper is played on a grid, typically a square grid, where players need to uncover all the squares (or tiles) except those containing mines. At the start of the game, the mines are randomly distributed across the grid. 

Objective: The player's objective is to uncover all the empty squares without revealing any mines. The numbers on the uncovered squares indicate how many mines are adjacent to that particular square (in the eight adjacent positions—up, down, left, right, and diagonals).

Gameplay: Players can click on a square to reveal what is underneath. If it's a mine, the game ends. If it's not a mine, the revealed number indicates how many mines are adjacent to that square. Use this information to strategically deduce where the mines might be located.

Flags: If a player suspects a square contains a mine

Winning: The game is won when all non-mine squares are revealed. This often involves deducing the positions of the mines based on the numbers revealed on neighboring squares.

### How to Play

1. Open the `index.html` file in your web browser.
2. double-click to reveal the cells.
3. If you think a cell contains a mine, double-click to place a flag.

### Features

- Double-click a cell to check the neighboring cells/ reveal a cell
- toggle click to place a flag
- Game ends if you click on a cell containing a mine.

### Game Controls
- **Double Click:** Check neighboring cells/reveal cell
- **toggle single Click:** Place a flag

### Files

- `index.html`: Game interface
- `style.css`: Styling of the game
- `script.js`: Functionality and game logic

### Future Improvements

- Implement a timer to track how long it takes to complete the game.
- Add different difficulty levels.
- Implement a scoring system.
- add a you won!
- add random bombs 
- fix edge cases

### Preview

![](./assets/Screenshot%202023-11-03%20at%209.18.51 AM.png)

### Credits

This game was developed by Eraclio Vega. 