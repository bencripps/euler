import exec from './util/exec';
import getArray from './util/getArray';
import { numberOfDivisors } from './util/factors';

const NUMBER = 500;

function* getter() {
    let start = 1;

    while (true) {
        yield getArray(start + 1, 1)
            .reduce((a, b) => a + b);

        start+= 1;
    }
}


const func = (n) => {
    const generator = getter();
    let FOUND;

    while (!FOUND) {

        const { value } = generator.next();
        const factors = numberOfDivisors(value);

        if (factors > n) {
            FOUND = value;
        }

    }

    return FOUND;
};

exec(func.bind(null, NUMBER));
