"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fib = fib;

var _marked = [fib].map(regeneratorRuntime.mark);

function fib() {
    var prev = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
    var curr = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
    var temp;
    return regeneratorRuntime.wrap(function fib$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    temp = void 0;

                case 1:
                    if (!true) {
                        _context.next = 9;
                        break;
                    }

                    temp = curr;
                    curr = curr + prev;
                    prev = temp;
                    _context.next = 7;
                    return curr;

                case 7:
                    _context.next = 1;
                    break;

                case 9:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

exports.default = fib;