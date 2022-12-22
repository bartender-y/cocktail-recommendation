#!/bin/bash

set +x
set +e

cd discovery
chmod +x gradlew
./gradlew clean build -x test
cd ../

cd gateway
chmod +x gradlew
./gradlew clean build -x test
cd ../

cd auth
chmod +x gradlew
./gradlew clean build -x test
cd ../
