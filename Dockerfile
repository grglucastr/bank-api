FROM node:current-alpine3.22

WORKDIR /app

COPY . .

RUN  yarn install

ENV PORT=
ENV DATABASE_URL=
ENV JWT_SECRET=

EXPOSE 3333

CMD ["yarn", "start:dev"]