(ns proj9.core
  (:gen-class))

(defn square [n]
    (* n n))

(defn get-triplet [m n]
    (let [a (- (square n) (square m))
          b (* 2 (* n m))
          c (+ (square n) (square m))]
        [a b c]))

(defn pythagorean-triple [[m n]]
    (and 
        (< m n)
        (let [[a b c] (get-triplet m n)]
            (= (+ a b c) 1000))))

(defn get-product [[m n]]
     (let [[a b c] (get-triplet m n)]
         (* a b c)))

(def nums 
    (filter pythagorean-triple 
        (for [m (range 1 1000)
              n (range 1 1000)]
            [m n])))

(defn -main [& args]
    "Euler Problem 9"
    (println (get-product (flatten (first nums)))))
