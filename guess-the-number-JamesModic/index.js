const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
  let secretNumber = await ask(
    "What is your secret number?\nI won't peek, I promise...\n"
  );
  console.log("You entered: " + secretNumber);
  // block of code above gets you to "you entered: secretNumber, it also stores your andswer as the variable secretNumber"
  // Now I am haveing the computer ask "is your number between 1-100?"
  // if yes, the conditional will begin the game, if no, the conditional will exit the game
  let compAsk1 = await ask("Is your number between 1-100?");
  if (compAsk1 === "yes") {
    console.log("Great Lets Play!");
  } else {
    console.log("Then I am not playing.");
    process.exit();
  }

  let min = 0;
  let max = 100;

  function randomNum(min, max) {
    return Math.floor((max - min) / 2 + min);
  }
  let newNum = randomNum(min, max);
  // code below is the computer taking its first guess. if correct, the game exits
  let guessOne = await ask(`Is your secret number:${newNum}? `);
  if (guessOne === "yes") {
    console.log("I knew it! No one can beat me!");
    process.exit();
  }
  // code below is a while loop for if the players answer is no, the computer will then ask if the guess is higher or lower
  while (guessOne === "no") {
    let higherOrLower = await ask(
      `is your number "higher", "lower" or "equal to" ${newNum}?`
    );
    // code below will modify the range and guess a new number
    if (higherOrLower === "equal to") {
      console.log("I did it I win!");
      process.exit();
    } else if (higherOrLower === "higher") {
      // code adjsuts the range of the newNum variable
      min = newNum + 1;
      newNum = randomNum(min, max);
    } else if (higherOrLower === "lower") {
      max = newNum - 1;
      newNum = randomNum(min, max);
    }
    // cheating detector
    if (min > max || max < min) {
      console.log("No one likes a cheater");
    }
  }
}
