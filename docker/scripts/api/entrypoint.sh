#!/usr/bin/env bash

if [ "$ENV" = "development" ]; then
  npm install --verbose
  npm install -g nodemon
  npm run dev
  exit 0
fi

if [ "$ENV" = "pipeline" ]; then
  tail -f /dev/null
  exit 0
fi

if [ "$ENV" = "production" ]; then
  npm ci --only=production --prefer-offline --no-progress --no-audit --loglevel error
  npm run start
  exit 0
fi

bash /scripts/wrong-env.sh
