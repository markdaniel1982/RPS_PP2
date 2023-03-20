// wait for DOM to load before running the game

// code credit - CI Love Maths walkthrough (dom content loaded)
//Code Credit - 
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
console.log("DOM Loaded")
    for (const button of buttons) {
        button.addEventListener("click", playGame);
    }
});

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
        return "Draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") || 
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Winner!";
    } else {
        return "You Lost!";
    }
}



function displayResult(result){
    const resultElement = document.getElementById("result");
    resultElement.innerText = result;
}