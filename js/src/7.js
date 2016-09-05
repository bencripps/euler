import exec from './util/exec';
import getArray from './util/getArray';
import isPrime from './util/isPrime';

const NUMBER = 10001;

function* getter() {
    let start = 1;

    while (true) {
        if (isPrime(start)) {
            yield start;
            start++;
        }
        start++;
    }
}

const func = num => {
    const generator = getter(num);
    return getArray(num + 1, 1)
        .map(i => generator.next().value).pop();
};

exec(func.bind(null, NUMBER));
