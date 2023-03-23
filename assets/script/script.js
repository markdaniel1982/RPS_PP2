// wait for DOM to load before running the game

// code credit - CI Love Maths walkthrough (dom content loaded)
//Code Credit - 
document.addEventListener("DOMContentLoaded", function () {
// Setting global variables for the game
    let numWins = 0;
    let numLoss = 0;
    let numDraw = 0;
    let roundCount = 5;

    let winCount = document.getElementById("winCount");
    let lossCount = document.getElementById("lossCount");
    let drawCount = document.getElementById("drawCount");
    let movesLeft = document.getElementById("movesLeft");
    let overallWinner = document.getElementById("winner");

// Set event listener to buttons 
    const buttons = document.querySelectorAll("button");

    for (const button of buttons) {
        button.addEventListener("click", playGame);
    }
// Main game functionality - User choice and winner calculation
    function playGame() {
        const playerChoice = this.id;
        document.getElementById("playerChoice").innerText = playerChoice;

        const computerChoice = computerSelect();
        document.getElementById("computerChoice").innerText = computerChoice;

        const result = getResult(playerChoice, computerChoice);
        displayResult(result);

        const winner = whoWon(numWins, numLoss, numDraw);
        document.getElementById("winner");
    }
// Computers Selection
    function computerSelect() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

// Calculate winner and update rounds left, number of wins etc
    function getResult(playerChoice, computerChoice) {

        if (playerChoice === computerChoice) {
            roundCount--;
            numDraw++;
            movesLeft.innerHTML = roundCount;
            drawCount.innerText = numDraw;
            return "Draw!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            roundCount--;
            numWins++;
            movesLeft.innerHTML = roundCount;
            winCount.innerText = numWins;
            return "Winner!";
        } else {
            roundCount--;
            numLoss++;
            movesLeft.innerHTML = roundCount;
            lossCount.innerText = numLoss;
            return "You Lost!";
        }
    }

// Display popup

    function displayResult(result) {
        const resultElement = document.getElementById("result");
        resultElement.innerText = result;
        if (roundCount === 0) {
            document.getElementById("playAgain").hidden = false;
            (playAgain());
        } else {
            document.getElementById("playAgain").hidden = true;
        }
    }

// Display winner

    function whoWon(numWins, numLoss, numDraw) {
        if (numWins > numLoss && numWins > numDraw) {
            overallWinner.innerText = "WINNER";
        } else if (
            numLoss > numWins && numDraw > numWins) {
            overallWinner.innerText = "LOSER";
        } else if (
            numWins === numDraw && numDraw > numLoss) {
            overallWinner.innerText = "WINNER";
        } else if (
            numWins > numLoss) {
            overallWinner.innerText = "WINNER";
        } else if (numLoss > numWins) {
            overallWinner.innerText = "LOSER";
        } else(
            overallWinner.innerText = "DRAW"
        );
    }

// Play Again?

    function playAgain() {

    }
}
);