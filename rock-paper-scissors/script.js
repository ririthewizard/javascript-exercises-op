const gameChoices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let humanInput;
let computerInput;

const gameGrid = document.querySelector("#game");
const displayResults = document.createElement("h1");
const humanResults = document.createElement("h3");
const computerResults = document.createElement("h3");
const overallScore = document.createElement("h1");

gameGrid.append(humanResults, computerResults, displayResults, overallScore);
overallScore.textContent = "Human score: 0 | Computer score: 0";

const handleClick = (e) => {
    humanInput = e.target.id;
    computerInput = getComputerChoice();
    humanResults.textContent = "Your choice: " + humanInput;
    computerResults.textContent = "Computer choice: " + computerInput;
    playRound(humanInput, computerInput);
}

function getComputerChoice() {
    return gameChoices[Math.floor(3 * Math.random())];
}

for (let i = 0; i < gameChoices.length; i++) {
    const button = document.createElement("button");
    button.id = gameChoices[i];
    button.textContent = gameChoices[i];
    button.addEventListener("click", handleClick);
    gameGrid.appendChild(button);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
        displayResults.textContent = "It's a tie!";
        overallScore.textContent = "Human score: " + humanScore + " | Computer score: " + computerScore;
        return;
    } else if ((humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
        (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")) {
        humanScore++;
        displayResults.textContent = "You win! Computer chose " + computerChoice;
        overallScore.textContent = "Human score: " + humanScore + " | Computer score: " + computerScore;
    } else {
        computerScore++;
        displayResults.textContent = "You lose! Computer chose " + computerChoice;
        overallScore.textContent = "Human score: " + humanScore + " | Computer score: " + computerScore;
    }
    if (humanScore === 5) {
        displayResults.textContent = "CONGRATS! You win! You reached 5 points first.";
    } else if (computerScore === 5) {
        displayResults.textContent = "BOO! Better luck next time. You lose. Computer reached 5 points first";
    }
}