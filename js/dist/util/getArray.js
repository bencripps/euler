"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getArray = exports.getArray = function getArray(size) {
    var start = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    var arr = [];
    for (var i = start; i < size; i++) {
        arr.push(i);
    }
    return arr;
};

exports.default = getArray;