import exec from './util/exec';
import getArray from './util/getArray';
import factorial from './util/factorial';

const NUMBER = 20;

const func = n => factorial(2 * n) / (factorial(n) * factorial(n));

exec(func.bind(null, NUMBER));
