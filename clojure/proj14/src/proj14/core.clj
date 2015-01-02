(ns proj14.core
  (:gen-class))

(defn get-next [n]
    (if (even? n) 
        (/ n 2)
        (inc (* 3 n))))

(defn collatz-sequence [n]
    (loop [origin n
           times 0
           number n]
        (if (or (= 1 number) (zero? number))
            [origin times]
            (recur origin (inc times) (get-next number)))))

(defn -main [& args]
    "Euler Project 14"
    (->>
        (range 1000000)
        (map collatz-sequence)
        (apply max-key second)
        println))
