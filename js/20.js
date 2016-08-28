/* 
* @Author: ben_cripps
* @Date:   2014-12-21 11:54:11
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-21 11:55:11
*/

'use strict';

function factorial(n) {
    var ret = 1;
    for ( var i = n; i > 1; i-- ) {
        ret*= i;
        
    }       
    return ret;
}

console.log(factorial(100));