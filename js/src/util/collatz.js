export const collatz = n => {

    const seq = [];

    while (n !== 1) {
        seq.push(n);
        n = n % 2 === 0
            ? n / 2
            : (3 * n) + 1;
    }

    seq.push(1);

    return seq;
};

export default collatz;
