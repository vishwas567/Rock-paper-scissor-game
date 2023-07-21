let scores = JSON.parse(localStorage.getItem('scores')) || {Wins : 0,
    Loses : 0,
    Ties : 0} ;
function scoresDispaly(){
    document.querySelector('.scores-display').innerHTML = `wins: ${scores.Wins}, Loses: ${scores.Loses}, Ties: ${scores.Ties}`;
}
scoresDispaly();

let computerMove = '';
function pickComputerMove() {
    const randomNumber = Math.random();
    
    if(randomNumber >0 && randomNumber <= 1/3){
        computerMove = 'rock';
    }
    else if(randomNumber >1/3 && randomNumber <= 2/3){
        computerMove = 'paper';
    }
    else {
        computerMove = 'scissors';
    }
    return computerMove;
}
function compare(yourMove){
    computerMove = pickComputerMove();
    let result ='';
    if(yourMove === 'rock'){
        if (computerMove === 'rock'){
            result = 'Tie';                       
        }
        else if(computerMove === 'paper'){
            result = 'You Lose';                        
        }
        else if(computerMove = 'scissors'){
            result = 'You Win';                       
        }
    }
    else if(yourMove === 'paper'){
        if (computerMove === 'rock'){
            result = 'You Win';
        }
        else if(computerMove === 'paper'){
            result = 'Tie';
        }
        else if(computerMove = 'scissors'){
            result = 'You Lose';
        }
    }
    else if(yourMove === 'scissors'){
        if (computerMove === 'rock'){
            result = 'You Lose';
        }
        else if(computerMove === 'paper'){
            result = 'You Win';
        }
        else if(computerMove = 'scissors'){
            result = 'Tie';
        }
    }
    if(result==='You Win'){
        scores.Wins++;
    }
    else if(result==='You Lose'){
        scores.Loses ++;
    }
    else if(result==='Tie'){
        scores.Ties ++;
    }
    localStorage.setItem('scores', JSON.stringify(scores));
    document.querySelector('.declare-result').innerText = result;
    document.querySelector('.comaprison').innerHTML = `You <img src="images/${yourMove}-emoji.png" >  computer <img src="images/${computerMove}-emoji.png" >`;
    scoresDispaly();
    
}