'use strict';

var _getArray = require('./util/getArray');

var _getArray2 = _interopRequireDefault(_getArray);

var _exec = require('./util/exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sum = function sum() {
    return (0, _getArray2.default)(1000).reduce(function (prev, curr) {
        if (curr % 3 === 0 || curr % 5 === 0) {
            prev += curr;
        }
        return prev;
    }, 0);
};

(0, _exec2.default)(sum);