(ns proj3.core
  (:gen-class))

(defn prime? [n]
    (let [divisors (range 2 (Math/sqrt n))
          remainders (map #(rem n %) divisors)]
        (not (some zero? remainders))))

(defn divisors [n]
    (let [divisors (range 2 (Math/sqrt n))
          factors (filter #(zero? (rem n %)) divisors)]
        factors))

(defn -main  [& args]
  "Euler Problem 3"
  (println (apply max (filter prime? (divisors 600851475143)))))