(ns cljs-personal-web.components.audio-player)

;; functions to interface with the HTMLMediaElement javascript class
;; by default should just display a pause/play button

(def player
  (let [toggle-play (fn [_]
                      (let [p (-> js/document (.getElementById "player"))]
                        (if (.-paused p)
                          (.play p)
                          (.pause p))))]
    (fn [{:keys [url type length] :as link}]
      (when link
        [:div.player
         [:button.pause {:on-click toggle-play} "Pause/Play"]
         [:audio#player {:controls " " :preload "auto"}
          [:source {:src url :type type}]
          "Your browser does not support playing this type of audio file."]]))))
