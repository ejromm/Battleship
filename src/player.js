import { GameBoard } from "./gameBoard.js"

class Player {
    constructor(isComputer) {
        this.isComputer = isComputer; 
        this.isTurn = false; 
        this.gameBoard = new GameBoard; 
    }
    setupBoard() {
        if(this.isComputer) {
            this.gameBoard.randomComputerMoves();
        }; 

    }; 
    computerMove() {
        if(this.isComputer) {
            this.gameBoard.randomComputerHit();
        }
    }
    recieveHit(col, row) {
        this.gameBoard.recieveAttack(col ,row);
        this.gameBoard.checkIfGameOver();
    }

}

export { Player }