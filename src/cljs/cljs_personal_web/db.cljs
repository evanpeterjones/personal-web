(ns cljs-personal-web.db
  (:require [ajax.core :refer [GET PUT]]
            [ajax.formats :as f]
            [cljs-personal-web.utils.transit :as t]
            [cljs-personal-web.utils.xml :as xml]))

(defn login! [user state]
  (GET "/login" {:params {:user user}
                 :handler #(swap! state assoc :username %)}))

(def filter-titles
  (fn [data]
    (->> data (filter
                #(contains? #{:link :itunes:image :title} (:tag %))))))

(defn add-podcast! [url state]
  (GET "/getRssData" {:params {:url url}
                     :handler #(let [res (t/transit-read %)
                                     data (-> res :content first :content)
                                     ;; this can be more efficient if we did this in one sweep. I think we can do that
                                     titles   (->> data
                                                   filter-titles
                                                   xml/convert-item
                                                   (conj (:titles @state)))
                                     episodes (->> data
                                                   (filter (fn [x] (=    (:tag x) :item)))
                                                   xml/convert-items)]
                                 (js/console.log titles)
                                 (swap! state assoc :data data)
                                 (swap! state assoc :titles titles)
                                 (swap! state assoc :episodes episodes))}))

(defn get-feed! [url state]
  (GET "/getRssData" {:params  {:url url}
                      :handler #(let [res (t/transit-read %)
                                      data (-> res :content first :content)
                                      episodes (xml/convert-items (->> data (filter (fn [x] (=    (:tag x) :item)))))]
                                  (js/console.log episodes)
                                  (swap! state assoc :episodes episodes))}))
