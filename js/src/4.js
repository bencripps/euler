import exec from './util/exec';
import getArray from './util/getArray';

const NUMBER = 999;

function* getter(n) {
    let start = n;
    let end = n;
    let last = 'start';

    while (start > 100 && end > 100) {
        if (last === 'start') {
            start--;
            last = 'end';
        }

        else {
            end--;
            last = 'start';
        }

        yield start * end;
    }
}

const isPalindrome = num => String(num) === String(num)
    .split('')
    .reverse()
    .join('');

const func = num => {

    let VALUE = false;
    const generator = getter(num);

    while (!VALUE) {
        const { value } = generator.next();
        VALUE = isPalindrome(value)
            ? value
            : false;
    }

    return VALUE;
};

exec(func.bind(null, NUMBER));
