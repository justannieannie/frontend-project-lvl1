import { randomNumber } from './additional';

export const conditionOfprime = 'Answer "yes" if the number is prime, otherwise answer "no".';

export const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  const half = Math.sqrt(num);
  for (let i = 2; i < half; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
