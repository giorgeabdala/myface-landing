#!/bin/bash

docker stop myface-landing
docker rm myface-landing
docker build -t myface-landing .
docker run -p 3005:3000 --name myface-landing myface-landing