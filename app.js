//making a grid
let grid;

const board = document.querySelector('#grid-container')
//console.log(board)

function makeGrid(){

    for(let i = 0; i < 8; i++){
        for(let c = 0; c < 12; c++){
            let newCell = document.createElement('div')

            newCell.setAttribute('data-x',c)
            newCell.setAttribute('data-y',i)
            newCell.classList.add('cell')
            board.append(newCell)
        }
    }
}

init()

function init(){
    grid = [
        ["0","0","0"],
        ["0","0","0"],
        ["0","0","0"],
    ]
}

makeGrid()