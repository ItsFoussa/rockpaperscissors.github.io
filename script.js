let choices = ["Rock", "Paper", "Scissors"];
let playerDisplay = document.getElementById("playerDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("resultDisplay");
let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playgame(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "Rock":
                result = (computerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!";
                break; 
            case "Scissors":
                result = (computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++; 
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++; 
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}
