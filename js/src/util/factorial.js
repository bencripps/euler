import getArray from './getArray';

export const factorial = n => getArray(n + 1, 1)
    .reduce((a, b) => a * b);

export default factorial;
