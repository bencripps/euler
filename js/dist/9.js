'use strict';

var _exec = require('./util/exec');

var _exec2 = _interopRequireDefault(_exec);

var _getArray = require('./util/getArray');

var _getArray2 = _interopRequireDefault(_getArray);

var _getTriplet = require('./util/getTriplet');

var _getTriplet2 = _interopRequireDefault(_getTriplet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [getter].map(regeneratorRuntime.mark);

var NUMBER = 1000;

function getter(num) {
    var m, n;
    return regeneratorRuntime.wrap(function getter$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    m = 0;

                case 1:
                    if (!(m < num)) {
                        _context.next = 12;
                        break;
                    }

                    n = 0;

                case 3:
                    if (!(n < num)) {
                        _context.next = 9;
                        break;
                    }

                    _context.next = 6;
                    return (0, _getTriplet2.default)(m, n);

                case 6:
                    n++;
                    _context.next = 3;
                    break;

                case 9:
                    m++;
                    _context.next = 1;
                    break;

                case 12:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var func = function func(n) {
    var generator = getter(n);
    var FOUND = void 0;

    while (!FOUND) {
        var _generator$next = generator.next();

        var value = _generator$next.value;

        var valid = value.reduce(function (a, b) {
            return a + b;
        }) === n && value.every(function (a) {
            return a > 0;
        });

        FOUND = valid ? value : false;
    }

    return FOUND.reduce(function (a, b) {
        return a * b;
    });
};

(0, _exec2.default)(func.bind(null, NUMBER));