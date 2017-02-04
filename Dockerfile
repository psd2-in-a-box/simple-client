FROM nginx
COPY dist /usr/share/nginx/html
COPY scripts/server.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
