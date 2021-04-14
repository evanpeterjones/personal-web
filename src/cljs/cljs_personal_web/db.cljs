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

(def get-key-content-from-result
  (fn [k r]
    "recursive depth-first search on xml tree to find the content of the given key"
    (if (= cljs.core/PersistentVector (type r))
      (let [res (get-key-content-from-result k (first k))]
        (when-not res (get-key-content-from-result k (rest k))))
      (when (:tag r)
        (if (= k (:tag r))
          (:content r)
          (get-key-content-from-result k (:content r)))))))

(def get-title-from-result
  (fn [r]
    {:link (get-key-content-from-result :link r)
     :name (get-key-content-from-result :title r)}))

(defn get-feed! [url state]
  (GET "/getRssData" {:params  {:url url}
                      :handler #(do
                                 (let [res (transit-read %)]
                                   (js/console.log res)
                                   (swap! state assoc :titles (get-key-content-from-result :link res))
                                   (swap! state assoc :episodes res)))}))


