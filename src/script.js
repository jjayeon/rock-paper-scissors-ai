const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');
const userChoiceImg = document.getElementById('user-choice');
const computerChoiceImg = document.getElementById('computer-choice');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const userChoice = event.target.innerText; // Get user's button text (Rock/Paper/Scissors)

        // Generate computer's random choice (Rock, Paper, Scissors)
        const computerChoices = ['Rock', 'Paper', 'Scissors'];
        const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // Update image source based on user and computer choices
        userChoiceImg.src = `images/${userChoice.toLowerCase()}.png`;
        computerChoiceImg.src = `images/${computerChoice.toLowerCase()}.png`;

        // Determine winner (simple logic for MVP) 
        let winner = "";
        if (userChoice === computerChoice) {
            winner = "Tie";
        } else if (userChoice === "Rock") {
            winner = computerChoice === "Scissors" ? "You Win!" : "You Lose!";
        } else if (userChoice === "Paper") {
            winner = computerChoice === "Rock" ? "You Win!" : "You Lose!";
        } else if (userChoice === "Scissors") {
            winner = computerChoice === "Paper" ? "You Win!" : "You Lose!";
        }

        // Display the computer's choice and result
        resultDiv.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${winner}`;
    });
});
