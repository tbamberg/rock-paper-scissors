const options = ['rock', 'paper', 'scissors'];
let playerChoice = "";
let computerChoice = "";
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;
let result = "";

function getComputerChoice() {
    computerChoice = options[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function setPlayerSelection(choice) {
    let image = document.querySelector(".player .selection");
    image.src = "images/" + choice + "-left.png";
    image.alt = choice;
}

function setComputerSelection(choice) {
    let image = document.querySelector(".computer .selection");
    image.src = "images/" + choice + "-right.png";
    image.alt = choice;
}

function playRound() {  
    roundCount++;
    setPlayerSelection(playerChoice);
    setComputerSelection(getComputerChoice());

    if (roundCount >= 5) {
        
    }

    if (computerChoice == "rock") {
        if (playerChoice == "rock") {
            return "Tie";
        } else if (playerChoice = "paper") {
            return "Win";
        } else if (playerChoice == "scissors") {
            return "Lose";
        }
    } else if (computerChoice == "paper") {
        if (playerChoice == "rock") {
            return "Lose";
        } else if (playerChoice = "paper") {
            return "Tie";
        } else if (playerChoice == "scissors") {
            return "Win";
        }
    } else if (computerChoice == "scissors") { 
        if (playerChoice == "rock") {
            return "Win";
        } else if (playerChoice = "paper") {
            return "Lose";
        } else if (playerChoice == "scissors") {
            return "Tie";
        }
    }
}

function result() {


    for (let i = 0; i < 5; i++) {
        result = playRound();
        if (result == "Win") {
            playerScore++;
        } else if (result == "Lose") {
            computerScore++;
        }
        console.log(result);
    }

    if (playerScore > computerScore) {
        return ("You Win! " + playerScore + " to " + computerScore);
    } else if (playerScore < computerScore) {
        return ("You Lose! " + playerScore + " to " + computerScore);
    } else {
        return ("You Tie! " + playerScore + " to " + computerScore);
    }
}

/* pseudocode
when clicking rock, set playerChoice = rock
    change image src for ".player .selection" to rock
    then start a round
    roundCount++
when clicking paper, set playerChoice = paper
    change image src for ".player .selection" to paper
    then start a round
    roundCount++
when clicking scissors, set playerChoice = scissors
    change image src for ".player .selection" to scissors
    then start a round
    roundCount++

when roundCount == 5, getWinner
*/

let buttons = document.querySelectorAll(".player button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.getAttribute("class");
        playRound();
    });
});

console.log(buttons);