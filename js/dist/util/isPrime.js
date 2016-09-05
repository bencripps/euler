"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var isPrime = exports.isPrime = function isPrime(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

exports.default = isPrime;