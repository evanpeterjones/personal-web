(ns cljs-personal-web.pages.html
  #?(:clj (:require [hiccup.page :refer [include-js include-css html5]])))

(def mount-target
  [:div#app])

(def head
  (fn []
    [:head
     [:title "Evan Jones"]
     [:meta {:charset "utf-8"}]
     [:meta {:name "viewport",
             :content "width=device-width, initial-scale=1"}]
     [:link {:rel "icon" :href "favicon.png"}]
     [:link {:rel "manifest" :href "webmanifest.webmanifest"}]
     [:link {:href "https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,700" :rel "stylesheet"}]
     #?(:clj (include-css "/css/site.css")
        :cljs [:link {:type "text/css",
                      :href "/css/site.css",
                      :rel  "stylesheet"}])]))

(def loading-page
  (fn [_]
    #?(:clj (html5
              (head)
              [:body.body-container mount-target (include-js "/js/app.js")]))))

(def basic-page
  (fn
    ([] (basic-page [:h1 "This page has no content yet"]))
    ([body]
     #?(:clj (html5
               (head)
               [:body.body-container
                [:div.body body]])))))
