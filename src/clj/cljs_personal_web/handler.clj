(ns cljs-personal-web.handler
  (:require [rss :refer [parse-xml req]]
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

(defn loading-page []
  (html5
   (head)
   [:body {:class "body-container"}
    mount-target
    (include-js "/js/app.js")]))

(defn index-handler
  [_request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (loading-page)})

(def request (atom {}))

(defn get-rss-data
  [request]
  (let [url "http://encountersthepodcast.libsyn.com/rss"        ;;;; need to get the url from the request here
        res (when url (-> url req :body get-rss-data))]
    (println request)
    (if res
      {:status 200
       :header {"Content-Type" "text/json"}
       :body res})))

(defn get-user [request]
  {:status 200
   :header {"Content-Type" "text/json"}
   :body (str "user" (clojure.core/rand-int 100))})

(defn login-handler [request]
  (println (str request))
  {:status 200
   :header {"Content-Type" "text/data"}
   :body ""})

(def app
  (reitit-ring/ring-handler
   (reitit-ring/router
     [["/" {:get {:handler index-handler}}]
      ["/login" {:get {:handler index-handler}}]
      ["/getUser" {:get {:handler get-user}}]
      ["/getRssData" {:get {:handler get-rss-data}}]])
   (reitit-ring/routes
    (reitit-ring/create-resource-handler {:path "/" :root "/public"})
    (reitit-ring/create-default-handler))
   {:middleware middleware}))
