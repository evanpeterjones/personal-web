(ns rss
  (:require [clj-http.client :as req]
            [clojure.java.io :as io]
            [clojure.xml :as xml]))

(defn parse-xml [xml]
  "given a valid xml string will return a map"
  (-> xml .getBytes io/input-stream xml/parse))

(defn req [u]
  (req/get u))

(defn get-rss-data-from-url [u]
  (-> u req :body parse-xml))

(def items
  (fn [i] (= :item (:tag i))))

(def -get-rss-items
  "takes the xml map returned by get-rss-data-from-url"
  (fn [xml-map]
    (->> xml-map
         :content
         first
         :content
         (filter items))))

(defn get-data-from-url [url]
  (-> url
      get-rss-data-from-url
      -get-rss-items))

(def url "http://encountersthepodcast.libsyn.com/rss")
(def res (get-rss-data-from-url url))
(def r (-get-rss-items res))
