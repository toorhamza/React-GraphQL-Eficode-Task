FROM node:13.8-stretch
WORKDIR /app
COPY package.json /app
RUN npm install 
COPY . /app
CMD ["npm", "start"]