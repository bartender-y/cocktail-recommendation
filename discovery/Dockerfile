FROM openjdk:11-jdk

WORKDIR /usr/src/app

VOLUME /tmp

ARG JAR_FILE=./build/libs/*.jar

COPY ${JAR_FILE} ./app.jar

CMD ["java","-jar","./app.jar"]
