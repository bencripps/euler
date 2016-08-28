(ns proj2.core
  (:gen-class))

(defn fib [x y l old-hash]
    (let [next-value (+ x y)]
    (if (< x l)
        (fib next-value x l (conj old-hash next-value))
        old-hash)))

(defn -main
  "Euler problem 2"
  [& args]
  (println (reduce + (filter even? (fib 0 1 4000000 #{})))))
