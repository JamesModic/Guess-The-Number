const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();
// code below triggers the first asynchronous function to begin the game
async function start() {
  let secretNumber = await ask(
    "let me think of a scret number?\nTake your first guess!\n"
  );
  // randomNum returns a random number between the two values 
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max-min)+min)
  }
// here I have assigned the variable randomNum to compNum and specified the two values randomNum will create its randomNum between 0-100
  let compNum = randomNum(0, 100)
// here I have created a while loop with conditional statements that respond with higher if the humans guess (secretNumber) is < the random generated number (compNum) , lower if the humans guesss is lower than compNum and "you win" if the human guess is equal to compNum with an exit of the program in that instance. 
  while (compNum !== secretNumber) {
    if (secretNumber > compNum) {
        console.log("lower")
        secretNumber = await ask ("")
  } else if (secretNumber < compNum)
  {console.log("higher")
secretNumber = await ask ("")}
    else {
        if (secretNumber = compNum) {
            console.log("You Win")
            process.exit()
        }
    }
    
  }

  
}
