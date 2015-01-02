(ns proj16.core
  (:gen-class)
  (:require [clojure.string :as str])
  (:require [clojure.math.numeric-tower :as math]))

(defn -main [& args]
    "Project Euler 16"
    (println (reduce + (map #(Long/parseLong (str %)) (str (math/expt 2 1000))))))