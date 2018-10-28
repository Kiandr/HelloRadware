# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN sudo rm -r -f /root/.npm/
# install and cache app dependencies
#RUN npm install --silent
#RUN npm install react-scripts@1.1.0 -g --silent
#RUN npm install react-modal
#COPY package.json /usr/src/app/package.json
# start app
CMD ["npm", "start"]
