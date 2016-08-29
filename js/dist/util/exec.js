"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var exec = exports.exec = function exec(cb) {
    var before = Date.now();
    console.log(cb());
    console.log("Finished in " + (Date.now() - before) + " milliseconds");
};

exports.default = exec;