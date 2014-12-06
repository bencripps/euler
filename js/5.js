/* 
* @Author: ben_cripps
* @Date:   2014-12-05 20:04:00
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-05 20:17:27
*/

'use strict';

function isDivisibleBy(f, l, n) {
    for ( var i = f; i <= l; i++ ) {

        if ( n % i !== 0 ) return false;

    }
    return true;
}   

function getSmallest(n) {
    var fin = false;
    while (!fin) {
        if ( !isDivisibleBy(1,20, n) ){
            isDivisibleBy(1,20, n+=1);
        }
        else {
            fin = true;
        }
    }
    return n;
}

console.log( getSmallest(1) );
