FROM node:10-alpine As node-webs
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build 

FROM nginx:alpine
COPY --from=node-webs /app/dist/k8sqpp /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
