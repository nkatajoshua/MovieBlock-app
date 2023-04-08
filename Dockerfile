FROM node:14
WORKDIR /movieblock/movie_block/src
COPY /movieblock/ .
RUN npm install
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npm", "start" ]