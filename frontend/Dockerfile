FROM node:20 AS node-builder
WORKDIR /app
COPY . . 

# alt:
# RUN npm install
# EXPOSE 3000
# CMD ["npm", "run", "dev"]

RUN npm ci
RUN npm run build

FROM nginx:1.25-alpine
COPY --from=node-builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]