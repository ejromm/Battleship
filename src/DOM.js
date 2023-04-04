import { Ship  } from "./ship";
function PlayerShips() {
    let shipsPlaced = 0; 
      
    
    const playerHeader = document.querySelector('.player-header-text'); 
    playerHeader.textContent = `Place Carrier`
    const verticalBtn = document.querySelector('#change-direction-btn');
    verticalBtn.textContent = 'Horizontal';
    verticalBtn.addEventListener('click', function() {
        if(verticalBtn.textContent === 'Horizontal') {
            verticalBtn.textContent = 'Vertical'; 
            
            
        } 
        else if(verticalBtn.textContent === 'Vertical') {
            verticalBtn.textContent = 'Horizontal'; 
            
            
            
            
        }
        
    });
    
   
    
    
    
 
    
  
    

}

 function placeCarrier() {
    let isClicked = false; 
    const directionBtn = document.querySelector('#change-direction-btn'); 
    const playerCells = document.querySelectorAll('.player-col'); 
    const playerHeader = document.querySelector('.player-header-text')
    if(playerHeader.textContent === 'Place Carrier') {
        playerCells.forEach((cell) => {
            cell.onmouseover = function () {
                if(!isClicked) {
                    if(directionBtn.textContent === 'Horizontal') {
                        const coord = this.getAttribute('id'); 
                        
                        const second = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 1}`); 
                        const third = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 2}`);
                        const fourth = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 3}`);
                        const fifth = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 4}`);
                        if((second !== null && second.style.backgroundColor !== 'white') && (third !== null && third.style.backgroundColor !== 'white') && (fourth !== null && fourth.style.backgroundColor !== 'white') && (fifth !== null && fifth.style.backgroundColor !== 'white')) {
                        this.style.backgroundColor = 'white';
                        second.style.backgroundColor = 'white';
                        third.style.backgroundColor = 'white';
                        fourth.style.backgroundColor = 'white';
                        fifth.style.backgroundColor = 'white';
                        
                        }
                    }
                    else if (directionBtn.textContent === 'Vertical') {
                        const coord = this.getAttribute('id'); 
                        
                        const second = document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2))}`); 
                        const third = document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2))}`);
                        const fourth = document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2))}`);
                        const fifth = document.getElementById(`${Number(coord[0]) + 4}-${Number(coord.slice(2))}`);
                        if((second !== null && second.style.backgroundColor !== 'white') && (third !== null && third.style.backgroundColor !== 'white') && (fourth !== null && fourth.style.backgroundColor !== 'white') && (fifth !== null && fifth.style.backgroundColor !== 'white')) {
                        this.style.backgroundColor = 'white';
                        second.style.backgroundColor = 'white';
                        third.style.backgroundColor = 'white';
                        fourth.style.backgroundColor = 'white';
                        fifth.style.backgroundColor = 'white';
                    }
                   
                }
            }
                 
            }
            cell.onmouseleave = function() {
                if(!isClicked) {
                    if(directionBtn.textContent === 'Horizontal') {
                        this.style.backgroundColor = 'black';
                        const coord = this.getAttribute('id'); 
                        const second = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 1}`); 
                        const third = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 2}`);
                        const fourth = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 3}`);
                        const fifth = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 4}`);
                        if(second !== null && second.style.backgroundColor !== 'black') second.style.backgroundColor = 'black';
                        if(third !== null && third.style.backgroundColor !== 'black') third.style.backgroundColor = 'black';
                        if(fourth !== null && fourth.style.backgroundColor !== 'black') fourth.style.backgroundColor = 'black';
                        if(fifth !== null && fifth.style.backgroundColor !== 'black') fifth.style.backgroundColor = 'black';
                        
                        third.style.backgroundColor = 'black';
                        fourth.style.backgroundColor = 'black';
                        fifth.style.backgroundColor = 'black';
                    }
                    else if(directionBtn.textContent === 'Vertical') {
                        this.style.backgroundColor = 'black';
                        const coord = this.getAttribute('id'); 
                        const second = document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2))}`); 
                        const third = document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2))}`);
                        const fourth = document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2))}`);
                        const fifth = document.getElementById(`${Number(coord[0]) + 4}-${Number(coord.slice(2))}`);
                        if(second !== null && second.style.backgroundColor !== 'black') second.style.backgroundColor = 'black';
                        if(third !== null && third.style.backgroundColor !== 'black') third.style.backgroundColor = 'black';
                        if(fourth !== null && fourth.style.backgroundColor !== 'black') fourth.style.backgroundColor = 'black';
                        if(fifth !== null && fifth.style.backgroundColor !== 'black') fifth.style.backgroundColor = 'black';
                        
                        third.style.backgroundColor = 'black';
                        fourth.style.backgroundColor = 'black';
                        fifth.style.backgroundColor = 'black';
                    }
                    
                }
               
            }
            cell.addEventListener('click', function() {
                if(directionBtn.textContent === 'Horizontal') {
                    const coord = this.getAttribute('id'); 
                    const second = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 1}`); 
                    const third = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 2}`);
                    const fourth = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 3}`);
                    const fifth = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 4}`);
                if((second !== null) && (third !== null ) && (fourth !== null ) && (fifth !== null)) {
                    isClicked = true; 
                  
                    this.style.backgroundColor = 'white';
                    second.style.backgroundColor = 'white';
                    third.style.backgroundColor = 'white';
                    fourth.style.backgroundColor = 'white';
                    fifth.style.backgroundColor = 'white';
                    this.classList.add('carrier-1'); 
                    second.classList.add('carrier-2');
                    third.classList.add('carrier-3');
                    fourth.classList.add('carrier-4');
                    fifth.classList.add('carrier-5');
                    if(document.getElementById(`${coord[0]}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${coord[0]}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2))}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2))}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2))}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2))}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 2}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 2}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 2}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 2}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 3}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 3}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 3}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 3}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 4}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 4}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 4}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 4}`).classList.add('surrounding');
                    if(document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 5}`)) document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 5}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 5}`)) document.getElementById(`${Number(coord[0]) -1}-${Number(coord.slice(2)) + 5}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 5}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 5}`).classList.add('surrounding');
                    playerHeader.textContent = `Place Battleship`; 
                    
                    
                }

                }
                else if(directionBtn.textContent === 'Vertical') {
                    const coord = this.getAttribute('id'); 
                    const second = document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2))}`); 
                    const third = document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2))}`);
                    const fourth = document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2))}`);
                    const fifth = document.getElementById(`${Number(coord[0]) + 4}-${Number(coord.slice(2))}`);
                    if((second !== null) && (third !== null ) && (fourth !== null ) && (fifth !== null)) {
                        isClicked = true; 
                       
                        this.style.backgroundColor = 'white';
                        second.style.backgroundColor = 'white';
                        third.style.backgroundColor = 'white';
                        fourth.style.backgroundColor = 'white';
                        fifth.style.backgroundColor = 'white';
                        this.classList.add('carrier-1'); 
                        second.classList.add('carrier-2');
                        third.classList.add('carrier-3');
                        fourth.classList.add('carrier-4');
                        fifth.classList.add('carrier-5');
                        if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2))}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2))}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0])}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0])}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0])}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0])}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0])}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0])}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) -1}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 4}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) + 4}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 4}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) + 4}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 5}-${Number(coord.slice(2))}`)) document.getElementById(`${Number(coord[0]) + 5}-${Number(coord.slice(2))}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 5}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) + 5}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 5}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) + 5}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
    
                        playerHeader.textContent = `Place Battleship`; 
                        
                        
                    }
                }
            })
        })
    }
       
   
    } 
 function placeBattleship() {
        
        
        let isClicked = false; 
        const directionBtn = document.querySelector('#change-direction-btn'); 
        const playerCells = document.querySelectorAll('.player-col'); 
        const playerHeader = document.querySelector('.player-header-text'); 
       
            playerCells.forEach((cell) => {
                cell.onmouseover = function () {
                    if(!isClicked) {
                        if(directionBtn.textContent === 'Horizontal') {
                            const coord = this.getAttribute('id'); 
                           
                            const second = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 1}`); 
                            const third = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 2}`);
                            const fourth = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 3}`);
                          
                            if((second !== null && second.style.backgroundColor !== 'white') && (third !== null && third.style.backgroundColor !== 'white') && (fourth !== null && fourth.style.backgroundColor !== 'white')) {
                            this.style.backgroundColor = 'white';
                            second.style.backgroundColor = 'white';
                            third.style.backgroundColor = 'white';
                            fourth.style.backgroundColor = 'white';
                            
                            
                            }
                        }
                        else if (directionBtn.textContent === 'Vertical') {
                            const coord = this.getAttribute('id'); 
                          
                            const second = document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2))}`); 
                            const third = document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2))}`);
                            const fourth = document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2))}`);
                            
                            if((second !== null && second.style.backgroundColor !== 'white') && (third !== null && third.style.backgroundColor !== 'white') && (fourth !== null && fourth.style.backgroundColor !== 'white')) {
                            this.style.backgroundColor = 'white';
                            second.style.backgroundColor = 'white';
                            third.style.backgroundColor = 'white';
                            fourth.style.backgroundColor = 'white';
                            
                        }
                       
                    }
                }
                     
                }
                cell.onmouseleave = function() {
                    if(!isClicked) {
                        if(directionBtn.textContent === 'Horizontal') {
                            this.style.backgroundColor = 'black';
                            const coord = this.getAttribute('id'); 
                            const second = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 1}`); 
                            const third = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 2}`);
                            const fourth = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 3}`);
                           
                            if(second !== null && second.style.backgroundColor !== 'black') second.style.backgroundColor = 'black';
                            if(third !== null && third.style.backgroundColor !== 'black') third.style.backgroundColor = 'black';
                            if(fourth !== null && fourth.style.backgroundColor !== 'black') fourth.style.backgroundColor = 'black';
                            
                            
                           
                           
                        }
                        else if(directionBtn.textContent === 'Vertical') {
                            this.style.backgroundColor = 'black';
                            const coord = this.getAttribute('id'); 
                            const second = document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2))}`); 
                            const third = document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2))}`);
                            const fourth = document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2))}`);
                            
                            if(second !== null && second.style.backgroundColor !== 'black') second.style.backgroundColor = 'black';
                            if(third !== null && third.style.backgroundColor !== 'black') third.style.backgroundColor = 'black';
                            if(fourth !== null && fourth.style.backgroundColor !== 'black') fourth.style.backgroundColor = 'black';
                           
                            
                            
                        }
                        
                    }
                   
                }
                cell.addEventListener('click', function() {
                    if(directionBtn.textContent === 'Horizontal') {
                        const coord = this.getAttribute('id'); 
                        const second = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 1}`); 
                        const third = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 2}`);
                        const fourth = document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 3}`);
                      
                    if((second !== null) && (third !== null ) && (fourth !== null )) {
                        isClicked = true; 
                      
                        this.style.backgroundColor = 'white';
                        second.style.backgroundColor = 'white';
                        third.style.backgroundColor = 'white';
                        fourth.style.backgroundColor = 'white';
                        
                        this.classList.add('carrier-1'); 
                        second.classList.add('carrier-2');
                        third.classList.add('carrier-3');
                        fourth.classList.add('carrier-4');
                        
                        if(document.getElementById(`${coord[0]}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${coord[0]}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2))}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2))}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2))}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2))}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 2}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 2}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 2}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 2}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 3}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 3}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 3}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 3}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 4}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 4}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 4}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 4}`).classList.add('surrounding');
                        if(document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 4}`)) document.getElementById(`${coord[0]}-${Number(coord.slice(2)) + 5}`).classList.add('surrounding');
            
                        
                        return; 
                        
                    }
    
                    }
                    else if(directionBtn.textContent === 'Vertical') {
                        const coord = this.getAttribute('id'); 
                        const second = document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2))}`); 
                        const third = document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2))}`);
                        const fourth = document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2))}`);
                        
                        if((second !== null) && (third !== null ) && (fourth !== null )) {
                            isClicked = true; 
                            this.style.backgroundColor = 'white';
                            second.style.backgroundColor = 'white';
                            third.style.backgroundColor = 'white';
                            fourth.style.backgroundColor = 'white';
                            
                            this.classList.add('carrier-1'); 
                            second.classList.add('carrier-2');
                            third.classList.add('carrier-3');
                            fourth.classList.add('carrier-4');
                           
                            if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2))}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2))}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0])}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0])}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0])}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0])}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0])}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0])}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) - 1}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) -1}`)) document.getElementById(`${Number(coord[0]) + 1}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) + 2}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) + 3}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0]) + 4}-${Number(coord.slice(2)) + 1}`)) document.getElementById(`${Number(coord[0]) + 4}-${Number(coord.slice(2)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0]) + 4}-${Number(coord.slice(2)) - 1}`)) document.getElementById(`${Number(coord[0]) + 4}-${Number(coord.slice(2)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord[0]) + 4}-${Number(coord.slice(2))}`)) document.getElementById(`${Number(coord[0]) + 5}-${Number(coord.slice(2))}`).classList.add('surrounding');
              
        
                            
                            return; 
                            
                        }
                    }
                })
            })
        }
           
       
        


export {PlayerShips}; 