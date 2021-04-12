(ns cljs-personal-web.db
  (:require [ajax.core :refer [GET PUT]]
            [ajax.formats :as f]))

(defn login! [user state]
  (GET "/login" {:params {:user user}
                 :handler #(swap! state assoc :username %)}))

(defn get-feed! [url state]
  (GET "/getRssData" {:params  {:url url}
                      :response-format :json
                      :handler #(do
                                  (println %)
                                  (swap! state assoc :podcasts (conj (:podcasts @state) %)))}))
