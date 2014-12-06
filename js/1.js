/* 
* @Author: ben_cripps
* @Date:   2014-12-05 18:58:56
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-06 14:46:51
*/

'use strict';

for ( var sum = 0, i = 0; i < 1000; i++ ) {
    if ( i % 3 === 0 || i % 5 === 0) {
        sum+=i;
    }
}

console.log(sum);