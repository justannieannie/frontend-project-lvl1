#!/src/bin/env node
import { greeting, game } from '../index';
import { conditionOfgcd, questionOfgcd, correctResultOfgcd } from '../games/gcd';

const name = greeting();
console.log(game(name, conditionOfgcd, questionOfgcd, correctResultOfgcd));
