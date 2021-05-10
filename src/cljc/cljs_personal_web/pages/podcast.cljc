(ns cljs-personal-web.pages.podcast
  (:require [cljs-personal-web.pages.html :refer [basic-page]]
            [cljs-personal-web.components.components :refer [component]]))

(def render-podcast
  (fn [d]
    #?(:clj (basic-page (map component d))
       :cljs (map component d))))
