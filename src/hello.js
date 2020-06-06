import readlineSync from 'readline-sync';

export let name = '';
export const userName = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
};
