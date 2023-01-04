//Create function that randomly gives back the computers choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results')
const declareWinner = document.createElement('div');
const scoreboard = document.createElement('div');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        playRound(button.className, computerSelection);  
    });
});

//initialize variables for player score and computer score.
let playerScore = 0;
let computerScore = 0;
//If else statements comparing computer choice to user choice (rock beats scissors, etc.). Include in function
//called playRound.

function reset (winner) {
    let winningMessage = ''
    if (winner === 'computer'){
        winningMessage = 'Oh no! You let the computer win. Would you like to play again?';
    }
    else {
        winningMessage = 'Wohoo! You won. Would you like to play again?';
    }
    if(window.confirm(`${winningMessage}`))
    {
        results.textContent = 'Click to start New Game';
        results.removeChild(scoreboard);
        results.removeChild(declareWinner)
    }
    else {
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
    playerScore = 0;
    computerScore = 0;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        results.textContent = "Wow! It\'s a tie! Let\'s try again";
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            results.textContent = 'Oh no! Paper beats Rock. The computer wins. Try again!';
        }
        else if (computerSelection === 'scissors') {
            playerScore++;
            results.textContent = 'Yes! You win. Rock beats Scissors.';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            results.textContent = 'Yes! Paper beats Rock. You win!';
        }
        else if (computerSelection === 'scissors') {
            computerScore++;
            results.textContent = 'Oh no! Scissors cuts paper. You lose.';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            results.textContent = 'Rock beats Scissors. You lose.';
        }
        else if (computerSelection === 'paper') {
            playerScore++;
            results.textContent = 'Scissors slices Paper. You are a winner!';
        }
    }
    scoreboard.textContent = `Computer Score: ${computerScore} Player Score: ${playerScore}`;
    results.appendChild(scoreboard);
    if (playerScore === 5) {
        reset('player');
    } else if (computerScore === 5) {
        reset('computer');
    }

}

