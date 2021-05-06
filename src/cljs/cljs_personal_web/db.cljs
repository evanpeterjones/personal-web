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
                                  (js/console.log res)
                                  (swap! state conj (:titles @state) {:link "asdf"
                                                                      :name "test"})
                                  (swap! state assoc :episodes res)
                                  )}))
