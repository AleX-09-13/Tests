
install:
	npm ci
cap:
	@node bin/capitalize.js
test:
	@node tests/capitalize.test.js