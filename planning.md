# choice of game is
-minesweeper
# wireframe




## user stories
1. as a player, start game as soon as I click on a cell
1. as a player, review or see how many bombs are left after the game is done
1. as a player, see the score
1. as a player, see the timer
1. as a player, see the rules of the game.

## pseudocode for overall game play.
 
1. setup
 - state variables: bombs, flags, timer?(unsure yet), reset button

1. INIT
 - create grid
 - randomly assign bombs(depending on the size of the grid ex. 7x11 should contain 5-8 bombs.)
 - flag feature.

1. RENDER
 - display reset button
 - play as soon as the grid is clicked on
 - display timer

1. BOMB HIT
 - add listener
 - add bomb-clicked
 - display timer(after game is won)
 - display "game over" when bomb is clicked on

1. PLAY AGAIN

1. ICEBOX
 - display bomb graphics within cells(when hit)
 - flag feature
 - 