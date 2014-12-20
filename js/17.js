/* 
* @Author: ben_cripps
* @Date:   2014-12-19 18:15:03
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-20 12:03:20
*/

'use strict';

function countLetters(num) {
    var numDict = {
        single: [0,3,3,5,4,4,3,5,5,4,3,6,6,8,8,7,7,9,8,8],
        double: [0,3,6,6,5,5,5,7,6,6],
        hundred: 7,
        thousand: 8,
        and: 3
    },
    count = 0,
    sin,
    dub,
    hun;
    
    for ( var i=1; i<=num; i++) {

        sin = i % 10;
        dub = ((i % 100) - sin) / 10 ;
        hun = ((i % 1000) - (dub * 10) - sin) / 100;

        if (hun) {
            count+= numDict.single[sin] + numDict.hundred + numDict.and + numDict.double[dub] + numDict.single[sin];
        }

        else if (dub) {
            count+= numDict.double[dub] + numDict.single[sin];
        }

        else {
            count+= numDict.single[sin];
        }
    }

    return count;
}

console.log(countLetters(999));