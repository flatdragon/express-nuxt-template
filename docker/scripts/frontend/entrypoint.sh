#!/usr/bin/env bash

if [ "$ENV" = "development" ]; then
  npm install --verbose
  npm run dev
fi

if [ "$ENV" = "pipeline" ]; then
  tail -f /dev/null
fi

/scripts/wrong-env.sh
