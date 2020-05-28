import readlineSync from 'readline-sync';
import randomNumber from './numbers';
import correctAn from './correct'


let name = '';
export const userName = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name?');
  return `Hello, ${name}!`;
};


export const question = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let result = 0;
  while (result !== 3) {
    const num = randomNumber(1, 100);
    console.log(`Question: ${num}`);
    let yourAns = readlineSync.question('Your answer:');
    if (num % 2 === 0 && yourAns == 'yes' || num % 2 !== 0 && yourAns == 'no') {
      console.log(`Correct!`);
      result += 1;
    } else {
      return `"${yourAns}" is wrong answer ;(. Correct answer was "${correctAn(yourAns)}".\nLet's try again, ${name}!`;
      break;
    }
  }
return `Congratulations, ${name}`;
};
