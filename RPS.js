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
    return computerChoice;
}

console.log(getComputerChoice());

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
    return playerChoice;
}

console.log(getPlayerChoice());