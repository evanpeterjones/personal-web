(ns cljs-personal-web.components.components
  #?@(:clj [(:import (clojure.lang PersistentArrayMap LazySeq))(:require [cljs-personal-web.utils.xml])]
     :cljs [(:require [cljs-personal-web.components.audio-player]
                      [cljs-personal-web.utils.xml])]))

(def episode-component
  (fn
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
  (let [item-data (if (:content xml-data)
                    (->> xml-data :content
                         (map xml->map)
                         (into {}))
                    xml-data)]
    [:div.item
     [:ul
      [episode-component item-data]]]))


