let playerPlay = () => {
  let playerSelection = "";
  do {
    playerSelection = window.prompt("Please enter you play: Rock, Paper or Scissors? ").toLowerCase();
  }
  while (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'));
  //IF condition is true (not rock, paper or scissors) then it continue the loop, otherwise, it return.
  return playerSelection;
};


let computerPlay = () => {
  let Selection = ['Rock', 'Paper', 'Scissors'];
  return Selection[Math.floor(Math.random() * Selection.length)].toLowerCase();
};




let round = (player, computer) => {
  console.log(player + " " + computer);
  if (computer == "rock" && player == "scissors" ||
      computer == "paper" && player == "rock" ||
      computer == "scissors" && player == "paper") {
      compPoints += 1;
      return "You lose!";
  } else if (computer == player) {

      return "Draww";
  } else if (computer == "rock" && player == "paper" ||
             computer == "paper" && player == "scissors" ||
             computer == "scissors" && player == "rock") {
      userPoints += 1;
      return "You win!";
  }
}

var userPoints = 0;
var compPoints = 0;

let game = () => {
  for (let i = 0; i <= 5; i++) {
    console.log(round(playerPlay(), computerPlay()));
  }
  console.log(userPoints + " " + compPoints);
  userPoints > compPoints ? console.log("You win the game") : userPoints === compPoints ? console.log("draw") : console.log("you lose the game");
}
