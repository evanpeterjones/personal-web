(ns cljs-personal-web.utils.transit
  (:require [cognitect.transit :as transit])
  #?(:clj (:import [java.io ByteArrayInputStream ByteArrayOutputStream])))

(def transit-read
  (fn
    ([x] (transit-read x :json))
    ([x data-type]
     #?(:clj
        (let [in (ByteArrayInputStream. (.getBytes x))
              r (transit/reader in data-type)]
          (transit/read r))
        :cljs
        (let [r (transit/reader data-type)]
          (transit/read r x))))))

(def transit-write
  (fn
    ([x] (transit-write x :json))
    ([x data-type]
     #?(:clj (let [o (ByteArrayOutputStream. 4096)
                   json-writer (transit/writer o data-type)]
               (transit/write json-writer x)
               (.toString o))
        :cljs "not yet implemented, yikes"))))
