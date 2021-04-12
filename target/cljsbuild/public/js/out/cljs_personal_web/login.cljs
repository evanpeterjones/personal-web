(ns cljs-personal-web.login)

(defn val-key [x])

(defn validate [state]
  (map #(apply (val-key %) (% state)) (keys @state)))

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
