// import { sayHello, name } from "./app.js";
// sayHello()
// console.log(name);

const choices = ["rock", "paper", "scissors"];

const randomNumber = Math.floor(Math.random() * choices.length);

const computerChoice = choices[randomNumber];

let userChoice = "";
let isNotValidEntry = true;

while (isNotValidEntry) {
    console.log(userChoice);
    userChoice = prompt("Please choose rock, paper, or scissors");
    userChoice = userChoice.trim().toLowerCase();

    if (userChoice == "rock" || userChoice === "paper" || userChoice === "scissors") isNotValidEntry = false;
} 

console.log(`Computer choice: ${computerChoice} || User choice: ${userChoice}`);

if (userChoice === computerChoice) {
    console.log("It's a tie!");
} else if (userChoice === "rock" && computerChoice === "scissors") {
    console.log("You win!");
} else if (userChoice === "paper" && computerChoice === "rock") {
    console.log("You Win!");
} else if (userChoice === "scissors" && computerChoice === "rock") {
    console.log("You Win!");
} else {
    console.log("You lose!");
}



