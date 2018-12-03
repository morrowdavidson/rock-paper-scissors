function computerPlay() {
    let randomNumber = Math.random();
    if (randomNumber < (1/3)){
        return "rock";
    } else if (randomNumber < (2/3)){
        return "paper";
    }else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        alert("Tie");
        startPlay();
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        alert("You win: " + playerSelection + " beats " + computerSelection);
        startPlay();
    } else {
        alert("You loose: " + computerSelection + " beats " + playerSelection);
        startPlay();
    }
}

function startPlay() {
    let playerInput = prompt("Rock, Paper, or Scissors");
    playRound(playerInput, computerPlay());
}