(ns cljs-personal-web.password-manager
  (:require [reagent.core :as r]
            [clojure.string :as str]))

(defn row [label input]
  [:div.row
   [:div.col-md-2 [:label label]]
   [:div.col-md-5 input]
   [:br]])

(defn input [type label state]
  (let [id (keyword (str/lower-case label))
        value (id @state)]
    (row label [:input {:field type
                        :id id
                        :value value
                        :on-change #(swap! state assoc id (-> % .-target .-value))}])))

(defn validation
  ([doc] (swap! doc assoc :error (validation @doc "")))
  ([doc error]
   (cond
     (empty? (:username doc)) (validation (assoc doc :username "1") (str error "Username cannot be empty"))
     (empty? (:password doc)) (validation (assoc doc :password "1") (str error "Password cannot be empty"))
     :else error)))

(defn error [state]
  "error message text"
  (let [msg (:error @state)]
    [:div (when msg [:label.error-message {:for "error-message"} msg]) [:br]]))

(defn form []
  (let [state (r/atom {:username ""
                       :password ""
                       :error ""})]
    [:div.form-group
     [:div.container
      [:h1 "Login"]
      [:br]
      [:form
       [input :text "Username" state]
       [input :text "Password" state]
       [error state]
       [:input {:type "button" :value "Login" :on-click #(validation state)}]]]]))
