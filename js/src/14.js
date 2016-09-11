import exec from './util/exec';
import collatz from './util/collatz';
import getArray from './util/getArray';

const NUMBER = 1000000;

const func = n => getArray(n + 1, 1)
    .reduce((prev, curr, i) => Math.max(prev.len, collatz(curr).length) === prev.len
        ? prev
        : { num: i, len: collatz(curr).length }, {}).num;

exec(func.bind(null, NUMBER));
