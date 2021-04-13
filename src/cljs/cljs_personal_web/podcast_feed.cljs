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

(defn podcast-titles [pods]
  [:div (for [ti pods]
          [:p ti])])

(defn get-titles [ts]
  (map (fn [x] {:href "asdf" :name x}) ts))
;;; I want to make an exif data remover site.
;;; We could display where the image was taken and all of the data associated with it.
;;;
;;; Could also just edit the data in the image, and store messages in the metadata
(def form
  (let [bt "Add Podcast"
        url (create-label bt)
        state (r/atom {:podcasts []
                       :titles ["Encounters Pod" "Savage Lovecast"]
                       url ""})]
    (fn []
      ;; form
      [:div
       [:div#hero
        [:div.container
         [:div.profile
          [:form
           [input :text "Add Podcast" state]
           [:input {:type     "button"
                    :value    "Add Feed"
                    ;:class    "rounded-sm"
                    :class    "custom-btn"
                    :on-click #(db/get-feed! (url @state) state)}]]]


         ;; podcast titles
         [:h1 "Episodes"]
         [podcast-episodes (:podcasts @state)]]]
       [:div.container
        [:div#work
         [:div.form-group.col-md-6
          [links "Podcasts" "left" "border-red" (get-titles (:titles @state))]]]]])))
