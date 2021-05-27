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
                                 :img "https://cdn.onlinewebfonts.com/svg/img_433041.png"
                                 :name "Encounters Pod"}
                                {:link "https://randomhorror9.libsyn.com/rss"
                                 :img "https://cdn.onlinewebfonts.com/svg/img_433041.png"
                                 :name "Random Number Generator Horror Podcast No.9"}]})]
    (fn []
      [:div
       (when (:episodes @state)
         [:div#episodes
          [:div.container
           [:ul [:li [:h2 "Episodes"]]]

           [:div.scrollable-vertical.scrollable-sm
            [:ul (map episode (:episodes @state))]]]])



       [:div.container
        [:div#work
         [:div
          ;[:p {:class "new" :style {:font-size "1.5em"}} "+"]
          [:br]
          [:h2 "Podcasts"]
          [:br]]

         [:div#podcasts.scrollmenu
            (for [li-link (:titles @state)]
              ^{:key li-link}
              [:img
               (into
                {:src (:img li-link)
                 :alt (:alt li-link)}
                (when (:link li-link)
                  {:on-click (fn [_]
                               (swap! state assoc :add-podcast (:link li-link))
                               (db/get-feed! (:link li-link) state))}))])]

         [links "left" "border-blue" (:titles @state) (fn [x]
                                                        (js/console.log x)
                                                        (swap! state assoc :add-podcast x)
                                                        (db/get-feed! x state))]]]])))
