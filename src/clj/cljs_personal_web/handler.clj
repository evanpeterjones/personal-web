(ns cljs-personal-web.handler
  (:require [rss :refer [get-data-from-url]]
            [reitit.ring :as r]
            [cljs-personal-web.middleware :refer [middleware]]
            [cljs-personal-web.utils.transit :as transit]
            [hiccup.page :refer [include-js include-css html5]]
            [clojure.pprint :as pp]
            [config.core :refer [env]]))

(def mount-target
  [:div#app])

(def head
  (fn []
    [:head
     [:title "Evan Jones"]
     [:meta {:charset "utf-8"}]
     [:meta {:name "viewport"
             :content "width=device-width, initial-scale=1"}]
     [:link {:rel "icon" :href "favicon.png"}]
     [:link {:href "https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,700" :rel "stylesheet"}]
     (include-css                                             ;"/css/style.css"
       (if (env :dev) "/css/site.css" "/css/site.min.css"))]))

(def loading-page
  (fn [_]
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
  (fn [_]
    (str "user" (clojure.core/rand-int 100))))

(def get-rss
  (fn [{{:keys [url]} :params}]
    (pp/pprint (str "Requesting data for: " url))
    (when url
      (->> url
           get-data-from-url
           transit/transit-write))))

(def h-rss-data (h "data/json" get-rss))
(def h-user (h "data/json" get-user))
(def h-index (h loading-page))
(def url "http://encountersthepodcast.libsyn.com/rss")

(def app
  (r/ring-handler
   (r/router
    [["/" {:get {:handler h-index}}]
     ["/podcasts" {:get {:handler h-index}}]
     ["/getUser" {:get {:handler h-user}}]
     ["/getRssData" {:get {:handler h-rss-data}}]])
   (r/routes
    (r/create-resource-handler {:path "/" :root "/public"})
    (r/create-default-handler))
   {:middleware middleware}))
