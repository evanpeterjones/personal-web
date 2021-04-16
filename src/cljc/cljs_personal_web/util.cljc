(ns cljs-personal-web.util
  (:require [cognitect.transit :as t])
  #?(:clj (:import [java.io ByteArrayInputStream ByteArrayOutputStream])))

(def get-nth-key-content
  (fn
    ([k r]
     "recursive depth-first search on xml tree to find the content of the nth occurence of a given key"
     (get-nth-key-content k r 1 1))
    ([#^clojure.lang.Keyword k
      #^clojure.lang.PersistentArrayMap r
      #^Number n]
     (get-nth-key-content k r 1 n))
    ([k r i n]
     (if (not (map? r))
       #_(or (= cljs.core/PersistentVector (type r))        ;; idk why clojure doesn't let me say (is-sequable? r)
             (= cljs.core/List (type r))) ;; of (is-firstable? r) would be super convenient too, lol
       (let [res (get-nth-key-content k (first r) i n)]
         (if res res (get-nth-key-content k (rest r) i n)))
       (when (:tag r)
         (if (= k (:tag r))
           ;; FOUND IT: in this case, since we've found it we only return the content if our count is the same
           ;; Otherwise we want to call the search again with an incremented count
           (if (>= i n)
             (:content r)
             (get-nth-key-content k (:content r) (inc i) n))

           (get-nth-key-content k (:content r) i n)))))))

(def get-key-content
  (fn [k r]
    "recursive depth-first search on xml tree to find the content of the given key"
    (if (not (map? r))
      (let [res (get-key-content k (first r))]
        (if res res
                (get-key-content k (rest r))))
      (when (:tag r)
        (if (= k (:tag r))
          (:content r)
          (get-key-content k (:content r)))))))

(def get-title-from-result
  (fn [r]
    {:link (get-key-content :link r)
     :name (get-key-content :title r)}))

(defn transit-read [x]
  #?(:clj
     (let [in (ByteArrayInputStream. (.getBytes x))
           r (t/reader in :json)]
       (t/read r))
     :cljs
     (let [r (t/reader :json)]
       (t/read r x))))
