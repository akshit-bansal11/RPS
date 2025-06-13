// All possible choices
const choices = ["rock", "paper", "scissors"];

// Font Awesome icons for each choice
const icons = {
    rock: '<i class="fa-solid fa-hand-back-fist"></i>',
    paper: '<i class="fa-solid fa-hand"></i>',
    scissors: '<i class="fa-solid fa-hand-scissors"></i>'
};

let playerScore = 0;
let computerScore = 0;

// Handle player choice click
document.querySelectorAll(".playerChoice").forEach(button => {
    button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Update icons
    document.getElementById("player-choice").innerHTML = icons[playerChoice];
    document.getElementById("computer-choice").innerHTML = icons[computerChoice];

    // Determine result
    const result = getResult(playerChoice, computerChoice);
    const resultDiv = document.getElementById("result");

    // Reset result styles
    resultDiv.className = "text-2xl font-semibold transition-all duration-300";

    // Show result and update score
    if (result === "win") {
        playerScore++;
        resultDiv.textContent = "WIN";
        resultDiv.classList.add("glow-green");
    } else if (result === "lose") {
        computerScore++;
        resultDiv.textContent = "LOSS";
        resultDiv.classList.add("glow-red");
    } else {
        resultDiv.textContent = "DRAW";
        resultDiv.classList.add("glow-blue");
    }

    // Update scoreboard
    document.getElementById("player-score").textContent = playerScore.toString().padStart(2, "0");
    document.getElementById("computer-score").textContent = computerScore.toString().padStart(2, "0");
    });
});

// Compare player vs computer choice
function getResult(player, computer) {
    if (player === computer) return "draw";
    if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
    ) return "win";
    return "lose";
}

// Show final score and result, then refresh after 2s
function showFinalResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.className = "text-2xl font-semibold transition-all duration-300";

    if (playerScore > computerScore) {
    resultDiv.textContent = `You Win!\nFinal Score: ${playerScore} : ${computerScore}`;
    resultDiv.classList.add("glow-green");
    } else if (playerScore < computerScore) {
    resultDiv.textContent = `You Lose!\nFinal Score: ${playerScore} : ${computerScore}`;
    resultDiv.classList.add("glow-red");
    } else {
    resultDiv.textContent = `It's a Draw!\nFinal Score: ${playerScore} : ${computerScore}`;
    resultDiv.classList.add("glow-blue");
    }

    // Auto-refresh after 2 seconds
    setTimeout(() => location.reload(), 2000);
}