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

(def g (fn [i] (let [j (:content i)] (if (vector? j) (first j) i))))

(def episode
  (fn [episode-data]
    (let [{:keys [title description url]} episode-data
          title (g title)
          description (g description)
          link (g url)]
      [:div.podcast-episode
       [:h1 title]
       [:p {:on-click (fn [_] #?(:cljs (fn [_] (js/alert (str "Playing: " link)))))} (str "Play")]
       [:p (html/string->hiccup description)]])))

(def episodes
  (fn
    ([xd] (episodes xd (fn [url] #?(:cljs (js/alert (str "NO CLICK FUNCTION CONFIGURED to handle url: " url))))))
    ([xml-data click-function]
     [:div.item
      [:ul
       (for [i xml-data]
         (let [{:keys [title description link]} i
               title (g title)]
           [:li
            [:a {:href     link
                 :on-click #(click-function link)} title]]))]])))
