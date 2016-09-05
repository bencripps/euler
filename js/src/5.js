import getArray from './util/getArray';
import exec from './util/exec';

const NUMBER = 20;

const func = n => {

    const NUMBERS_TO_CHECK = getArray(n, 1)
        .filter(z => [11, 12, 13, 14, 15, 16, 17, 18, 19, 20].indexOf(z) !== -1)

    let DONE = false;

    const isDivisibleBy = (n, nums) => nums.every(i => n % i === 0);

    let start = n;

    while (!DONE) {
        DONE = isDivisibleBy(start, NUMBERS_TO_CHECK)
            ? start
            : false
        start += 10;
    }

    return DONE;
};


exec(func.bind(null, NUMBER));
