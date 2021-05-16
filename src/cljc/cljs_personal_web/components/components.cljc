(ns cljs-personal-web.components.components
  #?(:clj (:import (clojure.lang PersistentArrayMap LazySeq))))

(def xml->map
  (fn [{:keys [tag content attrs]}]
    "converts an xml structure to a more clojure-friendly one
    limits the need for accessor functions"
    {tag {:content content
          :attrs attrs}}))

(def episode-component
  (fn [{:keys [title link
               itunes:summary
               itunes:duration
               itunes:subtitle
               enclosure]}]
    [:li
     #?(:clj [:a {:href (:content link)}
              (-> title :content first)]
        :cljs [:a {:href (:content link)}
               (-> title :content first)])]))

(defmulti episode #(:tag %))

(defmethod episode :default [_] nil)

(defmethod episode :item [xml-data]
  (let [item-data (->> xml-data :content
                       (map xml->map)
                       (into {}))]
    [:div.item
     [:ul
      [episode-component item-data]]]))


