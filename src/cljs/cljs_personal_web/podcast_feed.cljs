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
       (when (:episodes @state)
         [:div#episodes
          [:div.container
           [:ul [:li [:h2 "Episodes"]]]

           [:div.scrollable-vertical.scrollable-sm
            [:ul (map episode (:episodes @state))]]]])

       [:div#podcasts.scrollmenu
        [:img {:src "https://cdn.onlinewebfonts.com/svg/img_433041.png"
               :alt "Podcast Cover Art"}]
        [:img {:src "https://cdn.onlinewebfonts.com/svg/img_433041.png"
               :alt "Podcast Cover Art"}]
        [:img {:src "https://cdn.onlinewebfonts.com/svg/img_433041.png"
               :alt "Podcast Cover Art"}]
        [:img {:src "https://cdn.onlinewebfonts.com/svg/img_433041.png"
               :alt "Podcast Cover Art"}]]

       [:div.container
        [:div#work
         [:div
          ;[:p {:class "new" :style {:font-size "1.5em"}} "+"]
          [:br]
          [:h2 "Podcasts"]
          [:br]]

         [:div.left
          [:span.border-blue
           [:div#podcasts.scrollmenu
            (for [li-link (:titles @state)]
              ^{:key li-link}
              [:img
               {:src "https://cdn.onlinewebfonts.com/svg/img_433041.png"
                :alt "Podcast Cover Art"}])]]]

         [links "left" "border-blue" (:titles @state) (fn [x]
                                                        (js/console.log x)
                                                        (swap! state assoc :add-podcast x)
                                                        (db/get-feed! x state))]]]])))















