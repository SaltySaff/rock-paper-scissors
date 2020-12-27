let roundCounter = 0;
let winCounter = 0;
let lossCounter = 0;
let drawCounter = 0;
let computerWinCounter = 0;
let computerLossCounter = 0;
let computerDrawCounter = 0;
let playerChoice = ""; 



const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');

const container = document.querySelector('.container');
const content = document.querySelector('.content');
const buttons = document.querySelector('.buttons');
const playerContainer = document.querySelector('#playerContainer');
const computerContainer = document.querySelector('#computerContainer');
const resultContainer = document.querySelector('#resultContainer');
const finalResultContainer = document.querySelector('#finalResultContainer');
const winContainer = document.querySelector('#winContainer');
const loseContainer = document.querySelector('#loseContainer');
const drawContainer = document.querySelector('#drawContainer');
const title = document.querySelector('#title');
const roundInfo = document.querySelector('#roundInfo');
const winCounterTxt = document.querySelector('#winCounterTxt');
const drawCounterTxt = document.querySelector('#drawCounterTxt');
const loseCounterTxt = document.querySelector('#loseCounterTxt');

const playerTxt = document.createElement('p');
const computerTxt = document.createElement('p');
const resultTxt = document.createElement('p');
const resetBtn = document.createElement('button');
resetBtn.textContent = "Play Again";

playerTxt.classList.add('playerTxt');
computerTxt.classList.add('computerTxt');
resultTxt.classList.add('resultTxt');
resetBtn.classList.add('resetBtn')

playerContainer.appendChild(playerTxt);
computerContainer.appendChild(computerTxt);
resultContainer.appendChild(resultTxt);
winContainer.appendChild(winCounterTxt);
loseContainer.appendChild(loseCounterTxt);
drawContainer.appendChild(drawCounterTxt);














function game() {
    let rounds;
    for (rounds = 1; rounds <= 5; rounds++) {
        console.log(`Round ${rounds}`);
        playRound();
        finalScore();
    }
}

buttonRock.addEventListener("click", function(){
    playerChoice = "rock";
    playRound();
});

buttonPaper.addEventListener("click", function(){
    playerChoice = "paper";
    playRound();
});

buttonScissors.addEventListener("click", function(){
    playerChoice = "scissors";
    playRound(); 
});

resetBtn.addEventListener("click", function(){
    resetGame(); 
});





        


function getPlayerChoice() {
    return playerChoice;

}
  



function getComputerChoice() {
    let choice;
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    switch(randomNumber) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;

}


