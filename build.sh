#!/bin/bash

set +x
set +e

cd discovery

./gradlew clean build -x test
cd ../

cd gateway
./gradlew clean build -x test
cd ../

cd auth
./gradlew clean build -x test
cd ../
