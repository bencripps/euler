"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pow = Math.pow;
var getTriplet = exports.getTriplet = function getTriplet(m, n) {
    var a = pow(m, 2) - pow(n, 2);
    var b = 2 * (m * n);
    var c = pow(m, 2) + pow(n, 2);
    return [a, b, c];
};

exports.default = getTriplet;