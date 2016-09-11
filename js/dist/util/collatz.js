"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var collatz = exports.collatz = function collatz(n) {

    var seq = [];

    while (n !== 1) {
        seq.push(n);
        n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    }

    seq.push(1);

    return seq;
};

exports.default = collatz;