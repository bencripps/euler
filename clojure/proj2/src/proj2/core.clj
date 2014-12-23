(ns proj2.core
  (:gen-class))

(defn fib [x y l hsh]
    (let [next-value (+ x y)
          updated-hash (conj hsh next-value)]
    (if (< x l)
        (fib next-value x l updated-hash)
        updated-hash)))

(defn -main
  "Euler problem 2"
  [& args]
  (println (reduce + (filter even? (fib 0 1 4000000 #{})))))
