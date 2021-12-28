// Write function computerPlay that will randomly return "Rock", "Paper" or "Scissors"

function computerPlay() {
   
    let computerNumber = Math.floor(Math.random() * 3) + 1;
   let computerOutput = "";

   if (computerNumber == 1) {
       computerOutput = "rock";
   } else if (computerNumber == 2) {
       computerOutput = "paper";
   } else {
       computerOutput = "scissors";
   }
return(computerOutput);
   }

   // computerPlay();

// console.log(computerPlay());

let playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
console.log(playerSelection);
let computerSelection = computerPlay();
console.log(computerSelection);
let playerCounter = 0;
let computerCounter = 0;

function playRound() {
   
    
    let result = "";

    if ((playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection);
        playerCounter += 1;
    } else if (playerSelection == computerSelection) {
        result = ("It's a tie!")
    } else {
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection);
        computerCounter += 1;
    };


    return result;
    
}
//playRound();

console.log(playRound(playerSelection, computerSelection));
console.log(playerCounter);
console.log(computerCounter);

function game() {
    playRound(playerSelection, computerSelection);
    if (playerCounter >= 5 && computerCounter < 5) {
        return ('Game over, you win!');
    } else if (computerCounter >= 5 && playerCounter < 5) {
        return ('Game over, you lose!');
    } else {
        return ('Keep going');
    }
};
//game();
console.log(game());




