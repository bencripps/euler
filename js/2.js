/* 
* @Author: ben_cripps
* @Date:   2014-12-05 19:05:15
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-05 19:31:23
*/

'use strict';

var tot = 0;

var fib = function( p, n ) {

	if (n % 2 === 0) {
		tot+= n;
	}

	if (n < 40000000) {
		fib( n || 1, n + p);
	}

	else {
		console.log(tot);
	}

}

fib(0, 1);