#!/src/bin/env node
import { name, game } from '../index';
import { conditionOfcalc, questionCalc, correctResultOfcalc } from '../games/calcOperation';

game(name, conditionOfcalc, questionCalc, correctResultOfcalc);
