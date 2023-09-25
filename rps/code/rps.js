// Imports and Globals
import {
  VALID_CHOICES,
  prompt,
  invalidFirstChoice,
  spockOrScissors,
  translateUserChoice,
  announceWinner,
  userWins,
} from "./gameMethods.js";

import { question } from "readline-sync";
let playAgain = "";

// Starting score
let userPoints = 0;
let computerPoints = 0;

while (userPoints < 3 && computerPoints < 3) {
  if (playAgain[0] === "n") break;

  prompt(`Welcome to 👊, 📃, ✂️, 🦎, 🖖 !`);

  while (playAgain[0] !== "n") {
    // Start game
    prompt(`Make a choice: 'r', 'p', 's', or 'l'!`);
    let choice = question();

    while (invalidFirstChoice(choice)) {
      prompt("That's not a valid choice");
      choice = question();
    }

    if (choice === "s") {
      choice = spockOrScissors(choice, question);
    } else {
      choice = translateUserChoice(choice);
    }

    let arrayOfValidChoices = Object.keys(VALID_CHOICES);
    let randomIndex = Math.floor(Math.random() * arrayOfValidChoices.length);
    let computerChoice = arrayOfValidChoices[randomIndex];

    // Declare winner of round
    prompt(
      announceWinner(choice, computerChoice, userWins(choice, computerChoice))
    );

    // Increment score
    if (userWins(choice, computerChoice)) {
      userPoints += 1;
    } else if (choice === computerChoice) {
      continue;
    } else {
      computerPoints += 1;
    }

    // Announce point total
    prompt(`User Points: ${userPoints} | Computer Points: ${computerPoints}`);

    if (userPoints < 3 && computerPoints < 3) {
      // Play another round
      prompt("Do you want to play again (y/n)?");
      playAgain = question().toLowerCase();

      while (playAgain[0] !== "n" && playAgain[0] !== "y") {
        prompt('Please enter "y" or "n".');
        playAgain = question().toLowerCase();
      }
    } else if (userPoints === 3) {
      prompt("🕺 USER WINS GAME!! 🕺");
      break;
    } else {
      prompt("🤖 COMPUTER WINS GAME!! 🤖");
      break;
    }
  }
}
