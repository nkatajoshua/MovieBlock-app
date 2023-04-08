FROM node:14
WORKDIR /movieblock/movie_block/src
COPY /movieblock/movie_block .
RUN npm install
ENV NODE_ENV production
EXPOSE 3001
CMD [ "npm", "start" ]