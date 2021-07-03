(ns cljs-personal-web.handler
  (:require [rss :refer [get-rss-data-from-url]]
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

(def get-rss
  (fn [{{:keys [url]} :params}]
    (pp/pprint (str "Requesting data for: " url))
    (when url
      (->> url
           get-rss-data-from-url
           transit/transit-write))))

(def pod-render-page
  (let [p (fn [{{:keys [u]} :params}] u)]
    (fn [d]
      (pp/pprint (str "Server Rendering podcast for: " (p d)))
      (-> d
          get-rss
          render-podcast))))

;;; testing server rendering code

(comment
  (def url "http://encountersthepodcast.libsyn.com/rss")
  (def get-data (h "data/json" get-rss))
  (def h-rss-data (let [r (get-data {:params {:url url}})]
                    (fn [{{:keys [_]} :params}] r)))
  (def rdata (transit/transit-read (:body (h-rss-data {})))))

;;; end test server-rendering code

(def app
  (r/ring-handler
   (r/router
    [["/" {:get {:handler (h loading-page)}}]
     ["/podcasts" {:get {:handler (h loading-page)}}]
     ["/pod" {:get {:handler (h pod-render-page)}}]
     ["/getUser" {:get {:handler (h "data/json" get-user)}}]
     ["/getRssData" {:get {:handler (h "data/json" get-rss)}}]])
   (r/routes
    (r/create-resource-handler {:path "/" :root "/public"})
    (r/create-default-handler))
   {:middleware middleware}))
