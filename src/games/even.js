import { randomNumber } from '../additional';

export const conditionEven = 'Answer "yes" if the number is even, otherwise answer "no".';
export const questionEven = () => {
  const numToask = randomNumber(1, 100);
  return [numToask];
};
export const correctEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
