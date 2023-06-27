all: hello.js hello.html hello.wat

hello.js wasm: hello.c
	emcc hello.c -O3 -o hello.js

hello.html: hello.c
	emcc hello.c -O3 -o hello.html

hello.wat: hello.wasm
	wasm2wat hello.wasm -o hello.wat

@PHONY: web
web: hello.html
	python3 -m http.server 8000

@PHONY: node
host: hello.js
	node hello.js
