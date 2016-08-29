export function* fib(prev = 1, curr = 0) {
    let temp;
    while (true) {
        temp = curr;
        curr = curr + prev;
        prev = temp;
        yield curr;
    }
}

export default fib;
