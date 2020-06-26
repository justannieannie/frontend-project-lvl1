import randomNumber from '../random';
import playGame from '../index';

const condition = 'What is the result of the expression?';

const getCorrectAnswer = (num1, randomOperator, num2) => {
  let result;
  switch (randomOperator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator: '${randomOperator}'!`);
  }
  return result;
};

const getQuestionAnswer = () => {
  const operators = ['+', '-', '*'];
  const lastOperator = operators.length - 1;
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const randomOperator = operators[randomNumber(0, lastOperator)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctResult = getCorrectAnswer(num1, randomOperator, num2);
  return [question, correctResult.toString()];
};

const playCalcGame = () => playGame(condition, getQuestionAnswer);

export default playCalcGame;
