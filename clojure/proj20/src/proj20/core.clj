(ns proj20.core
  (:gen-class))

(defn factorial [n]
    (reduce *' (range 1 n)))

(defn -main [& args]
    "Project Euler 20"
    (->>
        (str (factorial 100))
        (map #(Character/getNumericValue %))
        (reduce +)
        println))
