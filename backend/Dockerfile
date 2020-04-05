FROM node:13.1.0-alpine

RUN mkdir -p /app/backend
WORKDIR /app/backend

COPY package.json /app/backend
COPY package-lock.json /app/backend

RUN npm install

COPY . /app/backend
EXPOSE 4000
CMD ["npm", "run", "start"]