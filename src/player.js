import { GameBoard } from "./gameBoard.js"

class Player {
    constructor() {
        
        this.gameBoard = new GameBoard; 
    }
    setupBoard() {
       
            this.gameBoard.randomComputerMoves();
             
       

    }; 
    computerMove() {
        
            this.gameBoard.randomComputerHit();
            this.gameBoard.checkIfGameOver(); 
             
        
    }
    recieveHit(col, row) {
        this.gameBoard.recieveAttack(col ,row);
        this.gameBoard.checkIfGameOver();
         
    }

}

export { Player }