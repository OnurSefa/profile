FROM node:alpine

WORKDIR .

COPY . .

CMD ["npm", "run", "start"]