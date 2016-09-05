'use strict';

var _exec = require('./util/exec');

var _exec2 = _interopRequireDefault(_exec);

var _isPrime = require('./util/isPrime');

var _isPrime2 = _interopRequireDefault(_isPrime);

var _factors = require('./util/factors');

var _factors2 = _interopRequireDefault(_factors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = 600851475143;

var func = function func(num) {
    return (0, _factors2.default)(num).filter(_isPrime2.default).pop();
};

(0, _exec2.default)(func.bind(null, NUMBER));