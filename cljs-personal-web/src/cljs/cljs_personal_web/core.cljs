(ns cljs-personal-web.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [reagent.session :as session]
   [reitit.frontend :as reitit]
   [clerk.core :as clerk]
   [accountant.core :as accountant]))

;; -------------------------
;; Routes

(def router
  (reitit/router
   [["/" :index]
    ["/items"
     ["" :items]
     ["/:item-id" :item]]
    ["/about" :about]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

;; -------------------------
;; Page components

(def haiku
  (fn []
    [:div.haiku
      [:h1 "Hello, " [:br] "I'm Evan."]
      [:p "Developer, Creator,"]
      [:p "~ this is a haiku ~"]]))

(def image
  (fn []
    [:div#hero
     [:div.container
      [:div.profile
       [:a {:href "https://en.wikipedia.org/wiki/Special:Random"}
        [:img {:src "evan.png"
               :alt "Picture of Evan Jones"}]]]
      [haiku]]]))

(def links
  (fn [title id class ul-links]
    [(keyword (str "div." id))
     [(keyword (str "span." class))]
     [:h2 title]
     [:ul
      (for [li-link ul-links]
        [:li [:a (into {:target "_blank"} li-link) (:name li-link)]])]]))

(def work-links [{:href "http://www.github.com/evanpeterjones" :name "GitHub"}
                 {:href "https://internetizens.net" :name "Internetizens"}])
(def play-links [{:href "https://twitter.com/evanpeterjones" :name "Twitter"}
                 {:href "https://linkedin.com/in/evanpeterjones" :name "LinkedIn"}
                 {:href "https://instagram.com/evanpeterjones" :name "Instagram"}])

(def home-page
  (fn []
    [:div
     [image]
     [:div#work
      [:div.container
       [links "Work" "left" "border-red" work-links]
       [links "Play" "right" "border-blue" play-links]]]]))

(defn about-page []
  (fn [] [:span.main
          [:h1 "About Me"]]))


;; -------------------------
;; Translate routes -> page components

(defn page-for [route]
  (case route
    :index #'home-page
    :about #'about-page))


;; -------------------------
;; Page mounting component

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [:header.header
        [:p [:a {:href (path-for :index)} "Home"] " | " [:a {:href (path-for :about)} "About Me"]]]
       [page]
       [:footer
        [:p (str "© " (.getFullYear (new js/Date)) " by Evan Jones w/ClojureScript")]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (rdom/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)
        ))
    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
