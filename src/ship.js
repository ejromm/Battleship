class Ship  {
    constructor(shipLength, name) {
        this.shipLength = shipLength; 
        this.name = name; 
        this.hits = 0; 
        this.sunk = false; 
    }
    hit() {
        this.hits += 1; 
    }
    isSunk() {
        if (this.hits === this.shipLength) {
            this.sunk = true; 
            return true; 
        }
        this.sunk = false; 
        return false; 
      
    }

}
export { Ship }; 