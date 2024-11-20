let deck = [];
const cardSuits = ["c", "s", "d", "h"];
const cardFaces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
let playerHand = [];
let dealerHand = [];

function hidePopup() {
    let popup = document.getElementById("play-popup");
    popup.style.visibility = "hidden";
}

function deal() {
    hidePopup();
    fillDeck();
    shuffle();
    playerHand.push(getCard());
    addPlayerCard(playerHand[0]);
    playerHand.push(getCard()); 
    addPlayerCard(playerHand[1]);
    dealerHand.push(getCard());
    addHiddenCard(dealerHand[0])
    dealerHand.push(getCard());
    addDealerCard(dealerHand[1])

}

function fillDeck() {
    for (let i = 0; i < cardSuits.length; i++){
        let suit = cardSuits[i];
        for (let j = 0; j < cardFaces.length; j++) {
            let face = cardFaces[j];
            let card = face + suit;
            deck.push(card);
        }
    }
}

function shuffle() {
    for (let i = 0; i < deck.length; i++){
        let randNum = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[randNum];
        deck[randNum] = temp;
    }
}

function getCard() {
    let lastCard = deck.pop();
    return lastCard;
}

function addPlayerCard(card) {
    let playerArea = document.getElementById("player-area");
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");
    let faceP = document.createElement("p");
    let face = card.charAt(0)
    if (face == "T"){
        faceP.innerHTML = "10";
    }
    else {
        faceP.innerHTML = face;
    }

    cardDiv.appendChild(faceP);

    let suitImg = document.createElement("img");
    let suit = card.charAt(1);
    if (suit == "c"){
        suitImg.src = "club.png";
    }
    else if (suit == "d") {
        suitImg.src = "diamond.png";
    }
    else if (suit == "h") {
        suitImg.src = "heart.png";
    }
    else if (suit == "s") {
        suitImg.src = "spade.png";
    }
    cardDiv.appendChild(suitImg);
    playerArea.appendChild(cardDiv);
}
function addDealerCard(card){
    let dealerArea = document.getElementById("dealer-area");
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");
    let faceP = document.createElement("p");
    let face = card.charAt(0)

    if (face == "T"){
        faceP.innerHTML = "10";
    }
    else {
        faceP.innerHTML = face;
    }

    cardDiv.appendChild(faceP);

    let suitImg = document.createElement("img");
    let suit = card.charAt(1);
    if (suit == "c"){
        suitImg.src = "club.png";
    }
    else if (suit == "d") {
        suitImg.src = "diamond.png";
    }
    else if (suit == "h") {
        suitImg.src = "heart.png";
    }
    else if (suit == "s") {
        suitImg.src = "spade.png";
    }
    cardDiv.appendChild(suitImg);
    dealerArea.appendChild(cardDiv);

}
function addHiddenCard(card) {
    let dealerArea = document.getElementById("dealer-area");
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");
    cardDiv.setAttribute("style", "background-color:Pink")

    dealerArea.appendChild(cardDiv);
}

function getHandTotal(hand) {
    
}