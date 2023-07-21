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

// onclick event listeners
document.querySelector('.js-rockbutton').addEventListener('click' ,() => {compare('rock')} );
document.querySelector('.js-paperbutton').addEventListener('click' ,() => {compare('paper')} );
document.querySelector('.js-scissorsbutton').addEventListener('click' ,() => {compare('scissors')} );

document.querySelector('.js-resetbutton').addEventListener('click', () =>{
    scores.Wins = 0;
    scores.Loses = 0;
    scores.Ties = 0;
    localStorage.removeItem('scores');
    scoresDispaly();
    document.querySelector('.declare-result').innerText = `Let's Start Again`;
    document.querySelector('.comaprison').innerHTML = 'Scores were Reset';
    alert(`Scores were reset`);
});

//onkeydown event listeners
document.body.addEventListener('keydown' ,(event) => {
    if(event.key === 'r'){
        compare('rock');
    }
    else if(event.key === 'p'){
        compare('paper');
    }
    else if(event.key === 's'){
        compare('scissors');
    }
});

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
let isAutoplaying = false;
let timer;

document.querySelector('.js-autoplay-button').addEventListener('click', () => {
    autoplay();

});
function autoplay(){
    if(!isAutoplaying){
        timer = setInterval(() => {
                    const yourMove = pickComputerMove();
                    compare(yourMove);
                }, 1000);
                isAutoplaying = true;
                document.querySelector('.js-autoplay-button').innerHTML = 'Stop Autoplay';
    }
    else{
        clearInterval(timer);
        isAutoplaying = false;
        document.querySelector('.comaprison').innerHTML = 'Autopaly stopped';
        document.querySelector('.js-autoplay-button').innerHTML = 'Auto Play';
    }
    
}
