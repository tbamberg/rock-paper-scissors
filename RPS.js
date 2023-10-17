// create options array with ‘Rock’, ‘Paper’, ‘Scissors’
// create a function to get computer's choice
//// create variable computerChoice and init with a string
//// choose a random number 0-2 
//// convert number to choice and store it in computerChoice
//// return computerChoice

let options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let computerChoice = "";
    computerChoice = options[Math.floor(Math.random() * 3)];
    return computerChoice;
}

console.log(getComputerChoice());
