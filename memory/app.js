const cards = [
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png" 
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png" 
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    }
];

cards.sort(() => Math.random() - 0.5);
const grid = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

let cardsChosen = [];
let cardsChosenIDs = [];
const matchesWon = [];


function createBoard() {
    cards.forEach((card, index) => {
        const cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/blank.png");
        cardElement.setAttribute("data-id", index);
        cardElement.addEventListener("click", flipCard)
        grid.append(cardElement);
    });
}

createBoard();

function flipCard(event) {
    // console.log(cards[event.target.dataset.id]);

    // adds a data attribute to identify the card
    const id = event.target.getAttribute("data-id");
    cardsChosen.push(cards[id].name);
    cardsChosenIDs.push(id);
    event.target.setAttribute("src", cards[id].img);
    console.log(cards);
    console.log('clicked', id);
    console.log(cardsChosen);

    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    // get all cards from grid
    const cards = document.querySelectorAll("#grid img");
    // get ids of chosen cards
    const firstChoiceID = cardsChosenIDs[0];
    const secondChoiceID = cardsChosenIDs[1];

    // check if the same card was clicked
    if (firstChoiceID == secondChoiceID) {
        // set the cards to blank
        cards[firstChoiceID].setAttribute("src", "images/blank.png");
        cards[secondChoiceID].setAttribute("src", "images/blank.png");
        alert("You clicked the same card");
    }
    // check if the cards are the same
    else if (cardsChosen[0] == cardsChosen[1]) {
        alert("You Win!");
        // set the cards to blank
        cards[firstChoiceID].setAttribute("src", "images/white.png");
        cards[secondChoiceID].setAttribute("src", "images/white.png");
        // remove card event listeners
        cards[firstChoiceID].removeEventListener("click", flipCard);
        cards[secondChoiceID].removeEventListener("click", flipCard);
        matchesWon.push(cardsChosen);
    } else {
        cards[firstChoiceID].setAttribute("src", "images/blank.png");
        cards[secondChoiceID].setAttribute("src", "images/blank.png");
        alert("Sorry, the cards aren't the same");
 
    }
    // clear arrays
    cardsChosen = [];
    cardsChosenIDs = [];
    resultDisplay.textContent = matchesWon.length

    if(matchesWon.length == (cards.length/2)) {
        resultDisplay.textContent = "Congrats 🎉 You found all the cards!";
    }

}