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
                     :handler #(swap! state assoc :podcast  %)}))

(defn get-feed! [url state]
  (GET "/getRssData" {:params  {:url url}
                      :handler #(let [res (t/transit-read %)]
                                  (js/console.log %)
                                  (comment  (swap! state assoc :titles (conj (:titles @assoc) {:link "asdf"
                                                                                               :img "https://cdn-profiles.tunein.com/p1174861/images/logoq.png?t=1"
                                                                                               :name "test"})))
                                  (swap! state assoc :episodes (map xml/convert-items res)))}))
