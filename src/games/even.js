import randomNumber from '../random';
import playGame from '../index';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAnswer = () => {
  const question = randomNumber(1, 100);
  const correctResult = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctResult];
};

const playEvenGame = () => playGame(condition, getQuestionAnswer);

export default playEvenGame;
