(ns cljs-personal-web.draw)

;; just a bunch of drawing functions for a canvas

(defmulti draw-object :type)

(def two-pi (* 2 js/Math.PI))

(defmethod draw-object :circle [{:keys [color pos size]} ctx]
  (let [[x y] pos
        [x h] size]
    ;;
    ))

(def draw-circle
  (fn []
    (let [canvas (.getElementById js/document "myCanvas")
          context (.getContext canvas "2d")
          centerX (/ context.width 2)
          centerY (/ context.height 2)
          radius 70]      
      (js/console.log (str "test: " radius))

      (set! (.-fillStyle context) "green")      
      (.clearRect context 0 0 (.-width canvas) (.-height canvas))
      (.beginPath context)
      (.arc context centerX centerY radius 0 two-pi false)
      (.fill context)
      (.stroke context))))

(defn clear-canvas
  "Clears the canvas"
  [ctx width height]
  (.save ctx)
  (.setTransform ctx 1 0 0 1 0 0)
  (.clearRect ctx 0 0 width height)
  (.restore ctx))

(defn get-canvas-context-from-id
  "Gets the drawing context from the id of the canvas element.
   Actual context is in a map with the canvas element and some
   other info."
  [id]
  (let [canvas (.getElementById js/document id)]
    {:canvas canvas
     :width (.-width canvas)
     :height (.-height canvas)
     :ctx (.getContext canvas "2d")}))
