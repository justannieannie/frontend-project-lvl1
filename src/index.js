import readlineSync from 'readline-sync';
import { getName } from './games/additional';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const nameOfuser = getName();
  console.log(`Hello, ${nameOfuser}!`);
  return nameOfuser;
};

export const game = (name, condition, question, correctAn) => {
  console.log(condition);
  let result = 0;
  while (result !== 3) {
    const ask = question();
    const yourAns = readlineSync.question('Your answer: ');
    if (yourAns === correctAn(ask)) {
      console.log('Correct!');
      result += 1;
    } else {
      return `"${yourAns}" is wrong answer ;(. Correct answer was "${correctAn(ask)}".\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}`;
};
