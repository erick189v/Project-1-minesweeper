console.log('js:loaded')

//making a grid
let grid;
let rows;
let columns;

//bombs
let minesCount = 2;
let minesLoc = [];


const board = document.querySelector('#grid-container')
//console.log(board)


function makeGrid(){
    //populating with columns and rows
    for(let i = 0; i < grid.length; i++){
        let row = [];
        for(let c = 0; c < grid[i].length; c++){
            //div tags created
            let newCell = document.createElement('div');
            //coordinates
            newCell.setAttribute('data-x',c);
            newCell.setAttribute('data-y',i);
            newCell.classList.add('cell')
            
            board.append(newCell)
        }
    }
    console.log(grid);
}
init()

function init(){
    grid = [
        ["0","0","0"],
        ["0","0","0"],
        ["0","0","0"],
    ]
    makeGrid()
    board.removeEventListener('click', checkCell)
    board.addEventListener('click',checkCell)
}
function checkCell(e){
    console.log(e.target.dataset)
}













/* 
let grid;

// console.log(grid)


const board = document.querySelector('#grid-container')
// console.log(board)


function makeBoard(){


  for(let i = 0;i<grid.length;i++){
    for(let j=0;j<grid[i].length;j++){
      let newCell = document.createElement('div')
      // add additional attributes

      newCell.setAttribute('data-x',j)
      newCell.setAttribute('data-y',i)
      newCell.classList.add('cell')
      board.append(newCell)
    }
  }
}


init()

function init(){
  grid = [
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
  ]
  makeBoard()
  board.removeEventListener('click', checkCell)
  board.addEventListener('click', checkCell)
}

function checkCell (e){
  console.log(e.target.dataset)
  
}
*/