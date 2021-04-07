#!/usr/bin/env bash

if [ "$ENV" = "development" ]; then
  npm install --verbose
  npm run dev
  exit
fi

npm ci
npm run build
npm run start
exit
