FROM node:20-alpine AS builder

WORKDIR /build

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --production

# Stage 2: Production stage
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /build/dist ./dist
COPY --from=builder /build/node_modules ./node_modules
COPY package*.json .

ENV DATABASE_URL=
ENV PORT=
ENV JWT_SECRET=

EXPOSE ${PORT}

CMD [ "node", "./dist/main.js" ]