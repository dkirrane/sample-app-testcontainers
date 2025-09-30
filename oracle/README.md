# Overview
Spring Boot app with Docker-compose & Testcontainer for Oracle DB.

# Setup
```bash
# Install or Update SDKMan if not already installed
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"

# Or Update SDKMan if already installed
sdk selfupdate
sdk version

# SDKMan list available versions
sdk list java
sdk list maven
sdk list springboot

# Check current versions
sdk current

# Install required versions
sdk install java 21.0.8-amzn
sdk install maven 3.9.11
sdk install springboot 3.5.2

# Set default versions
sdk default java 21.0.8-amzn
sdk default maven 3.9.9
sdk default springboot 3.5.2

# Verify installations
java -version
mvn -version
spring --version

# Or create .sdkmanrc file in project root with:
# Also SDKMan can auto switch using sdkman_auto_env: true in ~/.sdkman/etc/config
echo "java=21.0.8-amzn" >> .sdkmanrc
echo "maven=3.9.11" >> .sdkmanrc
echo "springboot=3.5.6" >> .sdkmanrc
sdk env

```

# Spring Initializr
https://start.spring.io/
```bash
# List available options
spring help init --list

# Create a new Spring Boot project
export APP_NAME="sample-app-oracle"
spring init \
  --dependencies=web,actuator,devtools,lombok,docker-compose,testcontainers,data-jpa,validation,oracle \
  --build=maven \
  --java-version=21 \
  --groupId=com.sample.app \
  --artifactId=${APP_NAME} \
  --name=${APP_NAME} \
  ./

# sdk env to switch versions if needed
sdk env --install

# Open in IDE
idea .

# Install project dependencies
mvn clean install

# Run the application
mvn spring-boot:run

# Run tests
mvn test

# Build the application
mvn clean package

# Run with Docker Compose
docker-compose up --build

# Stop Docker Compose
docker-compose down

# Access the application at http://localhost:8080
# Access Oracle DB at localhost:1521 with user "system" and password "oracle"
# JDBC URL: jdbc:oracle:thin:@localhost:1521:XE

```
