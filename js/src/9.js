import exec from './util/exec';
import getArray from './util/getArray';
import getTriplet from './util/getTriplet';

const NUMBER = 1000;

function* getter(num) {
    for (let m = 0; m < num; m++) {
        for (let n = 0; n < num; n++) {
            yield getTriplet(m, n);
        }
    }
}

const func = n => {
    const generator = getter(n);
    let FOUND;

    while (!FOUND) {
        const { value } = generator.next();
        const valid = value.reduce((a, b) => a + b) === n
            && value.every(a => a > 0);

        FOUND = valid
            ? value
            : false;
    }

    return FOUND.reduce((a, b) => a * b);
}

exec(func.bind(null, NUMBER));
