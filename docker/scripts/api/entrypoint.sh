#!/usr/bin/env bash

if [ "$ENV" = "development" ]; then
  npm install --verbose
  npm run dev
fi

if [ "$ENV" = "pipeline" ]; then
  tail -f /dev/null
fi

if [ "$ENV" = "production" ]; then
  npm ci --only=production --prefer-offline --no-progress --no-audit --loglevel error
  npm run start
fi

bash /scripts/wrong-env.sh
