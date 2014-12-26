(ns proj5.core
  (:gen-class))

(defn divisible-by-1-20 [n] 
    (every? #(zero? (rem n %)) (range 1 21)))

(defn all-numbers [n]
    (cons n (lazy-seq (all-numbers (inc n)))))

(defn -main [& args]
    "Euler Project 5"
    (println (first (filter divisible-by-1-20 (all-numbers 20)))))