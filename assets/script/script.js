// wait for DOM to load before running the game

// code credit - CI Love Maths walkthrough (dom content loaded)
//Code Credit - 
document.addEventListener("DOMContentLoaded", function () {

    let numWins = 0;
    let numLoss = 0;
    let numDraw = 0;

    let winCount = document.getElementById("winCount")
    let lossCount = document.getElementById("lossCount")
    let drawCount = document.getElementById("drawCount")

    let movesLeft = document.getElementById("movesLeft")

    const buttons = document.querySelectorAll("button");
    console.log("DOM Loaded");
    for (const button of buttons) {
        button.addEventListener("click", playGame);


        roundCount = 5;
        movesLeft.innerHTML = roundCount;

        button.onclick = function () {
            roundCount -= 1;
            movesLeft.innerHTML = roundCount;

            if (roundCount === 0) {
                document.getElementById("playAgain").hidden = false;
                (playAgain());                
            } else {
                document.getElementById("playAgain").hidden = true;
            }
        };
    }


function playGame() {
    const playerChoice = this.id;
    document.getElementById("playerChoice").innerText = playerChoice;

    const computerChoice = computerSelect();
    document.getElementById("computerChoice").innerText = computerChoice;

    const result = getResult(playerChoice, computerChoice);
    displayResult(result);


}

function computerSelect() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}


function getResult(playerChoice, computerChoice) {    

    if (playerChoice === computerChoice) {
        numDraw++;
        drawCount.innerText = numDraw;
        return "Draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        numWins++;
        winCount.innerText = numWins;
        return "Winner!"
    } else {
        numLoss++;
        lossCount.innerText = numLoss;
        return "You Lost!";
    }

}

function displayResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.innerText = result;
}

function playAgain() {

}

});