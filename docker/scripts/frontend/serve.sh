#!/usr/bin/env bash

if [ "$ENV" = "development" ]; then
  npm install --verbose
  npm run dev
  exit
fi

if [ "$ENV" = "test" ]; then
  npm ci --verbose
  npm run test
  exit
fi

npm ci
npm run build
npm run start
exit
