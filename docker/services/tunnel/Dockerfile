FROM node:15.13-alpine3.13

RUN npm config set update-notifier false --no-update-notifier \
  && npm config set unsafe-perm true \
  && npm config set fund false \
  && npm install -g localtunnel
