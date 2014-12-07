/* 
* @Author: ben_cripps
* @Date:   2014-12-05 20:54:54
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-07 16:17:19
*/

'use strict';

function getTriplet(a,b,c) {
    var m = Math.pow
    return [m(a,2), m(b,2), m(c,2)];
}

function isTriplet(a) {
    return a[0] + a[1] === a[2]
}

function sum(arr, m) {
    return arr.reduce(function(p,n) { return p + n; }) === m;
} 





// console.log( doTriplet(0,1000) );


// function doTriplet(n,m) {
//     for ( var i = n; i<=n+1;i++ ) {
//         if ( isTriplet( getTriplet(i, i+1, i+2) ) && sum([i, i+1, i+2], m) ) return ['A= ', i,'B= ', i + 1, 'C= ', 2].join('');
//     }
//     doTriplet(n+1,m);
// }