#!/src/bin/env node
import { name, game } from '../index';
import { conditionOfgcd, questionOfgcd, correctResultOfgcd } from '../games/gcd';

game(name, conditionOfgcd, questionOfgcd, correctResultOfgcd);
