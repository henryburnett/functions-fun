FROM node:13.1.0-alpine AS builder

RUN mkdir -p /app/frontend
WORKDIR /app/frontend

COPY . .

RUN npm install
RUN npm run build

FROM node:13.1.0-alpine

COPY --from=builder /app/frontend .
EXPOSE 5000
CMD ["npm", "run", "serve"]