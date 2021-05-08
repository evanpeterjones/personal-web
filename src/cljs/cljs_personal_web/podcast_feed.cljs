(ns cljs-personal-web.podcast-feed
  (:require [reagent.core :as r]
            [cljs-personal-web.db :as db]
            [cljs-personal-web.utils.xml :as xml]
            [cljs-personal-web.utils.components :refer [component]]
            [cljs-personal-web.components :refer [links input]]
            [clojure.string :as str]))

(defn podcast-episodes [pods]
  [:div (for [ep pods]
          [:p (get-in ep [:content 0 :content])])])

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
         [:div.profile
          [:form
           [input :text "Add Podcast" state]
           [:input {:type     "button"
                    :value    "Add"
                    :on-click #(when (:add-podcast @state)
                                 (db/get-feed! (:add-podcast @state) state))}]]]

         [:h1 "Episodes"]]]

       [:div.episodes (map component (:episodes @state))]

       [:div.container
        [:div#work
         [links "Podcasts" "left" "border-blue" (:titles @state) (fn [x]
                                                                   (js/console.log x)
                                                                   (swap! state assoc :add-podcast x)
                                                                   (db/get-feed! x state))]]]])))












