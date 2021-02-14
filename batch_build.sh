#!/bin/bash

# SET Frontend build dest
pushd "src\main\resources\static"
DEST=`pwd`
echo $DEST
# Frontend resources build
pushd reactApp/my-app

./my_app_build.sh $DEST
popd

# Backend resources build
# For Clean build
rm -rf ./*.jar
rm -rf .gradle
./gradlew clean build
echo "SPRING BOOT BUILD DONE"
cp ./build/libs/* ./
JAR=`ls | grep *.jar`


#Run
echo "####### RUN $JAR ########"
echo "java -jar $JAR"
java -jar $JAR