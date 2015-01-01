(ns proj12.core
  (:gen-class))

(defn triangle-number [n]
    (reduce + (range 1 (inc n))))

(defn count-divisors [n]
    "This is the naive solution for finding divisors"
    (< 500 (count (filter #(zero? (rem n %)) (range 2 (Math/pow n 1/2))))))

;super fast list comprehension
(defn count-factors [n]
    "Super fast list comprehension -- modified from http://rosettacode.org/wiki/Factors_of_an_integer#Clojure"
    (< 500 (count (into (sorted-set)
        (reduce concat
            (for [x (range 1 (inc (Math/sqrt n))) :when (zero? (rem n x))]
                [x (/ n x)]))))))

(defn -main [& args]
    "Euler Project 12"
    (println (first (filter count-factors (map triangle-number (range))))))
