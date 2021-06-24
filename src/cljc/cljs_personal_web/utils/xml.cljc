(ns cljs-personal-web.utils.xml)

(def get-item
  (fn [lis]
    (filter
      #(contains? [:title :itunes:title :link :itunes:image :description :itunes:duration :itunes:keywords] (:tag %))
      lis)))

(def clean
  (fn [c]
    "this shouldn't be it, we may actually need the attributes"
    (->> c
         (map #(comp vec reverse)))))

(defmulti get-content #(:tag %))

(defmethod get-content :item [xml-data attribute]
  (when (= attribute (:item xml-data))
    (get-item (:content xml-data) )))

(defmethod get-content nil [xml-data]
  "The item in the XML Tree is a list"
  (map get-item xml-data))

(def get-n-keys
  (fn
    ([k r]
     "recursive depth-first search on xml tree to find the content of the nth occurrence of a given key"
     (get-n-keys k r 1 '()))
    ([k r i]
     (get-n-keys k r i '()))
    ([#^clojure.lang.Keyword k
      #^clojure.lang.PersistentArrayMap r
      #^Number i
      #^clojure.lang.PersistentList l]
     (if (not (map? r))
       (let [res (get-n-keys k (first r) l)]
         (if res res (get-n-keys k (rest r) l)))
       (when (:tag r)
         (if (= k (:tag r))
           ;; FOUND IT: in this case, since we've found it we only return the content if our count is the same
           ;; Otherwise we want to call the search again with an incremented count
           (if (= (count l) i)
             (conj l (:content r))
             (get-n-keys k (:content r) (conj l (:content r))))

           (get-n-keys k (:content r) l)))))))

(def get-nth-key-content
  (fn
    ([k r]
     "recursive depth-first search on xml tree to find the content of the nth occurence of a given key"
     (get-nth-key-content k r 1 1))
    ([#^clojure.lang.Keyword k
      #^clojure.lang.PersistentArrayMap r
      #^Number n]
     (get-nth-key-content k r 1 n))
    ([k r i n]
     (if (not (map? r))
       (let [res (get-nth-key-content k (first r) i n)]
         (if res res (get-nth-key-content k (rest r) i n)))
       (when (:tag r)
         (if (= k (:tag r))
           (if (>= i n)
             (:content r)
             (get-nth-key-content k (:content r) (inc i) n))

           (get-nth-key-content k (:content r) i n)))))))

(def get-key
  (fn [k r]
    "recursive depth-first search on xml tree to find the content of the given key"
    (if (not (map? r))
      (let [res (get-key k (first r))]
        (if res res
                (get-key k (rest r))))
      (when (:tag r)
        (if (= k (:tag r))
          r
          (get-key k (:content r)))))))

(def xml->map
  (fn [{:keys [tag content attrs]}]
    "converts an xml structure to a more clojure-friendly one
    limits the need for accessor functions"
    {tag {:content content
          :attrs attrs}}))

(def convert-item
  (fn [item-attr-list]
    (if (:content item-attr-list)
      (convert-item (:content item-attr-list))
      (->> item-attr-list
           (map xml->map)
           (into {})))))

(def convert-items
  (fn [item-list]
    (if (:content item-list)
      (convert-item (:content item-list))
      (map convert-item item-list))))

(def xml-filter
  (fn [items-k tree]
    "returns a list of contiguous item keys"
    (if (= (:tag tree) items-k)
      (map :content tree))))

;(def find (fn [k r] [k r]))

(def get*
  (fn [x r]
    (:content (filter #(= x (:item %)) r))))

(def find
  (fn [k data]
    (loop [d (first data)]
      (if (= (:tag d) k)
        (:content d)
        (recur (rest data))))))

(def get-title-from-result
  (fn [r]
    {:link (find :link r)
     :img  (find :img r)
     :name (find :title r)}))




