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

let playerScore = 0;
let computerScore = 0;
let currentScoreBoard = "| Score | You: 0 | Computer: 0";

function resetScore(){
    playerScore = 0;
    computerScore = 0;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        alert("Tie" + " " + currentScoreBoard);
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        scoreKeeper("player won");
        alert("You win: " + playerSelection + " beats " + computerSelection + " " + currentScoreBoard);
       
        if (playerScore == 3){
            resetScore();
            alert("Victory: You won 3/5");
        }
            
    } else {
        scoreKeeper("player lost");
        alert("You loose: " + computerSelection + " beats " + playerSelection + " " + currentScoreBoard);
        
        if (computerScore == 3){
            resetScore();
            alert("Defeat: You lost 3/5");    
        }
        
    }
    startPlay();
}

function scoreKeeper(result){
    if (result == "player won"){
        ++playerScore;        
        return currentScoreBoard = "| Score | You: " + playerScore + " | Computer: " + computerScore;
    } else {
        ++computerScore;
        return currentScoreBoard = "| Score | You: " + playerScore + " | Computer: " + computerScore;
    }
}

function startPlay() {
    let playerInput = prompt("Rock, Paper, or Scissors");
    playRound(playerInput, computerPlay());
}