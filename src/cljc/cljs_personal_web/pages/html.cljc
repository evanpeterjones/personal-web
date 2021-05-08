(ns cljs-personal-web.pages.html
  (:use [hiccup.page :refer [include-js include-css html5]]))

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
     (include-css "/css/site.css"
                      ;"/css/site.min.css"
                      ;"/css/style.css"(if (env :dev) )
                      )]))

(def loading-page
  (fn [_]
    (html5
      (head)
      [:body {:class "body-container"}
       mount-target
       (include-js "/js/app.js")])))

(def basic
  (fn [body]
    (html5
      (head)
      [:body {:class "body-container"}
       body
       (include-js "/js/app.js")])))
