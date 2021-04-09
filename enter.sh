#!/usr/bin/env bash

docker exec --interactive --tty ${PWD##*/}_${1}_${2:-1} sh
