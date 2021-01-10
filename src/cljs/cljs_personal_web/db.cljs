(ns cljs-personal-web.db
  (:require [ajax.core :refer [GET]]
            [ajax.formats :as f]))

(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn get-user [] (str "user" (cljs.core/rand-int 100)))

(defn get-user! []
  (GET "/getUser" {                                         ;:handler handler
                   :error-handler   error-handler
                   :response-format :json}))
