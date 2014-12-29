(ns proj6.core
  (:gen-class))

(defn -main   [& args]
  "Euler Project 6"
  (->> 
       (range 101)
       (map #(Math/pow % 2))
       (reduce +)
       (- (Math/pow (reduce + (range 101)) 2))
       println))