import readlineSync from 'readline-sync';
import { getName } from './additional';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const nameOfuser = getName();
  console.log(`Hello, ${nameOfuser}!`);
  return nameOfuser;
};

export const name = greeting();

export const game = (userName, condition, question, correctAn) => {
  console.log(condition);
  let numberOfiterations = 0;
  while (numberOfiterations !== 3) {
    const ask = question();
    console.log(`Question: ${ask[0]}`);
    const yourAns = readlineSync.question('Your answer: ');
    if (yourAns === correctAn(ask)) {
      console.log('Correct!');
      numberOfiterations += 1;
    } else {
      console.log(`"${yourAns}" is wrong answer ;(. Correct answer was "${correctAn(ask)}".\nLet's try again, ${name}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${name}`);
  return null;
};
