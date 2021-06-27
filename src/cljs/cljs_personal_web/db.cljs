(ns cljs-personal-web.db
  (:require [ajax.core :refer [GET PUT]]
            [ajax.formats :as f]
            [cljs-personal-web.utils.transit :as t]
            [cljs-personal-web.utils.xml :as xml]))

(defn login! [user state]
  (GET "/login" {:params {:user user}
                 :handler #(swap! state assoc :username %)}))

(defn add-podcast! [url state]
  (GET "addPodcast" {:params {:url url}
                     :handler #(swap! state assoc :podcast %)}))

(defn get-feed! [url state]
  (GET "/getRssData" {:params  {:url url}
                      :handler #(let [res (t/transit-read %)
                                      ;; this can be more efficient if we did this in one sweep. I think we can do that
                                      titles   (xml/convert-item (->> res :content first :content
                                                                      (filter (fn [x] (not (= (:tag x) :item))))))
                                      episodes (xml/convert-item (->> res :content first :content
                                                                      (filter (fn [x]      (= (:tag x) :item)))))]
                                  (js/console.log titles)
                                  (swap! state assoc :titles (conj (:titles @state) titles))
                                  (swap! state assoc :episodes episodes))}))
