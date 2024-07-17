const gameChoices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let humanInput;

const gameGrid = document.querySelector("#game");
const displayResults = document.createElement("h3");
const humanResults = document.createElement("h1");
const computerResults = document.createElement("h1");

gameGrid.append(humanResults, computerResults, displayResults);
// document.body.appendChild(displayResults);

const handleClick = (e) => {
    humanInput = e.target.id;
    humanResults.textContent = "Your choice: " + humanInput;
    playRound(humanInput, getComputerChoice());
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
        return;
    } else if ((humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
        (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")) {
        humanScore++;
        displayResults.textContent = "Human score: " + humanScore + " | Computer score: " + computerScore;
    } else {
        computerScore++;
        displayResults.textContent = "You lose! Computer chose " + computerChoice;
    }
}


// const buttonRock = document.createElement("button");
// buttonRock.textContent = "Rock";
// document.body.appendChild(buttonRock);

// const buttonPaper = document.createElement("button");
// buttonPaper.textContent = "Paper";
// document.body.appendChild(buttonPaper);

// const buttonScissors = document.createElement("button");
// buttonScissors.textContent = "Scissors";
// document.body.appendChild(buttonScissors);

// buttonRock.addEventListener("click", () => {
//     playRound("Rock", getComputerChoice());
// });

// buttonPaper.addEventListener("click", () => {
//     playRound("Paper", getComputerChoice());
// });

// buttonScissors.addEventListener("click", () => {
//     playRound("Scissors", getComputerChoice());
// });



