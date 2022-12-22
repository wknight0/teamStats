const getUserChoice = userInput =>
{
  userInput = userInput.toLowerCase();

  if (userInput === 'rock')
  {
    return userInput;
  }
  else if (userInput === 'paper')
  {
    return userInput;
  }
  else if (userInput === 'scissors')
  {
    return userInput;
  }
  else
  {
    console.log("Error, not a valid choice...");
  }
} 

function getComputerChoice()
{
  let num = Math.floor(Math.random() * 3);

  if (num === 0)
  {
    return 'rock';
  }
  else if (num === 1)
  {
    return 'paper';
  }
  else if (num === 2)
  {
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice)
{
  if (userChoice === computerChoice)
  {
    return "TIE";
  }
  else if (userChoice === 'rock' && computerChoice === 'scissors')
  {
    return "YOU WIN";
  }
  else if (userChoice === 'paper' && computerChoice === 'rock')
  {
    return "YOU WIN";
  }
  else if (userChoice === 'scissors' && computerChoice === 'paper')
  {
    return "YOU WIN";
  }
  else
  {
    return "YOU LOSE";
  }
}

function playGame()
{
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log(`Player chose ${userChoice.toUpperCase()} and Computer chose ${computerChoice.toUpperCase()}!`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
