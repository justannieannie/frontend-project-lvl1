import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};

export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