function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    if (playerSelection == "rock" && computerSelection == "rock") {
        drawCounter = drawCounter+1;
        playerTxt.textContent = 'Rock';
        computerTxt.textContent = 'Rock';
        roundInfo.textContent = "It's a draw."
        winCounterTxt.textContent = winCounter;
        loseCounterTxt.textContent = lossCounter;
        drawCounterTxt.textContent = drawCounter;
        roundCounter++;
        title.textContent = "Rock, Paper, Scissors - Round " + roundCounter + "/5";
        computerDrawCounter = computerDrawCounter+1;
    
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            lossCounter = lossCounter+1;
            playerTxt.textContent = 'Rock';
            computerTxt.textContent = 'Paper';
            roundInfo.textContent = "You lose..."
            winCounterTxt.textContent = winCounter;
            loseCounterTxt.textContent = lossCounter;
            drawCounterTxt.textContent = drawCounter;
            roundCounter++;
            title.textContent = "Rock, Paper, Scissors - Round " + roundCounter + "/5";
            computerWinCounter = computerWinCounter+1;
            
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            winCounter = winCounter+1;
            playerTxt.textContent = 'Rock';
            computerTxt.textContent = 'Scissors';
            roundInfo.textContent = "You win!"
            winCounterTxt.textContent = winCounter;
            loseCounterTxt.textContent = lossCounter;
            drawCounterTxt.textContent = drawCounter;
            roundCounter++;
            title.textContent = "Rock, Paper, Scissors - Round " + roundCounter + "/5";
            computerLossCounter = computerLossCounter+1;

        } else if (playerSelection == "paper" && computerSelection == "rock") {
            winCounter = winCounter+1;
            playerTxt.textContent = 'Paper';
            computerTxt.textContent = 'Rock';
            roundInfo.textContent = "You win!"
            winCounterTxt.textContent = winCounter;
            loseCounterTxt.textContent = lossCounter;
            drawCounterTxt.textContent = drawCounter;
            roundCounter++;
            title.textContent = "Rock, Paper, Scissors - Round " + roundCounter + "/5";
            computerLossCounter = computerLossCounter+1;
            
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            drawCounter = drawCounter+1;
            playerTxt.textContent = 'Paper';
            computerTxt.textContent = 'Paper';
            roundInfo.textContent = "It's a draw."
            winCounterTxt.textContent = winCounter;
            loseCounterTxt.textContent = lossCounter;
            drawCounterTxt.textContent = drawCounter;
            roundCounter++;
            title.textContent = "Rock, Paper, Scissors - Round " + roundCounter + "/5";
            computerDrawCounter = computerDrawCounter+1;
            
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            lossCounter = lossCounter+1;
            playerTxt.textContent = 'Paper';
            computerTxt.textContent = 'Scissors';
            roundInfo.textContent = "You lose..."
            winCounterTxt.textContent = winCounter;
            loseCounterTxt.textContent = lossCounter;
            drawCounterTxt.textContent = drawCounter;
            roundCounter++;
            title.textContent = "Rock, Paper, Scissors - Round " + roundCounter + "/5";
            computerWinCounter = computerWinCounter+1;
            
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            lossCounter = lossCounter+1;
            playerTxt.textContent = 'Scissors';
            computerTxt.textContent = 'Rock';
            roundInfo.textContent = "You lose..."
            winCounterTxt.textContent = winCounter;
            loseCounterTxt.textContent = lossCounter;
            drawCounterTxt.textContent = drawCounter;
            roundCounter++; 
            title.textContent = "Rock, Paper, Scissors - Round " + roundCounter + "/5";
            computerWinCounter = computerWinCounter+1;

        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            winCounter = winCounter+1;
            playerTxt.textContent = 'Scissors';
            computerTxt.textContent = 'Paper';
            roundInfo.textContent = "You win!"
            winCounterTxt.textContent = winCounter;
            loseCounterTxt.textContent = lossCounter;
            drawCounterTxt.textContent = drawCounter;
            roundCounter++;
            title.textContent = "Rock, Paper, Scissors - Round " + roundCounter + "/5";
            computerLossCounter = computerLossCounter+1;
            

        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            drawCounter = drawCounter+1;
            playerTxt.textContent = 'Scissors';
            computerTxt.textContent = 'Scissors';
            roundInfo.textContent = "It's a draw."
            winCounterTxt.textContent = winCounter;
            loseCounterTxt.textContent = lossCounter;
            drawCounterTxt.textContent = drawCounter;
            roundCounter++;
            title.textContent = "Rock, Paper, Scissors - Round " + roundCounter + "/5";
            computerDrawCounter = computerDrawCounter+1;
        }

        if (roundCounter == 5) {
            finalScore();
            buttons.removeChild(buttonRock);
            buttons.removeChild(buttonPaper);
            buttons.removeChild(buttonScissors);
            buttons.appendChild(resetBtn);


        }





}

    

    function finalScore() {
        let finalScore = (winCounter * 1) + (lossCounter * -1) + (drawCounter * 0);
        let computerFinalScore = (computerWinCounter * 1) + (computerLossCounter * -1) + (computerDrawCounter * 0);
        if (finalScore > computerFinalScore) {
            roundInfo.textContent = "After five rounds: YOU WIN!";
        } else if (finalScore < computerFinalScore) {
            roundInfo.textContent = "After five rounds: YOU LOSE...";
        } else {
            roundInfo.textContent = "After five rounds: YOU DRAW.";;
        }
    }



    function resetGame() {
        buttons.removeChild(resetBtn);
        buttons.appendChild(buttonRock);
        buttons.appendChild(buttonPaper);
        buttons.appendChild(buttonScissors);
        winCounter = 0;
        lossCounter = 0;
        drawCounter = 0;
        roundCounter = 0;
        winCounterTxt.textContent = 0;
        loseCounterTxt.textContent = 0;
        drawCounterTxt.textContent = 0;
        title.textContent = "Rock, Paper, Scissors - Round 0/5";
        roundInfo.textContent = "Press a button to start!"
        playerTxt.textContent = "";
        computerTxt.textContent = "";
    }









