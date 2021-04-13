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

(defn get-feed! [url state]
  (GET "/getRssData" {:params  {:url url}
                      ;:response-format :json
                      :handler #(do
                                 (let [res (transit-read %)]
                                   (println (str "test: " res))
                                   (swap! state assoc :podcasts (conj (:podcasts @state) res))
                                   (swap! state assoc :titles (conj (:titles @state) (-> first :content first :content first)))))}))


