(ns rss
  (:require [clj-http.client :as req]
            [clojure.java.io :as io]
            [clojure.xml :as xml]))

(defn parse-xml [xml]
  "given a valid xml string will return a map"
  (-> xml .getBytes io/input-stream xml/parse))

(defn req [url]
  (req/get url))
