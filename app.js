console.log('js:loaded')

//making a grid
let grid;
let rows;
let columns;

//bombs
let mines;

let minesLocation = [];

//flag button
let flagOn = false;
let r;
let c;
//let gameOver =  false;


//function placeMines()

const board = document.querySelector('#grid-container')
document.getElementById("flag-button").addEventListener("click",placeFlag)
//console.log(board)



function makeGrid(){

    //populating with columns and rows
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[r].length; c++){
            //div tags created
            let newCell = document.createElement('div');
            //coordinates
            newCell.setAttribute('data-c',c);
            newCell.setAttribute('data-r',r);
            newCell.classList.add('cell')
            
            board.append(newCell)
        }
    }
    console.log(grid);
}


init()


function init(){
    

    grid = [
        ["*","","","","","","","","",""],
        ["","","","","*","","","","",""],
        ["","","","","","","","*","",""],
        ["","","*","*","","","","","",""],
        ["","","","","*","","","","*",""],
        ["","*","","","","","","","",""],
        ["","","*","","","","","*","",""],
        ["","","","","","","","","",""],
    ]
    //new cell clicked
    makeGrid()
    board.removeEventListener('dblclick', checkCell)
    board.addEventListener('dblclick',checkCell)

    board.addEventListener('click', flagCell)


    

}


function minesLoc(mines){


   // console.log("you clicked a mine" + mines)

}
minesLoc("💥")
//logs coordinates
function checkCell(e){
    //console.log(e.target.dataset)
    //console.dir(e.target)
    let r = e.target.getAttribute("data-r") * 1
    let c = e.target.getAttribute("data-c") * 1
    console.log(grid[r][c]) 
    if(grid[r][c]){
         gameOver();

    }

    let minesNear = 0;
    
    console.log('topLeft',grid[r-1][c-1])
    console.log('topRight',grid[r-1][c+1])
    console.log(typeof r);
    console.log('top',grid[r-1][c])
    console.log('bottom', grid[r+1][c])
    console.log('BottomLeft',grid[r+1][c-1])
    console.log('BottomRight',grid[r+1][c+1])
    console.log('Right',grid[r][c+1])
    console.log('Left',grid[r][c-1])

   if (grid[r-1][c-1]){
    minesNear++
   } 
   if (grid[r-1][c+1]){
    minesNear++
   } 
   if (grid[r-1][c]){
    minesNear++
   } 
   if (grid[r+1][c]){
    minesNear++
   } 
   if (grid[r+1][c-1]){
    minesNear++
   } 
   if (grid[r+1][c+1]){
    minesNear++
   } 
   if (grid[r][c+1]){
    minesNear++
   } 
   if (grid[r][c-1]){
    minesNear++
   } 

   
   console.log(minesNear)
   return minesNear
    
    /* if(r-1 >=0){
        const neighbor = grid[r-1][c]
        console.log(neighbor)
        if(neighbor ===""){
            grid[c][r] = "0"
            return false
        } else if (neighbor == "*"){
            return true
          }
    } else {
        return false
     }
     */
    //console.log(e.target)
}

//game over and it resets.
function gameOver(){
    alert('GAME OVER 💥')
    location.reload()
}

//places a flag when toggled and  with a single click
function placeFlag(){

    if (flagOn){
        flagOn = false;
        document.getElementById("flag-button").style.backgroundColor = "#f1bce8";
    }
    else {
        flagOn = true;
        document.getElementById("flag-button").style.backgroundColor = "#84b78a";
    }
}

//places flag
function flagCell(e){

    let newCell = e.target;
    
    if(flagOn){
        if(newCell.innerText == ""){
            newCell.innerText = "🍬";
        }
        else if(newCell.innerText == "🍬"){
            newCell.innerText = "";
        }
        return;
    }
    
}



/*function checkMines(r,c){
    if(r-1 >=0){
        const neighbor = grid[r-1][c]
        console.log(neighbor)
        if(neighbor ===""){
            grid[c][r] = "0"
          return false
        } else if (neighbor == "*"){
            return true
          }
    } else {
        return false
    }
}*/

// function checkMines(r,c,e){
//     if (r < 0 || r >= rows || c < 0 || c >= columns){
//         return 0;
//     }
//     if(minesLocation.includes(grid[e])){
//         return 1;
//     }
//     return 0;
// }
//console.log(grid);