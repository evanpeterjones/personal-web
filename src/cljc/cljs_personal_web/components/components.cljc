(ns cljs-personal-web.components.components
  #?(:clj (:import (clojure.lang PersistentArrayMap LazySeq))))

(defmulti component #(:tag %))

(defmethod component :title [xml-data]
  (let [title-data (xml-data :content)]
    (if (vector? title-data)
      [:h1 (first title-data)]
      [:h1 title-data])))

(defmethod component :description [xml-data]
  (let [d (-> xml-data :content :description)]
    [:p d]))

(defmethod component :item [xml-data]
  [:div.item
   (->> xml-data
        :content
        (map component)
        (remove nil?))])

(defmethod component :default [data] nil)
