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

function playGame() {
    
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
    }
    
    let humanScore = 0;
    let computerScore = 0;

    let i = 0;
    while (i < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }

    (humanScore > computerScore) ?
    console.log(`Human wins with a score of ${humanScore}-${computerScore}`):
    console.log(`Computer wins with a score of ${computerScore}-${humanScore}`)
}

playGame()