(ns cljs-personal-web.prod
  (:require [cljs-personal-web.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
