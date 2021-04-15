(ns cljs-personal-web.db
  (:require [ajax.core :refer [GET PUT]]
            [ajax.formats :as f]
            [cognitect.transit :as t]))

(defn transit-read [x]
  (let [r (t/reader :json)]
    (t/read r x)))

(defn login! [user state]
  (GET "/login" {:params {:user user}
                 :handler #(swap! state assoc :username %)}))

(defn add-podcast! [url state]
  (GET "addPodcast" {:params {:url url}
                     :handler #(swap! state assoc :podcast  %)}))

(def get-nth-key-content
  (fn
    ([k r]
     "recursive depth-first search on xml tree to find the content of the nth occurence of a given key"
     (get-nth-key-content k r 1 1))
    ([#^Keyword k
      #^PersistentArrayMap r
      #^Number n]
     (get-nth-key-content k r 1 n))
    ([k r i n]
     (if (not (map? r))
       #_(or (= cljs.core/PersistentVector (type r))        ;; idk why clojure doesn't let me say (is-sequable? r)
           (= cljs.core/List (type r)))                     ;; of (is-firstable? r) would be super convenient too, lol
       (let [res (recur k (first r) i n)]
         (if res res (recur k (rest r) i n)))
       (when (:tag r)
         (if (= k (:tag r))
           ;; FOUND IT: in this case, since we've found it we only return the content if our count is the same
           ;; Otherwise we want to call the search again with an incremented count
           (if (= i n)
             (:content r)
             (recur k (:content r) (inc i) n))

           (recur k (:content r) i n)))))))

(def get-key-content
  (fn [k r]
    "recursive depth-first search on xml tree to find the content of the given key"
    (if (= cljs.core/List (type r))
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

(defn get-feed! [url state]
  (GET "/getRssData" {:params  {:url url}
                      :handler #(let [res (transit-read %)]
                                   (js/console.log res)
                                   (swap! state assoc :titles (get-title-from-result res))
                                   (swap! state assoc :episodes res))}))


