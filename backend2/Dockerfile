# Fetching latest version of Java
FROM openjdk:19

# Setting up work directory
WORKDIR /app

# Copy the jar file into our app
COPY ./.mvn/wrapper/maven-wrapper.jar /app

# Exposing port 8080
EXPOSE 8080

# Starting the application
CMD ["java", "-jar", "maven-wrapper.jar"]

# FROM openjdk:19-alpine
# RUN mkdir /app
# COPY pom.xml /app/
# COPY src /app/src
# RUN cd /app && mvn clean install
# CMD ["java", "-jar", "/app/target/backend.jar"]
