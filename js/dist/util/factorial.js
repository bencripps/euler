'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.factorial = undefined;

var _getArray = require('./getArray');

var _getArray2 = _interopRequireDefault(_getArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factorial = exports.factorial = function factorial(n) {
    return (0, _getArray2.default)(n + 1, 1).reduce(function (a, b) {
        return a * b;
    });
};

exports.default = factorial;