const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// done is a callback which it could be asynchronously called
module.exports = (questions, done) => {
  // Here, you will store all your answers
  const answers = [];
  // This will be a callback for rl.question method
  const questionAnswered = (answer) => {
    answers.push(answer.trim());
    // It will establish the exit condition
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      return done(answers);
    }
  };

  // At first time, collectAnswers will execute this one,
  // once launched, this will ask the first question, then
  // it will invoke the callback called "questionAnswered"
  // if there were out of questions, it will walk out through done function.
  // But if there were questions available,it will invoke questionAnswered again
  // until we're out of questions. Look at the if-else clause.
  rl.question(questions[0], questionAnswered);
}