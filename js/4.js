/* 
* @Author: ben_cripps
* @Date:   2014-12-05 19:51:04
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-05 20:03:23
*/

'use strict';

function isNumericPalindrome(n) {
	return n === parseInt( String(n).split('').reverse().join('') );
}

function loop(n) {
	for (var i = n; i >= 0; i--) {
		if ( isNumericPalindrome( n * i ) ) return ['The palindrome is ', n * i, ', and the multiples are ', n, ' and 999'].join('');
	}
}

console.log( loop(999) )
