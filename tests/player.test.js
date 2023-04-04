import { Player } from "../src/player.js";
describe('player', () => {
    const player = new Player(true); 
    test('player has a gameboards', () => {
        expect(player.gameBoard).toBeDefined();
    }); 
    player.setupBoard(); 
    test('computer player board set up and ships created', () => {
        expect(player.gameBoard.ships.length).toBe(5);
    });
    player.computerMove(); 
    test('computer move attacks random spot on own board', () => {
        expect(player.gameBoard.areAnyHit()).toBe(true)
    }); 
})