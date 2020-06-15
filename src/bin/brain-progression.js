#!/src/bin/env node
import { name, game } from '../index';
import { conditionOfprogression, questionOfprogress, correctMissing } from '../games/progression';

game(name, conditionOfprogression, questionOfprogress, correctMissing);
