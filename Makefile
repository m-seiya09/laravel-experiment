project = laravel_experiment

init:
	cp .env.example .env
	@make build
	@make migrate

build:
	docker-compose build --no-cache --force-rm

up:
	docker-compose up -d

down: 
	docker-compose down

composer-install:
	docker exec -it ${project}_app composer install

laravel-install:
	docker exec -it ${project}_app laravel new .

install-adminlte:
	docker exec -it ${project}_app composer require jeroennoten/laravel-adminlte
	docker exec -it ${project}_app php artisan php artisan adminlte:install

install-typescript:
	docker exec -it ${project}_app npm install ts-loader typescript
	docker exec -it ${project}_app npm install laravel-mix-vue3 vue-loader@next
	docker exec -it ${project}_app npm install laravel-mix browser-sync-webpack-plugin
	cp tsconfig.json.sample tsconfig.json
	cp package.json.sample package.json
	docker exec -it ${project}_app npm run dev

install-vue3:
	docker exec -it ${project}_app npm install vue@next --save-dev

dump-autoload:
	docker exec -it ${project}_app composer dump-autoload

migrate:
	docker exec -it ${project}_app php artisan migrate

npm-run-dev:
	docker exec -it ${project}_app npm run dev