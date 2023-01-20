# Fetching latest version of Java
FROM openjdk:18.0-slim

# Create JAR_FILE variable using SNAPSHOT.jar from target directory
ARG JAR_FILE=./target/backend-0.0.1-SNAPSHOT.jar

# Exposing port 8080
EXPOSE 8080

# Copy the jar file into our app
COPY ${JAR_FILE} backend-0.0.1-SNAPSHOT.jar

# Starting the application
ENTRYPOINT ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]
