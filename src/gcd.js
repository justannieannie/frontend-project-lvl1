import randomNumber from './numbers';

export const numToAsk = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const numArr = [num1, num2];
  return numArr;
};

export const correctDiv = (num1, num2) => {
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
