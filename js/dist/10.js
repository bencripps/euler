'use strict';

var _exec = require('./util/exec');

var _exec2 = _interopRequireDefault(_exec);

var _getArray = require('./util/getArray');

var _getArray2 = _interopRequireDefault(_getArray);

var _isPrime = require('./util/isPrime');

var _isPrime2 = _interopRequireDefault(_isPrime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = 2000000;

var func = function func(n) {
    return (0, _getArray2.default)(n, 2).filter(_isPrime2.default).reduce(function (a, b) {
        return a + b;
    });
};

(0, _exec2.default)(func.bind(null, NUMBER));