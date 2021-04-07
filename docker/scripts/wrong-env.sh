#!/usr/bin/env bash

if [ -n "$ENV" ]; then
  echo "The environment named \"$ENV\" wasn't defined. Aborting..." 1>&2
  exit 1
else
  echo "There is no specified environment. Aborting..." 1>&2
  exit 1
fi
