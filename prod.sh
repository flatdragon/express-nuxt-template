#!/usr/bin/env bash

docker-compose --profile production down

git pull --ff-only

docker-compose --profile production up --detach --build --force-recreate
