(ns cljs-personal-web.components)

(def links
  (fn [title id class ul-links]
    [(keyword (str "div." id))
     [(keyword (str "span." class))]
     [:h2 title]
     [:ul
      (for [li-link ul-links]
        ^{:key li-link} [:li
                         (when (:label li-link) [:p {:class "new" :style {:font-size ".7em"}} (:label li-link)])
                         [:a li-link (:name li-link)]])]]))
