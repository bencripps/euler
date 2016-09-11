"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var factors = exports.factors = function factors(n) {
    var ret = [];
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            ret.push(i);
        }
    }
    return ret;
};

var numberOfDivisors = exports.numberOfDivisors = function numberOfDivisors(n) {
    var SQRT = Math.sqrt(n);
    var num = 0;

    for (var i = 1; i <= SQRT; i++) {
        if (n % i === 0) {
            num += 2;
        }
    }

    if (SQRT * SQRT === n) {
        num--;
    }

    return num;
};

exports.default = factors;