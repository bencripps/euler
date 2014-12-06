/* 
* @Author: ben_cripps
* @Date:   2014-12-05 22:50:23
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-05 22:55:17
*/

'use strict';

function isPrime(n) {
    var isPrime = false;
    for ( var i = 2; i<= Math.sqrt(n); i++ ) {
        if ( n % i === 0 ) return false;
    }
    return true;
}

function getAllPrimes(n) {
    var arr = [];
    for ( var i = n; i >= 0; i--) {
        if ( isPrime(i) ) arr.push(i);
    }
    return arr;
}

function sum(arr) {
    return arr.reduce(function(a,b){ return a+b;});
}

console.log(sum(getAllPrimes(2000000)));