import readlineSync from 'readline-sync';

export const getName = () => {
  const user = readlineSync.question('May I have your name? ');
  return user;
};
export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
