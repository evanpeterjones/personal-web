(ns cljs-personal-web.components.components
  #?@(:clj [(:import (clojure.lang PersistentArrayMap LazySeq))
            (:require [cljs-personal-web.utils.xml :as xml]
                      [cljs-personal-web.utils.html :as html])]
     :cljs [(:require [cljs-personal-web.components.audio-player]
                      [cljs-personal-web.utils.xml :as xml]
                      [cljs-personal-web.utils.html :as html])]))

(def episode-component
  (fn
    ([ep] (episode-component ep (fn [_] nil)))
    ([{:keys [title link
              itunes:summary
              itunes:duration
              itunes:subtitle
              enclosure]}
      c-fn]
     [:li
      #?(:clj [:a {:href (:content link)} (-> title :content first)]
         :cljs [:a {:href link
                    :on-click c-fn} (-> title :content)])])))

;; really should remove this, this is dumb, just throw this in the xml ns
(def g (fn [i] (let [j (:content i)] (if (vector? j) (first j) i))))

(def episode
  (fn [episode-data click-function]
    (let [{:keys [title description enclosure guid]} episode-data
          title (g title)
          link (:attrs enclosure)]
      ;(:guid episode-data)
      [:li {:href     link
            :on-click #(click-function link)
            :style    {:display "table"}}
       [:p {:class "new"
            :style {:display   "table-cell"
                    :font-size ".7em"}} "▶"]
       [:a {:style {:display      "table-cell"
                    :padding-left "10px"}} title]
       ;[:p (html/string->hiccup description)]
       ])))

(def episodes
  (fn
    ([xd] (episodes xd (fn [url] #?(:cljs (js/alert (str "NO CLICK FUNCTION CONFIGURED to handle url: " url))))))
    ([{:keys [eps]} click-function]
     [:div.item
      [:ul
       (for [ep eps]
         ^{:key (:guid ep)} (episode ep))]])))
