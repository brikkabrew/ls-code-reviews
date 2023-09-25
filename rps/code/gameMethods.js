const VALID_CHOICES = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidFirstChoice(string) {
  string = string.toLowerCase();
  return !["r", "p", "l", "s"].includes(string) || string.length > 1;
}

function spockOrScissors(choice, rlSyncQuestion) {
  prompt("Are you choosing 'Spock' or 'Scissors'?");
  choice = rlSyncQuestion();

  while (notSpockOrScissors(choice)) {
    prompt("That's not a valid choice");
    choice = rlSyncQuestion();
  }

  choice = choice.toLowerCase();
  return choice;
}

function notSpockOrScissors(choice) {
  choice = choice.toLowerCase();
  return !["spock", "scissors"].includes(choice);
}

function translateUserChoice(choice) {
  choice = choice.toLowerCase();
  switch (choice) {
    case "r":
      choice = "rock";
      break;
    case "p":
      choice = "paper";
      break;
    case "l":
      choice = "lizard";
      break;
  }
  return choice;
}

function announceWinner(choice, computerChoice, userWinnerCb) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (userWinnerCb) {
    return "User wins round! 💪";
  } else if (choice === computerChoice) {
    return "It's a tie!";
  } else {
    return "Computer wins round! 🦾";
  }
}

function userWins(choice, computerChoice) {
  return VALID_CHOICES[choice].includes(computerChoice);
}

export {
  VALID_CHOICES,
  prompt,
  invalidFirstChoice,
  spockOrScissors,
  translateUserChoice,
  announceWinner,
  userWins,
};
