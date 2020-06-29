import randomNumber from '../random';
import playGame from '../index';

const condition = 'What number is missing in the progression?';

const getQuestionAnswer = () => {
  const firstNum = randomNumber(1, 100);
  const commonDifference = randomNumber(1, 100);
  const progression = [];
  const lengthOfprogression = 10;
  for (let i = firstNum; progression.length < lengthOfprogression; i += commonDifference) {
    progression.push(i);
  }
  const lastIndex = progression.length - 1;
  const correctAnswer = progression[randomNumber(0, lastIndex)];
  const hiddenNum = '..';
  progression[progression.indexOf(correctAnswer)] = hiddenNum;
  const question = progression.join(' ');
  return [question, correctAnswer.toString()];
};

const playProgressionGame = () => playGame(condition, getQuestionAnswer);

export default playProgressionGame;
