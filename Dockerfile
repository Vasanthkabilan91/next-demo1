# Building Stage 1
FROM node:14-alpine as builder

RUN mkdir /workspace

WORKDIR /workspace

COPY package.json yarn.lock ./

RUN yarn install

#Copying source file
COPY . .

#building App
RUN yarn build

FROM nginx:alpine

#!/bin/sh

COPY nginx.conf /etc/nginx/nginx.conf

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stage 1
COPY --from=builder /workspace/out /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
