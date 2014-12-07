/* 
* @Author: ben_cripps
* @Date:   2014-12-05 19:05:15
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-07 09:41:58
*/

'use strict';

function getFib(p, n) {

    var tot = 0; 

    function fib(p, n) {

    	if (n % 2 === 0) {
    		tot+= n;
    	}
    	if (n < 40000000) {
    		fib( n || 1, n + p);
    	}
    }

    fib(p,n);
    return tot;
}    

console.log( getFib(0, 1) );