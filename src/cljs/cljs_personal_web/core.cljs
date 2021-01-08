(ns cljs-personal-web.core
  (:require
   [cljs-personal-web.draw :refer [draw-circle]]
   [cljs-personal-web.world-map :refer [test-func]]
   [cljs-personal-web.password-manager :refer [form]]
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
    ["/login" :login]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

;; -------------------------
;; Page components

(def haiku
  (fn []
    [:div#hero
     [:div.haiku-profile
      [:div.haiku
       [:h1 "Hello, " [:br] "I'm Evan."]
       [:p "Designer of this site"]
       [:p "and fun things"]]]]))

(def image
  (fn []
    [:div#hero
     [:div.container
      [:div.profile
       [:a {:href "https://en.wikipedia.org/wiki/Special:Random"}
        [:img {:src "evan.png"
               :alt "Photo taken by Shandon Anderson"}]]]
      [haiku]]]))

(def links
  (fn [title id class ul-links]
    [(keyword (str "div." id))
     [(keyword (str "span." class))]
     [:h2 title]
     [:ul
      (for [li-link ul-links]
        [:li [:a li-link (:name li-link)]])]]))

(def home-page
  (fn []
    (let [work-links [{:href "https://linkedin.com/in/evanpeterjones" :name "LinkedIn"}
                      {:href "http://www.github.com/evanpeterjones" :name "GitHub"}
                      {:href (path-for :login) :name "Pwd Manager"}]
          play-links [{:href "https://twitter.com/evanpeterjones" :name "Twitter"}
                      {:href "https://instagram.com/evanpeterjones" :name "Instagram"}
                      {:href "https://internetizens.net" :name "Yapp"}]]
      [:div
       [image]
       [:div#work
        [:div.container
         [links "Work" "left" "border-red" work-links]
         [links "Play" "right" "border-blue" play-links]]]])))

(defn login []
  (fn []
    [form]))

(defn footer []
  (fn []
    [:footer
        [:p (str "© " (.getFullYear (new js/Date)))
          [:b " by Evan Jones w/ClojureScript"]]]))

;; -------------------------
;; Translate routes -> page components

(defn page-for [route]
  (case route
    :index #'home-page
    :login #'login))

;; -------------------------
;; Page mounting component

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div {:style {:max-width "1000" :padding-top "5%"}}
       [:header.header
        (when (= page #'login)
          [:p [:a {:href (path-for :index)} "Home"]])]
       [page]
       [footer]])))

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

