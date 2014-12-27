(ns proj5.core
  (:gen-class))

(defn divisible-by-1-20 [n] 
    (every? #(zero? (rem n %)) (range 1 21)))

(defn -main [& args]
    "Euler Project 5"
    (->>  (nthrest (range) 1)
          (filter #(zero? (rem % 20)))
          (filter divisible-by-1-20)
          first
          println))