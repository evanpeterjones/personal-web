run:
	java -jar target/cljs-personal-web.jar

build:
	lein uberjar

dev:
	lein figwheel

repl:
	lein run