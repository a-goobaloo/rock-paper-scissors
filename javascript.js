
let choices = ["rock", "paper", "scissors"];
alert("You will be playing the computer in a game of Rock, Paper, Scissors. First to win three matches is the winer! Good luck!")

let userChoice = prompt("Which one will beat the PC? Rock, paper, or scissors? ").toLowerCase();

//random computer choice from the array
function getComputerChoice(){
    return choices[(Math.floor(Math.random() * choices.length))];
}

//function to determine the winner of a round

function winner(userChoice, computerChoice){
    if (userChoice == computerChoice){
        console.log("Draw!")
    }else if (userChoice == "rock" && computerChoice == "scissors"){
        console.log("You win!");
        userScore++;
    }else if (userChoice == "paper" && computerChoice == "rock"){
        console.log("You win!");
        userScore++;
    }else if (userChoice == "scissors" && computerChoice == "paper"){
        console.log("You win!");
        userScore++;
    }else{
        console.log("Computer wins!")
        computerScore++;
    }
}

let computerChoice = getComputerChoice();

//Keeping Score

let computerScore = 0;
let userScore = 0;

//While loop until one reaches 3 points. Then it will break.

while (true){
    let userChoice = prompt("Which one will beat the PC? Rock, paper, or scissors? ").toLowerCase();
    if (userChoice == "q"){
        break;
    }
    let computerChoice = getComputerChoice();
    console.log(`User: ${userChoice}\nPC: ${computerChoice}`)

    winner(userChoice, computerChoice)

    console.log(`User: ${userScore}\nPC: ${computerScore}`)
    if (computerScore == 3 || userScore == 3){
        break;
    }

}
//announcing the winner
if (computerScore == 3){
    alert("The Computer won...")
}else {
    alert("You did it! You defeated the might computer!")
}
