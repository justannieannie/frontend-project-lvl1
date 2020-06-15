#!/src/bin/env node
import { name, game } from '../index';
import { conditionEven, questionEven, correctEven } from '../games/even';

game(name, conditionEven, questionEven, correctEven);
