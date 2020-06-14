#!/src/bin/env node
import { greeting, game } from '../index';
import { conditionOfprogression, questionOfprogress, correctMissing } from '../games/progression';

const name = greeting();
console.log(game(name, conditionOfprogression, questionOfprogress, correctMissing));
