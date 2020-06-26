import readlineSync from 'readline-sync';

const playGame = (condition, question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  const numberOfiterations = 3;
  let iteration = 0;
  while (iteration !== numberOfiterations) {
    const [task, correctAnswer] = question();
    console.log(`Question: ${task}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
      iteration += 1;
    } else {
      console.log(`"${yourAnswer}" is wrong answer ;(.`);
      console.log(`Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
  return;
};

export default playGame;
