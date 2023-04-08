import { Player  } from "./player";
import { GameBoard  } from "./gameBoard";


class Game {
    constructor() {
        this.currentPlayer = true; 
        this.player = new Player();
        this.computer = new Player(); 
        this.isGameOver = false; 
    }
    pushPlayerBoard(board) {
        this.player.gameBoard = board; 
    }
    createComputer() {
        this.computer.setupBoard();
    }
    playerMoves() {
        const computerCells = document.querySelectorAll('.col'); 
        computerCells.forEach((cell) => {
            cell.addEventListener('click', event => {
                if(cell.style.backgroundColor !== 'gray' && cell.style.backgroundColor !== 'green' ) {
                    const cellId = cell.getAttribute('id'); 
                    const cellCol = Number(cellId.slice(0, cellId.indexOf('-'))) - 1; 
                    const cellRow = Number(cellId.slice(cellId.indexOf('-') + 1)) - 1; 
                    cell.style.backgroundColor =('gray');
                    this.computer.recieveHit(cellCol, cellRow); 
                    console.log('computer board', this.computer.gameBoard.board);
                    console.log('this item', this.computer.gameBoard.board[cellCol][cellRow]);
                    console.log('typeof ', typeof this.computer.gameBoard.board[cellCol][cellRow])
                    if(this.computer.gameBoard.board[cellCol][cellRow].ship == null) {
                        cell.style.backgroundColor = 'gray';
                    } else if(this.computer.gameBoard.board[cellCol][cellRow].ship != null) {
                        cell.style.backgroundColor = 'green';
                    }
                   
                    this.currentPlayer = false; 
                    if(this.computer.gameBoard.gameOver ===  true || this.player.gameBoard.gameOver === true) {
                        console.log('OVER');
                        return; 
                    }
                    else {
                        this.computerMoves(); 
                    }
                  
                }
            
            })
        })
      
    }
    computerMoves() {
        this.player.computerMove(); 
        this.currentPlayer = true; 
        if(this.computer.gameBoard.gameOver ===  true || this.player.gameBoard.gameOver === true) {
            console.log('OVER');
            return; 
        }
        else {
            this.playerMoves(); 
        } 
        
    }
    


    
}

export { Game }