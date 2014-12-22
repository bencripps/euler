/* 
* @Author: ben_cripps
* @Date:   2014-12-21 18:26:16
* @Last Modified by:   ben_cripps
* @Last Modified time: 2014-12-21 18:40:33
*/

'use strict';

function getPermutations(n) {
  var set = [];

  function permute (arr, data) {
    var cur, memo = data || [];

    for (var i = 0; i < arr.length; i++) {
       cur = arr.splice(i, 1)[0];
       if (arr.length === 0) set.push(memo.concat([cur]));
       permute(arr.slice(), memo.concat([cur]));
       arr.splice(i, 0, cur);
    }
    return set;
 }

 return permute(n);
}

console.log(getPermutations([0,1,2,3,4,5,6,7,8,9])[1000000].join(''));