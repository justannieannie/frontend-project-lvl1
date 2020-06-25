import randomNumber from '../random';
import playGame from '../index';

const condition = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  const squareRoot = Math.sqrt(num);
  for (let i = 2; i < squareRoot; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswer = () => {
  const question = randomNumber(1, 100);
  const correctResult = isPrime(question) ? 'yes' : 'no';
  return [question, correctResult];
};

const playPrimeGame = () => playGame(condition, getQuestionAnswer);

export default playPrimeGame;
