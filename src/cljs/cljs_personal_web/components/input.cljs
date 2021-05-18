(ns cljs-personal-web.components.input
  (:require [cljs-personal-web.components.structure :refer [row]]))

(def input
  (fn [type label state]
    (let [id (-> label
                 (clojure.string/replace #" " "-")
                 clojure.string/lower-case
                 keyword)
          value (id @state)]
      (row label [:input {:type      type
                          :id        id
                          :value     (when value value)
                          :on-change #(swap! state assoc id (-> % .-target .-value))}]))))

