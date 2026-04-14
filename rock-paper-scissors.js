

function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice = " "
    if (randomNumber <= (1/3)) {
        computerChoice = "rock"
    } else if (randomNumber >(1/3) && randomNumber <= (2/3)) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
   return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("What is your choice? rock, paper or scissors?").toLowerCase();
    return humanChoice
}



function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "scissors" && computerChoice == "rock") {
         console.log("You lose! Rock beats Scissors");
         computerScore++;
         } else if (humanChoice == "rock" && computerChoice == "paper") {
         console.log("You lose! Paper beats Rock")
         computerScore++;
         } else if (humanChoice == "paper" && computerChoice == "scissors") {
         console.log("You lose! Scissors beats Paper")
         computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper")  {
         console.log("You win! Scissors beats Paper");
         humanScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
         console.log("You win! Rock beats Scissors")
         humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
         console.log("You win! Paper beats Rock")
         humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("It's a Tie!")
        } else if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("It's a Tie!")
        } else if (humanChoice == "scissors" && computerChoice == "scisssors") {
            console.log("It's a Tie!")
        }
     }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("You won the game!")
    } else if (humanScore < computerScore) {
        console.log("You lost the game!")
    } else {
        console.log("It's a tied game!")
    }
}