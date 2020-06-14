#!/src/bin/env node
import { greeting, game } from '../index';
import { conditionOfcalc, questionCalc, correctResultOfcalc } from '../games/calcOperation';

const name = greeting();
console.log(game(name, conditionOfcalc, questionCalc, correctResultOfcalc));
