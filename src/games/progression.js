import randomNumber from '../random';
import playGame from '../index';

const condition = 'What number is missing in the progression?';

const getQuestionAnswer = () => {
  const firstNum = randomNumber(1, 100);
  const numOfprogression = randomNumber(1, 100);
  const collOfprogression = [];
  const lengthOfprogression = 10;
  for (let i = firstNum; collOfprogression.length < lengthOfprogression; i += numOfprogression) {
    collOfprogression.push(i);
  }
  const lastNumber = collOfprogression.length - 1;
  const hiddenNum = collOfprogression[randomNumber(0, lastNumber)];
  const missingNum = '..';
  collOfprogression[collOfprogression.indexOf(hiddenNum)] = missingNum;
  const question = collOfprogression.join(' ');
  return [question, hiddenNum.toString()];
};

const playProgressionGame = () => playGame(condition, getQuestionAnswer);

export default playProgressionGame;
