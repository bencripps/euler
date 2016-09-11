'use strict';

var _exec = require('./util/exec');

var _exec2 = _interopRequireDefault(_exec);

var _getArray = require('./util/getArray');

var _getArray2 = _interopRequireDefault(_getArray);

var _factors = require('./util/factors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [getter].map(regeneratorRuntime.mark);

var NUMBER = 500;

function getter() {
    var start;
    return regeneratorRuntime.wrap(function getter$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    start = 1;

                case 1:
                    if (!true) {
                        _context.next = 7;
                        break;
                    }

                    _context.next = 4;
                    return (0, _getArray2.default)(start + 1, 1).reduce(function (a, b) {
                        return a + b;
                    });

                case 4:

                    start += 1;
                    _context.next = 1;
                    break;

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var func = function func(n) {
    var generator = getter();
    var FOUND = void 0;

    while (!FOUND) {
        var _generator$next = generator.next();

        var value = _generator$next.value;

        var factors = (0, _factors.numberOfDivisors)(value);

        if (factors > n) {
            FOUND = value;
        }
    }

    return FOUND;
};

(0, _exec2.default)(func.bind(null, NUMBER));