class Ship  {
    constructor(length, name) {
        this.length = length; 
        this.name = name; 
        this.hits = 0; 
        this.sunk = false; 
    }
    hit() {
        this.hits += 1; 
    }
    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true; 
            return true; 
        }
        this.sunk = false; 
        return false; 
      
    }

}
export { Ship }; 