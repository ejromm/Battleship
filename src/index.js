import { Ship  } from "./ship.js";
import { GameBoard  } from "./gameBoard.js";
const newBoardSix = new GameBoard; 
  newBoardSix.randomComputerMoves(); 
  console.log(newBoardSix.board);
  console.log(newBoardSix.ships);