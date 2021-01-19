(ns cljs-personal-web.db
  (:require [ajax.core :refer [GET]]
            [ajax.formats :as f]))

(defn handler
  ([response] response)
  ([state response]
   (swap! state assoc :username response)))

(defn get-user!
  ([]
   (let [result (GET "/getUser" {:handler handler})]
     (println result) result))
  ([state]
   (let [result (GET "/getUser" {:handler #(handler state %)})]
     (println (type result)) result)))
