(ns cljs-personal-web.components.structure)

(defn row [label input]
  [:div.row
   [:div.col-md-2 [:label label]]
   [:div.col-md-5 input]
   [:br]])
