

const fib = (a, b, i) => {

    if (String(a).length > 1000) {
        return i;
    }

    fib(a + b, a, i+=1);
};

console.log(fib(1, 0, 0))