(ns cljs-personal-web.podcast-feed
  (:require [reagent.core :as r]
            [cljs-personal-web.db :as db]
            [cljs-personal-web.components.components :refer [episodes]]
            [cljs-personal-web.components.input :refer [input]]
            [cljs-personal-web.components.links :refer [links]]))


(def overlay
  (fn [v]
    (fn []
      (let [o (.-display (.-style (.getElementById js/document "overlay")))]
        (js/console.log o)
        ;(when o (set! o v))
        ))))

(def podcasts
  (let [state (r/atom {:add-podcast nil
                       :episodes nil
                       :titles [{:link "http://encountersthepodcast.libsyn.com/rss"
                                 :img "https://cdn-profiles.tunein.com/p1174861/images/logoq.png?t=1"
                                 :name "Encounters Pod"}
                                {:link "https://randomhorror9.libsyn.com/rss"
                                 :img (str "https://images.squarespace-cdn.com/content/v1/"
                                           "56660bf257eb8dd25948eabe/1597079501461-38B57Q2B9NN68NPZT3D6/"
                                           "ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv"
                                           "_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-N"
                                           "YroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9"
                                           "s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Antler+Skull+-+No9+WHITE.png?"
                                           "format=1000w")
                                 :name "Random Number Generator Horror Podcast No.9"}]})]
    (fn
      ([] (podcasts (fn [_] (js/console.log "NO AUDIO SET FUNCTION PROVIDED"))))
      ([set-audio-link-function]
       [:div
        [:div
         {:id "overlay"
          :on-click (overlay "none")}
         [:div#text "Popup test"]]

        (when (:episodes @state)
          [:div#episodes
           [:div.container
            [:ul [:li [:h2 "Episodes"]]]

            [:div.scrollable-vertical.scrollable-sm
             [:ul (episodes (:episodes @state) set-audio-link-function)]]]])

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
                                                         (db/get-feed! x state))]]]]))))
