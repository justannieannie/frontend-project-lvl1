import { randomNumber } from './additional';

export const conditionOfprogression = 'What number is missing in the progression?';

export const questionOfprogress = () => {
  const numTostart = randomNumber(1, 100);
  const progress = randomNumber(1, 100);
  const progArr = [];
  for (let i = numTostart; progArr.length < 10; i += progress) {
    progArr.push(i);
  }
  const hidden = progArr[Math.floor(Math.random() * progArr.length)];
  const dots = '..';
  progArr[progArr.indexOf(hidden)] = dots;
  console.log(`Question: ${progArr.join(' ')}`);
  return [progArr, hidden];
};

export const correctMissing = (arr) => arr[1].toString();
