import exec from './util/exec';
import getArray from './util/getArray';

const NUMBER = 100;

const func = n => {
    const numbers = getArray(n + 1, 1);
    const sumOfSquares = numbers.reduce((prev, curr) => {
        prev += Math.pow(curr, 2);
        return prev;
    }, 0);
    const squareOfSum = Math.pow(numbers.reduce((prev, curr) => prev + curr), 2);

    return squareOfSum - sumOfSquares;
};

exec(func.bind(null, NUMBER));
