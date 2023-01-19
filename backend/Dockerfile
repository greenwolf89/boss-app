# Fetching latest version of Java
FROM maven:3.8.7-openjdk-18
# Setting up work directory
WORKDIR /app

# Copy the jar file into our app
COPY ./target/backend-0.0.1-SNAPSHOT.jar /app

# Exposing port 8080
EXPOSE 8080

# Starting the application
CMD ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]
