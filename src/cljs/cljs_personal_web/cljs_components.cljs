(ns cljs-personal-web.cljs-components
  "collection of components which require javascript *vomit-emoji*"
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

(def links
  (fn
    ([link-list c-fn]
     [:ul
      (for [li-link link-list]
        ^{:key li-link}
        [:li
         (when (:label li-link) [:p {:class "new" :style {:font-size ".7em"}} (:label li-link)])
         (when (:href li-link)
           [:a li-link (:name li-link)])
         (when (:link li-link)
           [:p {:on-click (fn [_] (c-fn (:link li-link)))}
            (:name li-link)])])])
    ([id class ul-links]
     (links id class ul-links (fn [x] (js/console.log x))))
    ([id class ul-links c-fn]
     "example
     [links 'Header' '\n'] "
     [(keyword (str "div." id))
      [(keyword (str "span." class))]
      [:ul
       (for [li-link ul-links]
         ^{:key li-link} [:li
                          (when (:label li-link) [:p {:class "new" :style {:font-size ".7em"}} (:label li-link)])
                          (when (:href li-link)
                            [:a li-link (:name li-link)])
                          (when (:link li-link)
                            [:p {:on-click (fn [_] (c-fn (:link li-link)))}
                             (:name li-link)])])]])))
