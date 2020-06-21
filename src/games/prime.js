import randomNumber from '../numbers';
import game from '../index';

const conditionOfprime = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  const half = Math.sqrt(num);
  for (let i = 2; i < half; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswerOfprime = () => {
  const question = randomNumber(1, 100);
  const correctResultOfprime = isPrime(question) ? 'yes' : 'no';
  return [question, correctResultOfprime];
};

const gameOfprime = () => game(conditionOfprime, getQuestionAnswerOfprime);

export default gameOfprime;
