const randomNumber = Math.ceil(Math.random()*100)
console.log(`Cheat code ${randomNumber}`);
const failedGuessField = document.querySelector("#failedGuess")
let failedGuess = []
const attempLeftField = document.querySelector("#attemptLeft")
attempLeftField.textContent = 10 - failedGuess.length


document.getElementById("button").addEventListener("click", function(e) {

let guessedNumber = Math.abs(document.getElementById("playerGuess").value);

if (guessedNumber > 99) alert("Number too big")
    else startGame(guessedNumber)
}
)

function startGame(num) {
    let winningState = compare(num)
    if (winningState == true) {
        alert(`You score ${(10-failedGuess.length)*10}.\nRefresh to start a new game`)
        document.getElementById("button").disabled = true;
    }
    else {
        failedGuess.push(num)
        if (failedGuess.length == 10){
            document.getElementById("button").disabled = true;
        }
        failedGuessField.textContent = failedGuess.join(" - ")
        attempLeftField.textContent = 10 - failedGuess.length
        
        // check if remaining count == 0?
    }
}


function compare(num) {

    let won = false
    if (num < randomNumber) {
        alert("Your number is smaller than the secret number")
    } 
    else if (num > randomNumber) {
        alert("Your number is bigger than the secret number")
    }
    else {
        alert("Congratulations!! you found the secret number")
        won = true
    }
    return won
    
}