FROM node:15.13-alpine3.13

RUN apk add --no-cache bash git

RUN npm config set update-notifier false --no-update-notifier \
  && npm config set unsafe-perm true \
  && npm config set fund false \
  && npm config set cache /app/.npm

WORKDIR /app

CMD [ "bash", "/scripts/webhook/entrypoint.sh", "&" ]
