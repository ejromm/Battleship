import { Ship  } from "./ship";
function PlayerShips() {
   
    
    
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
   
  
   
        
   placeCarrier();
      
         
    
 
    
  
    

}

 function placeCarrier() {
    let isClicked = false; 
    let placed = false; 
    const directionBtn = document.querySelector('#change-direction-btn'); 
    const playerCells = document.querySelectorAll('.player-col'); 
    const playerHeader = document.querySelector('.player-header-text')
    if(!placed) {
        playerCells.forEach((cell) => {
            cell.onmouseover = function () {
                if(!isClicked) {
                    if(directionBtn.textContent === 'Horizontal') {
                        const coord = this.getAttribute('id'); 
                        
                        const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                        const third = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`);
                        const fourth = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`);
                        const fifth = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 4}`);
                        if((second !== null && second.style.backgroundColor !== 'white') && (third !== null && third.style.backgroundColor !== 'white') && (fourth !== null && fourth.style.backgroundColor !== 'white') && (fifth !== null &&fifth.style.backgroundColor !== 'white')) {
                        
                        this.style.backgroundColor = 'white';
                        second.style.backgroundColor = 'white';
                        third.style.backgroundColor = 'white';
                        fourth.style.backgroundColor = 'white';
                        fifth.style.backgroundColor = 'white';
                        
                        }
                    }
                    else if (directionBtn.textContent === 'Vertical') {
                        const coord = this.getAttribute('id'); 
                        
                        const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                        const third = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                        const fourth = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                        const fifth = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 4}-${Number(coord.slice(coord.indexOf('-')+1))}`);
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
                        const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                        const third = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`);
                        const fourth = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`);
                        const fifth = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 4}`);
                        if(second !== null && second.style.backgroundColor !== 'black') second.style.backgroundColor = 'black';
                        if(third !== null && third.style.backgroundColor !== 'black') third.style.backgroundColor = 'black';
                        if(fourth !== null && fourth.style.backgroundColor !== 'black') fourth.style.backgroundColor = 'black';
                        if(fifth !== null && fifth.style.backgroundColor !== 'black') fifth.style.backgroundColor = 'black';
                        
                    }
                    else if(directionBtn.textContent === 'Vertical') {
                        this.style.backgroundColor = 'black';
                        const coord = this.getAttribute('id'); 
                        const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                        const third = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                        const fourth = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                        const fifth = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 4}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                        if(second !== null && second.style.backgroundColor !== 'black') second.style.backgroundColor = 'black';
                        if(third !== null && third.style.backgroundColor !== 'black') third.style.backgroundColor = 'black';
                        if(fourth !== null && fourth.style.backgroundColor !== 'black') fourth.style.backgroundColor = 'black';
                        if(fifth !== null && fifth.style.backgroundColor !== 'black') fifth.style.backgroundColor = 'black';
                        
                    }
                    
                }
               
            }
            cell.addEventListener('click', function() {
                if(directionBtn.textContent === 'Horizontal') {
                    const coord = this.getAttribute('id'); 
                    const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                    const third = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`);
                    const fourth = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`);
                    const fifth = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 4}`);
                if( (this !== null && !this.classList.contains('searched-carrier')) && (second !== null && !second.classList.contains('searched-carrier')) && (third !== null && !third.classList.contains('searched-carrier') ) && (fourth !== null &&  !fourth.classList.contains('searched-carrier') ) && (fifth !== null) && !fifth.classList.contains('searched-carrier')) {
                    isClicked = true; 
                  
                    this.style.backgroundColor = 'white';
                    second.style.backgroundColor = 'white';
                    third.style.backgroundColor = 'white';
                    fourth.style.backgroundColor = 'white';
                    fifth.style.backgroundColor = 'white';
                    this.classList.add('carrier-1', 'taken', 'horizontal'); 
                    second.classList.add('carrier-2', 'taken', 'horizontal');
                    third.classList.add('carrier-3', 'taken', 'horizontal');
                    fourth.classList.add('carrier-4', 'taken', 'horizontal');
                    fifth.classList.add('carrier-5', 'taken', 'horizontal');
                    if(document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 4}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 4}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 4}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 4}`).classList.add('surrounding');
                    if(document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 5}`)) document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 5}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 5}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) -1}-${Number(coord.slice(coord.indexOf('-')+1)) + 5}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 5}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 5}`).classList.add('surrounding');
                    playerHeader.textContent = `Place Battleship`; 
                    playerCells.forEach((cell) => {
                        cell.classList.add('searched-carrier')
                    })
                    placeBattleship(); 
                    
                }

                }
                else if(directionBtn.textContent === 'Vertical') {
                    const coord = this.getAttribute('id'); 
                    const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                    const third = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                    const fourth = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                    const fifth = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 4}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                    if( (this !== null && !this.classList.contains('searched-carrier')) && (second !== null && !second.classList.contains('searched-carrier')) && (third !== null && !third.classList.contains('searched-carrier') ) && (fourth !== null &&  !fourth.classList.contains('searched-carrier') ) && (fifth !== null) && !fifth.classList.contains('searched-carrier')) {
                        isClicked = true; 
                       
                        this.style.backgroundColor = 'white';
                        second.style.backgroundColor = 'white';
                        third.style.backgroundColor = 'white';
                        fourth.style.backgroundColor = 'white';
                        fifth.style.backgroundColor = 'white';
                        this.classList.add('carrier-1', 'taken','vertical'); 
                        second.classList.add('carrier-2' , 'taken', 'vertical');
                        third.classList.add('carrier-3' , 'taken', 'vertical');
                        fourth.classList.add('carrier-4' , 'taken', 'vertical');
                        fifth.classList.add('carrier-5' , 'taken', 'vertical');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) -1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 4}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 4}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 4}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 4}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 5}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 5}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 5}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 5}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 5}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 5}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        playerCells.forEach((cell) => {
                            cell.classList.add('searched-carrier')
                        })
                        playerHeader.textContent = `Place Battleship`; 
                        placeBattleship();
                       
                        
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
                           
                            const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                            const third = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`);
                            const fourth = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`);
                            
                            if((this !== null && !this.classList.contains('taken') && !this.classList.contains('surrounding')) && (second !== null && !second.classList.contains('taken') && !second.classList.contains('surrounding')) && (third !== null  && !third.classList.contains('taken') && !third.classList.contains('surrounding')) && (fourth !== null && !fourth.classList.contains('taken') && !fourth.classList.contains('surrounding'))) {
                             this.style.backgroundColor = 'white';
                            second.style.backgroundColor = 'white';
                            third.style.backgroundColor = 'white';
                            fourth.style.backgroundColor = 'white';
                            
                            
                            }
                        }
                        else if (directionBtn.textContent === 'Vertical') {
                            const coord = this.getAttribute('id'); 
                          
                            const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                            const third = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                            const fourth = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                            
                            if((!this.classList.contains('taken') && !this.classList.contains('surrounding')) && (second !== null &&  !second.classList.contains('taken') && !second.classList.contains('surrounding')) && (third !== null && !third.classList.contains('taken') && !third.classList.contains('surrounding')) && (fourth !== null && !fourth.classList.contains('taken') && !fourth.classList.contains('surrounding'))) {
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
                            if(!this.classList.contains('surrounding') && !this.classList.contains('taken')) this.style.backgroundColor = 'black';
                            
                            const coord = this.getAttribute('id'); 
                            const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                            const third = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`);
                            const fourth = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`);
                           
                            if(second !== null && !second.classList.contains('surrounding')  && !second.classList.contains('taken')) second.style.backgroundColor = 'black';
                            if(third !== null && !third.classList.contains('surrounding')  && !third.classList.contains('taken')) third.style.backgroundColor = 'black';
                            if(fourth !== null && !fourth.classList.contains('surrounding')  && !fourth.classList.contains('taken')) fourth.style.backgroundColor = 'black';
                            
                            
                           
                           
                        }
                        else if(directionBtn.textContent === 'Vertical') {
                            if(!this.classList.contains('surrounding') && !this.classList.contains('taken')) this.style.backgroundColor = 'black';
                            const coord = this.getAttribute('id'); 
                            const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                            const third = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                            const fourth = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                            
                                                     
                            if(second !== null && !second.classList.contains('surrounding')  && !second.classList.contains('taken')) second.style.backgroundColor = 'black';
                            if(third !== null && !third.classList.contains('surrounding')  && !third.classList.contains('taken')) third.style.backgroundColor = 'black';
                            if(fourth !== null && !fourth.classList.contains('surrounding') && !fourth.classList.contains('taken')) fourth.style.backgroundColor = 'black';
                            
                           
                            
                            
                        }
                        
                    }
                   
                }
                cell.addEventListener('click', function() {
                    if(directionBtn.textContent === 'Horizontal') {
                        const coord = this.getAttribute('id'); 
                        const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                        const third = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`);
                        const fourth = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`);
                      
                    if((this !== null && !this.classList.contains('surrounding') && !this.classList.contains('taken') && !this.classList.contains('searched-battleship')) && (second !== null && !second.classList.contains('surrounding') && !second.classList.contains('taken') && !second.classList.contains('searched-battleship')) && (third !== null && !third.classList.contains('surrounding') && !third.classList.contains('taken') && !third.classList.contains('searched-battleship') ) && (fourth !== null && !fourth.classList.contains('surrounding') && !fourth.classList.contains('taken') && !fourth.classList.contains('searched-battleship'))) {
                        isClicked = true; 
                      
                        this.style.backgroundColor = 'white';
                        second.style.backgroundColor = 'white';
                        third.style.backgroundColor = 'white';
                        fourth.style.backgroundColor = 'white';
                        
                        this.classList.add('battleship-1', 'taken', 'horizontal'); 
                        second.classList.add('battleship-2', 'taken' , 'horizontal');
                        third.classList.add('battleship-3', 'taken' , 'horizontal');
                        fourth.classList.add('battleship-4', 'taken' , 'horizontal');
                        
                        if(document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 4}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 4}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 4}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 4}`).classList.add('surrounding');
                        if(document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 4}`)) document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 5}`).classList.add('surrounding');
                        playerCells.forEach((cell) => {
                            cell.classList.add('searched-battleship'); 
                        })
                        playerHeader.textContent = `Place Cruiser`; 
                        placeCruiser();
                        
                    }
    
                    }
                    else if(directionBtn.textContent === 'Vertical') {
                        const coord = this.getAttribute('id'); 
                        const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                        const third = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                        const fourth = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                        
                        if((this !== null && !this.classList.contains('surrounding') && !this.classList.contains('taken') && !this.classList.contains('searched-battleship')) && (second !== null && !second.classList.contains('surrounding') && !second.classList.contains('taken') && !second.classList.contains('searched-battleship')) && (third !== null && !third.classList.contains('surrounding') && !third.classList.contains('taken') && !third.classList.contains('searched-battleship') ) && (fourth !== null && !fourth.classList.contains('surrounding') && !fourth.classList.contains('taken') && !fourth.classList.contains('searched-battleship'))) {
                            isClicked = true; 
                            this.style.backgroundColor = 'white';
                            second.style.backgroundColor = 'white';
                            third.style.backgroundColor = 'white';
                            fourth.style.backgroundColor = 'white';
                            
                            this.classList.add('battleship-1', 'taken', 'vertical'); 
                            second.classList.add('battleship-2', 'taken', 'vertical');
                            third.classList.add('battleship-3', 'taken', 'vertical');
                            fourth.classList.add('battleship-4', 'taken', 'vertical');
                           
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) -1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 4}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 4}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 4}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 4}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                            if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 4}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 5}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
              
                            playerCells.forEach((cell) => {
                                cell.classList.add('searched-battleship'); 
                            })
                            playerHeader.textContent = `Place Cruiser`; 
                            placeCruiser();
                            
                        }
                    }
                })
            })
        }
  function placeCruiser() {
    let isClicked = false; 
    const directionBtn = document.querySelector('#change-direction-btn'); 
    const playerCells = document.querySelectorAll('.player-col'); 
    const playerHeader = document.querySelector('.player-header-text'); 
   
        playerCells.forEach((cell) => {
            cell.onmouseover = function () {
                if(!isClicked) {
                    if(directionBtn.textContent === 'Horizontal') {
                        const coord = this.getAttribute('id'); 
                       
                        const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                        const third = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`);
                      
                        
                        if((this !== null && !this.classList.contains('taken') && !this.classList.contains('surrounding')) && (second !== null && !second.classList.contains('taken') && !second.classList.contains('surrounding')) && (third !== null  && !third.classList.contains('taken') && !third.classList.contains('surrounding'))) {
                         this.style.backgroundColor = 'white';
                        second.style.backgroundColor = 'white';
                        third.style.backgroundColor = 'white';
                        
                        
                        
                        }
                    }
                    else if (directionBtn.textContent === 'Vertical') {
                        const coord = this.getAttribute('id'); 
                      
                        const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                        const third = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                        
                        if((!this.classList.contains('taken') && !this.classList.contains('surrounding')) && (second !== null &&  !second.classList.contains('taken') && !second.classList.contains('surrounding')) && (third !== null && !third.classList.contains('taken') && !third.classList.contains('surrounding'))) {
                        this.style.backgroundColor = 'white'; 
                        second.style.backgroundColor = 'white';
                        third.style.backgroundColor = 'white';
                        
                    }
                   
                }
            }
                 
            }
            cell.onmouseleave = function() {
                if(!isClicked) {
                    if(directionBtn.textContent === 'Horizontal') {
                        if(!this.classList.contains('surrounding') && !this.classList.contains('taken')) this.style.backgroundColor = 'black';
                        
                        const coord = this.getAttribute('id'); 
                        const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                        const third = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`);
                       
                        if(second !== null && !second.classList.contains('surrounding')  && !second.classList.contains('taken')) second.style.backgroundColor = 'black';
                        if(third !== null && !third.classList.contains('surrounding')  && !third.classList.contains('taken')) third.style.backgroundColor = 'black';
                        
                        
                       
                       
                    }
                    else if(directionBtn.textContent === 'Vertical') {
                        if(!this.classList.contains('surrounding') && !this.classList.contains('taken')) this.style.backgroundColor = 'black';
                        const coord = this.getAttribute('id'); 
                        const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                        const third = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                        
                                                 
                        if(second !== null && !second.classList.contains('surrounding')  && !second.classList.contains('taken')) second.style.backgroundColor = 'black';
                        if(third !== null && !third.classList.contains('surrounding')  && !third.classList.contains('taken')) third.style.backgroundColor = 'black';
                        
                       
                        
                        
                    }
                    
                }
               
            }
            cell.addEventListener('click', function() {
                if(directionBtn.textContent === 'Horizontal') {
                    const coord = this.getAttribute('id'); 
                    const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                    const third = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`);
                  
                if((this !== null && !this.classList.contains('surrounding') && !this.classList.contains('taken') && !this.classList.contains('searched-cruiser')) && (second !== null && !second.classList.contains('surrounding') && !second.classList.contains('taken') && !second.classList.contains('searched-cruiser')) && (third !== null && !third.classList.contains('surrounding') && !third.classList.contains('taken') && !third.classList.contains('searched-cruiser'))) {
                    isClicked = true; 
                  
                    this.style.backgroundColor = 'white';
                    second.style.backgroundColor = 'white';
                    third.style.backgroundColor = 'white';
                   
                    
                    this.classList.add('cruiser-1', 'taken', 'horizontal'); 
                    second.classList.add('cruiser-2', 'taken' , 'horizontal');
                    third.classList.add('cruiser-3', 'taken' , 'horizontal');
                   
                    if(document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`).classList.add('surrounding');
                    if(document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`)) document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`).classList.add('surrounding');
                    playerCells.forEach((cell) => {
                        cell.classList.add('searched-cruiser'); 
                    })
                    playerHeader.textContent = `Place Submarine`; 
                    placeSubmarine();
                  
                    
                }

                }
                else if(directionBtn.textContent === 'Vertical') {
                    const coord = this.getAttribute('id'); 
                    const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                    const third = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                    
                    if((this !== null && !this.classList.contains('surrounding') && !this.classList.contains('taken') && !this.classList.contains('searched-cruiser')) && (second !== null && !second.classList.contains('surrounding') && !second.classList.contains('taken') && !second.classList.contains('searched-cruiser')) && (third !== null && !third.classList.contains('surrounding') && !third.classList.contains('taken') && !third.classList.contains('searched-cruiser'))) {
                        isClicked = true; 
                        this.style.backgroundColor = 'white';
                        second.style.backgroundColor = 'white';
                        third.style.backgroundColor = 'white';
                        
                        this.classList.add('cruiser-1', 'taken', 'vertical'); 
                        second.classList.add('cruiser-2', 'taken', 'vertical');
                        third.classList.add('cruiser-3', 'taken', 'vertical');
                       
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) -1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
          
                        playerCells.forEach((cell) => {
                            cell.classList.add('searched-cruiser'); 
                        })
                        playerHeader.textContent = `Place Submarine`; 
                        placeSubmarine();
                        
                    }
                }
            })
        })





  }         
  function placeSubmarine() {
    
    let isClicked = false; 
    const directionBtn = document.querySelector('#change-direction-btn'); 
    const playerCells = document.querySelectorAll('.player-col'); 
    const playerHeader = document.querySelector('.player-header-text'); 
   
        playerCells.forEach((cell) => {
            cell.onmouseover = function () {
                if(!isClicked) {
                    if(directionBtn.textContent === 'Horizontal') {
                        const coord = this.getAttribute('id'); 
                       
                        const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                        const third = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`);
                      
                        
                        if((this !== null && !this.classList.contains('taken') && !this.classList.contains('surrounding')) && (second !== null && !second.classList.contains('taken') && !second.classList.contains('surrounding')) && (third !== null  && !third.classList.contains('taken') && !third.classList.contains('surrounding'))) {
                         this.style.backgroundColor = 'white';
                        second.style.backgroundColor = 'white';
                        third.style.backgroundColor = 'white';
                        
                        
                        
                        }
                    }
                    else if (directionBtn.textContent === 'Vertical') {
                        const coord = this.getAttribute('id'); 
                      
                        const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                        const third = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                        
                        if((!this.classList.contains('taken') && !this.classList.contains('surrounding')) && (second !== null &&  !second.classList.contains('taken') && !second.classList.contains('surrounding')) && (third !== null && !third.classList.contains('taken') && !third.classList.contains('surrounding'))) {
                        this.style.backgroundColor = 'white'; 
                        second.style.backgroundColor = 'white';
                        third.style.backgroundColor = 'white';
                        
                    }
                   
                }
            }
                 
            }
            cell.onmouseleave = function() {
                if(!isClicked) {
                    if(directionBtn.textContent === 'Horizontal') {
                        if(!this.classList.contains('surrounding') && !this.classList.contains('taken')) this.style.backgroundColor = 'black';
                        
                        const coord = this.getAttribute('id'); 
                        const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                        const third = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`);
                       
                        if(second !== null && !second.classList.contains('surrounding')  && !second.classList.contains('taken')) second.style.backgroundColor = 'black';
                        if(third !== null && !third.classList.contains('surrounding')  && !third.classList.contains('taken')) third.style.backgroundColor = 'black';
                        
                        
                       
                       
                    }
                    else if(directionBtn.textContent === 'Vertical') {
                        if(!this.classList.contains('surrounding') && !this.classList.contains('taken')) this.style.backgroundColor = 'black';
                        const coord = this.getAttribute('id'); 
                        const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                        const third = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                        
                                                 
                        if(second !== null && !second.classList.contains('surrounding')  && !second.classList.contains('taken')) second.style.backgroundColor = 'black';
                        if(third !== null && !third.classList.contains('surrounding')  && !third.classList.contains('taken')) third.style.backgroundColor = 'black';
                        
                       
                        
                        
                    }
                    
                }
               
            }
            cell.addEventListener('click', function() {
                if(directionBtn.textContent === 'Horizontal') {
                    const coord = this.getAttribute('id'); 
                    const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                    const third = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`);
                  
                if((this !== null && !this.classList.contains('surrounding') && !this.classList.contains('taken') && !this.classList.contains('searched-submarine')) && (second !== null && !second.classList.contains('surrounding') && !second.classList.contains('taken') && !second.classList.contains('searched-submarine')) && (third !== null && !third.classList.contains('surrounding') && !third.classList.contains('taken') && !third.classList.contains('searched-submarine'))) {
                    isClicked = true; 
                  
                    this.style.backgroundColor = 'white';
                    second.style.backgroundColor = 'white';
                    third.style.backgroundColor = 'white';
                   
                    
                    this.classList.add('submarine-1', 'taken', 'horizontal'); 
                    second.classList.add('submarine-2', 'taken' , 'horizontal');
                    third.classList.add('submarine-3', 'taken' , 'horizontal');
                   
                    if(document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`).classList.add('surrounding');
                    if(document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`)) document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`).classList.add('surrounding');
                    playerCells.forEach((cell) => {
                        cell.classList.add('searched-submarine'); 
                    })
                    playerHeader.textContent = `Place Destoyer`; 
                    placeDestroyer();
                  
                    
                }

                }
                else if(directionBtn.textContent === 'Vertical') {
                    const coord = this.getAttribute('id'); 
                    const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                    const third = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1))}`);
                    
                    if((this !== null && !this.classList.contains('surrounding') && !this.classList.contains('taken') && !this.classList.contains('searched-submarine')) && (second !== null && !second.classList.contains('surrounding') && !second.classList.contains('taken') && !second.classList.contains('searched-submarine')) && (third !== null && !third.classList.contains('surrounding') && !third.classList.contains('taken') && !third.classList.contains('searched-submarine'))) {
                        isClicked = true; 
                        this.style.backgroundColor = 'white';
                        second.style.backgroundColor = 'white';
                        third.style.backgroundColor = 'white';
                        
                        this.classList.add('submarine-1', 'taken', 'vertical'); 
                        second.classList.add('submarine-2', 'taken', 'vertical');
                        third.classList.add('submarine-3', 'taken', 'vertical');
                       
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) -1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
          
                        playerCells.forEach((cell) => {
                            cell.classList.add('searched-submarine'); 
                        })
                        playerHeader.textContent = `Place Destroyer`; 
                        placeDestroyer();
                        
                    }
                }
            })
        })


  }

  function placeDestroyer() {
    let isClicked = false; 
    const directionBtn = document.querySelector('#change-direction-btn'); 
    const playerCells = document.querySelectorAll('.player-col'); 
    const playerHeader = document.querySelector('.player-header-text'); 
   
        playerCells.forEach((cell) => {
            cell.onmouseover = function () {
                if(!isClicked) {
                    if(directionBtn.textContent === 'Horizontal') {
                        const coord = this.getAttribute('id'); 
                       
                        const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                      
                        
                        if((this !== null && !this.classList.contains('taken') && !this.classList.contains('surrounding')) && (second !== null && !second.classList.contains('taken') && !second.classList.contains('surrounding'))) {
                         this.style.backgroundColor = 'white';
                        second.style.backgroundColor = 'white';
                        
                        
                        
                        }
                    }
                    else if (directionBtn.textContent === 'Vertical') {
                        const coord = this.getAttribute('id'); 
                      
                        const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                        
                        if((!this.classList.contains('taken') && !this.classList.contains('surrounding')) && (second !== null &&  !second.classList.contains('taken') && !second.classList.contains('surrounding'))) {
                        this.style.backgroundColor = 'white'; 
                        second.style.backgroundColor = 'white';
                        
                    }
                   
                }
            }
                 
            }
            cell.onmouseleave = function() {
                if(!isClicked) {
                    if(directionBtn.textContent === 'Horizontal') {
                        if(!this.classList.contains('surrounding') && !this.classList.contains('taken')) this.style.backgroundColor = 'black';
                        
                        const coord = this.getAttribute('id'); 
                        const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                       
                        if(second !== null && !second.classList.contains('surrounding')  && !second.classList.contains('taken')) second.style.backgroundColor = 'black';
                        
                        
                       
                       
                    }
                    else if(directionBtn.textContent === 'Vertical') {
                        if(!this.classList.contains('surrounding') && !this.classList.contains('taken')) this.style.backgroundColor = 'black';
                        const coord = this.getAttribute('id'); 
                        const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                        
                                                 
                        if(second !== null && !second.classList.contains('surrounding')  && !second.classList.contains('taken')) second.style.backgroundColor = 'black';
                        
                       
                        
                        
                    }
                    
                }
               
            }
            cell.addEventListener('click', function() {
                if(directionBtn.textContent === 'Horizontal') {
                    const coord = this.getAttribute('id'); 
                    const second = document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`); 
                  
                    if((this !== null && !this.classList.contains('surrounding') && !this.classList.contains('taken') && !this.classList.contains('searched-destroyer')) && (second !== null && !second.classList.contains('surrounding') && !second.classList.contains('taken') && !second.classList.contains('searched-destroyer'))) {
                    isClicked = true; 
                  
                    this.style.backgroundColor = 'white';
                    second.style.backgroundColor = 'white';
                   
                    
                    this.classList.add('cruiser-1', 'taken', 'horizontal'); 
                    second.classList.add('cruiser-2', 'taken' , 'horizontal');
                   
                    if(document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`).classList.add('surrounding');
                    if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`).classList.add('surrounding');
                    if(document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 2}`)) document.getElementById(`${coord.slice(0, coord.indexOf('-'))}-${Number(coord.slice(coord.indexOf('-')+1)) + 3}`).classList.add('surrounding');
                    playerCells.forEach((cell) => {
                        cell.classList.add('searched-destroyer'); 
                    })
                    playerHeader.textContent = `Player`; 
                    
                  
                    
                    }

                }
                else if(directionBtn.textContent === 'Vertical') {
                    const coord = this.getAttribute('id'); 
                    const second = document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1))}`); 
                    
                    if((this !== null && !this.classList.contains('surrounding') && !this.classList.contains('taken') && !this.classList.contains('searched-destroyer')) && (second !== null && !second.classList.contains('surrounding') && !second.classList.contains('taken') && !second.classList.contains('searched-destroyer'))) {
                        isClicked = true; 
                        this.style.backgroundColor = 'white';
                        second.style.backgroundColor = 'white';
                        
                        this.classList.add('destroyer-1', 'taken', 'vertical'); 
                        second.classList.add('destroyer-2', 'taken', 'vertical');
                       
                       
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-')))}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) - 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) -1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 1}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) + 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1)) - 1}`).classList.add('surrounding');
                        if(document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 2}-${Number(coord.slice(coord.indexOf('-')+1))}`)) document.getElementById(`${Number(coord.slice(0, coord.indexOf('-'))) + 3}-${Number(coord.slice(coord.indexOf('-')+1))}`).classList.add('surrounding');
          
                        playerCells.forEach((cell) => {
                            cell.classList.add('searched-destroyer'); 
                        })
                        playerHeader.textContent = `Player`; 
                       
                        
                    }
                }
            })
        })
    }
  
      
        


export {PlayerShips}; 