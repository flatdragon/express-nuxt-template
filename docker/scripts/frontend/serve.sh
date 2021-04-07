#!/usr/bin/env bash

if [ "$ENV" = "development" ]; then
  npm install --verbose
  npm run dev
fi

if [ "$ENV" = "test" ]; then
  npm ci
  npm run test
fi

# npm ci
# npm run build
# npm run start
# exit
