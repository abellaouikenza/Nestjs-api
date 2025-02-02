FROM node:22


# Install dependencies
COPY package*.json ./

RUN npm install

#Bundle app source

COPY . . 

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod","start:dev"]


