(ns proj7.core
  (:gen-class))

(defn prime? [n]
   (let [divisors (range 2 (inc (int (Math/sqrt n))))
         remainders (map #(rem n %) divisors)]
   (not (some zero? remainders))))

(defn -main [& args]
    "Euler Project 7"
    (->>
        (nthrest (range) 1)
        (filter prime?)
        (take 10002)
        last
        println))
