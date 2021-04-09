#!/usr/bin/env bash

while true; do
  if [ -e ./webhook/syncing ]; then
    bash sync.sh >> sync.log 2>&1
    rm -f ./webhook/syncing
  fi
  sleep 10
done
