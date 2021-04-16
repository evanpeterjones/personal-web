(ns cljs-personal-web.db
  (:require [ajax.core :refer [GET PUT]]
            [ajax.formats :as f]
            [cognitect.transit :as t]
            [cljs-personal-web.util :as xml-util]))

(defn transit-read [x]
  (let [r (t/reader :json)]
    (t/read r x)))

(defn login! [user state]
  (GET "/login" {:params {:user user}
                 :handler #(swap! state assoc :username %)}))

(defn add-podcast! [url state]
  (GET "addPodcast" {:params {:url url}
                     :handler #(swap! state assoc :podcast  %)}))

(defn get-feed! [url state]
  (GET "/getRssData" {:params  {:url url}
                      :handler #(let [res (transit-read %)]
                                   (js/console.log res)
                                   (swap! state assoc :titles (xml-util/get-title-from-result res))
                                   (swap! state assoc :episodes res))}))
