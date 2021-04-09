#!/usr/bin/env bash

git pull --ff-only

docker-compose --profile production up --detach --build --force-recreate
