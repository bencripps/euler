const amicable = max => {

    const divisors = {};

    for (var i = 0; i < max; i++) {
        divisors[i] = getDivisors(i).reduce((a,b) => a + b, 0);
    }

    return Object.keys(divisors)
        .filter(getMatches.bind(null, divisors))
        .reduce((a,b) => parseInt(a) + parseInt(b), 0);
};

const getDivisors = num => {
    const divisors = [];
    
    for (var i = Math.ceil(num / 2); i > 0; i--) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
};

const getMatches = (divisors, k) => (
    parseInt(divisors[divisors[k]]) === parseInt(k) 
        && parseInt(k) !== divisors[k]
);

console.log(amicable(10000));