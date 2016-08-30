import exec from './util/exec';
import isPrime from './util/isPrime';
import factors from './util/factors';

const NUMBER = 600851475143;

const func = num => factors(num)
    .filter(isPrime)
    .pop();

exec(func.bind(null, NUMBER));
