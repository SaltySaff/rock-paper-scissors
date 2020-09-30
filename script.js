            let winCounter = 0;
            let lossCounter = 0;
            let drawCounter = 0;
            let computerWinCounter = 0;
            let computerLossCounter = 0;
            let computerDrawCounter = 0;


            function playerSelection() {
                let choice = prompt("Please choose: rock, paper, or scissors.");
                choice = choice.toLowerCase();
                if (!(choice == "rock" || choice == "paper" || choice == "scissors" || choice == null)) {
                    playerSelection()

                } return choice;
            }

            function computerSelection() {
                let choice
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

            function playRound(playerSelection, computerSelection) {
                playerSelection = playerSelection();
                computerSelection = computerSelection();
              
                if (playerSelection == "rock" && computerSelection == "rock") {
                    console.log("You choose: rock.");
                    console.log("Computer chose: rock.");
                    console.log("Draw!");
                    drawCounter = drawCounter+1;
                    console.log(`(YOU)      Wins: ${winCounter} Losses: ${lossCounter} Draws: ${drawCounter}`);
                    computerDrawCounter = computerDrawCounter+1;
                    console.log(`(COMPUTER) Wins: ${computerWinCounter} Losses: ${computerLossCounter} Draws: ${computerDrawCounter}`);

                } else if (playerSelection == "rock" && computerSelection == "paper") {
                    console.log("You choose: rock.");
                    console.log("Computer chose: paper.");
                    console.log("You lose!");
                    lossCounter = lossCounter+1;
                    console.log(`(YOU)      Wins: ${winCounter} Losses: ${lossCounter} Draws: ${drawCounter}`);
                    computerWinCounter = computerWinCounter+1;
                    console.log(`(COMPUTER) Wins: ${computerWinCounter} Losses: ${computerLossCounter} Draws: ${computerDrawCounter}`);
                    
                } else if (playerSelection == "rock" && computerSelection == "scissors") {
                    console.log("You choose: rock.");
                    console.log("Computer chose: scissors.");
                    console.log("You win!");
                    winCounter = winCounter+1;
                    console.log(`(YOU)      Wins: ${winCounter} Losses: ${lossCounter} Draws: ${drawCounter}`);
                    computerLossCounter = computerLossCounter+1;
                    console.log(`(COMPUTER) Wins: ${computerWinCounter} Losses: ${computerLossCounter} Draws: ${computerDrawCounter}`);

                } else if (playerSelection == "paper" && computerSelection == "rock") {
                    console.log("You choose: paper.");
                    console.log("Computer chose: rock.");
                    console.log("You win!");
                    winCounter = winCounter+1;
                    console.log(`(YOU)      Wins: ${winCounter} Losses: ${lossCounter} Draws: ${drawCounter}`);
                    computerLossCounter = computerLossCounter+1;
                    console.log(`(COMPUTER) Wins: ${computerWinCounter} Losses: ${computerLossCounter} Draws: ${computerDrawCounter}`);

                } else if (playerSelection == "paper" && computerSelection == "paper") {
                    console.log("You choose: paper.");
                    console.log("Computer chose: paper.");
                    console.log("Draw!");
                    drawCounter = drawCounter+1;
                    console.log(`(YOU)      Wins: ${winCounter} Losses: ${lossCounter} Draws: ${drawCounter}`);
                    computerDrawCounter = computerDrawCounter+1;
                    console.log(`(COMPUTER) Wins: ${computerWinCounter} Losses: ${computerLossCounter} Draws: ${computerDrawCounter}`);

                } else if (playerSelection == "paper" && computerSelection == "scissors") {
                    console.log("You choose: paper.");
                    console.log("Computer chose: scissors.");
                    console.log("You lose!");
                    lossCounter = lossCounter+1;
                    console.log(`(YOU)      Wins: ${winCounter} Losses: ${lossCounter} Draws: ${drawCounter}`);
                    computerWinCounter = computerWinCounter+1;
                    console.log(`(COMPUTER) Wins: ${computerWinCounter} Losses: ${computerLossCounter} Draws: ${computerDrawCounter}`);

                } else if (playerSelection == "scissors" && computerSelection == "rock") {
                    console.log("You choose: scissors.");
                    console.log("Computer chose: rock.");
                    console.log("You lose!");
                    lossCounter = lossCounter+1;
                    console.log(`(YOU)      Wins: ${winCounter} Losses: ${lossCounter} Draws: ${drawCounter}`);
                    computerWinCounter = computerWinCounter+1;
                    console.log(`(COMPUTER) Wins: ${computerWinCounter} Losses: ${computerLossCounter} Draws: ${computerDrawCounter}`);

                } else if (playerSelection == "scissors" && computerSelection == "paper") {
                    console.log("You choose: scissors.");
                    console.log("Computer chose: paper.");
                    console.log("You win!");
                    winCounter = winCounter+1;
                    console.log(`(YOU)      Wins: ${winCounter} Losses: ${lossCounter} Draws: ${drawCounter}`);
                    computerLossCounter = computerLossCounter+1;
                    console.log(`(COMPUTER) Wins: ${computerWinCounter} Losses: ${computerLossCounter} Draws: ${computerDrawCounter}`);

                } else if (playerSelection == "scissors" && computerSelection == "scissors") {
                    console.log("You choose: scissors.");
                    console.log("Computer chose: scissors.");
                    console.log("Draw");
                    drawCounter = drawCounter+1;
                    console.log(`(YOU)      Wins: ${winCounter} Losses: ${lossCounter} Draws: ${drawCounter}`);
                    computerDrawCounter = computerDrawCounter+1;
                    console.log(`(COMPUTER) Wins: ${computerWinCounter} Losses: ${computerLossCounter} Draws: ${computerDrawCounter}`);
                }



        }

            function game() {
                let rounds;
                for (rounds = 1; rounds <= 5; rounds++) {
                    alert(`Round ${rounds}`);
                    playRound(playerSelection, computerSelection)
                }
            }

            function finalScore() {
                let finalScore = (winCounter * 1) + (lossCounter * -1) + (drawCounter * 0);
                let computerFinalScore = (computerWinCounter * 1) + (computerLossCounter * -1) + (computerDrawCounter * 0);
                if (finalScore > computerFinalScore) {
                    console.log("Final result: YOU WIN!");
                } else if (finalScore < computerFinalScore) {
                console.log("Final result: YOU LOSE!");
            } else {
                console.log("Final result: YOU DRAW!");
            }
        }
    
        
        game();
        finalScore();
