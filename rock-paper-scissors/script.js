const gameChoices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return gameChoices[Math.floor(3 * Math.random())];
}

function getHumanChoice() {
    let humanInput = prompt("Choose rock, paper, or scissors");
    if (gameChoices.includes(humanInput.toLowerCase())) {
        return humanInput.toLowerCase();
    }
    return console.log("You didn't choose rock, paper, or scissors");
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
        console.log("It's a tie! Computer chose " + computerChoice);
        return;
    } else if ((humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
        (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log("Computer chose " + computerChoice + ", you win!");
    } else {
        computerScore++;
        console.log("You lose! Computer chose " + computerChoice);
    }
}


const buttonRock = document.createElement("button");
buttonRock.textContent = "Rock";
document.body.appendChild(buttonRock);

const buttonPaper = document.createElement("button");
buttonPaper.textContent = "Paper";
document.body.appendChild(buttonPaper);

const buttonScissors = document.createElement("button");
buttonScissors.textContent = "Scissors";
document.body.appendChild(buttonScissors);

buttonRock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
});

buttonPaper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
});

buttonScissors.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
});


