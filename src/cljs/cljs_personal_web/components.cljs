(ns cljs-personal-web.components)

(def links
  (fn [title id class ul-links]
    "example

        [links 'Header' '

    "
    [(keyword (str "div." id))
     [(keyword (str "span." class))]
     [:h2 title]
     [:ul
      (for [li-link ul-links]
        ^{:key li-link} [:li
                         (when (:label li-link) [:p {:class "new" :style {:font-size ".7em"}} (:label li-link)])
                         (when (:href li-link)
                           [:a li-link (:name li-link)])
                         (when (:link li-link)
                           [:p {:on-click (fn [x] (apply (:onclick li-link) (:link li-link)))}
                            (:name li-link)])])]]))
