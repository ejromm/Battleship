import { Ship } from "./ship";
class GameBoard {
    constructor(board) { 
        this.board = [];
        this.initBoard();
        this.ships = []; 
        this.gameOver = false; 
    }
    initBoard() {
        for(let i = 0 ; i < 10 ; i++) {
                this.board.push([]);
          for(let j = 0; j < 100 ; j++) {
                this.board[i].push({ship: null, isHit: false});

            }
        }
    }; 
    recieveAttack(col, row) {
        if (this.board[col][row].isHit === false) {
            this.board[col][row].isHit = true; 
            if(this.board[col][row].ship !== null) {
              let currentShip =  this.ships.find((ship) => ship.name === this.board[col][row].ship.name); 
              currentShip.hit();
              currentShip.isSunk();
            }
        }
       return false; 
    }
    
    pushShip(isVertical, length, name, col, row) {
            if (this.canBePlaced(isVertical, length, col,row)) {
               if(isVertical) {
                  for(let i = 0 ; i < length; i++) {
                    this.board[col + i][row].ship = new Ship(length, name); 
                    this.ships.push(new Ship(length, name));
                  }


               } else {
                 for(let i = 0 ; i < length; i++) {
                    this.board[col][row + i].ship = new Ship(length, name); 
                    this.ships.push(new Ship(length, name));
                 }


               }

            }

        return false; 
    }
    canBePlaced(isVertical, length, col, row) {
        if (row < 0 || row > 9 || col < 0 || col > 9) {
            return false; 
        }
       for (let i = 0 ; i < length; i++) {
            if(isVertical) {
                if(col + i > 9 ) {
                    return false; 
                }
                if (this.board[col + i][row].ship !== null) {
                    return false; 
                }
                


            } else if(!isVertical) {
                if( row + i > 9 ) {
                    return false; 
                }
                if(this.board[col][row + i].ship !== null) {
                    return false;
                }
             

            }
       }
       return true; 
    }; 
    
export { GameBoard };