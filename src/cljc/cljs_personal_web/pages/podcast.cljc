(ns cljs-personal-web.pages.podcast
  (:require [cljs-personal-web.pages.html :refer [basic-page]]
            [cljs-personal-web.components.components :refer [episode]]))

(def render-podcast
  (fn [d]
    #?(:clj (basic-page (map episode d))
       :cljs (map episode d))))
