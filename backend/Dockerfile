# Fetching latest version of Java
FROM openjdk:18.0-slim
# Setting up work directory

# Copy the jar file into our app
ARG JAR_FILE=./target/backend-0.0.1-SNAPSHOT.jar

# Exposing port 8080
EXPOSE 8080

COPY ${JAR_FILE} backend-0.0.1-SNAPSHOT.jar

# Starting the application
ENTRYPOINT ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]
