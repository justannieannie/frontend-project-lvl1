import randomNumber from '../numbers';
import game from '../index';

const conditionOfeven = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAnswerOfeven = () => {
  const question = randomNumber(1, 100);
  const correctResultOfeven = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctResultOfeven];
};

const gameOfeven = () => game(conditionOfeven, getQuestionAnswerOfeven);

export default gameOfeven;
