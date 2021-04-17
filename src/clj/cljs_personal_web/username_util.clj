(ns cljs-personal-web.username-util)

(defn get-new [request]
      (str "user" (rand-int)))
