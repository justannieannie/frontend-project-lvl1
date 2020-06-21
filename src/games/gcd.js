import randomNumber from '../numbers';
import game from '../index';

const conditionOfgcd = 'Find the greatest common divisor of given numbers.';

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
  return (firstNum + secondNum).toString();
};

const getQuestionAnswerOfgcd = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const collOfnumbers = [num1, num2];
  const correctResultOfgcd = getGcd(collOfnumbers[0], collOfnumbers[1]);
  const question = collOfnumbers.join(' ');
  return [question, correctResultOfgcd];
};

export const gameOfgcd = () => game(conditionOfgcd, getQuestionAnswerOfgcd);
