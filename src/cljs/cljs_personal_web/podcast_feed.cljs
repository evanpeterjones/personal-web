(ns cljs-personal-web.podcast-feed
  (:require [reagent.core :as r]
            [cljs-personal-web.db :as db]
            [alandipert.storage-atom :refer [local-storage clear-local-storage!]]
            [cljs-personal-web.components.components :refer [episodes]]
            [cljs-personal-web.components.input :refer [input]]
            [cljs-personal-web.components.links :refer [links]]))


(def overlay
  (fn [v]
    (fn []
      (set! (.-display (.-style (.getElementById js/document "overlay"))) v))))

(def is-url? (fn [url] url))
(def url "http://encountersthepodcast.libsyn.com/rss")

(def podcasts
  (let [data {:add-podcast     nil
              :episodes        nil
              :current-podcast "Episodes"
              :titles          #{{:atom:link    {:attrs {:href "http://encountersthepodcast.libsyn.com/rss"}}
                                  :itunes:image {:attrs {:href "https://cdn-profiles.tunein.com/p1174861/images/logoq.png?t=1"}}
                                  :title        {:content ["Encounters Pod"]}}
                                 {:atom:link    {:attrs {:href "https://randomhorror9.libsyn.com/rss"}}
                                  :itunes:image {:attrs {:href "https://images.squarespace-cdn.com/content/v1/56660bf257eb8dd25948eabe/1597079501461-38B57Q2B9NN68NPZT3D6/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Antler+Skull+-+No9+WHITE.png?format=1000w"}}
                                  :title        {:content ["Random Number Generator Horror Podcast No.9"]}}}}
        state (local-storage (r/atom data) :podcasts)]
    (fn
      ([] (podcasts (fn [_] (js/console.log "NO AUDIO SET FUNCTION PROVIDED"))))
      ([audio-function] (podcasts audio-function nil))
      ([audio-function home-button]
       [:div
        [:div
         {:id "overlay"}
         [:div#text [:p "Enter an RSS Feed"]]
         [:form
          [:label {:for "url"}][:br][:input {:type "text" :id "URL"}]
          [:input {:type "button"
                   :on-click #(let [close (overlay "none")
                                    url (.-value (.getElementById js/document "URL"))]
                                (when (is-url? url) (db/add-podcast! url state))
                                (close))}]]]

        (when (:episodes @state)
          [:div#episodes
           [:div.container
            [:h1 (:current-podcast @state)]
            ;[:ul [:li ]]
            [:div.scrollable-vertical.scrollable-sm
             (episodes @state audio-function)]]])

        [:div.container
         [:div#work
          [:div
           [:br]
           [:div {:style {:display "table"}}
            [:h2 {:style {:display "table-cell"}} "Podcasts"]]]

          [:div
           (when home-button [:button [:a {:href home-button} "home" ;"\uD83C\uDFE0"
                                       ]])
           [:button {:on-click (overlay "block")} "add"]
           [:button {:on-click clear-local-storage!} "reset"]
           (when (:episodes @state)
             [:button {:on-click #(swap! state dissoc :episodes)} "close"])]

          [:div#podcasts.scrollmenu
           (for [li-link (:titles @state)
                 :let [{:keys [atom:link link itunes:image itunes:title title]} li-link
                       link (-> (or atom:link link) :attrs :href)
                       image (-> itunes:image :attrs :href)
                       title (-> (or title itunes:title) :content first)]]
             ^{:key title} [:img
                            (into {:src image :alt title}
                                  (when link
                                    {:on-click (fn [_]
                                                 (js/console.log (str "Getting: " link))
                                                 (swap! state assoc :current-podcast title)
                                                 (swap! state assoc :episodes nil)
                                                 (swap! state assoc :add-podcast link)
                                                 (db/get-feed! link state))}))])]]]]))))
