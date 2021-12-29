# Specify the base machine
FROM ubuntu:latest

ARG JDK_VERSION=11

RUN apt-get update && apt-get install -y locales && rm -rf /var/lib/apt/lists/* \
	&& localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8
ENV LANG en_US.utf8

RUN apt-get update && apt-get install -y openjdk-11-jdk
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64
ENV PATH $PATH:$JAVA_HOME/bin

RUN apt-get update && apt-get install -y maven \
 && mvn -version
ENV M2_HOME /usr/share/maven
ENV PATH $PATH:$M2_HOME/bin

COPY ./9-CampaignManagementSystem/Backend/target/Capstone-Backend-1.0-SNAPSHOT.jar /usr/cmsapplication.jar

ENV cmsdb=cmsdb
ENV cmsdb_uname=root
ENV cmsdb_upass=toor
ENV SERVER_PORT=8080
ENV cmsdb_port=3311
ENV cmsdb_name=capstone

WORKDIR /usr
RUN ls .
# RUN mvn clean install package && ls .

# ENTRYPOINT [ "/usr/share/maven/bin/mvn" ]

CMD [ "java", "-jar", "cmsapplication.jar" ]