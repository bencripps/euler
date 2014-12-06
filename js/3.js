/* 
* @Author: ben_cripps
* @Date:   2014-12-05 19:31:48
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-05 19:50:45
*/

'use strict';

function isPrime(n) {
	var isPrime = false;
	for ( var i = 2; i<= Math.sqrt(n); i++ ) {
		if ( n % i === 0 ) return false;
	}
	return true;
}

function getLargestPrime(n) {
	for ( var i = Math.floor(n/2); i >= 0; i--) {
		if ( isPrime(i) ) return i;
	}
}

console.log(getLargestPrime(600851475143))