'use strict';

var _exec = require('./util/exec');

var _exec2 = _interopRequireDefault(_exec);

var _getArray = require('./util/getArray');

var _getArray2 = _interopRequireDefault(_getArray);

var _isPrime = require('./util/isPrime');

var _isPrime2 = _interopRequireDefault(_isPrime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [getter].map(regeneratorRuntime.mark);

var NUMBER = 10001;

function getter() {
    var start;
    return regeneratorRuntime.wrap(function getter$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    start = 1;

                case 1:
                    if (!true) {
                        _context.next = 9;
                        break;
                    }

                    if (!(0, _isPrime2.default)(start)) {
                        _context.next = 6;
                        break;
                    }

                    _context.next = 5;
                    return start;

                case 5:
                    start++;

                case 6:
                    start++;
                    _context.next = 1;
                    break;

                case 9:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var func = function func(num) {
    var generator = getter(num);
    return (0, _getArray2.default)(num + 1, 1).map(function (i) {
        return generator.next().value;
    }).pop();
};

(0, _exec2.default)(func.bind(null, NUMBER));