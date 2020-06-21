import randomNumber from '../numbers';
import game from '../index';

const conditionOfcalc = 'What is the result of the expression?';

const getCorrectCalc = (num1, randomOper, num2) => {
  let result = 0;
  switch (randomOper) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      result = num1 * num2;
      break;
  }
  return result.toString();
};

const getQuestionAnswerOfcalc = () => {
  const operators = ['+', '-', '*'];
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const randomOper = operators[randomNumber(0, 2)];
  const collOfcalc = [num1, randomOper, num2];
  const question = collOfcalc.join(' ');
  const correctResultOfcalc = getCorrectCalc(collOfcalc[0], collOfcalc[1], collOfcalc[2]);
  return [question, correctResultOfcalc];
};

const gameOfcalc = () => game(conditionOfcalc, getQuestionAnswerOfcalc);

export default gameOfcalc;
