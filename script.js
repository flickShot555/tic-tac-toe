const choices = document.querySelectorAll('.choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winnerDisplay = document.getElementById('winner');

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    playerChoiceDisplay.textContent = `You chose: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
    winnerDisplay.textContent = `Result: ${winner}`;
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}
