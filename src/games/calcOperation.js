import { randomNumber } from '../additional';


export const conditionOfcalc = 'What is the result of the expression?';

export const questionCalc = () => {
  const operators = ['+', '-', '*'];
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const randomOper = operators[randomNumber(0, 2)];
  const arrToask = [num1, randomOper, num2];
  const strToask = arrToask.join(' ');
  return [strToask, arrToask];
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

export const correctResultOfcalc = (arr) => correctcalc(arr[1][0], arr[1][1], arr[1][2]);
