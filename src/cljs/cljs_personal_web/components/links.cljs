(ns cljs-personal-web.components.links)

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
                          (when (:href li-link)  [:a li-link (str (:name li-link) " ")])
                          (when (:label li-link) [:p {:class "new" :style {:font-size ".7em"}} (:label li-link)])
                          (when (:link li-link)
                            [:p {:on-click (fn [_] (c-fn (:link li-link)))}
                             (:name li-link)])])]])))
