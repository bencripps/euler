'use strict';

var _exec = require('./util/exec');

var _exec2 = _interopRequireDefault(_exec);

var _getArray = require('./util/getArray');

var _getArray2 = _interopRequireDefault(_getArray);

var _factorial = require('./util/factorial');

var _factorial2 = _interopRequireDefault(_factorial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = 20;

var func = function func(n) {
  return (0, _factorial2.default)(2 * n) / ((0, _factorial2.default)(n) * (0, _factorial2.default)(n));
};

(0, _exec2.default)(func.bind(null, NUMBER));