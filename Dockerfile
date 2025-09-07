# Etapa 1: build
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build && npm run postbuild

# Etapa 2: runtime
FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

RUN npm install --production --frozen-lockfile

EXPOSE 3000
CMD ["npm", "start"]

