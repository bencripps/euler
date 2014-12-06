/* 
* @Author: ben_cripps
* @Date:   2014-12-05 20:30:46
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-05 20:42:05
*/

'use strict';

function isPrime(n) {
    var isPrime = false;
    for ( var i = 2; i<= Math.sqrt(n); i++ ) {
        if ( n % i === 0 ) return false;
    }
    return true;
}

function getNthPrime(lim) {
    var primes = 0, counter = 0;
    while (primes < lim) {
        if ( !isPrime(counter) ) primes+=1;
        counter+=1;
    }
    return counter
}

console.log(getNthPrime(10001));