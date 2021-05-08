(ns cljs-personal-web.handler
  (:require [rss :refer [get-data-from-url]]
            [reitit.ring :as r]
            [cljs-personal-web.middleware :refer [middleware]]
            [cljs-personal-web.pages.html :refer [loading-page]]
            [cljs-personal-web.pages.podcast :refer [render-podcast]]
            [cljs-personal-web.utils.transit :as transit]
            [clojure.pprint :as pp]
            [config.core :refer [env]]))

(def request (atom []))

(def h
  (fn
    ([fb] (h "text/html" fb))
    ([ct fb]
     "defaults to text/html if not provided"
     (fn [r]
       (pp/pprint (str "request: " @request))
       (swap! request conj r)
       {:status 200
        :headers {"Content-Type" ct}
        :body (fb r)}))))

(def get-user
  (fn [_]
    (str "user" (clojure.core/rand-int 100))))

(def p (fn [{{:keys [u]} :params}] u))

(def get-rss
  (fn [{{:keys [url]} :params}]
    (pp/pprint (str "Requesting data for: " url))
    (when url
      (->> url
           get-data-from-url
           transit/transit-write))))

(def pod-full-render
  (fn [d]
    (let [url (p d)]
      (when {}
        (pp/pprint (str "Server Rendering podcast for: " url))
        (-> url
            get-rss
            render-podcast)))))

(def h-rss-data (h "data/json" get-rss))
(def h-user (h "data/json" get-user))
(def h-index (h loading-page))
(def url "http://encountersthepodcast.libsyn.com/rss")
(def h-rss-data (let [r (h-rss-data {:params {:url url}})]
                  (fn [{{:keys [_]} :params}] r)))
(def rdata (transit/transit-read (:body (h-rss-data {}))))
(def h-pod (h pod-full-render))

(def app
  (r/ring-handler
   (r/router
    [["/" {:get {:handler h-index}}]
     ["/podcasts" {:get {:handler h-index}}]
     ["/pod" {:get {:handler h-pod}}]
     ["/getUser" {:get {:handler h-user}}]
     ["/getRssData" {:get {:handler h-rss-data}}]])
   (r/routes
    (r/create-resource-handler {:path "/" :root "/public"})
    (r/create-default-handler))
   {:middleware middleware}))
