console.log('js:loaded')

//making a grid
let grid;
let rows;
let columns;

//bombs
let mines;
let minesLocation;

//flag button
let flagOn = false;
//let gameOver =  false;


//function placeMines()

const board = document.querySelector('#grid-container')
document.getElementById("flag-button").addEventListener("click",placeFlag)
//console.log(board)



function makeGrid(){

    //populating with columns and rows
    for(let i = 0; i < grid.length; i++){
        for(let c = 0; c < grid[i].length; c++){
            //div tags created
            let newCell = document.createElement('div');
            //coordinates
            newCell.setAttribute('data-c',c);
            newCell.setAttribute('data-r',i);
            newCell.classList.add('cell')
            
            board.append(newCell)
        }
    }
    console.log(grid);
}


init()


function init(){
    

    grid = [
        ["*","",""],
        ["","*","*"],
        ["","",""],
    ]
    //new cell clicked
    makeGrid()
    board.removeEventListener('click', checkCell)
    board.addEventListener('click',checkCell)

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
    console.log(e.target.getAttribute("data-r"))
    console.log(e.target.getAttribute("data-c"))
    console.log(grid[e.target.getAttribute("data-r")][e.target.getAttribute("data-c")])
    

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

function placeFlag(){

    if (flagOn){
        flagOn = false;
        document.getElementById("flag-button").style.backgroundColor = "#84b78a";
    }
    else {
        flagOn = true;
        document.getElementById("flag-button").style.backgroundColor = "#f1bce8";
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
    //if(minesLoc.includes(newCell.id)){
       // alert("GAME OVER")
        //gameOver = true;
        //return;
    //}
    
}

//checking for bombs
function checkAbove(r,c){
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
}
checkAbove(1, 0)
//console.log(grid);