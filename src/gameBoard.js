import { Ship } from "./ship.js";
class GameBoard {
    constructor() { 
        this.board = [];
        this.initBoard();
        this.ships = []; 
        this.gameOver = false; 
    }
    initBoard() {
        for(let i = 0 ; i < 10 ; i++) {
                this.board.push([]);
          for(let j = 0; j < 10 ; j++) {
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
    
    pushShip(isVertical, shipLength, name, col, row) {
            if (this.canBePlaced(isVertical, shipLength, col,row)) {
               if(isVertical) {
                  for(let i = 0 ; i < shipLength; i++) {
                    this.board[col + i][row].ship = new Ship(shipLength, name); 
                  }
                  this.ships.push(new Ship(shipLength, name));


               } else {
                 for(let i = 0 ; i < shipLength; i++) {
                    this.board[col][row + i].ship = new Ship(shipLength, name); 
                 }
                 this.ships.push(new Ship(shipLength, name));

               }

            }

        return false; 
    }
    canBePlaced(isVertical, shipLength, col, row) {
        if (row < 0 || row > 9 || col < 0 || col > 9) {
            return false; 
        }
       for (let i = 0 ; i < shipLength; i++) {
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
    randomComputerMoves() {
        const carrier = new Ship(5, 'Carrier'); 
        const battleship = new Ship(4, 'Battleship'); 
        const cruiser = new Ship(3, 'Cruiser'); 
        const submarine = new Ship(3, 'Sumbarine');
        const destroyer = new Ship(2, 'Destroyer'); 
        const compShips = []; 
        compShips.push(carrier, battleship, cruiser, submarine, destroyer); 

        let workingPlacements = 0 ; 
        while (workingPlacements < 5) {
            let rndCol = Math.floor(Math.random() * 10); 
            let rndRow = Math.floor(Math.random() * 10); 
            let vertical = Math.floor(Math.random() * 2) === 1 ? true : false; 
            if(this.canBePlaced(vertical, compShips[workingPlacements].shipLength, rndCol, rndRow)) {
                this.pushShip(vertical, compShips[workingPlacements].shipLength, compShips[workingPlacements].name, rndCol, rndRow);
                workingPlacements++; 
            }
        }
    }
    randomComputerHit() {
        let cls = '';
        let boardNotHit = this.board.filter((a) =>  a.isHit  !== false); 
        let rndBoardCol = boardNotHit[Math.floor(Math.random() * boardNotHit.length)];
        let rndCell = rndBoardCol[Math.floor(Math.random() * rndBoardCol.length)]; 
            for(let i = 0 ; i < this.board.length; i++) {
                for(let j = 0 ; j < this.board[i].length; j++) {
                    if (this.board[i][j] === rndCell) {
                        let rndCol = i; 
                        let rndRow = j; 
                        this.recieveAttack(rndCol, rndRow);
                         if(this.board[rndCol][rndRow].ship === null) cls = 'gray'; 
                        else cls = 'red';
                        const playerCells = document.querySelectorAll('.player-col'); 
                        playerCells.forEach((cell) => {
                            if(cell.getAttribute('id') === `${rndCol + 1}-${rndRow + 1}`) cell.style.backgroundColor = cls;
                        })
                      
                    } 
                }
            }
           
        
     
           
                
               
                
               
              
            

        
    }
   
    areAnyHit() {
        for (let x = 0 ; i < this.board.length; i++) {
            for (let q = 0 ; j < this.board[x].length; j++) {
                if (this.board[x][q].isHit === true) {
                    return true; 
                }
            }
        }
    }
    checkIfGameOver() {
        if (this.ships.every((ship) => ship.isSunk() === true)) {
            this.gameOver = true; 
        }
        
    }
    
}  
export { GameBoard };