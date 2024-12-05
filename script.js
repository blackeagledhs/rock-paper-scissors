
// // Step 2: Write the logic for computer choice
// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// // Step 3: Write the logic for human choice
// function getHumanChoice() {
//     const choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
//     if (["rock", "paper", "scissors"].includes(choice)) {
//         return choice;
//     } else {
//         alert("Invalid choice. Please try again.");
//         return getHumanChoice();
//     }
// }

// // Step 4: Declare the players' score variables
// let humanScore = 0;
// let computerScore = 0;

// // Step 5: Write the logic to play a single round
// function playRound(humanChoice, computerChoice) {
//     const choices = {
//         rock: "scissors",
//         paper: "rock",
//         scissors: "paper",
//     };

//     const human = humanChoice.toLowerCase();
//     if (human === computerChoice) {
//         console.log(`It's a tie! Both chose ${humanChoice}`);
//     } else if (choices[human] === computerChoice) {
//         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//         humanScore++;
//     } else {
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//         computerScore++;
//     }
// }

// // Step 6: Write the logic to play the entire game
// function playGame() {
//     humanScore = 0;
//     computerScore = 0;

//     for (let round = 1; round <= 5; round++) {
//         console.log(`Round ${round}`);
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//         console.log(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);
//     }

//     if (humanScore > computerScore) {
//         console.log("You are the overall winner!");
//     } else if (humanScore < computerScore) {
//         console.log("Computer wins the game!");
//     } else {
//         console.log("The game is a tie!");
//     }
// }

// // Start the game
// playGame();

// Game logic variables
let humanScore = 0;
let computerScore = 0;

// Function to get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    const choices = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (humanChoice === computerChoice) {
        return `It's a tie! Both chose ${humanChoice}`;
    } else if (choices[humanChoice] === computerChoice) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

// Function to update scores and display results
function updateGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultMessage = playRound(humanChoice, computerChoice);

    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("result").textContent = resultMessage;
}

// Add event listeners to buttons
const buttons = document.querySelectorAll(".choice");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.dataset.choice;
        updateGame(humanChoice);
    });
});
