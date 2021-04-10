(ns cljs-personal-web.handler
  (:require [rss :refer [get-rss-data-from-url]]
            [reitit.ring :as reitit-ring]
            [cljs-personal-web.middleware :refer [middleware]]
            [hiccup.page :refer [include-js include-css html5]]
            [config.core :refer [env]]))

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
       (swap! request conj r)
       {:status 200
        :header {"Content-Type" ct}
        :body (fb r)}))))

(def get-user
  (fn [r]
    (str "user" (clojure.core/rand-int 100))))

(def h-rss-data (h "data/json" get-rss-data-from-url))
(def h-user (h "data/json" get-user))
(def h-index (h loading-page))

(defn index-handler [r]
  {:status 200
   :header {"Content-Type" "text/html"}
   :body (loading-page r)})

(def app
  (reitit-ring/ring-handler
   (reitit-ring/router
     [["/" {:get {:handler index-handler}}]
      ["/getUser" {:get {:handler h-user}}]
      ["/getRssData" {:get {:handler h-rss-data}}]])
   (reitit-ring/routes
    (reitit-ring/create-resource-handler {:path "/" :root "/public"})
    (reitit-ring/create-default-handler))
   {:middleware middleware}))
