(ns cljs-personal-web.server
    (:require
      [cljs-personal-web.handler :refer [app]]
      [config.core :refer [env]]
      [ring.adapter.jetty :refer [run-jetty]])
    (:gen-class) (:import (java.net BindException ServerSocket)))

(defn port-in-use? [p]
      (try
        (doto (new ServerSocket p)
              (.setReuseAddress true))
        (catch IOException e)))

(defn available-port
      ([] (available-port 3000))
      ([p]
       (loop [port p]
             (if (port-in-use? p)
               (recur (inc p))
               p))))

(defn -main
      ([] (-main 3000))
      ([p]
       (let [port (or (env :port) p)]
            (try
              (run-jetty #'app {:port port :join? false})
              (catch BindException e
                (prn (str "Port " p " in use, trying " (inc p))))))))
