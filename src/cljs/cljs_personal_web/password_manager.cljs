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
    (row label [:input {:type      type
                        :id        id
                        :style     {:color ""}
                        :value     value
                        :on-change #(swap! state assoc id (-> % .-target .-value))}])))

(defn validation [state]
  (->>
   (map #(condp = %1
            :username (when (empty? (%1 @state)) [:p "Username cannot be empty"])
            :password (let [pwd (%1 @state)]
                        (if (empty? pwd)
                          [:p "Password cannot be empty"]
                          (if-not (re-matches #"^[a-zA-Z0-9!@#$%^&*()~]{8,20}$" pwd)
                            [:div
                             [:p "Password does not match the following:"]
                             [:p (str
                                   (when (re-matches #"^[*]{8,20}$" pwd) "at least 8 characters")
                                   (when (re-matches "^[a-zA-Z]" pwd) "include upper & lower case letters")
                                   (when (re-matches "^[0-9]" pwd) "include a number")
                                   (when (re-matches "^[~!@#$%^&*()]" pwd) "include a special character"))]])))
            :else [:p "Error occurred validating user info"])
        (keys @state))
   (swap! state assoc :error)))

(defn error [state]
  "error message text"
  (let [msg (:error @state)]
    [:div (for [error-message msg] [:p error-message])]))

;;; I want to make an exif data remover site.
;;; We could display where the image was taken and all of the data associated with it.
;;;
;;; Could also just edit the data in the image, and store messages in the metadata
(defn form []
  (let [state (r/atom {:username ""
                       :password ""})]

    ;; set form data
    (db/get-user! state)

    ;; form
    [:div.form-group
     [:div.container
      [:h1 "Create Account"]
      [:br]
      [:form
       [input :text "Username" state]
       [input :password "Password" state]
       [error state]
       [:input {:type "button" :value "Login" :on-click #(validation state)}]]]]))
