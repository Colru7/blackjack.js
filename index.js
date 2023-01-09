let sum = 0
let allCards = []
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let player = {
    name: "Carolina",
    chips: [145],
}

let playerEl = document.getElementById("player-el")
playerEl.textContent += player.name + ": $ " + player.chips

console.log(allCards)

function startGame() {
    let firstCard = randomNumber()
    let secondCard = randomNumber()
    allCards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true;
    renderGame()
}

function renderGame() {
    let cards = "Cards: " 
    for ( i = 0; i < allCards.length; i++){
        cards += " " + allCards[i]
    }

    if (sum <=20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
    message = "Wohoo! You've got blackjack!"
    hasBlackJack = true
    } else { message = "You're out of the game!"
    isAlive = false
    }
    console.log(message)
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = cards
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
    let newCard = randomNumber();
    sum += newCard;
    allCards.push(newCard);
    console.log(allCards)
    console.log("Drawing a new card from the deck!");
    renderGame()
    }
}

function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1  
    if (randomNumber === 1) {
        return 11 
    } else if (randomNumber >= 11){
        return 10
    } else {
        return randomNumber
    }
}








/* Todo esto no deberia ser asi. El casino ya tiene las cartas listas y parece sospechoso.
let firstCard = randomNumber()
let secondCard = randomNumber()
let allCards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

console.log(allCards)

function startGame() {
    renderGame()
}

function renderGame() {
    let cards = "Cards: " 
    for ( i = 0; i < allCards.length; i++){
        cards += " " + allCards[i]
    }

    if (sum <=20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
    message = "Wohoo! You've got blackjack!"
    hasBlackJack = true
    } else { message = "You're out of the game!"
    isAlive = false
    }
    console.log(message)
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = cards
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let newCard = randomNumber();
    sum += newCard;
    allCards.push(newCard);
    console.log(allCards)
    renderGame()
}

function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1  
    if (randomNumber === 1) {
        return 11 
    } else if (randomNumber >= 11){
        return 10
    } else {
        return randomNumber
    }
}

*/

