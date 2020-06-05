import randomNumber from './numbers';

export const numToAsk = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const numArr = [num1, num2];
  return numArr;
};

export const correctDiv = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }

  return (num1 + num2).toString();
};
