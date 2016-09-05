'use strict';

var _exec = require('./util/exec');

var _exec2 = _interopRequireDefault(_exec);

var _getArray = require('./util/getArray');

var _getArray2 = _interopRequireDefault(_getArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = 100;

var func = function func(n) {
    var numbers = (0, _getArray2.default)(n + 1, 1);
    var sumOfSquares = numbers.reduce(function (prev, curr) {
        prev += Math.pow(curr, 2);
        return prev;
    }, 0);
    var squareOfSum = Math.pow(numbers.reduce(function (prev, curr) {
        return prev + curr;
    }), 2);

    return squareOfSum - sumOfSquares;
};

(0, _exec2.default)(func.bind(null, NUMBER));