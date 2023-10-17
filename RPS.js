let options = ['rock', 'paper', 'scissors'];

// create a function to get computer's choice
//// create variable computerChoice
//// choose a random number 0-2 
//// convert number to choice and store it in computerChoice
//// return computerChoice

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * 3)];
    return computerChoice;
}

console.log(getComputerChoice());

// create a function to get player's choice
//// prompt player for input and store it in playerChoice
//// convert playerChoice to lowercase
//// check if playerChoice is included in options
////// if true, return playerChoice
////// if false, call invalidChoice function

function getPlayerChoice() {
    let playerChoice = prompt("Choose your weapon:");
    playerChoice = playerChoice.toLowerCase();
    if (options.includes(playerChoice)) {
        return playerChoice;
    } else {
        invalidChoice();
    }
}

console.log(getPlayerChoice());