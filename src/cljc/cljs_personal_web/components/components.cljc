(ns cljs-personal-web.components.components
  #?(:clj (:import (clojure.lang PersistentArrayMap LazySeq))
     :cljs (:require [cljs-personal-web.components.audio-player ])))

(def xml->map
  (fn [{:keys [tag content attrs]}]
    "converts an xml structure to a more clojure-friendly one
    limits the need for accessor functions"
    {tag {:content content
          :attrs attrs}}))

(def episode-component
  (fn
    ([x-map] (episode-component x-map (fn [_] (fn []))))
    ([{:keys [title link
              itunes:summary
              itunes:duration
              itunes:subtitle
              enclosure]}
      c-fn]

     [:li
      #?(:clj [:a {:href (:content link)}
               (-> title :content first)]
         :cljs [:a {:href (:content link)
                    :on-click c-fn}
                (-> title :content first)])])))

(defmulti episode #(:tag %))

(defmethod episode :default [_] nil)

(defmethod episode :item [xml-data]
  (let [item-data (->> xml-data :content
                       (map xml->map)
                       (into {}))]
    [:div.item
     [:ul
      [episode-component item-data]]]))


