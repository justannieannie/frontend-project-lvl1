#!/src/bin/env node
import { greeting, game } from '../index';
import { questionEven } from '../games/even';
import { conditionOfprime, isPrime } from '../games/prime';

const name = greeting();
console.log(game(name, conditionOfprime, questionEven, isPrime));
