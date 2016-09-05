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

exports.default = factors;