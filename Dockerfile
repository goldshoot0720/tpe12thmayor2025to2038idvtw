FROM node:21
WORKDIR /app
COPY . /app
RUN npm run build
ENV PORT 8080
EXPOSE 8080
CMD ["npm", "start"]