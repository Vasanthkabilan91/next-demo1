# Building Stage 1
FROM node:14-slim as builder

WORKDIR /app

RUN chown node:node /app

USER node

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install

#Copying source file
COPY --chown=node:node . ./

#building App
RUN yarn build

FROM nginx:alpine

#!/bin/sh

COPY nginx.conf /etc/nginx/nginx.conf

# Copy from the stage 1
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
