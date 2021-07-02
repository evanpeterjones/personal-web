(ns cljs-personal-web.core
  (:require
   [cljs-personal-web.draw :refer [draw-circle]]
   [cljs-personal-web.world-map :refer [test-func]]
   [cljs-personal-web.podcast-feed :refer [podcasts]]
   [cljs-personal-web.components.links :refer [links]]
   [cljs-personal-web.components.audio-player :refer [player]]
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
    ;["/login" :login]
    ["/podcasts"
     ["" :podcasts]
     ["/:id" :id]]]))

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
       [:h1 "Hey, " [:br] "I'm Evan."]
       ;[:p "Creator of this site"]
       ;[:p "and other ~fun things~"]
       ]]]))

(def image
  (fn []
    [:div#hero
     [:div.container
      [:div.profile
       [:a {:href (path-for :podcasts)}
        [:img {:src "evan.png"
               :alt "Photo taken by Shandon Anderson"}]]]
      [haiku]]]))

(def home-page
  (fn [_]
    (let [work-links [{:href "https://linkedin.com/in/evanpeterjones" :name "LinkedIn"}
                      {:href "http://www.github.com/evanpeterjones" :name "GitHub"}
                      ;{:href (path-for :podcasts) :name "~fun things~" :label "new"}
                      ]
          play-links [{:href "https://twitter.com/evanpeterjones" :name "Twitter"}
                      {:href "https://instagram.com/evanpeterjones" :name "Instagram"}
                      {:href "https://internetizens.net" :name "Yapp"}]]
      [:div
       [image]
       [:div#work
        [:div.container
         [links "left" "border-red" work-links]
         [links "right" "border-blue" play-links]]]])))

(def footer
  (fn [playing]
    [:footer {:style {:class (if playing "player-active" "player-inactive")}}
     (when player [player playing])
     [:p (str "© " (.getFullYear (new js/Date)))
      [:b " by Evan Jones w/ClojureScript"]]]))

;; -------------------------
;; Translate routes -> page components

(defn page-for [route]
  (case route
    :index #'home-page
    :podcasts #'podcasts))

;; -------------------------
;; Page mounting component

(defonce player-data (atom nil))

(def update-player-link-fn
  (fn [{:keys [url type length] :as link}]
    (reset! player-data link)
    (let [audio (.getElementById js/document "player")]
      (set! (.-src audio) url)
      (.load audio))))

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div {:style {:max-width "1000"}}
       [page update-player-link-fn (path-for :index)]
       [footer @player-data]])))

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
        (clerk/navigate-page! path)))
    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
