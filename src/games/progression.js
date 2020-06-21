import randomNumber from '../numbers';
import game from '../index';

const conditionOfprogression = 'What number is missing in the progression?';

const getQuestionAnswerOfprogression = () => {
  const firstNum = randomNumber(1, 100);
  const numOfprogression = randomNumber(1, 100);
  const collOfprogression = [];
  for (let i = firstNum; collOfprogression.length < 10; i += numOfprogression) {
    collOfprogression.push(i);
  }
  const hiddenNum = collOfprogression[Math.floor(Math.random() * collOfprogression.length)];
  const dots = '..';
  collOfprogression[collOfprogression.indexOf(hiddenNum)] = dots;
  const question = collOfprogression.join(' ');
  return [question, hiddenNum.toString()];
};

const gameOfprogression = () => game(conditionOfprogression, getQuestionAnswerOfprogression);

export default gameOfprogression;
