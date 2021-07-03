(ns cljs-personal-web.pages.podcast
  (:require [cljs-personal-web.pages.html :refer [basic-page]]
            [cljs-personal-web.components.components :refer [episodes]]))

(def render-podcast
  (fn [d]
    #?(:clj (basic-page (episodes d))
       :cljs (episodes d))))
