setup: generate
	docker exec swish_api node prisma/seeders/index.js

generate: migrate
	docker exec swish_api npx prisma generate

migrate: start
	docker exec swish_api npx prisma migrate up --experimental \
	&& docker exec swish_api npx prisma generate

start: install
	docker-compose up -d && sleep 3

install: volumes
	docker-compose -f docker-compose.builder.yml run --rm install_back \
	&& docker-compose -f docker-compose.builder.yml run --rm install_front

volumes:
	docker volume create swish_nodemodules_back && docker volume create swish_nodemodules_front
