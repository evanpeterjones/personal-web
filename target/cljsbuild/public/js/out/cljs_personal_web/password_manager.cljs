(ns cljs-personal-web.password-manager
  (:require [reagent.core :as r]
            [cljs-personal-web.db :as db]
            [clojure.string :as str]))

(js/console.log (db/login! "hello"))

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

(defn validate-user [user]
  (when (empty? user) "Username cannot be empty"))

(defn validate-pass [pass]
  (if (empty? pass)
    "Password cannot be empty"
    (when-not (re-matches #"^[a-zA-Z0-9!@#$%^&*()~]{8,20}$" pass)
      ["Password does not match the following:"
       (when-not (re-matches #"^[*]{8,20}$" pass) "at least 8 characters")
       (when-not (re-matches #"^[a-zA-Z]" pass) "include upper & lower case letters")
       (when-not (re-matches #"^[0-9]" pass) "include a number")
       (when-not (re-matches #"^[~!@#$%^&*()]" pass) "include a special character")])))

(defn val-key [keyw]
  {:username validate-user
   :password validate-pass})

(defn validate [state]
  (map #(apply (val-key %) (% state)) (keys @state)))

(defn save-error! [state error]
  (swap! state assoc :error error))

(defn error [state]
  "error message text"
  [:div (for [error-message (:error @state)] [:p error-message])])

;;; I want to make an exif data remover site.
;;; We could display where the image was taken and all of the data associated with it.
;;;
;;; Could also just edit the data in the image, and store messages in the metadata
(def form
  (let [state (r/atom {:username ""
                       :password ""})]
    (fn []
      ;; set form data
      (db/get-user! state)

      ;; form
      [:div.container-fluid
       [:div.form-group.col-md-6
        [:div.container
         [:h1 "Create Account"]

         [:br]
         [:form
          [input :text "Username" state]
          [input :password "Password" state]
          [error state]
          [:input {:type "button" :value "Login" :on-click #(save-error! state (validate state))
                   :class "rounded-sm"}]]]]])))
