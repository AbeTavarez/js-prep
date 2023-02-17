const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);

    switch (randomNumber) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1: 
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            console.log("Error on switch case");
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResults() {
    if (computerChoice === userChoice) {
        result = "It's a tie!";
    }
    if (computerChoice === "rock" && userChoice === "paper"){
        result = "You Win!";
    }
    if (computerChoice === "rock" && userChoice === "scissors"){
        result = "You Lose!";
    }
    if (computerChoice === "paper" && userChoice === "scissors"){
        result = "You Win!";
    }
    if (computerChoice === "paper" && userChoice === "rock"){
        result = "You Lose!";
    }
    if (computerChoice === "scissors" && userChoice === "rock"){
        result = "You Win!";
    }
    if (computerChoice === "scissors" && userChoice === "paper"){
        result = "You Lose!";
    }
    resultDisplay.innerHTML = result;
}
//
possibleChoices.forEach(button => button.addEventListener("click", e => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResults();
})) 
