const gameChoices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return gameChoices[Math.floor(Math.random() * (3 + 0) - 0)];
}

function getHumanChoice() {
    let humanInput = prompt("Choose rock, paper, or scissors");
    if (gameChoices.includes(humanInput.toLowerCase())) {
        return humanInput;
    }
    return console.log("You didn't choose rock, paper, or scissors");
}



function playGame() {
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

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human: " + humanScore + ", Computer: " + computerScore);
    }
}

// console.log(getComputerChoice());
playGame();
if (humanScore - computerScore > 2) {
    console.log("Congrats! You won best of 5");
} else if (humanScore == computerScore) {
    console.log("Tie! Try again");
}