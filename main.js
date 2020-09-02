let roundNumber=0;
let playerScore=0;
let aiScore=0;

function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
}

let options = ["rock","paper","scissor"];

function playerPlay(e) {
    if(roundNumber<10){
        game();
        playerSelection = e.className;
        computerSelection = computerPlay();
        console.log(playerSelection);
        console.log(computerSelection);

        if(playerSelection===computerSelection){
            console.log('It\'s a Draw!');
            console.log(playerScore);
            console.log(aiScore);
        }
        else if( (playerSelection==="scissor" && computerSelection==="rock") || (playerSelection==="rock" && computerSelection==="paper") || (playerSelection==="paper" && computerSelection==="scissor")){
            console.log('Player Loses This Time');
            aiScore++;
            console.log((playerScore),(aiScore));
        }
        else if( (playerSelection==="scissor" && computerSelection==="paper") || (playerSelection==="rock" && computerSelection==="scissor") || (playerSelection==="paper" && computerSelection==="rock")){
            console.log('Player Wins This Time');
            playerScore++;
            console.log((playerScore),(aiScore));
        }
        else {
            console.log(error);
        }
        scoreUpdate();
    }
    else{
    window.alert('Game is Over!');
        if(playerScore > aiScore) {
            document.getElementById('announcement').textContent='Player has won!';
        }
        else if(playerScore < aiScore) {
            document.getElementById('announcement').textContent='Computer has won!';
        }
        else {
            document.getElementById('announcement').textContent='It\'s a Draw!';
        }  
    }
}

function scoreUpdate(){
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('aiScore').textContent = aiScore;
}

function game() {
    roundNumber++;
    document.getElementById('roundNumber').textContent = roundNumber;
    console.log(roundNumber);
    

    

    // if( roundNumber <= 5) {
    //     playRound();
    // }
    // else {
    //     window.alert('Game is Over!');
    //     if( playerScore > computerScore) {
    //         window.alert('Player has won!');
    //     }
    //     else if( playerScore < computerScore) {
    //         window.alert('Computer has won!');
    //     }
    //     else {
    //         window.alert('It is a draw!');
    //     }
    // }
}

let play = document.querySelector('.playbutton');
play.addEventListener('click',Restart);

function Restart() {
    playerScore=0;
    aiScore=0;
    roundNumber=0;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('aiScore').textContent = aiScore;
    document.getElementById('roundNumber').textContent = roundNumber;
    document.getElementById('announcement').textContent='Results!';
}






