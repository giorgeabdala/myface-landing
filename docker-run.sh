#!/bin/bash

docker build -t myface-landing .
docker run -p 3005:3000 myface-landing --name myface-landing