(ns cljs-personal-web.world-map
  ;(:require [ol])
  )

(defn test-func []
  [:div {:class "map"}
   [:h1 "test"]])

(defmacro mem-fn [name & body]
  `(def ~name (memoize (fn ~body))))

;(mem-fn )
