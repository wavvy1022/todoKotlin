#!/bin/bash

DEST="$1"

npm run build

cp -rf ./build/* $DEST/

echo "REACT COPY DONE!"