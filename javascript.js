//Create function that randomly gives back the computers choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//initialize variables for player score and computer score.
let playerScore = 0;
let computerScore = 0;
//If else statements comparing computer choice to user choice (rock beats scissors, etc.). Include in function
//called playRound.

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Wow! It\'s a tie! Let\'s try again";
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            return 'Oh no! Paper beats Rock. The computer wins. Try again!';
        }
        else if (computerSelection === 'scissors') {
            playerScore++;
            return 'Yes! You win. Rock beats Scissors.';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return 'Yes! Paper beats Rock. You win!';
        }
        else if (computerSelection === 'scissors') {
            computerScore++;
            return 'Oh no! Scissors cuts paper. You lose.';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return 'Rock beats Scissors. You lose.';
        }
        else if (computerSelection === 'paper') {
            playerScore++;
            return 'Scissors slices Paper. You are a winner!';
        }
    }
}

//add event listeners for each button that calls playRound w/ correct player selection
const buttons = document.querySelectorAll('button');
const computerSelection = getComputerChoice();
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.className, computerSelection));
    });
});



//game() function -> calls playRound and declares a winner. For loop that loops the game 5 times
function game() {
    //Prompt user for their choice
    // let playerResponse = prompt('What will you choose?', 'Rock? Paper? Scissors?');
    let playerSelection = playerResponse;
    //Get random computer selection
    const computerSelection = getComputerChoice();
    //Play 5 rounds returning who won after each round
    console.log(playRound(playerSelection, computerSelection));

    //Compare computer score to player score after 5 rounds to determine a final winner.
    if (playerScore > computerScore) {
        console.log('You win! Congrats.');
    }
    else if (computerScore > playerScore) {
        console.log('You lose. Try again');
    }
    else {
        console.log("It's a tie!");
    }
}

// game();
