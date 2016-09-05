'use strict';

var _exec = require('./util/exec');

var _exec2 = _interopRequireDefault(_exec);

var _getArray = require('./util/getArray');

var _getArray2 = _interopRequireDefault(_getArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [getter].map(regeneratorRuntime.mark);

var NUMBER = 999;

function getter(n) {
    var start, end, last;
    return regeneratorRuntime.wrap(function getter$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    start = n;
                    end = n;
                    last = 'start';

                case 3:
                    if (!(start > 100 && end > 100)) {
                        _context.next = 9;
                        break;
                    }

                    if (last === 'start') {
                        start--;
                        last = 'end';
                    } else {
                        end--;
                        last = 'start';
                    }

                    _context.next = 7;
                    return start * end;

                case 7:
                    _context.next = 3;
                    break;

                case 9:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var isPalindrome = function isPalindrome(num) {
    return String(num) === String(num).split('').reverse().join('');
};

var func = function func(num) {

    var VALUE = false;
    var generator = getter(num);

    while (!VALUE) {
        var _generator$next = generator.next();

        var value = _generator$next.value;

        VALUE = isPalindrome(value) ? value : false;
    }

    return VALUE;
};

(0, _exec2.default)(func.bind(null, NUMBER));