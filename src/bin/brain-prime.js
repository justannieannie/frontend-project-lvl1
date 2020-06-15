#!/src/bin/env node
import { name, game } from '../index';
import { questionEven } from '../games/even';
import { conditionOfprime, isPrime } from '../games/prime';

game(name, conditionOfprime, questionEven, isPrime);
