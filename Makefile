.PHONY: local
local:
	docker-compose stop && \
	docker-compose up \
		--build
