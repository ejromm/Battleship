class GameBoard {
    constructor(board) { 
        this.board = [];
        this.initBoard();
    }
    initBoard() {
        for(let i = 0 ; i < 10 ; i++) {
          for(let j = 0; j < 10 ; j++) {
                this.board.push({ship: false, isHit: false});

            }
        }
    }; 
    recieveAttack(location) {
        this.board[location].isHit = true; 
    }
    checkIfAttackHit(location) {
        return this.board[location].ship; 
    }
}
export { GameBoard };