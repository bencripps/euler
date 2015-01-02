(ns proj15.core
  (:gen-class))

(defn factorial [n]
    (apply * (range (bigint 1) (inc n))))

(defn -main [& args]
  "Euler Project 15"
  (let [routes (factorial 20)]
    (->> 
        (* routes routes)
        (/ (factorial (* 2 20)))
        println)))
