import exec from './util/exec';
import getArray from './util/getArray';
import isPrime from './util/isPrime';

const NUMBER = 2000000;

const func = n => getArray(n, 2)
    .filter(isPrime)
    .reduce((a, b) => a + b);

exec(func.bind(null, NUMBER));
