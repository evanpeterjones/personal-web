(ns cljs-personal-web.components.components
  #?@(:clj [(:import (clojure.lang PersistentArrayMap LazySeq))
            (:require [cljs-personal-web.utils.xml :as xml]
                      [cljs-personal-web.utils.html :as html])]
     :cljs [(:require [cljs-personal-web.components.audio-player]
                      [cljs-personal-web.utils.xml :as xml]
                      [cljs-personal-web.utils.html :as html])]))

;; really should remove this, this is dumb, just throw this in the xml ns
(def g (fn [i] (let [j (:content i)] (if (vector? j) (first j) i))))

(def episodes
  (fn
    ([xd] (episodes xd (fn [url] #?(:cljs (js/alert (str "NO CLICK FUNCTION CONFIGURED to handle url: " url))))))
    ([{:keys [episodes]} click-function]
     [:div.item
      [:ul
       (for [[i episode-data] (map-indexed vector episodes)
             :let [{:keys [title description enclosure guid]} episode-data
                   title (g title)
                   link (:attrs enclosure)]]
         ^{:key i} [:li {:on-click #(click-function link)
                         :style    {:display "table"}}
                    [:p {:class "new"
                         :style {:display   "table-cell"
                                 :font-size ".7em"}} "▶"]
                    [:a {:style {:display      "table-cell"
                                 :padding-left "10px"}} title]])]])))
