import randomNumber from './numbers';

export let hidden = 0;
export const makeProgr = () => {
  const numTostart = randomNumber(1, 100);
  const progress = randomNumber(1, 100);
  const progArr = [];
  for (let i = numTostart; progArr.length < 10; i += progress) {
    progArr.push(i);
  }
  hidden = progArr[Math.floor(Math.random() * progArr.length)];
  const dots = '..';
  progArr[progArr.indexOf(hidden)] = dots;
  return progArr;
};
