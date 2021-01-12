FROM wogns1063/ubuntujs:01

COPY package.json .
RUN npm install

EXPOSE 8080
CMD [ "node", "test.js" ]

COPY . .
