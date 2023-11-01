const options = ['rock', 'paper', 'scissors'];
let playerChoice = "";
let computerChoice = "";
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;
let result = document.querySelector(".result h2");
let score = document.querySelector(".score h2");

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
    console.log(playerChoice + " vs " + computerChoice);

    if (computerChoice == "rock") {
        if (playerChoice == "rock") {
            setScore("Tie");
        } else if (playerChoice == "paper") {
            setScore("Win");
        } else if (playerChoice == "scissors") {
            setScore("Lose");
        }
    } else if (computerChoice == "paper") {
        if (playerChoice == "rock") {
            setScore("Lose");
        } else if (playerChoice == "paper") {
            setScore("Tie");
        } else if (playerChoice == "scissors") {
            setScore("Win");
        }
    } else if (computerChoice == "scissors") { 
        if (playerChoice == "rock") {
            setScore("Win");
        } else if (playerChoice == "paper") {
            setScore("Lose");
        } else if (playerChoice == "scissors") {
            setScore("Tie");
        }
    }

    if (roundCount >= 5) endGame();
}

function setScore(roundOutcome) {
    console.log(roundOutcome);

    if (roundOutcome == "Win") {
        ++playerScore;
    } else if (roundOutcome == "Lose") {
        ++computerScore;
    }

    score.textContent = playerScore + " - " + computerScore;
    result.textContent = "You " + roundOutcome;
}

function endGame() {
    setTimeout(() => {
        if (playerScore > computerScore) {
            alert("You Won! " + playerScore + " to " + computerScore);
        } else if (playerScore < computerScore) {
            alert("You Lost! " + playerScore + " to " + computerScore);
        } else {
            alert("You Tied! " + playerScore + " to " + computerScore);
        }

        roundCount = 0;
        playerScore = 0;
        computerScore = 0;
        score.textContent = playerScore + " - " + computerScore;
        result.textContent = ("FIGHT");
    }, 100);

    
}

let buttons = document.querySelectorAll(".player button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.getAttribute("class");
        playRound();
    });
});

console.log(buttons);