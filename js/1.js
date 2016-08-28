/* 
* @Author: ben_cripps
* @Date:   2014-12-05 18:58:56
* @Last Modified by:   ben_cripps
* @Last Modified time: 2016-08-28 09:51:07
*/

'use strict';

for (var sum = 0, i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

console.log(sum);