// Readline is a module that allows us to ask questions of our terminal user
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("How do you like Nodejs?", (answer) => {
  console.log(`Your answer: ${answer}`);
});

