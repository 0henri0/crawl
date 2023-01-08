#!/bin/sh

docker build . -t thainv1612/crawl-app_production -f ./.docker/crawl_app/Dockerfile.prod

docker push thainv1612/crawl-app_production