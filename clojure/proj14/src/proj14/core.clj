(ns proj14.core
  (:gen-class))

(defn get-next [n]
    (if (even? n) 
        (/ n 2)
        (inc (* 3 n))))

(defn collatz-sequence-length [n]
    (loop [origin n
           times 0
           number n]
        (if (#{0 1} number)
            [origin times]
            (recur origin (inc times) (get-next number)))))

(defn -main [& args]
    "Euler Project 14"
    (->>
        (range 1000000)
        (map collatz-sequence-length)
        (apply max-key second)
        first 
        println))
