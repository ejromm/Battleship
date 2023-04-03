import { GameBoard } from "../src/gameBoard";
import { Ship } from "../src/ship";
describe('gameboard', () => {
    const newBoard = new GameBoard; 
    describe('inital setup', () => {
        test('newly created board has a 10 x 10 board built in', () => {
            expect(newBoard.board.length).toBe(10);
        }); 
    }); 
    describe('can be placed', () => {
        const newBoardTwo = new GameBoard; 
        test('if row input is out of bounds return false', () => {
            expect(newBoardTwo.canBePlaced(false, 4, 12, 0)).toBe(false);
    
        });
        test('if col input if out of bounds return false', () => {
            expect(newBoardTwo.canBePlaced(false, 4, 0 ,12)).toBe(false);
        });
        newBoardTwo.board[0][4].ship = true; 
        newBoardTwo.board[2][2].ship = true; 
        test('if is vertical and any spots are already taken', () => {
            expect(newBoardTwo.canBePlaced(true, 4, 0 , 2)).toBe(false);
        }); 
        test("if isn't vertical and any spots are already taken", () => {
            expect(newBoardTwo.canBePlaced(false, 4, 0 , 2)).toBe(false);
        })
        test('if is vertical and any potential spots are out of bounds', () => {
            expect(newBoardTwo.canBePlaced(true, 5, 7, 5)).toBe(false); 
        }); 
        test("if isn't vertical and any potential spots are out of bounds", () => {
            expect(newBoardTwo.canBePlaced(false, 5, 3, 7)).toBe(false);
        });
        test('if is vertical and any spots are not already taken', () => {
            expect(newBoardTwo.canBePlaced(true, 4, 0 , 5)).toBe(true);
        }); 
        test("if isn't vertical and any spots are not already taken", () => {
            expect(newBoardTwo.canBePlaced(false, 4, 1 , 2)).toBe(true);
        })
        test('if is vertical and any potential spots are not out of bounds', () => {
            expect(newBoardTwo.canBePlaced(true, 1, 7, 5)).toBe(true); 
        }); 
        test("if isn't vertical and any potential spots are not out of bounds", () => {
            expect(newBoardTwo.canBePlaced(false, 1, 3, 7)).toBe(true);
        });
    }); 
    describe('push ship', () => {
        const newBoardThree = new GameBoard;
        
        test('prevents invalid placement', () => {
            expect(newBoardThree.pushShip(false, 5, 'Battleship',  3, 7)).toBe(false);
        });
        newBoardThree.pushShip(true, 2, 'Battleship', 7, 5);
        const newShip = new Ship(2, 'Battleship');
        test('changes ship value to a ship object at each point', () => {
            expect(newBoardThree.board[7][5].ship).toStrictEqual(newShip);
        }); 
        test('ship value at point has same name as passed in', () => {
            expect(newBoardThree.board[7][5].ship.name).toBe('Battleship');
        })
        test('ships array takes in new ship after ship is pushed to board', () => {
            expect(newBoardThree.ships[0]).toStrictEqual(newShip); 
        }); 
    }); 
    describe('recieve attack', () => {
        const newBoardFour = new GameBoard; 
        newBoardFour.recieveAttack(0, 4);
        test('attack accurately changes index hit to true', () => {
            expect(newBoardFour.board[0][4].isHit).toBe(true);
        });
        newBoardFour.pushShip(true, 2, 'Battleship', 7, 5);
        const newShip = new Ship(2, 'Battleship'); 
        newBoardFour.recieveAttack(8, 5); 
        const currentShip = newBoardFour.ships.find((ship) => ship.name === newShip.name);
        test('ship in ship array recieves an attack on the board', () => {
            expect(currentShip.hits).toBe(1); 
        })
    }); 
    describe('check if game over', () => {
        const newBoardFive = new GameBoard;
        newBoardFive.pushShip(true, 2, 'Battleship', 7, 5);
        newBoardFive.pushShip(true, 2, 'Carrier', 7, 7);
        newBoardFive.recieveAttack(7, 5);
        newBoardFive.recieveAttack(8, 5);
        newBoardFive.recieveAttack(7, 7);
        newBoardFive.recieveAttack(8, 7);
        newBoardFive.checkIfGameOver(); 
        test('first boat is sunk', () => {
            expect(newBoardFive.ships[0].sunk).toBe(true);
        }); 
        test('second boat is sunk', () => {
            expect(newBoardFive.ships[1].sunk).toBe(true);
        }); 
        test('game over is true', () => {
            expect(newBoardFive.gameOver).toBe(true);
        }); 
        

    }); 
    describe('computer methods', () => {
        const newBoardSix = new GameBoard; 
        newBoardSix.randomComputerMoves(); 
        describe('random computer board', () => {
            test('ships array is full', () => {
                expect(newBoardSix.ships.length).toBe(5);
            }); 
          
        })
        newBoardSix.randomComputerHit(); 
        test('random computer hit', () => {
            expect(newBoardSix.areAnyHit()).toBe(true);
        }); 
    })
       
 
   
    
})