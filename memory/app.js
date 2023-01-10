const cards = [
    {
        name: "blank",
        img: "images/blank.png",
    },
    {
        name: "white",
        img: "images/white.png",
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


function createBoard() {
    cards.forEach((card, index) => {
        const cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/blank.png");
        cardElement.setAttribute("data-id", index);
        grid.append(cardElement);
    });
}

createBoard();