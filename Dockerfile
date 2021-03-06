FROM node:10.24.1-alpine

WORKDIR /app

COPY package*.json ./

# USER node

RUN npm install

COPY . ./
# COPY --chown=node:node . ./

ENV APP_PORT 9999

EXPOSE ${APP_PORT}

CMD ["node", "src/app.js"]
