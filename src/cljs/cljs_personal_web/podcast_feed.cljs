(ns cljs-personal-web.podcast-feed
  (:require [reagent.core :as r]
            [cljs-personal-web.db :as db]
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

(defn podcast-titles [pods]
  [:div (for [ep pods]
          [:p (get-in ep [:content 0 :content])])])

;;; I want to make an exif data remover site.
;;; We could display where the image was taken and all of the data associated with it.
;;;
;;; Could also just edit the data in the image, and store messages in the metadata
(def form
  (let [bt "Add Podcast"
        bt-key (create-label bt)
        state (r/atom {:podcasts []
                       bt-key ""})]
    (fn []
      ;; form
      [:div.container-fluid
       [:div.form-group.col-md-6
        [:div.container
         [:form
          [input :text "Add Podcast" state]
          [:input {:type     "button"
                   :value    "Add Feed"
                   :class    "rounded-sm"
                   :on-click #(db/get-feed! (bt-key @state) state)}]]
         [:br]

         ;; podcast titles
         [:h1 "Episodes"]
         [podcast-titles (:podcasts @state)]]]])))
