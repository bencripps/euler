'use strict';

var _fib = require('./util/fib');

var _fib2 = _interopRequireDefault(_fib);

var _exec = require('./util/exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var func = function func(max) {
    var generator = (0, _fib2.default)();
    var curr = 0;
    var sum = 0;

    while (curr < max) {
        curr = generator.next().value;

        sum += curr % 2 === 0 ? curr : 0;
    }

    return sum;
};

(0, _exec2.default)(func.bind(null, 4000000));