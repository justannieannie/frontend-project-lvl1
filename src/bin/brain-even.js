#!/src/bin/env node
import { greeting, game } from '../index';
import { conditionEven, questionEven, correctEven } from '../games/even';

const name = greeting();
console.log(game(name, conditionEven, questionEven, correctEven));
