'use strict';

var _bigInteger = require('big-integer');

var _bigInteger2 = _interopRequireDefault(_bigInteger);

var _exec = require('./util/exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = '\n    10715086071862673209\n    48425049060001810561\n    40481170553360744375\n    03883703510511249361\n    22493198378815695858\n    12759467291755314682\n    51871452856923140435\n    98457757469857480393\n    45677748242309854210\n    74605062371141877954\n    18215304647498358194\n    12673987675591655439\n    46077062914571196477\n    68654216766042983165\n    2624386837205668069376'.replace(/\n\s+/g, '');

var func = function func(n) {
    return n.split('').reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    });
};

(0, _exec2.default)(func.bind(null, NUMBER));