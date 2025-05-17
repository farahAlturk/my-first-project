let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name : "Per" ,
    chips : 145
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $"+player.chips

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard +  secondCard
    isAlive = true
    renderGame()
} 
function getRandomCard(){
    let randomNum = Math.floor( Math.random() * 13) + 1
    if (randomNum > 10){
        return 10
    }else if ( randomNum === 1 ){
        return 11
    }else {
        return randomNum
    }

}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i <cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: "+ sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message = "You've got BlackJack!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"  
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard(){

    if (isAlive == true && hasBlackJack == false){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()   
    }

    
}