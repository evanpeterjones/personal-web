(ns cljs-personal-web.password-manager
  (:require [reagent.core :as r]
            [cljs-personal-web.db :as db]
            [clojure.string :as str]))

(defn row [label input]
  [:div.row
   [:div.col-md-2 [:label label]]
   [:div.col-md-5 input]
   [:br]])

(defn input [type label state]
  (let [id (keyword (str/lower-case label))
        value (id @state)]
    (row label [:input {:type type
                        :id id
                        :style {:color ""}
                        :value value
                        :on-change #(swap! state assoc id (-> % .-target .-value))}])))

(defn e [t] [:div [:b] [:p t]])

(defn validation
  ([doc] (swap! doc assoc :error (validation @doc [])))
  ([doc error]
   (cond
     (empty? (:username doc)) (validation (assoc doc :username "1") (conj error (e "Username cannot be empty")))
     (empty? (:password doc)) (validation (assoc doc :password "1") (conj error (e "Password cannot be empty")))
     :else error)))

(defn error [state]
  "error message text"
  (let [msg (:error @state)]
    (for [error-message msg]
      [:div [:label.error-message {:for "error-messages"} [:p error-message]]])))

(defn form []
  (let [user (db/get-user!)
        state (r/atom {:username user
                       :password ""
                       :error ""})]
    [:div.form-group
     [:div.container
      [:h1 "Login"]
      [:br]
      [:form
       [input :text "Username" state]
       [input :password "Password" state]
       [error state]
       [:input {:type "button" :value "Login" :on-click #(validation state)}]]]]))
