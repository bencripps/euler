(ns proj21.core
  (:gen-class))

(defn sum-factors [n]
    "Super fast list comprehension -- modified from http://rosettacode.org/wiki/Factors_of_an_integer#Clojure"
        (reduce + (disj (into (sorted-set)
            (reduce concat
                (for [x (range 1 (Math/sqrt n)) :when (zero? (rem n x))]
                    [x (/ n x)]))) n)))

(defn amicable-number? [n]
    (let [n-sum (sum-factors n)]
        (if (and (= n (sum-factors n-sum)) (not(= n n-sum)))
            true false)))

(defn -main [& args]
    "Euler Project 21"
    (->>
        (range 10000)
        (filter amicable-number?)
        (reduce +)
        println))
