let options = ['rock', 'paper', 'scissors'];
let playerChoice = "";
let computerChoice = "";

// create a function to get computer's choice
//// create variable computerChoice
//// choose a random number 0-2 
//// convert number to choice and store it in computerChoice
//// return computerChoice

function getComputerChoice() {
    computerChoice = options[Math.floor(Math.random() * 3)];
    console.log("Computer: " + computerChoice);
    return computerChoice;
}

// create a function to get player's choice
//// prompt player for input and store it in playerChoice
//// convert playerChoice to lowercase
//// check if playerChoice is included in options
////// if not, alert and prompt again
//// return playerChoice

function getPlayerChoice() {
    playerChoice = prompt("Choose your weapon:");
    playerChoice = playerChoice.toLowerCase();
    if (!options.includes(playerChoice)) {
        alert('Invalid choice. Try "Rock", "Paper", or "Scissors"');
        getPlayerChoice();
    }
    console.log("Player: " + playerChoice);
    return playerChoice;
}

// create a function to play a round of RPS
//// take two parameters, computerChoice and playerChoice
//// compare choices to determine winner
////// if computerChoice is rock
//////// if playerChoice is rock, "Tie!"
//////// if playerChoice is paper, "You win! Paper beats Rock"
//////// if playerChoice is scissors, "You lose! Rock beats Scissors"
////// if computerChoice is paper
//////// if playerChoice is rock, "You lose! Paper beats Rock"
//////// if playerChoice is paper, "Tie!"
//////// if playerChoice is scissors, "You win! Scissors beats Paper"
////// if computerChoice is scissors
//////// if playerChoice is rock, "You win! Rock beats Scissors"
//////// if playerChoice is paper, "You lose! Scissors beats Paper"
//////// if playerChoice is scissors, "Tie!"
//// return a string that declares the winner

function playRound() {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    if (computerChoice == "rock") {
        if (playerChoice == "rock") {
            return "Tie!";
        } else if (playerChoice = "paper") {
            return "You win! Paper beats Rock";
        } else { //playerChoice == scissors
            return "You lose! Rock beats Scissors";
        }
    } else if (computerChoice == "paper") {
        if (playerChoice == "rock") {
            return "You lose! Paper beats Rock";
        } else if (playerChoice = "paper") {
            return "Tie!";
        } else { //playerChoice == scissors
            return "You win! Scissors beats Paper";
        }
    } else { //computerChoice == scissors
        if (playerChoice == "rock") {
            return "You win! Rock beats Scissors";
        } else if (playerChoice = "paper") {
            return "You lose! Scissors beats Paper";
        } else { //playerChoice == scissors
            return "Tie!";
        }
    }
}

console.log(playRound());