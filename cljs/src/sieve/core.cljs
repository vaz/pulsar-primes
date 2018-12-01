(ns sieve.core)

(defn ^:dev/before-load stop []
  (js/console.log "stop"))

(defn ^:dev/after-load start []
  (js/console.log "start"))

