/* 
* @Author: ben_cripps
* @Date:   2015-01-07 22:02:58
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-01-07 22:22:54
*/

'use strict';

var names = require('./names.js');

function getValue(name, index){
    var alpha = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        score = 0;

    name.split('').forEach(function(n) {
        score+= alpha.indexOf(n);
    });
    return score * (index + 1);
}

function sum(a,b){ return a+b };

console.log(names.map(getValue).reduce(sum))