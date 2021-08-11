# Building Stage 1
FROM node:14-alpine as builder



WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

#Copying source file
COPY . ./

#building App
RUN yarn build

FROM nginx:alpine

#!/bin/sh

COPY nginx.conf /etc/nginx/nginx.conf

# Copy from the stage 1
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
