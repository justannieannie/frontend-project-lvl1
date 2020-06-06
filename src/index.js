import readlineSync from 'readline-sync';
import { userName, name } from './hello';
import randomNumber from './numbers';
import { operation, correctcalc } from './calcOperation';
import { numToAsk, correctDiv } from './gcd';
import { makeProgr, hidden } from './progression';


const correctAn = (yourAns) => {
  if (yourAns === 'yes') {
    return 'no';
  }
  return 'yes';
};


export const question = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let result = 0;
  while (result !== 3) {
    const num = randomNumber(1, 100);
    console.log(`Question: ${num}`);
    const yourAns = readlineSync.question('Your answer: ');
    if (num % 2 === 0 && yourAns === 'yes') {
      console.log('Correct!');
      result += 1;
    } else if (num % 2 !== 0 && yourAns === 'no') {
      console.log('Correct!');
      result += 1;
    } else {
      return `"${yourAns}" is wrong answer ;(. Correct answer was "${correctAn(yourAns)}".\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}`;
};

export const expression = () => {
  console.log('What is the result of the expression?');
  let result = 0;
  while (result !== 3) {
    const calc = operation();
    const correctNum = correctcalc(calc[0], calc[1], calc[2]);
    console.log(`Question: ${calc.join(' ')}`);
    const yourAns = readlineSync.question('Your answer: ');
    if (yourAns === correctNum) {
      console.log('Correct!');
      result += 1;
    } else {
      return `"${yourAns}" is wrong answer ;(. Correct answer was "${correctNum}".\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}`;
};

export const divisor = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let result = 0;
  while (result !== 3) {
    const num = numToAsk();
    const trueGcd = correctDiv(num[0], num[1]);
    console.log(`Question: ${num.join(' ')}`);
    const yourAns = readlineSync.question('Your answer: ');
    if (yourAns === trueGcd) {
      console.log('Correct!');
      result += 1;
    } else {
      return `"${yourAns}" is wrong answer ;(. Correct answer was "${trueGcd}".\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}`;
};


export const arithProg = () => {
  console.log('What number is missing in the progression?');
  let result = 0;
  while (result !== 3) {
    const missing = makeProgr();
    console.log(`Question: ${missing.join(' ')}`);
    const yourAns = readlineSync.question('Your answer: ');
    if (Number(yourAns) === hidden) {
      console.log('Correct!');
      result += 1;
    } else {
      return `"${yourAns}" is wrong answer ;(. Correct answer was "${hidden}".\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}`;
  };
