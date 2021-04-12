(ns cljs-personal-web.handler
  (:require [rss :refer [get-data-from-url]]
            [reitit.ring :as r]
            [cognitect.transit :as transit]
            [cljs-personal-web.middleware :refer [middleware]]
            [hiccup.page :refer [include-js include-css html5]]
            [clojure.pprint :as pp]
            [config.core :refer [env]])
  (:import (java.io ByteArrayOutputStream)))

(def mount-target
  [:div#app])

(defn head []
  [:head
   [:title "Evan Jones"]
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   [:link {:rel "icon" :href "favicon.png"}]
   [:link {:href "https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,700" :rel "stylesheet"}]
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css")
                "/css/style.css")])

(def loading-page
  (fn [r]
    (html5
     (head)
     [:body {:class "body-container"}
      mount-target
      (include-js "/js/app.js")])))

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
  (fn [r]
    (str "user" (clojure.core/rand-int 100))))

(def get-rss
  (fn [{{:keys [url]} :params} r]
    (pp/pprint (str "Requesting data for: " url))
    (when url
      (let [o (ByteArrayOutputStream. 4096)
            json-writer (transit/writer o :json)]
        (->> url
             get-data-from-url
             (transit/write json-writer))
        (.toString o)))))

(def h-rss-data (h "data/json" get-rss))
(def h-user (h "data/json" get-user))
(def h-index (h loading-page))
(def url "http://encountersthepodcast.libsyn.com/rss")

(def app
  (r/ring-handler
   (r/router
    [["/" {:get {:handler h-index}}]
     ["/login" {:get {:handler h-index}}]
     ["/getUser" {:get {:handler h-user}}]
     ["/getRssData" {:get {:handler h-rss-data}}]])
   (r/routes
    (r/create-resource-handler {:path "/" :root "/public"})
    (r/create-default-handler))
   {:middleware middleware}))
