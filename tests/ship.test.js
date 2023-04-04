import { Ship } from "../src/ship.js";
describe('Ship' , () => {
    const ship = new Ship(4); 
    test('ship has correct length', () => {
        expect(ship.shipLength).toBe(4);
    }); 
    test('ship is not sunk', () => {
        expect(ship.sunk).toBe(false);
    });
    test('ship is not hit', () => {
        expect(ship.hits).toBe(0);
    });
});
describe('hit method', () => {
    const shipTwo = new Ship(5); 
    shipTwo.hit(); 
    test("ship's hits has increased", () =>  {
        expect(shipTwo.hits).toBe(1);
    }); 
}); 
describe('sunk method', () => {
    describe('unsunk boat', () => {
        const shipThree = new Ship(3); 
        shipThree.isSunk(); 
         test('ship sunk method returns false if hits does not equal length', () => {
         expect(shipThree.isSunk()).toBe(false);
        }); 
         test("ship's sunk value is still false after false call of isSunk", () =>{
        expect(shipThree.sunk).toBe(false);
        }); 
    });
    describe('sunken boat', () => {
        const shipFour = new Ship(1);
        shipFour.hit();
        shipFour.isSunk();
        test('ship sunk method returns true if hits equals length', () => {
            expect(shipFour.isSunk()).toBe(true);
        }); 
        test('ship sunk value is true after isSunk is called on sunken ship', () => {
            expect(shipFour.sunk).toBe(true);
        });

   
    }); 
    
    
})