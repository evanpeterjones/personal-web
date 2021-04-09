(ns cljs-personal-web.db
  (:require [ajax.core :refer [GET PUT]]
            [ajax.formats :as f]))

(defn handler
  ([response] response)
  ([state response]
   (js/console.log response)
   (swap! state assoc :username response)))

(defn get-user!
  ([]
   (let [result (GET "/getUser" {:handler handler})]
     (println result) result))
  ([state]
   (let [result (GET "/getUser" {:handler #(handler state %)})]
     (println (type result)) result)))

(defn login! [user]
  (GET "/loginTest" {:params {:user user}
                     :handler handler}))
