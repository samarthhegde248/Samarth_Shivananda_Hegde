FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=toor \
 MYSQL_DATABASE=capstone \
 MYSQL_USER=root \
 MYSQL_USER_PASSWORD=toor

ADD capstone.sql /docker-entrypoint-initdb.d

EXPOSE 3311

# How to run this file
# docker network create cms-net
# docker build -t cms-mysql-db:latest .
# docker run -d --net cms-net -p 3313:3306 --name cmsdb cms-mysql-db:latest
# http://localhost:3313/capstone