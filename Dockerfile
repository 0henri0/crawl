FROM node:18-alpine

WORKDIR /var/www/

COPY package*.json ./

COPY . .

#### entry point ####
COPY .docker/crawl_app/entrypoint.sh /tmp/entrypoint.sh
RUN chmod +x /tmp/entrypoint.sh
ENTRYPOINT ["/tmp/entrypoint.sh"]

EXPOSE 3001

ENV UV_THREADPOOL_SIZE=1

CMD [ "yarn", "start" ]
