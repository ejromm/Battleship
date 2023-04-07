import { Player  } from "./player";
import { GameBoard  } from "./gameBoard";


class Game {
    constructor() {
        this.currentPlayer = true; 
        this.players = [
            new Player(false), 
            new Player(true), 
        ]; 
    }


    
}