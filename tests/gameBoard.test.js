import { GameBoard } from "../src/gameBoard";
describe('gameboard', () => {
    const newBoard = new GameBoard; 
    describe('inital setup', () => {
        test('newly created board has a 10 x 10 board built in', () => {
            expect(newBoard.board.length).toBe(100);
        }); 
    }); 
    describe('recieve attack', () => {
        newBoard.recieveAttack(4);
        test('attack accurately changes index hit to true', () => {
            expect(newBoard.board[4].isHit).toBe(true);
        });
        test('check if attack hit a ship', () => {
            expect(newBoard.board[4].ship).toBe(false);
        });
        
    }); 
   
       
 
   
    
})