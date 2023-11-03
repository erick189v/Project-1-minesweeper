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



//function placeMines()

const board = document.querySelector('#grid-container')
const boardCells = board.children

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

            if(grid[r][c] === 0){
                newCell.classList.add('near')
            }

            if(grid[r][c] === "*"){
                newCell.classList.add('bomb')
            }
            
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


//logs coordinates
function checkCell(e){
    //console.log(e.target.dataset)
    //console.dir(e.target)
    let r = parseInt(e.target.getAttribute("data-r")) * 1
    let c = parseInt(e.target.getAttribute("data-c")) * 1
    console.log(grid[r][c]) 

    if(grid[r][c]){
        gameOver();
        showMines();
    } else {
        let minesNear = countMinesNear(r, c);

        if (minesNear > 0) {
            e.target.innerText = minesNear;
        }
    }

    
    //near();

    let minesNear = 0;

    console.log('topLeft',grid[r-1][c-1]) //top left
    console.log('topRight',grid[r-1][c+1])//top right
    //console.log(typeof r);
    console.log('top',grid[r-1][c])
    console.log('bottom', grid[r+1][c])
    console.log('BottomLeft',grid[r+1][c-1])
    console.log('BottomRight',grid[r+1][c+1])
    console.log('Right',grid[r][c+1])
    console.log('Left',grid[r][c-1])
    //top left
    if (grid[r-1][c-1]){
        if(r == 0 || c == 0){
        } else {
        minesNear++
    } 
    //top right
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
    
}


function countMinesNear(r, c) {
    let minesNear = 0;

    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue; // Skip the current cell

            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] === "*") {
                minesNear++;
            }
        }
    }

    return minesNear;
}

//game over and it resets.
function gameOver(){
    alert('GAME OVER 💥')
    
    location.reload()
}

function showMines(){

    for( let i = 0; i < boardCells.length; i++){
        const cell = boardCells[i]
        if(cell.classList.contains("bomb")){

            cell.innerText= "💣"
        }
    }

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