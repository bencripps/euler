'use strict';

var _getArray = require('./util/getArray');

var _getArray2 = _interopRequireDefault(_getArray);

var _exec = require('./util/exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = 20;

var func = function func(n) {

    var NUMBERS_TO_CHECK = (0, _getArray2.default)(n, 1).filter(function (z) {
        return [11, 12, 13, 14, 15, 16, 17, 18, 19, 20].indexOf(z) !== -1;
    });

    var DONE = false;

    var isDivisibleBy = function isDivisibleBy(n, nums) {
        return nums.every(function (i) {
            return n % i === 0;
        });
    };

    var start = n;

    while (!DONE) {
        DONE = isDivisibleBy(start, NUMBERS_TO_CHECK) ? start : false;
        start += 10;
    }

    return DONE;
};

(0, _exec2.default)(func.bind(null, NUMBER));