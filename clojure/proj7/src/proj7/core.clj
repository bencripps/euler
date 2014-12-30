(ns proj7.core
  (:gen-class))

(defn prime? [n]
    (and
        (not (#{0 1} n))
        (let [divisors (range 2 (inc (int (Math/sqrt n))))
              remainders (map #(rem n %) divisors)]
        (not (some zero? remainders)))))

(defn -main [& args]
    "Euler Project 7"
    (->>
        (range)
        (filter prime?)
        (take 10001)
        last
        println))
