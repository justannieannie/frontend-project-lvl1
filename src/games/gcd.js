import randomNumber from '../random';
import playGame from '../index';

const condition = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let firstNum = num1;
  let secondNum = num2;
  while (firstNum !== 0 && secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
  }
  return (firstNum + secondNum);
};

const getQuestionAnswer = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const correctResult = getGcd(num1, num2);
  const question = `${num1} ${num2}`;
  return [question, correctResult.toString()];
};

const playGcdGame = () => playGame(condition, getQuestionAnswer);

export default playGcdGame;
