### STAGE 1: Build ###
# We label our stage as ‘builder’
FROM node:dubnium-alpine as builder
LABEL maintainer="John Semander <jsemander@gmail.com>"

# Configure Working Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Update System
RUN apk update

# Install Dependencies
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python && yarn global add node-gyp

# Copy Source Code
COPY package.json yarn.lock /usr/src/app/
RUN yarn
COPY . .

# Run the building command
RUN yarn build

# Run the generate documentation command
RUN yarn docs

### STAGE 2: Setup ###
FROM node:dubnium-alpine
LABEL maintainer="John Semander <jsemander@gmail.com>"

# Pull in environment variables
ARG VERSION

# Configure Working Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Expose ports
EXPOSE 3000

# Configure command
ENTRYPOINT [ "yarn", "start" ]

# Update System
RUN apk update

# Install Dependencies
RUN apk add htop openntpd gettext

# Copy Source Code
COPY --from=builder /usr/src/app/build/ /usr/src/app/
COPY --from=builder /usr/src/app/docs/ /usr/src/app/docs
COPY --from=builder /usr/src/app/package.json /usr/src/app/package.json
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=builder /usr/src/app/index.js /usr/src/app/index.js
