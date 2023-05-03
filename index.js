let computerguesses=5;
let inputnumber;
let output=document.getElementById("outputtext");

function gamestart(){
    inputnumber = parseInt(document.getElementById("userInput").value);
    if(inputnumber<1 || inputnumber>100 || isNaN(inputnumber)){
        // output.innerHTML = "Invalid number. Please enter a number between 1 and 100.";
        alert("Invalid number. Please enter a number between 1 and 100.")
    }
    else{
        output.innerHTML = "Game started. The computer has 5 chances to guess your number.";
        computerguess();
    }
}

function computerguess(){
    let guess = Math.floor(Math.random() * 100) + 1;
    computerguesses--;
    if(guess == inputnumber){
        output.innerHTML = "The computer guessed your number, Computer wins!";
    }
    else if(computerguesses == 0){
        output.innerHTML = "The computer was unable to guess your number. You win!";
    }
    else {
        output.innerHTML = "The computer guessed the number " + guess + ". It has " + computerguesses + " remaining chances.";
        setTimeout(computerguess, 1000);
    }
}