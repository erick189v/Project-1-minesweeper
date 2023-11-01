console.log('js:loaded')

//making a grid
let grid;
let rows;
let columns;

//bombs
let minesCount;
let minesLoc;

//flag button
let flagOn = false;


const board = document.querySelector('#grid-container')
//console.log(board)


function makeGrid(){
    
    document.getElementById("flag-button").addEventListener("click",placeFlag)
    //populating with columns and rows
    for(let i = 0; i < grid.length; i++){
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
        ["1","0","0"],
        ["0","0","0"],
        ["0","1","0"],
    ]
    //new cell clicked
    makeGrid()
    board.removeEventListener('click', checkCell)
    board.addEventListener('click',checkCell)

    board.addEventListener('click', flagCell)


}

//returns position and flag
function checkCell(e){
    console.log(e.target.dataset)

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

function flagCell(e){

    let newCell = e.target;
    
    if(flagOn){
        if(newCell.innerText == ""){
            newCell.innerText = "🍬";
        }
        else if(newCell.innerText == "🍬"){
            newCell.innerText = "";
        }
    }
}

//placing bombs