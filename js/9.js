/* 
* @Author: ben_cripps
* @Date:   2014-12-05 20:54:54
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-01-04 15:56:42
*/

'use strict';

function getTriplets(set){
    var m = set[0], n = set[1];

    var a = Math.pow(m,2) - Math.pow(n,2),
        b = 2 * (m * n),
        c = Math.pow(m,2) + Math.pow(n,2);

    return [a,b,c];
}

function isCorrectTriplet(set) {
    return set[0] + set[1] + set[2] === 1000 && set.every(function(a) {return a > 0;});
}

function getPossibilities() {
    var possibleTriplets = [];
    for (var m = 1; m <= 200; m++){
        for (var n = 1; n <= 200; n++) {
            possibleTriplets.push([m,n]);
        }
    }
    return possibleTriplets;
}

function getProduct(set) {
    return set[0].reduce(function(a,b) { return a*b; });
}

console.log(getProduct(getPossibilities().map(getTriplets).filter(isCorrectTriplet)));
