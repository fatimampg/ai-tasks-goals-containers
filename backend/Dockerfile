FROM node:20

USER node
RUN mkdir /home/node/code
WORKDIR /home/node/code
COPY --chown=node:node package-lock.json package.json ./

# alt:
# RUN npm install
# COPY --chown=node:node . . 
# EXPOSE 3001
# CMD ["node_modules/.bin/ts-node", "src/index.ts"]

RUN npm install 
COPY --chown=node:node . . 
RUN npx prisma generate
RUN npm run build
EXPOSE 3001
CMD ["node", "dist/index.js"]