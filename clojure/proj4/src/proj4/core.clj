(ns proj4.core
  (:gen-class))

(defn palindrome? [num] 
    (->> num 
        str
        reverse
        (apply str)
        Long/parseLong
        (= num)))

(defn products [x y]
    (cons (* x y) (lazy-seq (products x (dec y)))))

(defn -main []
  "Euler Problem 4"
  (println (first (filter palindrome? (products 999 999)))))
