run:
	java -jar target/cljs-personal-web.jar

build:
	lein uberjar

fig:
	lein figwheel

repl:
	lein run
