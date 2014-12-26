(ns proj4.core
  (:gen-class))

(defn palindrome? [num] 
    (->> num 
        str
        reverse
        (apply str)
        Long/parseLong
        (= num)))

(def all-products 
  (for [x (range 100 1000)
        y (range 100 1000)]
  (* x y)))

(defn -main [& args]
  "Euler Problem 4"
  (println (apply max (filter palindrome? all-products))))
