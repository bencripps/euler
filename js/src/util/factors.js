export const factors = n => {
    const ret = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            ret.push(i);
        }
    }
    return ret;
};

export const numberOfDivisors = n => {
    const SQRT = Math.sqrt(n);
    let num = 0;

    for (let i = 1; i <= SQRT; i++) {
        if (n % i === 0) {
            num += 2;
        }
    }

    if (SQRT * SQRT === n) {
        num--;
    }

    return num;
};

export default factors;
