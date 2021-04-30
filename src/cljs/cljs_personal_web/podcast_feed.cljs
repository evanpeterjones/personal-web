(ns cljs-personal-web.podcast-feed
  (:require [reagent.core :as r]
            [cljs-personal-web.db :as db]
            [cljs-personal-web.utils.xml :as xml]
            [cljs-personal-web.components :refer [links input]]
            [clojure.string :as str]))

(defn podcast-episodes [pods]
  [:div (for [ep pods]
          [:p (get-in ep [:content 0 :content])])])

(defmulti component #(:tag %))

(defmethod component :title [xml-data]
  (let [title-data (xml-data :content)]
    (if (vector? title-data)
      (first [:h1 title-data])
      [:h1 title-data])))

(defmethod component :item [xml-data]
  (let [item-data (:content xml-data)
        episode-title (xml/get-key :title item-data)
        episode-description (xml/get-key :description item-data)
        episode-audio-link (xml/get-key :enclosure item-data)]
    [:div
     [:h1 [:a {:href (:url episode-audio-link)} episode-title]]
     [:p (if (vector? episode-description) (first episode-description)  episode-description)]]))

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

(def episodes
  (fn [xml-data]
    [:div (map component xml-data)]))

(def form
  (let [state (r/atom {:link-view nil
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
                    :class    "custom-btn"
                    :on-click #(when (:link-view @state)
                                 (db/get-feed! (:link-view @state) state))}]]]

         [:h1 "Episodes"]
         [episodes (:episodes @state)]]]

       [:div.container
        [:div#work
         [links "Podcasts" "left" "border-blue" (:titles @state) (fn [x]
                                                                   (js/console.log x)
                                                                   (swap! state assoc :link-view x)
                                                                   (db/get-feed! x state))]]]])))
