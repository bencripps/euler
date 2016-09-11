'use strict';

var _exec = require('./util/exec');

var _exec2 = _interopRequireDefault(_exec);

var _collatz = require('./util/collatz');

var _collatz2 = _interopRequireDefault(_collatz);

var _getArray = require('./util/getArray');

var _getArray2 = _interopRequireDefault(_getArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = 1000000;

var func = function func(n) {
    return (0, _getArray2.default)(n + 1, 1).reduce(function (prev, curr, i) {
        return Math.max(prev.len, (0, _collatz2.default)(curr).length) === prev.len ? prev : { num: i, len: (0, _collatz2.default)(curr).length };
    }, {}).num;
};

(0, _exec2.default)(func.bind(null, NUMBER));