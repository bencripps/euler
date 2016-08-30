export const factors = n => {
    const ret = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            ret.push(i);
        }
    }
    return ret;
};

export default factors;
