function getComputerChoice() {
    const choiceList = ["rock", "paper", "scissors"]
    const randIndex = Math.floor(choiceList.length*Math.random());
    const randItem = choiceList[randIndex];
    return randItem
}

function getHumanChoice() {
    const validInput = ["rock", "paper", "scissors"];
    const userInput = prompt("Input choice :", "");

    return (validInput.includes(userInput.toLocaleLowerCase()))?
    userInput.toLowerCase() :
    "Invalid Input"
    }


    
function playRound(humanChoice, computerChoice) {

    const result = humanChoice + "-" + computerChoice;
    switch (result) {
        case humanChoice + "-" + humanChoice:
            console.log(`Its a Tie! Both players used ${humanChoice}`);
            humanScore += 1;
            computerScore += 1;
            break;
        case "rock-paper":
            console.log("You lose! Paper beats Rock");
            computerScore += 1;
            break;
        case "rock-scissors":
            console.log("You win! Rock beats Scissors");
            humanScore += 1;
            break;
        case "paper-rock":
            console.log("You win! Paper beats Rock");
            humanScore += 1;
            break;
        case "paper-scissors":
            console.log("You lose! Scissors beats Paper");
            computerScore += 1;
            break;
        case "scissors-rock":
            console.log("You lose! Rock beats Scissors");
            computerScore += 1;
            break;
        case "scissors-paper":
            console.log("You win! Scissors beats Paper");
            humanScore += 1;
            break;
    }
    (humanScore === computerScore) ?
    console.log(`Human and computer tie ${humanScore}-${computerScore}`):
    (humanScore > computerScore) ?
    console.log(`Human leads with a score of ${humanScore}-${computerScore}`):
    console.log(`Computer leads with a score of ${computerScore}-${humanScore}`)
}

function updateScore() {
    currentScore.textContent = `Human ${humanScore} - ${computerScore} Computer`;
}

function declareWinner() {
    if (humanScore === 5 && computerScore === 5) {
        announceWinner.textContent = "It's a tie !"
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else if (humanScore === 5) {
        announceWinner.textContent = "Human wins!"
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else if (computerScore === 5){
        announceWinner.textContent = "Computer wins!"
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let humanScore = 0;
let computerScore = 0;

const currentScore = document.createElement("div");
currentScore.textContent = `Human ${humanScore} - ${computerScore} Computer`;
document.body.appendChild(currentScore);

const announceWinner = document.createElement("div");
document.body.appendChild(announceWinner);

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
rock.addEventListener("click", () => updateScore());
rock.addEventListener("click", () => declareWinner());
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
paper.addEventListener("click", () => updateScore());
paper.addEventListener("click", () => declareWinner());
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
scissors.addEventListener("click", () => updateScore());
scissors.addEventListener("click", () => declareWinner());