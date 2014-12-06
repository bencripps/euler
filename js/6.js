/* 
* @Author: ben_cripps
* @Date:   2014-12-05 20:17:44
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-05 20:30:24
*/

'use strict';

function euler(n) {
    for ( var sums = 0, sqs=0, i = 1; i <= n; i++ ) {
        sums+= i;
        sqs+= Math.pow(i,2);
    }
    return Math.pow(sums, 2) - sqs;
}

console.log( euler(100) );