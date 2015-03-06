
default: test

test: build
	@open test/index.html

clean:
	@rm -rf build.js eventwheel.js eventwheel.min.js components node_modules

build: $(wildcard test/*.js)
	@duo --development --stdout test/test.js > build.js

bundle: index.js
	@duo --standalone eventwheel --stdout index.js > eventwheel.js
	@uglifyjs eventwheel.js --mangle --compress --output eventwheel.min.js

.PHONY: clean test
