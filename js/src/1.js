import getArray from './util/getArray';
import exec from './util/exec';

const sum = () => (
    getArray(1000).reduce((prev, curr) => {
        if (curr % 3 === 0 || curr % 5 === 0) {
            prev += curr;
        }
        return prev;
    }, 0)
);

exec(sum);
