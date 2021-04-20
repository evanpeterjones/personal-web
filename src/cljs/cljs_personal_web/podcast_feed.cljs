(ns cljs-personal-web.podcast-feed
  (:require [reagent.core :as r]
            [cljs-personal-web.db :as db]
            [cljs-personal-web.components :refer [links]]
            [clojure.string :as str]))

(defn row [label input]
  [:div.row
   [:div.col-md-2 [:label label]]
   [:div.col-md-5 input]
   [:br]])

(defn create-label [l]
  (keyword (str/lower-case (str/replace l #" " "-"))))

(defn input [type label state]
  (let [id (create-label label)
        value (id @state)]
    (row label [:input {:type      type
                        :id        id
                        :style     {:color ""}
                        :value     (when value value)
                        :on-change #(swap! state assoc id (-> % .-target .-value))}])))

(defn podcast-episodes [pods]
  [:div (for [ep pods]
          [:p (get-in ep [:content 0 :content])])])

;;; I want to make an exif data remover site.
;;; We could display where the image was taken and all of the data associated with it.
;;;
;;; Could also just edit the data in the image, and store messages in the metadata
(def add-feed-function
  (fn [state m]
    (map
      #(into %
            {:onclick (fn [url]  (println (str "Requesting: " url)) (db/get-feed! url state))})
         m)))

(def form
  (let [add-text "Add Podcast"
        url (create-label add-text)
        state (r/atom {:episodes nil
                       :titles [{:link "http://encountersthepodcast.libsyn.com/rss" :name "Encounters Pod"}
                                {:link "https://randomhorror9.libsyn.com/rss" :name "Random Number Generator Horror Podcast No.9"}]
                       url ""})]
    (fn []
      [:div
       [:div#hero
        [:div.container
         [:div.profile
          [:form
           [input :text add-text state]
           [:input {:type     "button"
                    :value    "Add"
                    ;:class    "rounded-sm"
                    :class    "custom-btn"
                    :on-click #(db/get-feed! (url @state) state)}]]]

         [:h1 "Episodes"]
         (:episodes @state)]]

       [:div.container
        [:div#work
         [links "Podcasts" "left" "border-blue" (add-feed-function @state (:titles @state))]]]])))
