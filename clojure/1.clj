; @Author: ben_cripps
; @Date:   2014-12-13 13:58:02
; @Last Modified by:   ben_cripps
; @Last Modified time: 2014-12-13 13:58:08

(reduce + (filter #(or (zero? (mod % 3)) (zero? (mod % 5))) (range 1000)))