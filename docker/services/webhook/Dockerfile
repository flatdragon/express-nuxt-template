FROM node:15.13-alpine3.13

RUN apk add --no-cache bash

RUN npm config set update-notifier false --no-update-notifier \
  && npm config set unsafe-perm true \
  && npm config set fund false

WORKDIR /app

CMD [ "bash", "/scripts/webhook/entrypoint.sh", "&" ]
