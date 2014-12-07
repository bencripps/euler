/* 
* @Author: ben_cripps
* @Date:   2014-12-07 15:58:20
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-07 16:12:27
*/

'use strict';

function factorial(n) {
    var ret = 1;
    for ( var i = n; i > 1; i-- ) {
        ret*= i
        
    }       
    return ret;
}

function countRoutes(n) {
    var route = factorial(n);
    return ( factorial(2*n) / route * route );
}

console.log(countRoutes(20));