(ns cljs-personal-web.podcast-feed
  (:require [reagent.core :as r]
            [cljs-personal-web.db :as db]
            [cljs-personal-web.components.components :refer [episode]]
            [cljs-personal-web.components.input :refer [input]]
            [cljs-personal-web.components.links :refer [links]]))

(def form
  (let [state (r/atom {:add-podcast nil
                       :episodes nil
                       :titles [{:link "http://encountersthepodcast.libsyn.com/rss"
                                 :name "Encounters Pod"}
                                {:link "https://randomhorror9.libsyn.com/rss"
                                 :name "Random Number Generator Horror Podcast No.9"}]})]
    (fn []
      [:div
       [:div#hero
        [:div.container
         (when (:episodes @state)
           [:div.container
            [:div#work
             [:h1 "Episodes"]

             [:div.scrollable-vertical.scrollable-sm
              [:ul (map episode (:episodes @state))]]]])]]

       [:div.container
        [:div#work
         [:div
          ;[:p {:class "new" :style {:font-size "1.5em"}} "+"]
          [:ul [:li [:h2 "Podcasts"]]]]

         [:div.podcasts
          ;gotta have some horizontal css
          ;gotta have some images here
          ]

         [links "left" "border-blue" (:titles @state) (fn [x]
                                                        (js/console.log x)
                                                        (swap! state assoc :add-podcast x)
                                                        (db/get-feed! x state))]]]])))















