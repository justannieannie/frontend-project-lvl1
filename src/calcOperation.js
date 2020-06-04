import randomNumber from './numbers';

export const operation = () => {
  const operators = ['+', '-', '*'];
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const randomOper = operators[Math.floor(Math.random() * operators.length)];
  const task = [num1, randomOper, num2];
  return task;
};

export const correctcalc = (num1, randomOper, num2) => {
  let resultOfcalc = 0;
  switch (randomOper) {
    case '+':
    resultOfcalc = num1 + num2;
      break;
    case '-':
    resultOfcalc = num1 - num2;
      break;
    case '*':
      resultOfcalc = num1 * num2;
      break;
  }
  return resultOfcalc.toString();
};
