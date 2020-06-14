import { randomNumber } from './additional';

export const conditionOfgcd = 'Find the greatest common divisor of given numbers.';

export const questionOfgcd = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const numArr = [num1, num2];
  console.log(`Question: ${numArr.join(' ')}`);
  return numArr;
};

const correctDiv = (num1, num2) => {
  let first = num1;
  let second = num2;
  while (first !== 0 && second !== 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }

  return (first + second).toString();
};

export const correctResultOfgcd = (arr) => correctDiv(arr[0], arr[1]);
