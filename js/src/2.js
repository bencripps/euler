import fib from './util/fib';
import exec from './util/exec';

const func = max => {
    const generator = fib();
    let curr = 0;
    let sum = 0;

    while (curr < max) {
        curr = generator.next().value;

        sum += curr % 2 === 0
            ? curr
            : 0;
    }

    return sum;
};

exec(func.bind(null, 4000000));

