import { randomNumber } from './additional';


export const conditionOfcalc = 'What is the result of the expression?';

export const questionCalc = () => {
  const operators = ['+', '-', '*'];
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const randomOper = operators[Math.floor(Math.random() * operators.length)];
  const arrToask = [num1, randomOper, num2];
  console.log(`Question: ${arrToask.join(' ')}`);
  return arrToask;
};

const correctcalc = (num1, randomOper, num2) => {
  let resultOfcalc = 0;
  switch (randomOper) {
    case '+':
      resultOfcalc = num1 + num2;
      break;
    case '-':
      resultOfcalc = num1 - num2;
      break;
    default:
      resultOfcalc = num1 * num2;
      break;
  }
  return resultOfcalc.toString();
};

export const correctResultOfcalc = (arr) => correctcalc(arr[0], arr[1], arr[2]);
